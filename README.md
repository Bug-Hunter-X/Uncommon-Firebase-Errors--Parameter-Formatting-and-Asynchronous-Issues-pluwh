# Uncommon Firebase Errors

This repository demonstrates two common yet subtle errors encountered when using the Firebase JavaScript SDK:

1. **Incorrect Parameter Formatting:** The Firebase SDK is strict about data types. Passing incorrectly formatted data (e.g., an object when a string is expected) results in unexpected errors. 
2. **Asynchronous Operation Handling:** Firebase operations are asynchronous.  Failing to properly handle promises using `.then()` and `.catch()` can lead to silent failures.

The `bug.js` file shows examples of these errors, while `bugSolution.js` provides corrected code. 