import styled from 'styled-components';

export default styled.button`
    outline: 0;
    width: 44px;
    height: 40px;
    border: 1px solid #D8D7E0;
    background-color: #ffffff;
    background-position: center;
    background-repeat: no-repeat;
    
    :hover {
        background-color: #FAFAFF;
    }
    
    :active: {
        background-color: #F0F0F5;
    }
    
    :first-of-type {
        border-right: 0;
    }
`;
