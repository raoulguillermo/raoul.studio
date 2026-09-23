// Sits in the right-hand column of fixed controls, directly under the
// hamburger. Below the menu panel's z-index so the open menu covers it.
export default function PhoneButton({ href, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="phone-toggle fixed right-5 md:right-6 top-20 md:top-[92px] z-[50] w-14 h-14 md:w-16 md:h-16 flex items-center justify-center outline-none"
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    </a>
  )
}
