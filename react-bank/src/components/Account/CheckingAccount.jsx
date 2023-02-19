import React,{ useState } from 'react';



const CheckingAccount =() => {
  const [values, setValues] = useState({
    name: '',
  });
  const set = name => {
    return ({ target: { value } }) => {
      setValues(oldValues => ({...oldValues, [name]: value }));
    }
  };
  return (
    <form>
      <h2>Checking</h2>
      <label>Name*:</label>
      <input value={values.name} onChange={set('name')} />
     
      <button type="submit">Submit</button>
    </form>
  );
  }
  export default CheckingAccount;