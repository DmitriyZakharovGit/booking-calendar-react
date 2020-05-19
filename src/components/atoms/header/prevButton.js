import styled from 'styled-components';

import ArrowLeftIcon from '../../../assets/arrow_left.svg';
import BasicButton from './basicButton';

export default styled(BasicButton)`
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    background: url(${ArrowLeftIcon}) center no-repeat;
`;
