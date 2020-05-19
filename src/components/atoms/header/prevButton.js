import styled from 'styled-components';

import DefaultArrowIcon from '../../../assets/default/arrow_left.svg';
import ActiveArrowIcon from '../../../assets/active/arrow_left.svg';
import HoverArrowIcon from '../../../assets/hover/arrow_left.svg';

import BasicButton from './basicButton';

export default styled(BasicButton)`
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    background-image: url(${DefaultArrowIcon});

    :hover {
        background-image: url(${HoverArrowIcon});
    }

    :active {
        background-image: url(${ActiveArrowIcon});
    }
`;
