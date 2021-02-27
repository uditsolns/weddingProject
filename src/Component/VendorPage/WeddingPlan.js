import React, { Fragment } from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import {Link} from 'react-router-dom'
const WeddingPlan = () => {
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
                                        <li className="breadcrumb-item active text-white" aria-current="page">Wedding Planner</li>
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
                                        <Link to="/cat"><img src="https://cdn.augrav.com/online/jewels/2017/01/Yo4NQ1484132347.jpg" alt="logo" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Aavis WeddingPlanner</Link></h2>
                                        <p className="vendor-address">Mumbai,South Mumbai.</p>
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
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Plan a wed</Link></h2>
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
                                        <Link to="/cat"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSves5SHHMlnfqUkWomdHCjN4cv-4lpz6ybmQ&usqp=CAU" alt="" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Anamika planner</Link></h2>
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
                                        <Link to="/cat"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfWiG9sL6RoA-1qBwRSc0fwU5jfb00JIyA_A&usqp=CAU" alt="" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Singh evnet organizers</Link></h2>
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
                                        <Link to="/cat"><img src="https://i.pinimg.com/originals/a8/dc/a6/a8dca64b529c8964bb8339383e52c8f0.jpg" alt="" className="img-fluid" /></Link>
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
                                        <Link to="/cat"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQA34MY9qOv15pU2ye9rGuYGQLDDTu1h6KA&usqp=CAU" alt="" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
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

export default WeddingPlan