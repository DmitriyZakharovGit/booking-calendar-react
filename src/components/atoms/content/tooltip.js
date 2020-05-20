import styled from 'styled-components';
import PropTypes from 'prop-types';

import DefaultGroupIcon from 'assets/disabled/group.svg';

const getHeight = (isGroup) => (isGroup ? 113 : 73);

const Tooltip = styled.div`
    display: flex;
    z-index: 1000;
    flex-direction: column;
    width: 185px;
    background: #464646;
    box-shadow: 0px 8px 40px rgba(72, 71, 102, 0.3);
    border-radius: 8px;
    padding: 8px;
    position: absolute;
    top: ${(props) => props.top - getHeight(props.isGroup) - 5}px;

    .content {
        font-weight: bold;
        font-size: 12px;
        line-height: 18px;
        color: #FFFFFF;
    }

    .subtext {
    	display: flex;
    	margin-top: ${(props) => (props.isGroup ? 8 : 4)}px;
        font-size: 12px;
        line-height: 17px;
        color: rgba(255, 255, 255, 0.7);

		.icon {
			display: inline-flex;
			width: 24px;
			height: 14px;
			margin-right: 4px;
			background: url(${DefaultGroupIcon}) center no-repeat;
		}
    }

    :after {
        content: " ";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #464646 transparent transparent transparent;
    }
`;

Tooltip.propTypes = {
	subtextMarginTop: PropTypes.number,
	top: PropTypes.number,
};

Tooltip.defaultProps = {
	subtextMarginTop: 0,
	top: 0,
};

export default Tooltip;
