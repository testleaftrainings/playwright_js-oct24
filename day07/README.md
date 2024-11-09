📑 Agenda for Day 07: TypeScript: Key Features

📌 Object Literals
📌 Type Assertion 
📌 Enums

## Type Assertion

Type assertion is similar to type casting in other languages. It is a way to tell the TypeScript compiler about the type of a variable so you can access the specific properties of that type.

```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

## Enum and Types

Enums allow you to define a set of named constants, either numeric or string-based. They can help in managing sets of related constants and improve the readability of your code.

```typescript
enum TestStatus {
    Pass = 1,
    Fail,
    Skip,
}
```
📑 Agenda for Day 08: Dig deeper into Playwright

📌 Alerts

## Modal Dialogs

A modal dialog is a window overlay that requires users to interact with it before they can return to the main content. It captures the keyboard and mouse focus until it is closed, thus blocking the main window's functionality.

### Types of Dialogs

Playwright supports handling several types of dialogs that are commonly used in web applications:
- **Alert**: Provides a message and an OK button.
- **Confirm**: Provides a message along with OK and Cancel buttons.
- **Prompt**: Offers a text box for user input, alongside OK and Cancel buttons.
- **BeforeUnload**: Appears when the page tries to unload, asking the user to confirm leaving the page.

### Dialog Methods

Dialogs in Playwright are managed using the following methods:
- `dialog.accept([promptText])`: Accepts the dialog. For `prompt` dialogs, optional prompt text can be provided.
- `dialog.dismiss()`: Dismisses or cancels the dialog.
- `dialog.message()`: Returns the message text from the dialog.
- `dialog.type()`: Returns the type of the dialog (`alert`, `confirm`, `prompt`, `beforeunload`).

### Event Listeners for Dialogs

Playwright provides event listeners to handle dialogs when they appear during page interactions:

```javascript
// Handle any dialog that appears on the page
page.on('dialog', async dialog => {
  console.log(`Dialog type: ${dialog.type()}`);
  console.log(`Dialog message: ${dialog.message()}`);
  await dialog.accept();
});
```

### Handling Dialogs: `page.on` vs `page.once`

Playwright allows you to handle dialogs using either `page.on` or `page.once`. The key difference between these two methods is in how many times the event handler is invoked:

- `page.on`: Attaches an event handler that runs every time the specified event occurs. This is useful for handling dialogs that may appear multiple times throughout the session.
  
  ```javascript
  // Handle every dialog that appears during the session
  page.on('dialog', async dialog => {
    await dialog.accept();
  });
  ```

- `page.once`: Attaches a one-time event handler, which is invoked only the first time the specified event occurs. After the first invocation, the handler is removed automatically.

  ```javascript
  // Handle the first dialog that appears and ignore any subsequent ones
  page.once('dialog', async dialog => {
    await dialog.accept();
  });
  ```
