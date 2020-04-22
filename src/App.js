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
const [teamMembers, setTeamMembers] = useState(initialTeamList);

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
setTeamMembers([ ...teamMembers, newTeamMember])
setFormValues(initialFormValues)

 }
 

  return (
    <div className="container">
      <header><h1 style={{textAlign:'center'}}>Team Builder App</h1></header>
      <form onSubmit={onSubmit}>
      <label>Name:</label>
      <input
            name="name"
            value={formValues.name}
            onChange={onInputChange}
          ></input>
        <label>Email:</label>
        <input 
              email="email"
              value={formValues.email}
              onChange={onInputChange}>
                </input>  
          <label>Role:</label>
          <input 
                role="role"
                value={formValues.role}
                onChange={onInputChange}>
                </input>
      </form>
   </div>
  )
 
}