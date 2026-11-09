import { NavLink, Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Bow } from './Bow'
import { Melody } from './Melody'
import { PageTransition } from './PageTransition'

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/multimedia', label: 'Multimedia' },
  { to: '/personal', label: 'Personal' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  // react-router stores the position in the history stack; 0 means this is the first page visited
  const canGoBack = (window.history.state?.idx ?? 0) > 0
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <PageTransition />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 btn">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b-2 border-petal bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-berry no-underline">
            <Bow className="h-7 w-10" /> <span className="hidden min-[440px]:inline">Leighmarie</span>
          </Link>
          <nav aria-label="Primary">
            <ul className="m-0 flex list-none gap-1 p-0 sm:gap-2">
              {nav.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={n.to}
                    end={n.end}
                    className={({ isActive }) =>
                      `rounded-full px-3 py-1.5 text-sm font-bold no-underline sm:px-4 sm:text-base ${
                        isActive ? 'bg-berry text-white' : 'hover:bg-blush'
                      }`
                    }
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        {pathname !== '/' && (
          <div className="mx-auto max-w-5xl px-5 pt-6">
            <button
              type="button"
              onClick={() => (canGoBack ? navigate(-1) : navigate('/'))}
              className="cursor-pointer rounded-full border-2 border-petal bg-white px-4 py-1.5 font-bold text-berry hover:bg-blush"
            >
              ← Back
            </button>
          </div>
        )}
        <Outlet />
      </main>

      <footer className="relative mt-32 border-t-2 border-petal bg-blush">
        <Melody src="/cute.webp" className="absolute -top-20 right-6 w-24 sm:right-16 sm:-top-28 sm:w-32" />
        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-10 sm:grid-cols-4">
          <FooterCol title="Quick links">
            <Link to="/"><HomeIcon />Home</Link>
            <Link to="/about"><UserIcon />About</Link>
            <Link to="/multimedia"><BriefcaseIcon />Multimedia projects</Link>
            <Link to="/personal"><BriefcaseIcon />Personal projects</Link>
            <Link to="/contact"><MailIcon />Contact</Link>
          </FooterCol>
          <FooterCol title="Secondary links">
            <a href="/resume.pdf"><FileIcon />Resume (PDF)</a>
          </FooterCol>
          <FooterCol title="Social">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><LinkedInIcon />LinkedIn</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer"><GitHubIcon />GitHub</a>
          </FooterCol>
          <FooterCol title="Legal pages">
            <Link to="/privacy"><ShieldIcon />Privacy Policy</Link>
          </FooterCol>
        </div>
        <p className="m-0 pb-8 text-center text-sm">© 2026 Leighmarie Abigail Vicente</p>
      </footer>
    </>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 [&_a]:flex [&_a]:w-fit [&_a]:items-center [&_a]:gap-2 [&_a]:underline-offset-4 [&_a:hover]:text-berry [&_a:hover]:underline">
      <h2 className="m-0 text-lg">{title}</h2>
      {children}
    </div>
  )
}

/* Small inline icons. Decorative: the text label beside each one carries the meaning. */
function Icon({ children, fill = false }: { children: React.ReactNode; fill?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      className="shrink-0 text-berry"
      fill={fill ? 'currentColor' : 'none'}
      stroke={fill ? 'none' : 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}
const HomeIcon = () => <Icon><path d="M3 11l9-8 9 8M5 10v10h14V10" /></Icon>
const UserIcon = () => <Icon><circle cx="12" cy="8" r="4" /><path d="M4 21c1-5 15-5 16 0" /></Icon>
const BriefcaseIcon = () => <Icon><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5h6v2" /></Icon>
const MailIcon = () => <Icon><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></Icon>
const FileIcon = () => <Icon><path d="M6 3h8l5 5v13H6z" /><path d="M14 3v5h5" /></Icon>
const ShieldIcon = () => <Icon><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z" /></Icon>
const LinkedInIcon = () => (
  <Icon fill>
    <path d="M4 9h4v11H4zM6 3.5a2.3 2.3 0 110 4.6 2.3 2.3 0 010-4.6zM10 9h3.8v1.6c.6-1 1.9-1.9 3.8-1.9 3.5 0 4.4 2.3 4.4 5.4V20h-4v-5.2c0-1.3 0-2.9-1.8-2.9s-2.2 1.400-2.200 2.800V20h-4z" />
  </Icon>
)
const GitHubIcon = () => (
  <Icon fill>
    <path d="M12 2a10 10 0 00-3.2 19.500c.5.100.7-.2.7-.5v-1.800c-2.800.6-3.400-1.200-3.400-1.200-.5-1.200-1.100-1.500-1.100-1.500-.9-.6.100-.6.100-.6 1 .1 1.500 1 1.500 1 .9 1.500 2.400 1.100 2.900.8.1-.7.4-1.100.6-1.400-2.200-.3-4.600-1.100-4.600-5 0-1.100.4-2 1-2.700-.1-.3-.5-1.300.1-2.700 0 0 .8-.3 2.800 1a9.600 9.600 0 015 0c1.900-1.300 2.800-1 2.800-1 .6 1.400.2 2.400.1 2.700.6.700 1 1.600 1 2.700 0 3.900-2.400 4.700-4.600 5 .4.300.7.900.7 1.800v2.700c0 .3.2.6.7.5A10 10 0 0012 2z" />
  </Icon>
)
