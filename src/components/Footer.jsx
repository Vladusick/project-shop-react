function Footer() {
  return (
    <footer className="page-footer deep-yellow lighten-1">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/Vladusick/project-shop-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
