import React from 'react';

function Step3({ onAddOnSelect, onNextStep, onPrevStep }) {
  return (
    <div className="container mx-auto mt-5 flex items-center justify-center content-center">
      <div className="w-full max-w-md">
        <h2 className="text-lg font-bold mb-2">Pick Add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>

        <div className="mt-4">
          <div className="bg-white rounded shadow-md p-4 mb-4 flex items-center justify-between">
            <p>Online service</p>
            <div>
              <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={() => onAddOnSelect('online-service')}>
                Access to multiplayer games +$1/mo
              </button>
            </div>
          </div>

          <div className="bg-white rounded shadow-md p-4 mb-4 flex items-center justify-between">
            <p>Larger storage</p>
            <div>
              <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={() => onAddOnSelect('larger-storage')}>
                Extra 1TB of cloud save +$2/mo
              </button>
            </div>
          </div>

          <div className="bg-white rounded shadow-md p-4 mb-4 flex items-center justify-between">
            <p>Customizable Profile</p>
            <div>
              <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={() => onAddOnSelect('customizable-profile')}>
                Custom theme on your profile +$2/mo
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={onPrevStep}>Go Back</button>
          <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={onNextStep}>Next Step</button>
        </div>
      </div>
    </div>
  );
}

export default Step3;
