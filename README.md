# Mixed Messages

## Overview

The Mixed Messages project is a JavaScript utility designed to manage and retrieve categorized messages. The application provides functionalities to access random messages from various categories, as well as to add new categories and messages dynamically.

## Features

- **Categorized Messages**: Stores and manages messages in different categories such as greetings, compliments, jokes, and more.
- **Random Message Retrieval**: Fetches a random message from a random category.
- **Dynamic Updates**: Allows adding new message categories and messages to existing categories.

## Installation

### Using with Node.js

To use the `mixedMessages` utility with Node.js, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/mixed-messages.git
   cd mixed-messages
2. **Create javascript file**: create a new javascript file (e.g main.js) and include the following code
   ```javascript
   // index.js
   const mixedMessages = require('./mixedMessages'); // Adjust the path if necessary
3. **Usage**: an example of how to use is shown below
   ```javascript
   // Log a random category and message to the console
   console.log(mixedMessages.randomMessageCategoryAndMessage);
   ```
   
   ```javascript
   // Adding a new message category
   mixedMessages.newMessageCategory = "lifehacks"; 
   console.log(mixedMessages.messages); // Verify the new category has been added
   ```
   ```javascript
   // Adding a new message to the "lifeHacks" category
   mixedMessages.newMessagetext = {
     category: 'lifeHacks',
     text: '"To quickly chill a drink, wrap it in a wet paper towel and put it in the freezer for 15 minutes."'
   }
   ```
   ```javascript
   console.log(mixedMessages.messages); // Verify the new message has been added
   ```
4. **Run**: execute using node.js
5. ```bash
   node index.js

