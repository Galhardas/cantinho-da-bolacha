import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSite } from '../SiteContext'

export default function Navbar() {
  const { name, nav } = useSite()
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          {name}
        </NavLink>

        <button
          className="navbar__toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__links${open ? ' is-open' : ''}`}>
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
