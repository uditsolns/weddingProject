import React, { Fragment } from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import {Link} from 'react-router-dom'
const Mendhi = () => {
    return (
        <Fragment>
            <Header />
            <div>
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            {/* page caption */}
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                <div className="page-caption">
                                    <h1 className="page-title">Supplier Mehndi </h1>
                                </div>
                            </div>
                            {/* /.page caption */}
                        </div>
                    </div>
                    {/* page caption */}
                    <div className="page-breadcrumb">
                        <div className="container">
                            <div className="row">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Supplier List</a></li>
                                        <li className="breadcrumb-item active text-white" aria-current="page">Mehndi</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* page breadcrumb */}
                </div>
                {/* /.page-header */}
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="vendor-thumbnail">
                                    {/* Vendor thumbnail */}
                                    <div className="vendor-img">
                                        {/* Vendor img */}
                                        <Link to="/cat"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz86GVHwIbcWLxUORufMxua6IPYiaWASy9qQ&usqp=CAU" alt="logo" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">suhana </Link></h2>
                                        <p className="vendor-address">Goa, SouthGoa</p>
                                    </div>
                                    {/* /.Vendor Content */}
                                    <div className="vendor-meta">
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="vendor-price">
                                                $150
                </span>
                                            <span className="vendor-text">Start From</span></div>
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="rating-star">
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rate-mute" />
                                            </span>
                                            <span className="rating-count vendor-text">(20)</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="vendor-thumbnail">
                                    {/* Vendor thumbnail */}
                                    <div className="vendor-img">
                                        {/* Vendor img */}
                                        <Link to="/cat"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRBEUY-ZS-5PYrFra7jeH61Eh7Jg2_qBu9g&usqp=CAU" alt="" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Krti Artist</Link></h2>
                                        <p className="vendor-address">Baroda, Gujarat.</p>
                                    </div>
                                    {/* /.Vendor Content */}
                                    <div className="vendor-meta">
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="vendor-price">
                                                $150
                </span>
                                            <span className="vendor-text">Start From</span></div>
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="rating-star">
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rate-mute" />
                                            </span>
                                            <span className="rating-count vendor-text">(20)</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="vendor-thumbnail">
                                    {/* Vendor thumbnail */}
                                    <div className="vendor-img">
                                        {/* Vendor img */}
                                        <Link to="/cat"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2wYWPs9NV4kfwy5OX5r_k-HDb6pJ1QFWYFw&usqp=CAU" alt="" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Anamika Desgner</Link></h2>
                                        <p className="vendor-address">Baroda, Gujarat.</p>
                                    </div>
                                    {/* /.Vendor Content */}
                                    <div className="vendor-meta">
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="vendor-price">
                                                $150
                                         </span>
                                            <span className="vendor-text">Start From</span></div>
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="rating-star">
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rate-mute" />
                                            </span>
                                            <span className="rating-count vendor-text">(20)</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="vendor-thumbnail">
                                    {/* Vendor thumbnail */}
                                    <div className="vendor-img">
                                        {/* Vendor img */}
                                        <Link to="/cat"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMvLEbaHb8l73kkSJpmZAylQpI-t23mwssQ&usqp=CAU" alt="" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Singh </Link></h2>
                                        <p className="vendor-address">Baroda, Gujarat.</p>
                                    </div>
                                    {/* /.Vendor Content */}
                                    <div className="vendor-meta">
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="vendor-price">
                                                $150
                </span>
                                            <span className="vendor-text">Start From</span></div>
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="rating-star">
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rate-mute" />
                                            </span>
                                            <span className="rating-count vendor-text">(20)</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="vendor-thumbnail">
                                    {/* Vendor thumbnail */}
                                    <div className="vendor-img">
                                        {/* Vendor img */}
                                        <Link to="/cat"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGgdcOBRDGo-84U9RFH8-VfBJYVVjAy8Yf0Q&usqp=CAU" alt="" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Sonia make up and wedservices </Link></h2>
                                        <p className="vendor-address">Baroda, Gujarat.</p>
                                    </div>
                                    {/* /.Vendor Content */}
                                    <div className="vendor-meta">
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="vendor-price">
                                                $150
                </span>
                                            <span className="vendor-text">Start From</span></div>
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="rating-star">
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rate-mute" />
                                            </span>
                                            <span className="rating-count vendor-text">(20)</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="vendor-thumbnail">
                                    {/* Vendor thumbnail */}
                                    <div className="vendor-img">
                                        {/* Vendor img */}
                                        <Link to="/cat"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ85BUlzjQyFVJa_AEP-j-W1FAtWy-Vdlk-qw&usqp=CAU" alt="" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Bollywood MakeOVer </Link></h2>
                                        <p className="vendor-address">Baroda, Gujarat.</p>
                                    </div>
                                    {/* /.Vendor Content */}
                                    <div className="vendor-meta">
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="vendor-price">
                                                $150
                </span>
                                            <span className="vendor-text">Start From</span></div>
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="rating-star">
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rate-mute" />
                                            </span>
                                            <span className="rating-count vendor-text">(20)</span></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </Fragment>
    )
}

export default Mendhi