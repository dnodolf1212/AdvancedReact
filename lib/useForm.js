import { useState } from 'react';

export default function useForm(initial = {}) {
  //create state obj for our inputs
  const [inputs, setInputs] = useState(initial); 
  

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      value[0] = e.target.files;
    }
    setInputs({
      ...inputs, //copy existing state
      //dynamically evaluates name of input for value that is put in
      [name]: value, 
    });
  }

  function resetForm() {
    setInputs(initial)
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState)
  }

  //return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}