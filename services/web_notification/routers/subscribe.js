const express = require('express')
const Router = express.Router()
const webPush = require('web-push')
const connection = require('../database/connect')

Router.post('/', (req, res) => {
  const data = req.body;

  res.status(201).json({})

  connection.query(`SELECT *, DATEDIFF(NOW(), date_due) as diff FROM debt WHERE cust_id = ${data.user_id} AND DATEDIFF(NOW(), date_due) >= 0`, 
    (err, res) => {
      if (err) {
        console.log(err);
        return
      }

      res.forEach(element => {

        let desc = ''
        
        switch (element.diff) {
          case element.diff === 0:
            desc = 'Due today!'
            break;

          case element.diff === 1:
            desc = 'Due yesterday!'
            break;

          default:
            desc = `Due ${element.diff} days ago.`
            break;
        }

        const payload = {
          title: `${element.cust_name}\'s debt.`,
          desc
        }

        webPush.sendNotification(data.sub, JSON.stringify(payload)).catch(err => 
          console.error(err)
        )
        
      })

    })
})

module.exports = Router