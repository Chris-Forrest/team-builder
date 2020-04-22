import React from 'react';
import styled from 'styled-components'


function TeamMemberForm (props){
    const{
        values,
        onInputChange,
        onSubmit
    } = props

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgb(210, 210, 210);
    border-radius: 5px;
    box-shadow: 10px 8px 12px -2px rgb(128, 127, 197);
    margin: 8px;
    padding: 12px;
    background-color: white;
    width: 50%;
    margin-left:25%;

`


    return(
        <StyledForm>
        
            <h2>Team Member Form</h2>
            <label>Name:&nbsp;
        <input
            name="name"
            type='text'
            value={values.name}
            onChange={onInputChange}/> </label>
          <label>Email:&nbsp;
           <input 
                name="email"
                type='text'
                value={values.email}
                onChange={onInputChange}/>
                   </label>
            <label>Role:&nbsp;
             <input 
              name="role"
              value={values.role}
              onChange={onInputChange}/>
             </label>
            
            <label>
            <button onClick={onSubmit}>Submit</button>
           </label>
         
         </StyledForm>
    )
}

export default TeamMemberForm