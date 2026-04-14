import React from 'react'

export default function Navbar(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand px-3" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="ms-auto">
                        <ul className="navbar-nav gap-1 me-auto ms-auto px-4 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{props.navOption1}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3" href="/">{props.navOption2}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.navOption3}</a>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary text-white" type="submit"><b>Search</b></button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
  )
}
