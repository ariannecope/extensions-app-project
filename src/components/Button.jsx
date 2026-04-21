//This component tells Home which filter to use
//These buttons do NOT: filter data, know what cards exist, They only: send a “signal” to Home.jsx

function Button({ label, onClick, active = false }) {
	return (
		<button
			onClick={onClick}
			className={active ? "active" : ""}
		>
			{label}
		</button>
	);
}

export default Button;

// This just sets a default so you don’t have to pass active every time.