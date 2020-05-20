import styled from 'styled-components';

import DefaultArrowIcon from 'assets/default/arrow_right.svg';
import ActiveArrowIcon from 'assets/active/arrow_right.svg';
import HoverArrowIcon from 'assets/hover/arrow_right.svg';

import BasicButton from './basicButton';

export default styled(BasicButton)`
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    background-image: url(${DefaultArrowIcon});

    :hover {
        background-image: url(${HoverArrowIcon});
    }

    :active {
        background-image: url(${ActiveArrowIcon});
    }
`;
