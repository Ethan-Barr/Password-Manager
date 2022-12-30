import React, { useState } from 'react';

const PasswordManager = () => {
  // Use state to store passwords as an object where the keys are the names
  // and the values are the passwords
  const [passwords, setPasswords] = useState({});

  const handleAddPassword = event => {
    event.preventDefault();
    // Get the name and password from the form
    const name = event.target.elements.name.value;
    const password = event.target.elements.password.value;
    // Add the new password to the state object
    setPasswords({ ...passwords, [name]: password });
  };

  const handleDeletePassword = name => {
    // Create a new object without the password we want to delete
    const newPasswords = { ...passwords };
    delete newPasswords[name];
    setPasswords(newPasswords);
  };

  return (
    <div>
      <form onSubmit={handleAddPassword}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button type="submit">Add Password</button>
      </form>
      <ul>
        {Object.entries(passwords).map(([name, password]) => (
          <li key={name}>
            {name}: {password}
            <button onClick={() => handleDeletePassword(name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordManager;
