function Button({ children, variant = "primary", ...props }) {
    const buttonClass = variant === "primary"
    ? "py-2 px-4 font-semibold uppercase bg-yellow-400 text-gray-800 rounded hover:bg-yellow-500"
    : "text-blue-500 hover:text-blue-700";

    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
}

export default Button;
