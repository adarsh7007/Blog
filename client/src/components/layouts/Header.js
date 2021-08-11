import React from 'react'
import Styled from 'styled-components'
const Header =()=>{
    return(
    
    <MainContainer>
        <h1>
            
            welcome to 
            
        
        </h1>
      
        <h2>
            Blog
        </h2>
    
        </MainContainer>
    
    )
    }
export default Header;

const MainContainer = Styled.header`

    height:8rem;

    h1{
        transform:translate(-50%,-50%);
        color:black;
        font-weight:900;
        position:absolute;
        top:7%;
        left:50%
    }
    h2{
        transform:translate(-50%,-50%);
        color:black;
        font-weight:900;
        position:absolute;
        top:12%;
        left:50%
    }
`;