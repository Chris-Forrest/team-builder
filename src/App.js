import React, { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';


const initialTeamList = [{
  id:uuid(),
  name:'Cody',
  email:'Cody@cody.com',
  role: 'Guru'

}]

const initialFormValues = [{
  name:'',
  email:'',
  role: ''
}]

export default function App(){
const [teamMember, setTeamMember] = useState(initialTeamList);

const [formValues, setFormValues] = useState(initialFormValues);

const onInputChange = evt => {
  const name = evt.target.name
  const value = evt.target.value
  setFormValues({
    ...formValues,
    [name]:value
  })
}

const onSubmit = evt =>{

  evt.preventDefault()

  const newTeamMember = {
    id: uuid(),
    name: formValues.name,
    email: formValues.email,
    role: formValues.role
  }
setTeamMember([ ...teamMember, newTeamMember])
setFormValues(initialFormValues)

}


  return (
    <div className="container">
      <header><h1 style={{textAlign:'center'}}>Team Builder App</h1></header>
      <form>
      
      </form>
      
    </div>
  );
}


