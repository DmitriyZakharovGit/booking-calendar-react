export default (ref) => ({
	height: ref.current?.offsetHeight || 0,
	top: ref.current?.offsetTop || 0,
});
