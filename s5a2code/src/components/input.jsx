function Input({ label, isInvalid, ...props }) {
    const labelClass = `block text-xs font-bold uppercase ${isInvalid ? "text-red-500" : "text-stone-300"}`;
    const inputClass = `w-full px-3 py-2 rounded bg-gray-100 border-none focus:ring-2 focus:ring-blue-400 ${isInvalid ? "text-red-500 border-red-500 bg-red-100" : "border-stone-300 bg-white"}`;

    return (
        <p>
            <label className={labelClass}>{label}</label>
            <input className={inputClass} {...props} />
        </p>
    );
}

export default Input;
