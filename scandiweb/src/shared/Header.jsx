import { React, Component } from "react";
import { Link } from "react-router-dom";
import { HeaderStyles } from "../styles/headerStyles";

class Header extends Component {
  render() {
    return (
        <HeaderStyles>
          <nav>
            <ul>
              <li>
                <Link className="link" to="/">ALL</Link>
              </li>
              <li>
                <Link className="link" to="/clothes">CLOTHES</Link>
              </li>
              <li>
                <Link className="link" to="/tech">TECH</Link>
              </li>
            </ul>
          </nav>
          <div className="logo">
            <img src="/icons/Brand_icon.png" alt="logo" />
          </div>

          <div className="icons">
            <div className="icons__vectors">
              <div className="vector1">
                <img src="/vectors/currency.png" alt="dropdown" />
              </div>
              <div className="vector2">
                <img src="/vectors/drop_down.png" alt="dropdown" />
                {/* <img src="/vectors/drop_down.png" alt="dropdown" /> */}
              </div>
            </div>
            <div className="icons__cart">
              <Link to="/my_cart">
              <img src="/vectors/empty_cart.png" alt="empty cart" />
              </Link>
              {/* <img src="/vectors/empty_cart.png" alt="empty cart" /> */}
            </div>
          </div>
        </HeaderStyles>
    );
  }
}

export default Header;
