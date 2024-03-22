function Header() {
  return (
    <nav className="deep-yellow darken-2">
      <div className="nav-wrapper">
        <div className="row">
          <div className="col s6">
            <a href="#" className="brand-logo">
              Shop
            </a>
          </div>
          <div className="col s6" style={{ textAlign: "right" }}>
            <a
              href="https://github.com/Vladusick/project-shop-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Header };
