import React, { useState } from 'react';

function Step1({ name, email, phone, onNameChange, onEmailChange, onPhoneChange, onSubmit }) {
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      setError('Please enter your name');
      return;
    }

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!phone) {
      setError('Please enter your phone number');
      return;
    }

    
    onSubmit();
  };

  return (
    <div className="container mx-auto mt-5 flex items-center justify-center content-center">
      <div className="w-full max-w-md">
        <h2 className="text-lg font-bold mb-2">Personal info</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={onNameChange}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={onEmailChange}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={onPhoneChange}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
            Next Step
          </button>
        </form>
      </div>
    </div>
  );
}

export default Step1;
