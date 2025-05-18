export default function Button({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
        >
            {children}
        </button>
    );
}
