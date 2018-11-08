import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

export default class CloseButton extends PureComponent {
  render() {
    return <Link to="/decks" className="homePage__close">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
        <path fill="#17262B" fill-rule="evenodd" d="M17.3.35L11 6.8 4.7.35.35 4.7 6.8 11 .35 17.3l4.35 4.35L11 15.2l6.3 6.45 4.35-4.35L15.2 11l6.45-6.3z" />
      </svg>
    </Link>;
  }
}
