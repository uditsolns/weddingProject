import React, { Fragment } from 'react'
import Footer from '../../Home/Footer'
import Header from '../../Home/Header'
import dj1 from '../dj/dj1.jpg'
import dj2 from '../dj/dj2.webp'
import download from '../dj/download.jfif'
import images from '../dj/images.jfif'
import sagar from '../dj/sagar.jfif'
import {Link} from 'react-router-dom'
const Dj = () => {
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
                                    <h1 className="page-title">Supplier DJ and Music</h1>
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
                                        <li className="breadcrumb-item active text-white" aria-current="page">Supplier Dj and Music List</li>
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
                                        <Link to="/cat"><img src={dj1} alt="logo" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Aavis Dj</Link></h2>
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
                                        <Link to="/cat"><img src="data:image/jpeg;base64,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" alt="" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Monika Dj And music</Link></h2>
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
                                        <Link to="/cat"><img src="https://i1.wp.com/djtechtools.com/wp-content/uploads/2019/09/yotto-dj-tips-2.jpg?fit=1129%2C648&ssl=1" style={{height:"210px"}} alt="" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Anamika DJ</Link></h2>
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
                                        <Link to="/cat"><img src={images} alt="" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Sarika Dj and musics</Link></h2>
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
                                        <Link to="/cat"><img src={sagar} alt="" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Pamela </Link></h2>
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
                                        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRb3zpcVaKLhzICVdDNwizxIlV_2q5q2jaWQ&usqp=CAU" alt="" className="img-fluid" /></a>
                                        <div className="wishlist-sign"><a href="#" className="btn-wishlist"><i className="fa fa-heart" /></a></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><a href="#" className="title">Howard </a></h2>
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


export default Dj