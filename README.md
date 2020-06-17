# MyCustomer


## Contributing

### Development

#### Cloning the repo

- To contribute to this project you need to fork this repo and clone it to you local machine
  1. Fork this repo so it is available at `https://github.com/your-username/MyCustomer` on your account
  2. Clone your forked repo to your local development environment by running `git clone https://github.com/your-username/MyCustomer` within your folder of choice
  3. Create a remote pointing to the original repo using `git remote add upstream`

#### Making changes/conributing code

- On your local repo, before writing any code, create a new branch for the new feature you will be working on using `git checkout -b new-feature-branch`
- After you have made some changes on your new branch, stage your changes and commit with a proper and meaningful commit message using `git add .` to stage your files and `git commit -m 'added feature 1'`
- Push your changes to your remote repo using `git push origin new-feature-branch`
- On github, visit the original repo and create a pull request against the `develop` branch. This should ideally be automatic and require no extra effort. Request a review of you PR to have it merged. Your PR may need a minimum of 2 reviewers to have it merged. If any changes are requested, all you need is to make changes on your local repo and make commits to push again.
- After your PR is merged, run `git pull upstream develop` to sync your local repo with the original repo.


### Structure

- The applications folder is a folder for client applications. Create a new sub-folder for each client application you are building e.g a flutter subfolder for a flutter mobile and a web folder for a web client.
- The services folder contains all available microservices. Each microservice should be created in a separate sub-folder. Each microservice is implemented in only one development language/framework.
- The packages folder would be used for any code that is to be packaged as a unit that can be consumed by more than one service.
- The libraries folder would be used for any shared assets by applications or microservices (fonts, icons, images, etc.).
- The tools folder contains external configurations and scripts.
