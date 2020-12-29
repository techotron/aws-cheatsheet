# sre-resources
A place for revising AWS things.

![Super-Linter](https://github.com/techotron/sre-resources/workflows/Super-Linter/badge.svg)

## Context
### Revision
The idea of this app is in flux somewhat. Currently, I'm thinking this could be like a note keeping app where people can add notes for the various AWS services similar to revision cards. Doing this would require a login for multiple people (which would be a nice side project to learn about auth).

Another option is to have this part static and fetched from the DB - ie, no user login.

### Scenarios
Another aspect of this app is the scenarios which I'd like to be a place where a user could "Run a scenario" which would deploy a broken app in AWS with the intent for the user to troubleshoot what the issue is and fix it. I'd see this working by the frontend calling a backend API which would deploy the infra. I'd use Terraform as the IaC tool so I can learn TF in more detail. Using auth here would be good, ideally I could link it with Github but I'd need to some reading on what is required as this is a very new area for me.

TODO:
- [x] rename aws-cheatsheet to sre-resources
- [x] create parent routes for adding different sections eg `/revision` and `/scenarios`
- [x] load different NavBar, depending on the section
- [x] Add github action for linting
- [x] Fix Linting issues from above (add config for super linter)
- [ ] Convert TODOs to Github Issues
- [ ] Add content from sre-pathway repo to new tab
- [ ] Connect Node API to database to serve content
- [ ] Display content on frontend which has been fetched from the DB by the backend
- [ ] Create mechanism to updating database ([db-migrate](https://db-migrate.readthedocs.io/en/latest/Getting%20Started/installation/#new-instructions-since-v010x))
- [ ] Add data from mock services to database using above method
- [ ] Create services in backend to return data
- [ ] Replace mock services with backend services
- [ ] Create skeleton syllabus for exam and add to DB schema
- [ ] Split syllabus into sections and create GH Issues for each to start working on adding content
- [ ] Create new repo(for scenarios or keep them in this repo?) and doc for scenario1
- [ ] Create app for scenario1 plus infra templates (in TF)
- [ ] Add functionality to backend to deploy scenario1 (split task into more GH Issues if needed)