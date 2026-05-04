'use client'

import { useEffect } from 'react'

export default function SiteEffects() {
  useEffect(() => {
    // ============ INTERSECTION OBSERVER (entrance reveals) ============
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.15 },
    )
    document.querySelectorAll('.r').forEach((el) => io.observe(el))

    // ============ PARALLAX ============
    const px = Array.from(
      document.querySelectorAll<HTMLElement>('[data-parallax]'),
    )
    const naturalY = new WeakMap<HTMLElement, number>()
    let ticking = false

    px.forEach((el) => {
      const cs = getComputedStyle(el).transform
      if (cs && cs.startsWith('matrix')) {
        const v = cs.match(/matrix\(([^)]+)\)/)
        if (v) {
          const p = v[1].split(',').map((s) => parseFloat(s))
          if (p.length === 6) {
            el.style.setProperty('--base', `translate(${p[4]}px, ${p[5]}px)`)
          }
        }
      }
      const r = el.getBoundingClientRect()
      naturalY.set(el, r.top + window.scrollY)
    })

    function update() {
      const vh = window.innerHeight
      px.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || '0')
        const sec = el.closest<HTMLElement>('.parallax-section')
        if (!sec) return
        const r = sec.getBoundingClientRect()
        const progress = r.top + r.height / 2 - vh / 2
        let displacement = progress * speed

        const pin = el.dataset.parallaxPinBelow
        if (pin) {
          const anchor = sec.querySelector<HTMLElement>(
            '[data-parallax-anchor="' + pin + '"]',
          )
          if (anchor) {
            const aRect = anchor.getBoundingClientRect()
            const natTop = (naturalY.get(el) || 0) - window.scrollY
            const gap = 16
            const minTop = aRect.bottom + gap
            if (natTop + displacement < minTop) {
              displacement = minTop - natTop
            }
          }
        }

        const base = el.style.getPropertyValue('--base') || ''
        el.style.transform = `${base} translate3d(0, ${displacement}px, 0)`
      })
      ticking = false
    }
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    // ============ MENU TOGGLE ============
    const menuToggle = document.getElementById('menuToggle')
    const menuPanel = document.getElementById('menuPanel')
    let menuOpen = false

    function setMenu(open: boolean) {
      if (!menuToggle || !menuPanel) return
      menuOpen = open
      menuToggle.classList.toggle('open', open)
      menuPanel.classList.toggle('open', open)
      menuToggle.setAttribute('aria-expanded', String(open))
      menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
      menuPanel.setAttribute('aria-hidden', String(!open))
      document.body.style.overflow = open ? 'hidden' : ''
    }

    const onToggle = () => setMenu(!menuOpen)
    menuToggle?.addEventListener('click', onToggle)
    const panelLinks = menuPanel?.querySelectorAll('a') || []
    const onPanelLink = () => setMenu(false)
    panelLinks.forEach((a) => a.addEventListener('click', onPanelLink))
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenu(false)
    }
    document.addEventListener('keydown', onKeydown)

    // ============ SCROLL ARROW ============
    const scrollArrow = document.getElementById('scrollArrow')
    function updateScrollArrow() {
      if (!scrollArrow) return
      const docH = document.documentElement.scrollHeight
      const winH = window.innerHeight
      const atBottom = window.scrollY + winH >= docH - 60
      scrollArrow.classList.toggle('up', atBottom)
      scrollArrow.setAttribute(
        'aria-label',
        atBottom ? 'Scroll to top' : 'Scroll to bottom',
      )
    }
    const onScrollArrowClick = () => {
      if (!scrollArrow) return
      const atBottom = scrollArrow.classList.contains('up')
      window.scrollTo({
        top: atBottom ? 0 : document.documentElement.scrollHeight,
        behavior: 'smooth',
      })
    }
    scrollArrow?.addEventListener('click', onScrollArrowClick)
    window.addEventListener('scroll', updateScrollArrow, { passive: true })
    window.addEventListener('resize', updateScrollArrow)
    updateScrollArrow()

    // ============ CHAT FAB ============
    const chatFab = document.getElementById('chatFab')
    function updateChatFab() {
      if (!chatFab) return
      const shown = window.scrollY > window.innerHeight * 0.5
      chatFab.classList.toggle('shown', shown)
    }
    window.addEventListener('scroll', updateChatFab, { passive: true })
    window.addEventListener('resize', updateChatFab)
    updateChatFab()

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('scroll', updateScrollArrow)
      window.removeEventListener('resize', updateScrollArrow)
      window.removeEventListener('scroll', updateChatFab)
      window.removeEventListener('resize', updateChatFab)
      document.removeEventListener('keydown', onKeydown)
      menuToggle?.removeEventListener('click', onToggle)
      panelLinks.forEach((a) => a.removeEventListener('click', onPanelLink))
      scrollArrow?.removeEventListener('click', onScrollArrowClick)
      document.body.style.overflow = ''
    }
  }, [])

  return null
}
