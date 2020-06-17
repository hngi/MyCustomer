const express = require("express");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const admin = require("firebase-admin");

const serviceAccount = require("./hng-firebase-auth-firebase-adminsdk-zzmj6-c3a0678286.json");

const port = process.env.PORT || 3000;
const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hng-firebase-auth.firebaseio.com"
});

const csrfMiddleware = csrf({ cookie: true });

app.use(cookieParser());
app.use(csrfMiddleware);

app.all("*", (req, res, next) => {
  res.cookie("XSRF-TOKEN", req.csrfToken());
});

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/profile", (req, res) => {
  const sessionCookie = req.cookies.session || "";
  admin
    .auth()
    .verifySessionCookie(sessionCookie, true)
    .then(() => {
      res.render("profile");
    })
    .catch(err => {
      res.redirect("/login");
    });
});

app.post("/login", (req, res) => {
  const idToken = req.body.idToken.toString();

  const expires = 60 * 60 * 24 * 7 * 1000;

  admin
    .auth()
    .createSessionCookie(idToken, { expires })
    .then(
      sessionCookie => {
        const options = { maxAge: expires, httpOnly: true };
        res.cookie("session", sessionCookie, options);
        res.end(JSON.stringify({ status: "success" }));
      },
      err => {
        res.status(401).send("UNAUTHORIZED REQUEST");
      }
    );
});

app.get("/logout", (req, res) => {
  res.clearCookie("session");
  res.redirect("/login");
});

app.listen(port, err => {
  if (err) console.log(err);
  console.log(`Server started on port ${port}`);
});
