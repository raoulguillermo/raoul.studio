// Third in the right-hand column of fixed controls, under the language
// switcher. /account sends signed-out visitors to the login page.
export default function AccountButton({ label }) {
  return (
    <a
      href="/account"
      aria-label={label}
      className="phone-toggle fixed right-5 md:right-6 top-[200px] md:top-[228px] z-[50] w-14 h-14 md:w-16 md:h-16 flex items-center justify-center outline-none"
    >
      <svg
        className="w-6 h-6 md:w-7 md:h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    </a>
  )
}
