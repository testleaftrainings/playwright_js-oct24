## Table of Contents

1. [Custom Fixture](#custom-fixture)
2. [Persistent Context](#persistent-context)
3. [Code Gen](#code-gen)

## Custom Fixture

### Description
Custom fixtures in Playwright allow you to set up and tear down resources that are needed for your tests.

### Implementation
Define custom fixtures:

```javascript
export const test = baseTest.extend({
    page: async ({page},use) =>{

       //Set up the fixture

        await use(page);
}
})
```
## Persistent Context

To launch a persistent context, which is useful for scenarios where you need to maintain the same browser state across multiple sessions, you can use the `launchPersistentContext` method.

### Example

```javascript
import { chromium } from 'playwright';

(async () => {
  const userDataDir = './user-data-dir';
  const browserContext = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    viewport: { width: 1280, height: 720 }
  });

  const page = await browserContext.newPage();
  await page.goto('http://www.leaftaps.com/opentaps');
  // Perform actions on the page

  // Close the context and browser when done
  await browserContext.close();
})();

```
## Code Gen

### Description
Playwright offers a code generation tool that records your browser interactions and generates code based on those actions. This can help in quickly creating test scripts by simply performing the desired actions in a browser.

### Use Case
Code generation is useful for quickly scaffolding test scripts, especially for complex user interactions. It helps in reducing the time and effort required to write initial test scripts from scratch.

### Example
Run the following command to start the code generator:
bash
npx playwright codegen https://www.amazon.in

This will open a browser where you can perform actions. Playwright will generate the corresponding code in real-time.

# OOPs for Playwright

This README covers key TypeScript concepts, providing explanations and examples for each topic with a focus on web automation testing.

## Table of Contents

1. [Class](#class)
2. [Object](#object)
3. [Methods](#methods)
4. [Difference between Method and Function](#difference-between-method-and-function)

## Class

A class in TypeScript is a blueprint for creating objects with predefined properties and methods. It encapsulates data and behavior, promoting reusability and modularity.

## Object

An object in TypeScript is an instance of a class. It holds data (properties) and functionalities (methods) defined by its class.

## Methods

Methods are functions defined inside a class, used to perform operations on the class's properties.

## Difference between Method and Function

- **Method**: A function associated with an object or class.
- **Function**: A standalone block of code designed to perform a specific task.

### Example:

```typescript
// Function
function navigateTo(url: string, page: Page) {
    return page.goto(url);
}

// Method
class Navigation {
    page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    navigateTo(url: string) {
        return this.page.goto(url);
    }
}

await navigateTo('http://example.com', page);
const navigation = new Navigation(page);
await navigation.navigateTo('http://example.com');
```
