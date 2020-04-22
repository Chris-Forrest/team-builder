import React from 'react';


function TeamMemberForm (props){
    return(
        <form>
        <input
            name="name"
            value={props.name}
            onChange={props.onInputChange}
          > <label>Email:</label>
          </input>
          <input 
                email="email"
                value={props.email}
                onChange={props.onInputChange}>
                  </input>  
            <label>Role:</label>
             <input 
             role="role"
             value={props.role}
             onChange={props.onInputChange}>
             </input>
            
            <label>
            <button onClick={props.onSubmit}>Submit</button>
           </label>
         </form>
    )
}

export default TeamMemberForm