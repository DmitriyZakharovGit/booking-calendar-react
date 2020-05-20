import styled from 'styled-components';
import PropTypes from 'prop-types';

import DefaultGroup from 'assets/default/group.svg';
import ActiveGroup from 'assets/active/group.svg';
import HoverGroup from 'assets/hover/group.svg';
import DisabledGroup from 'assets/disabled/group.svg';

const Button = styled.button`
    outline: 0;
    border: 0;

    display: flex;
    align-items: center;
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

    ${(props) => props.icon && `
        .icon {
            display: inline-flex;
            height: 28px;
            width: 28px;
            background: url(${DefaultGroup}) center no-repeat;
            margin-right: 4px;
        }

        :hover {
            .icon {
                background: url(${HoverGroup}) center no-repeat;
            }
        }

        :active {
            .icon {
                background: url(${ActiveGroup}) center no-repeat;
            }
        }

        :disabled {
            .icon {
                background: url(${DisabledGroup}) center no-repeat;
            }
        }
     `}
`;

Button.propTypes = {
	icon: PropTypes.bool,
};

export default Button;
