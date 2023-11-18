# Learning-Cypress

## Launching Cypress
In your CLI, type in:
`npm run cypress:open`
Or use
`npx cypress open`

### Docs and Guides
[Docs](https://docs.cypress.io/guides/overview/why-cypress)
[Courses](https://learn.cypress.io/#courses)

#### E2E vs Component Testing
- E2E: run the whole application and visit pages to test them
- Component Testing: mount individual components of my app and test them in isolation

### Notes
Cypress is a frontend web automation testing tool for modern web applications.
- Doesn't use any Selenium libraries
- Open source

2 Main Levels 
- Testrunner (free tier)
- Dashboard (paid tier)

Cypress is built in a Node.js environment and comes in a npm
- meaning you can easily add dependencies, libraries, or other tools
- Cypress works with End-To-End, Integration, Unit, and API test cases

Features
- Time Travel
- Debugging
- Built-In Waiting
- Consistent Results (because it's running inside the browser)
- Can capture Screenshots and Videos
- Cross-Browser Testing - locally or remotely (CI/CD)

Limitations
- Cannot Automate Desktop/ Mobile Apps
- Limited Support
- You have to write in Javascript/Typescript
- Reading & Writing Data into Files is Difficult
- Third party reporting tool integrations are limited