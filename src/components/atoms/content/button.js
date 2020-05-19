import styled from 'styled-components';

export default styled.button`
    outline: 0;
    border: 0;

    background: #FAFAFF;
    border-radius: 12px;
    color: #37B86A;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    
    :hover {
        background: #CBF4DB;
    }

    :active {
        color: #ffffff;
        background: #37B86A;
    }
    
    :disabled {
        color: #D8D7E0;
        background: #FAFAFF;
    }
`;
