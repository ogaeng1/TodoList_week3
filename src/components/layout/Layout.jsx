import React from "react";
import "./style.css"



function Layout(props) {

    return(
        <div className="container">
            {props.children}
        </div>
    )
}

export default Layout