import React, { Fragment } from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import { Link } from 'react-router-dom'
const Food = () => {
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
                                    <h1 className="page-title">Supplier Food and services</h1>
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
                                        <li className="breadcrumb-item active text-white" aria-current="page">Food And services</li>
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
                                        <Link to="/cat"><img src="https://i0.wp.com/blog.shaadishop.co/wp-content/uploads/2015/10/indian-wedding-punjabi-jain-kunal-shveta-bride-groom-hotel-irvine-global-photography-lehenga-sherwani-sera-manohar-delhi-palace-indian-food.jpg?fit=1296%2C864&ssl=1" alt="logo" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><a href="#" className="btn-wishlist"><i className="fa fa-heart" /></a></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Aavis Food and services</Link></h2>
                                        <p className="vendor-address">Surat, Gujarat.</p>
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
                                        <Link to="/cat"><img src="https://i1.wp.com/blog.shaadishop.co/wp-content/uploads/2015/04/16-newport-marriott-wedding-food.jpg?fit=850%2C567&ssl=1"alt="" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Sai Buffet</Link></h2>
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
                                        <Link to="/cat"><img src="https://desertpearl.in/wp-content/uploads/2018/01/wedding-food-stations7.jpg" alt="" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Anamika services</Link></h2>
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
                                        <Link to="/cat"><img src="https://weddingingreece.com/wp-content/uploads/wedding-buffet-greece.jpg" alt="" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Singh buffet</Link></h2>
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
                                        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYTQrsiN8k8WORNuuBwXjRwnexjk-mZVpGAw&usqp=CAU" alt="" className="img-fluid" /></a>
                                        <div className="wishlist-sign"><a href="#" className="btn-wishlist"><i className="fa fa-heart" /></a></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><a href="#" className="title">Pamela </a></h2>
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
                                        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHonEvzvkp-Mdzt29Y5ZN49TEt46WauBfcQ&usqp=CAU" alt="" className="img-fluid" /></a>
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

export default Food