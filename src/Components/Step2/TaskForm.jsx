import React from 'react';

function TaskForm({ onBillingOptionChange, onNextStep, onPrevStep }) {
  return (
    <div className="container mx-auto mt-5 flex items-center justify-center content-center">
      <div className="w-full max-w-md">
        <h2 className="text-lg font-bold mb-2">Select Your Plan</h2>
        <p>You have the option of monthly or yearly billing.</p>

        <div className="mt-4">
          <div className="bg-white rounded shadow-md p-4 mb-4 flex items-center">
            <div className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10 0-5.523-4.478-10-10-10zm0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm2.35 5.555a.5.5 0 00-.548-.074L9.5 9.735l-1.306-1.19a.5.5 0 00-.695.073l-2 2.5a.5.5 0 00.073.694l1.5 1.25a.5.5 0 00.694-.073L9 11.206l1.306 1.19a.5.5 0 00.695-.073l2-2.5a.5.5 0 00-.073-.694l-1.5-1.25zM10 6a1 1 0 110 2 1 1 0 010-2z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold">Arcade</h3>
              <p className="text-gray-500">$9/mo</p>
            </div>
          </div>

          <div className="bg-white rounded shadow-md p-4 mb-4 flex items-center">
            <div className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10 0-5.523-4.478-10-10-10zm0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm2.35 5.555a.5.5 0 00-.548-.074L9.5 9.735l-1.306-1.19a.5.5 0 00-.695.073l-2 2.5a.5.5 0 00.073.694l1.5 1.25a.5.5 0 00.694-.073L9 11.206l1.306 1.19a.5.5 0 00.695-.073l2-2.5a.5.5 0 00-.073-.694l-1.5-1.25zM10 6a1 1 0 110 2 1 1 0 010-2z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold">Advanced</h3>
              <p className="text-gray-500">$12/mo</p>
            </div>
          </div>

          <div className="bg-white rounded shadow-md p-4 mb-4 flex items-center">
            <div className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10 0-5.523-4.478-10-10-10zm0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm2.35 5.555a.5.5 0 00-.548-.074L9.5 9.735l-1.306-1.19a.5.5 0 00-.695.073l-2 2.5a.5.5 0 00.073.694l1.5 1.25a.5.5 0 00.694-.073L9 11.206l1.306 1.19a.5.5 0 00.695-.073l2-2.5a.5.5 0 00-.073-.694l-1.5-1.25zM10 6a1 1 0 110 2 1 1 0 010-2z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold">Pro</h3>
              <p className="text-gray-500">$15/mo</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={() => onPrevStep()}>Go Back</button>
          <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={() => onBillingOptionChange('yearly')}>Yearly</button>
          <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={() => onNextStep()}>Next Step</button>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
