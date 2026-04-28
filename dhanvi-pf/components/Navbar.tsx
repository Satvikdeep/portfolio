const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Offer" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="site-nav">
      <a href="#hero" className="site-nav__brand">
        Dhanvi Vora
      </a>
      <nav aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
