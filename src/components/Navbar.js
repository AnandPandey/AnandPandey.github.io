function Navbar() {

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <span className="logo">Anand</span>

        <div className="nav-links">
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("skills")}>Skills</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
