import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
	display: ${(props) => props.display};
	flex-direction: ${(props) => props.flexDirection};
    flex: ${(props) => props.flex};
	align-items: ${(props) => props.alignItems};
    justify-content: ${(props) => props.justifyContent};
	margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    position: ${(props) => props.position};
`;

Container.propTypes = {
	alignItems: PropTypes.string,
	display: PropTypes.string,
	flex: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	flexDirection: PropTypes.string,
	justifyContent: PropTypes.string,
	margin: PropTypes.string,
	padding: PropTypes.string,
	position: PropTypes.string,
};

Container.defaultProps = {
	alignItems: 'normal',
	display: 'inline-flex',
	flex: 'unset',
	flexDirection: 'row',
	justifyContent: 'normal',
	margin: '0',
	padding: '0',
	position: 'unset',
};

export default Container;
