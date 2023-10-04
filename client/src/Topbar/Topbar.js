// do the same for topbar as you didi for product details and product preview 31.

import React from "react";
import classes from './Topbar.module.css'

const Topbar = (props) => {
    return(
    <div>
    <header className="App-header">
    <nav className={classes.Topbar}>
        <img src='https://www.freeiconspng.com/thumbs/amazon-icon/amazon-icon-8.png' alt='amazon logo' />
      </nav>
      </header>
    </div>
      );
}

export default Topbar;