import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Drop = () => {
    return (
        <Fragment>
            <li className="nav-item dropdown mega-dropdown">
                <Link className="nav-link dropdown-toggle" to="/vendorprofile" id="menu-6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Vendors <span className="badge badge-success">New</span>
                </Link>
                <ul className="dropdown-menu mega-dropdown-menu" aria-labelledby="menu-6">
                    <li className="row">
                        <ul className="col">
                            <li><Link className="dropdown-item" to="/category">
                            Venue</Link>
                            </li>
                            <li><Link className="dropdown-item" to="/photos">
                            Photographer</Link>
                            </li>
                            <li><Link className="dropdown-item" to="/florist">
                            Florist</Link>
                            </li>
                            <li><Link className="dropdown-item" to="/cakes">
                            Wedding Cakes</Link>
                            </li>
                        </ul>
                        <ul className="col">
                            <li><Link className="dropdown-item" to="/weddingdress">
                            Bridal & Groom Dresses</Link>
                            </li>
                            <li><Link className="dropdown-item" to="/dj">
                            Dj</Link>
                            </li>
                            <li><Link className="dropdown-item" to="/food">
                            Food And Services</Link>
                            </li>
                            <li><Link className="dropdown-item" to="/Makeup">
                            Make up</Link>
                            </li>
                        </ul>
                        <ul className="col">
                            <li><Link className="dropdown-item" to="/weddingplanner">
                            Weddng Planner</Link>
                            </li>
                            <li><Link className="dropdown-item" to="/jewles">
                            Jewellery</Link>
                            </li>
                            <li><Link className="dropdown-item" to="/pandit">
                            Pandits & More</Link>
                            </li>
                            <li><Link className="dropdown-item" to="/mendhi">Mehndi</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

        </Fragment>
    )
}

export default Drop