export default function MenuButton() {
  return (
    <button
      id="menuToggle"
      type="button"
      aria-label="Open menu"
      aria-expanded="false"
      aria-controls="menuPanel"
      className="fixed top-5 right-5 md:top-6 md:right-6 z-[60] w-14 h-14 md:w-16 md:h-16 outline-none bg-transparent border-0"
    >
      <span className="menu-bar bar1"></span>
      <span className="menu-bar bar2"></span>
      <span className="menu-bar bar3"></span>
    </button>
  )
}
