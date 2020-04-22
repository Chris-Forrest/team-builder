import React from 'react';
import styled from 'styled-components'


function TeamMember ({ details }) {
    const MemberCard = styled.div`
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
    
    
    `

     return(
        <MemberCard>
            <h2>Team Member</h2>
            <h3>Name:{details.name}</h3>
            <h4>Email:{details.email}</h4>
            <h4>Role:{details.role}</h4>
        </MemberCard>



    )
}

export default TeamMember