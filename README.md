# React Todo App

## Overview

This is a simple Todo application built with React.js, aimed at learning the basics of the framework. The app allows users to add, edit, and delete todos, demonstrating key concepts of React development.

## Features

- **Add Todos**: Users can enter a todo and add it to the list by pressing Enter or clicking the "Add" button.
- **Edit Todos**: Existing todos can be edited by clicking the edit button.
- **Delete Todos**: Users can remove todos from the list.
- **Local Storage**: Todos are persisted in the browser's local storage, allowing users to retrieve their list upon reloading the page.

## Technologies Used

- **React**: The core library for building user interfaces.
- **JavaScript (ES6+)**: Modern JavaScript features such as arrow functions, destructuring, and template literals.
- **CSS**: For styling the application.
- **Local Storage**: For storing todos persistently in the browser.

## Concepts Demonstrated

- **Component-Based Architecture**: The app is structured into reusable components (`App`, `TodoInput`, `TodoList`, and `TodoCard`).
- **State Management**: Utilizes `useState` for managing the todos and the current todo input.
- **Effect Hook**: Uses `useEffect` to load todos from local storage when the app first mounts.
- **Prop Drilling**: Passing data and functions between components using props.
- **Event Handling**: Managing user interactions through event handlers for adding, editing, and deleting todos.
- **Conditional Rendering**: Ensures that only non-empty todos are added.

