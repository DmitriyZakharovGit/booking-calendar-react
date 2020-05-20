export default function useItemPosition(ref) {
	return {
		height: ref.current?.offsetHeight || 0,
		top: ref.current?.offsetTop || 0,
	};
}
