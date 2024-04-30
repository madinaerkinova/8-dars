import React, { useState } from 'react';
import Step1 from './Components/Step1/Step1';
import Step2 from './Components/Step2/TaskForm';
import Step3 from './Components/Step3/Step3';
import Step4 from './Components/Step4/Step4';
import Gaming from './Components/TackForm1/Gaming';

function App() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleStepChange = () => {
    setStep(step + 1);
  };

  const handleGoBack = () => {
    setStep(step - 1);
  };

  const handleSubmitStep1 = () => {
    if (!name || !email || !phone) {
      return;
    }
    setStep(step + 1);
  };

  const handleConfirm = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && (
        <Step1
          name={name}
          email={email}
          phone={phone}
          onNameChange={handleNameChange}
          onEmailChange={handleEmailChange}
          onPhoneChange={handlePhoneChange}
          onSubmit={handleSubmitStep1}
        />
      )}
      {step === 2 && (
        <Step2
          onPrevStep={handleGoBack}
          onNextStep={handleStepChange}
        />
      )}
      {step === 3 && (
        <Step3
          onPrevStep={handleGoBack}
          onNextStep={handleStepChange}
        />
      )}
      {step === 4 && (
        <Step4
          onPrevStep={handleGoBack}
          onConfirm={handleConfirm}
        />
      )}
      {step === 5 && (
        <Gaming
          onPrevStep={handleGoBack}
        />
      )}
    </div>
  );
}

export default App;
