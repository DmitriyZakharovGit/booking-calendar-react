import styled from 'styled-components';

import ArrowRightIcon from '../../../assets/arrow_right.svg';
import BasicButton from './basicButton';

export default styled(BasicButton)`
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    background: url(${ArrowRightIcon}) center no-repeat;;
`;
