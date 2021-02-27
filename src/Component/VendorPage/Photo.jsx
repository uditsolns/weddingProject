import React, { Fragment } from 'react'
import Footer from '../Home/Footer'
import Header from '../Home/Header'
import {Link} from 'react-router-dom'
const Photo = () => {
    return (
        <Fragment>
            <Header />
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        {/* page caption */}
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div className="page-caption">
                                <h1 className="page-title">Supplier Photographers</h1>
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
                                    <li className="breadcrumb-item active text-white" aria-current="page">Supplier Photographer List</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* page breadcrumb */}
            </div>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="vendor-thumbnail">
                                {/* Vendor thumbnail */}
                                <div className="vendor-img">
                                    {/* Vendor img */}
                                    <Link to="/cat"><img src="images/supplier-photographer-1.jpg" alt="" className="img-fluid" /></Link>
                                    <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                </div>
                                {/* /.Vendor img */}
                                <div className="vendor-content">
                                    {/* Vendor Content */}
                                    <h2 className="vendor-title"><Link to="/cat" className="title">Alex Doe Photographer </Link></h2>
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
                                    <Link to="/cat"><img src="images/supplier-photographer-2.jpg" alt="" className="img-fluid" /></Link>
                                    <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                </div>
                                {/* /.Vendor img */}
                                <div className="vendor-content">
                                    {/* Vendor Content */}
                                    <h2 className="vendor-title"><Link to="/cat" className="title">Mariano Photographer </Link></h2>
                                    <p className="vendor-address">Surat, India</p>
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
                                    <Link to="/cat"><img src="images/supplier-photographer-3.jpg" alt="" className="img-fluid" /></Link>
                                    <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                </div>
                                {/* /.Vendor img */}
                                <div className="vendor-content">
                                    {/* Vendor Content */}
                                    <h2 className="vendor-title"><Link to="/cat" className="title">Kawin Photographer </Link></h2>
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
                                    <a href="#"><img src="images/supplier-photographer-4.jpg" alt="" className="img-fluid" /></a>
                                    <div className="wishlist-sign"><a href="#" className="btn-wishlist"><i className="fa fa-heart" /></a></div>
                                </div>
                                {/* /.Vendor img */}
                                <div className="vendor-content">
                                    {/* Vendor Content */}
                                    <h2 className="vendor-title"><a href="#" className="title">Coffman Studio</a></h2>
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
                                    <a href="#"><img src="images/supplier-photographer-5.jpg" alt="" className="img-fluid" /></a>
                                    <div className="wishlist-sign"><a href="#" className="btn-wishlist"><i className="fa fa-heart" /></a></div>
                                </div>
                                {/* /.Vendor img */}
                                <div className="vendor-content">
                                    {/* Vendor Content */}
                                    <h2 className="vendor-title"><a href="#" className="title">Maddy Photographer </a></h2>
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
                                    <a href="#"><img src="images/supplier-photographer-6.jpg" alt="" className="img-fluid" /></a>
                                    <div className="wishlist-sign"><a href="#" className="btn-wishlist"><i className="fa fa-heart" /></a></div>
                                </div>
                                {/* /.Vendor img */}
                                <div className="vendor-content">
                                    {/* Vendor Content */}
                                    <h2 className="vendor-title"><a href="#" className="title">Annie Photographer </a></h2>
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
                                    <a href="#"><img src="images/supplier-photographer-7.jpg" alt="" className="img-fluid" /></a>
                                    <div className="wishlist-sign"><a href="#" className="btn-wishlist"><i className="fa fa-heart" /></a></div>
                                </div>
                                {/* /.Vendor img */}
                                <div className="vendor-content">
                                    {/* Vendor Content */}
                                    <h2 className="vendor-title"><a href="#" className="title"> Antionette Photographer</a></h2>
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
                                    <a href="#"><img src="images/supplier-photographer-8.jpg" alt="" className="img-fluid" /></a>
                                    <div className="wishlist-sign"><a href="#" className="btn-wishlist"><i className="fa fa-heart" /></a></div>
                                </div>
                                {/* /.Vendor img */}
                                <div className="vendor-content">
                                    {/* Vendor Content */}
                                    <h2 className="vendor-title"><a href="#" className="title">Levi Alvarez Studio</a></h2>
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
                                    <a href="#"><img src="images/supplier-photographer-9.jpg" alt="" className="img-fluid" /></a>
                                    <div className="wishlist-sign"><a href="#" className="btn-wishlist"><i className="fa fa-heart" /></a></div>
                                </div>
                                {/* /.Vendor img */}
                                <div className="vendor-content">
                                    {/* Vendor Content */}
                                    <h2 className="vendor-title"><a href="#" className="title">Lanty Wedding Studio</a></h2>
                                    <p className="vendor-address">Mumbai, India</p>
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
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="pagination justify-content-center">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item active"><a className="page-link " href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </Fragment>
    )
}

export default Photo