import React from "react";

function Navbar(props) {
    console.log("mode : " + props.mode)
    return (
        <>
            <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{props.otherText}</a>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} id="flexSwitchCheckDefault" type="checkbox" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" color="white">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;