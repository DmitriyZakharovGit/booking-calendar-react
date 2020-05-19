import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
	display: ${(props) => props.display};
	flex-direction: ${(props) => props.flexDirection};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
`;

Container.propTypes = {
	display: PropTypes.string,
	flexDirection: PropTypes.string,
	margin: PropTypes.string,
	padding: PropTypes.string,
};

Container.defaultProps = {
	display: 'inline-flex',
	flexDirection: 'row',
	margin: 0,
	padding: 0,
};

export default Container;
