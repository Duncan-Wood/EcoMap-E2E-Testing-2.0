# EcoMap E2E Testing with Cypress

## Launching Cypress
In your CLI, type in:
`npx cypress open`

## All commands start with
`cypress run [options]`
_[replace [options] with...](https://docs.cypress.io/guides/guides/command-line)_
- `--spec` </br >
- `--headless`
- `--no-runner-ui`


### Docs and Guides
[Docs](https://docs.cypress.io/guides/overview/why-cypress)
[Courses](https://learn.cypress.io/#courses)

#### Notes
**Spec File**
- The **describe()** function takes two arguments. The first is a string which is a description of the tests contained within it. The second is a callback function. 

- Each time you see **it()** within a given spec file that is a single test. It takes the exact same arguments as the describe() function: first a string and then a callback function. 

- **visit** is a command that tells Cypress where to execute our tests. (urls)

- Command chaining: when you “chain” multiple commands off of one another. This is incredibly powerful and you will see this a lot in Cypress tests.

- You can add **.only()** to multiple tests, and only those tests will run.

- When working with an array, we can use a Cypress command called **eq**. This command will allow us to access a specific index within an array of elements, which is exactly what we want.

- You can also pass regular expressions into the contains method. 

**Writing Tests**
- Tests should be composed using a pattern that makes them easy to write, reason about, and expand. One pattern is the AAA (Arrange-Act-Assert) pattern, which encourages the organization of the test code in a way that allows the most readability and flexibility.
    - Arrange step, you have to perform some setup for your test. For example, in the case of a Cypress end-to-end test, you need to tell Cypress to open the browser and navigate to the correct URL.
    - In step two, the Act step, you perform some action. For example, in the case of a todo app, you want to test that you can add a single todo.
    - Finally, in step three, you Assert. In this step, you assert that the thing you acted upon in step two did what you expected.

- .then() behaves similarly to Promises in JavaScript. However, .then() is a Cypress command, not a Promise. This means you cannot use things like async/await within your Cypress tests.

- In our example just above, $btn is a jQuery object. This means that if we would like Cypress to perform some action upon it, we first need to use **cy.wrap()** for Cypress to interact with it.
- In Cypress, we use Aliases to reference elements, requests, or intercepts across our tests. To create an alias use the **.as()** function
- Even though Cypress is incredibly smart in handling automatic waiting, there are times when you explicitly want to **.wait()** for something. For example, you may want to wait on a specific network request to finish before moving forward.
- You can tell Cypress to take a screenshot manually by using the **cy.screenshot()** command.
- There are two useful ways to log information from your tests. One way is to use **cy.log()** the other is to use console.log()
- we use **Array.forEach()** to iterate over an array.

**Intercepting Network Requests**
- Knowing how to test network (http) requests and responses is important for every web application. In this lesson you will learn how to use **cy.intercept()** to manipulate and test network requests and responses.
- Sometimes you may need to override an already existing intercept by using a fixture to mock the response data. Let's look at an example from the Real World App.
    - Later on, in one of our tests, we use cy.intercept() to intercept and override this same GET and route but using a fixture to mock the response.
    - You can also use cy.intercept() to modify headers from a response.
- Sometimes you will need to modify a portion of the response data while leaving everything else intact.
    - We need to use **.continue()** to modify the response data.
- When you begin to notice yourself writing the same functionality over and over again, aka repeating yourself, across multiple tests, that is usually a good sign to make a custom command. Don't begin writing your tests by thinking in abstractions, i.e., custom commands—rather abstract custom commands from your tests.

**More Methods**
- **.its()**: Get a property's value on the previously yielded subject.
- **.invoke()**: Invoke a function on the previously yielded subject. This method allows you to call JS functions on JS data types.
- **.request()**: is a helpful method anytime you need to make an HTTP request within your tests and perform expectations against it.
- **.within()**: Scopes all subsequent Cypress commands to within an element. Useful when working within a particular group of elements such as a <form>.

