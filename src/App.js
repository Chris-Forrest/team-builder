import React, { useState } from 'react';
import './App.css';

const initialTeamList = [{
  name:'Cody',
  email:'Cody@cody.com',
  role: 'Guru'

}]

const initialValues = [{
  name:'',
  email:'',
  role: ''
}]
const [teamMembers, setTeamMembers] = useState(initialTeamList);

const [formValues, setFormValues] = useState(initialValues);

function App() {
  return (
    <div className="container">
      <header><h1 style={{textAlign:'center'}}>Team Builder App</h1></header>
      <form>
      
      </form>
      
    </div>
  );
}

export default App;
