import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar({
    title = "Set Title Here",
    navOption1 = "Navbar Option",
    navOption2 = "Navbar Option",
    navOption3 = "Navbar Option"
}) {
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand px-3 text-white" href="/">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto gap-2 px-4 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{navOption1}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3" href="/">{navOption2}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{navOption3}</a>
                            </li>
                        </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary text-white" type="submit"><b>Search</b></button>
                    </form> */}
                </div>
            </div>
        </nav>
  )
}