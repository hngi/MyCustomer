# MyCustomer

This is the repository responsible for containing all source code and assets for all the applications, services (microservices), packages, libraries, and tools.

## Getting Started

To contribute to this project you need to fork this repo and clone it to you local machine

1. Fork this repo so it is available at `https://github.com/ your-username/MyCustomer` on your account
2. Clone your forked repo to your local development environment by running `git clone https://github.com/your-username/MyCustomer` within your folder of choice
3. Create a remote pointing to the original repo using `git remote add upstream`

## Conributing

These guidelines can get you started on contributing to our repository. For more information please see the [contributing guidelines](https://github.com/hngi/mycustomer/tree/master/CONTRIBUTING.md).

1. On your local repo, before writing any code, create a new branch for the new feature you will be working on using `git checkout -b new-feature-branch`
2. After you have made some changes on your new branch, stage your changes and commit with a proper and meaningful commit message, see the commit message guidelines, using `git add .` to stage your files and `git commit -m 'added feature 1'`
3. Push your changes to your remote repo using `git push origin new-feature-branch`
4. On Github, visit the original repo and create a pull request against the `develop` branch. This should ideally be automatic and require no extra effort. Request a review of you PR to have it merged. Your PR may need a minimum of 2 reviewers to have it merged. If any changes are requested, all you need is to make changes on your local repo and make commits to push again.
5. After your PR is merged, run `git pull upstream develop` to sync your local repo with the original repo.

## Repository Organizational Structure

The platform repository is architected as a monorepo. This means that all codebases are under one repository. There are 5 top-level (main) folders - applications, services, packages, libraries, and tools. Each top-level folder and its sub-folders have a specific responsibility and role to play. Do not mix the responsibilities and roles.

Keep in mind that not all will require all of the 5 top-level folders.

### Applications Role and Responsibility

Applications are stored within the application folder. Applications are feature-complete, high-quality softwares that other projects, teams, and/or clients can use to perform certain tasks. These applications are the main codebases of the project and would often be what gets released by the project's team.

For example, mobile and web applications.

### Services Role and Responsibility

Services are stored within the services folder. Services are feature-complete, high-quality microservices that other projects, teams, and/or clients can use to perform certain tasks through an API. These services are the main backbone of the project and should be consumed by applications.

For example, mobile and web applications.

### Packages Role and Responsibility

Packages are stored within the packages folder. Packages, similar to applications, are feature-complete, high-quality softwares. Unlike applications, packages can not be consumed by clients but by other projects and teams. These packages are units of distributable codebases used by other libraries and/or applications.

For example, private and published npm packages.

### Libraries Role and Responsibility

Libraries are stored within the libraries folder. Libraries are sets of assets, such as fonts or icons, that make sense to be grouped together. These libraries should be only consumed by the project's applications and/or packages.

### Tools Role and Responsibility

Tools are stored within the tools folder. Tools are any, and all, code required to ensure that the repository's infrastructure is functioning well. These tools should never be consumed by any project, team, or client.
