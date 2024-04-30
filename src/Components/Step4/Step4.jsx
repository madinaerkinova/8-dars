import React from 'react';

function Step4({ onGoBack, onConfirm }) {
  const handlePrevStep = () => {
    if (onGoBack) {
      onGoBack();
    }
  };

  return (
    <div className="container mx-auto mt-5 flex items-center justify-center content-center bg-gray">
      <div className="w-full max-w-md">
        <h2 className="text-lg font-bold mb-2">Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>

        <div className="mt-4 border rounded-lg p-4 bg-gray-100">
          <div className="flex justify-between items-center">
            <p>Arcade (Monthly)</p>
            <div className="flex items-center">
              <button className="bg-blue-500 text-white px-4 py-1 rounded mr-2 hover:bg-blue-600" onClick={() => console.log("Arcade (Monthly) selected")}>Change</button>
              <p>$9/mo</p>
            </div>
          </div>
        </div>

        <div className="mt-4 border rounded-lg p-4 bg-gray-100">
          <div className="flex justify-between items-center">
            <p>Online Service</p>
            <div className="flex items-center">
              <button className="bg-blue-500 text-white px-4 py-1 rounded mr-2 hover:bg-blue-600" onClick={() => console.log("Online Service selected")}>Change</button>
              <p>+$1/mo</p>
            </div>
          </div>
        </div>

        <div className="mt-4 border rounded-lg p-4 bg-gray-100">
          <div className="flex justify-between items-center">
            <p>Larger Storage</p>
            <div className="flex items-center">
              <button className="bg-blue-500 text-white px-4 py-1 rounded mr-2 hover:bg-blue-600" onClick={() => console.log("Larger Storage selected")}>Change</button>
              <p>+$2/mo</p>
            </div>
          </div>
        </div>

        <div className="mt-4 border rounded-lg p-4 bg-gray-100">
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">Total (per month)</p>
            <div className="flex items-center">
              <button className="bg-blue-500 text-white px-4 py-1 rounded mr-2 hover:bg-blue-600" onClick={() => console.log("Total selected")}>Change</button>
              <p className="text-lg font-semibold">$12/mo</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={handlePrevStep}>Go Back</button>
          <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={onConfirm}>Confirm</button>
        </div>
        
      </div>
    </div>
  );
}

export default Step4;
