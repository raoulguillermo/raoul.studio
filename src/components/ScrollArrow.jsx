export default function ScrollArrow() {
  return (
    <button
      id="scrollArrow"
      type="button"
      aria-label="Scroll to bottom"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[50] w-14 h-14 md:w-16 md:h-16 outline-none bg-transparent border-0 flex items-center justify-center cursor-pointer"
    >
      <svg
        viewBox="0 0 24 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-11 md:w-9 md:h-12"
      >
        <line x1="12" y1="3" x2="12" y2="28" />
        <polyline points="3 19 12 28 21 19" />
      </svg>
    </button>
  )
}
