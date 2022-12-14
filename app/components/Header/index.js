import React from 'react';

function Header() {
  return (
    <>
      <div className="container">
        <div className="row header">
          <nav
            className="navbar navbar-expand-lg navbar-light bg-danger"
            style={{ color: 'white' }}
          >
            <a className="navbar-brand" href="/">
              Baby&apos;s Home
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
