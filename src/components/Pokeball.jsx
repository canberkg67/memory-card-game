
export default function Pokeball() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            {/* Outer circle */}
            <circle
                cx="12"
                cy="12"
                r="10"
                fill="#F5F0DC"
                stroke="#52677D"
                strokeWidth="1.5"
            />

            {/* Top half */}
            <path
                d="M2 12 A10 10 0 0 1 22 12 Z"
                fill="#D65B55"
            />

            {/* Middle line */}
            <path
                d="M2 12 H22"
                stroke="#52677D"
                strokeWidth="1.5"
            />

            {/* Center button */}
            <circle
                cx="12"
                cy="12"
                r="3"
                fill="#F5F0DC"
                stroke="#52677D"
                strokeWidth="1.5"
            />
        </svg>
    );
}
