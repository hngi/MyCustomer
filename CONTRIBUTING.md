# Contributing to MyCustomer

We would love for you to contribute to MyCustomer and help make it even better than it already is. As a contributor, here are the guidelines we would like you to follow:

## Code of Conduct

Please read and follow our [Code of Conduct](https://github.com/hngi/mycustomer/tree/master/CODE_OF_CONDUCT.md)

## Question or Problem?

Do not open issues for general support questions as we want to keep GitHub issues for bug reports and feature requests. You've got much better chances of getting your question answered on [slack forum]() or google.

## Found a bug?

If you find a bug in the source code, you can help us by submitting an issue to our GitHub Repository. Even better, you can submit a Pull Request with a fix.

## Missing feature?

You can request a new feature by submitting an issue to our GitHub Repository. If you would like to implement a new feature, please submit an issue with a proposal for your work first, to be sure that we can use it. Please consider what kind of change it is:

- For a Major Feature, first open an issue and outline your proposal so that it can be discussed. This will also allow us to better coordinate our efforts, prevent duplication of work, and help you to craft the change so that it is successfully accepted into the project.

- Small Features can be crafted and directly submitted as a Pull Request.

## Submission Guidelines

### Submitting an Issue:

Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it. In order to reproduce bugs, we will systematically ask you to provide a minimal reproduction. Having a minimal reproducible scenario gives us a wealth of important information without going back & forth to you with additional questions.

A minimal reproduction allows us to quickly confirm a bug (or point out a coding problem) as well as confirm that we are fixing the right problem.

We will be insisting on a minimal reproduction scenario in order to save maintainers time and ultimately be able to fix more bugs. Interestingly, from our experience, users often find coding problems themselves while preparing a minimal reproduction. We understand that sometimes it might be hard to extract essential bits of code from a larger codebase but we really need to isolate the problem before we can fix it.

Unfortunately, we are not able to investigate / fix bugs without a minimal reproduction, so if we don't hear back from you, we are going to close an issue that doesn't have enough info to be reproduced.

You can file new issues by selecting from our new issue templates and filling out the issue template.

### Submitting a Pull Request (PR):

Before you submit your Pull Request (PR) consider the following guidelines:

1. Search GitHub for an open or closed PR that relates to your submission. You don't want to duplicate effort.

2. Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add. Discussing the design up front helps to ensure that we're ready to accept your work.

3. Make sure you sign with the primary email address of the Git identity that has been granted access to the team repository.

4. Fork repo.

5. Make your changes in a new git branch:
   ```
   git checkout -b my-fix-branch master
   ```
6. Create your patch, including appropriate test cases.

7. Run tests and ensure that all tests pass.

8. Commit your changes using a descriptive commit message

   ```
   git commit -a
   ```

   Note: the optional commit -a command line option will automatically "add" and "rm" edited files.

9. Push your branch to GitHub:

   ```
   git push origin my-fix-branch
   ```

10. In GitHub, send a pull request to the appropriate branch (usually develop branch)

11. If we suggest changes, make the required updates.

12. Re-run the tests to ensure tests are still passing.

13. Rebase your branch and force push to your GitHub repository (this will update your Pull Request):
    ```
    git rebase master -i
    git push -f
    ```

That's it! Thank you for your contribution!

After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository:

1. Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

   ```
   git push origin --delete my-fix-branch
   ```

2. Check out the master branch:

   ```
   git checkout master -f
   ```

3. Delete the local branch:

   ```
   git branch -D my-fix-branch
   ```

4. Update your master with the latest upstream version:
   ```
   git pull --ff upstream master
   ```

## Commit Message Guidelines

Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, a scope and a subject as described below:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The header is mandatory and the scope of the header is optional.

The body and the footer are both optional.

Any line of the commit message cannot be longer than 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

The footer should contain a closing reference to an issue if any.

### Examples:

```
docs(changelog): update changelog to beta.5
```

```
fix(release): need to depend on latest rxjs and zone.js
```
