import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const linkStyles = {
  color: `white`,
  textDecoration: `none`,
};

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem`,
      }}
    >
      <h4 className="m-0">
        <Link
          to="/"
          style={linkStyles}
        >
          Home
        </Link>
        <Link className="ml-3" to="/gallery" style={linkStyles}>Gallery</Link>
      </h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
