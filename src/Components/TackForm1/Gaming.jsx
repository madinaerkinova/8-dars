import React from 'react';

function Gaming({ onPrevStep }) {
  return (
    <div className="container mx-auto mt-5 flex items-center justify-center content-center">
      <div className="w-full max-w-md">
        <div className="bg-white rounded shadow-md p-8 mb-4">
          <h2 className="text-lg font-bold mb-4">Thank you!</h2>
          <p className="mb-4">Thanks for confirming your subscription! We hope you have fun using our platform.</p>
          <p className="mb-4">IF YOU EVER NEED support, please feel free to email us at support@loremgaming.com.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => onPrevStep()}>Go Back</button>
        </div>
      </div>
    </div>
  );
}

export default Gaming;
