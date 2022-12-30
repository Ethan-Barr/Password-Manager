import React, { useState } from 'react';
import './generator.css';


function PasswordGenerator() {
  const [value, setValue] = useState(8); // Initial value for the slider
  const [password, setPassword] = useState(''); // Initial password value

  function generatePassword(length) {
    let password = '';
    const characterSets = [
      { start: 48, end: 57 }, // Numbers
      { start: 65, end: 90 }, // Uppercase letters
      { start: 97, end: 122 } // Lowercase letters
    ];
    for (let i = 0; i < length; i++) {
      const characterSet = characterSets[Math.floor(Math.random() * characterSets.length)];
      password += String.fromCharCode(Math.floor(Math.random() * (characterSet.end - characterSet.start + 1)) + characterSet.start);
    }
    return password;
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleClick() {
    setPassword(generatePassword(value));
  }
  
  return (
    <div>
      <input
        type="range"
        min="8"
        max="30"
        value={value}
        onChange={handleChange}
      />
      <p>Number of Characters: {value} </p>
      <button onClick={handleClick}>Generate Password</button>
      <p>New Password suggestion:</p>
      <p className='NewPassword'>{password}</p>
    </div>
  );
}

export default PasswordGenerator;
