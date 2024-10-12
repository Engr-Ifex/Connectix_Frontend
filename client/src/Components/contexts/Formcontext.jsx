// RegistrationContext.js
import React, { createContext, useState } from 'react';

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registrationData, setRegistrationData] = useState({
    // Step 1
    name: '',
    email: '',
    password: '',
    // Step 2
    username: '',
    verified: false,

    gender: '',
    state: '',
    stagename: '',
    musicstyle: '',
    // Additional
    userId: null,
    registrationStep: 1
  });

  const updateRegistrationData = (key, value) => {
    setRegistrationData((prevData) => ({
      ...prevData,
      [key]: value
    }));
  };

  const updateMultipleFields = (fields) => {
    setRegistrationData((prevData) => ({
      ...prevData,
      ...fields
    }));
  };

  const nextStep = () => {
    setRegistrationData((prevData) => ({
      ...prevData,
      currentStep: prevData.currentStep + 1
    }));
  };

  const resetRegistration = () => {
    setRegistrationData({
      name: '',
      email: '',
      password: '',
      username: '',
      gender: '',
      state: '',
      stageName: '',
      musicStyle: '',
      userId: null,
      currentStep: 1
    });
  };

  return (
    <RegistrationContext.Provider 
      value={{ 
        registrationData, 
        updateRegistrationData, 
        updateMultipleFields,
        nextStep,
        resetRegistration
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};