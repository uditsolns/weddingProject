import React, { Fragment } from 'react'

const VendorList = () => {
   
    return (
            <Fragment>
                <div>
                    <div className="page-header">
                        <div className="container">
                            <div className="row">
                                {/* page caption */}
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <div className="page-caption">
                                        <h1 className="page-title">Vendor Categories</h1>
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
                                            <li className="breadcrumb-item"><Link to="" className="breadcrumb-link">Home</Link></li>
                                            <li className="breadcrumb-item active text-white" aria-current="page">Vendor Categories</li>
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
                                    <div className="card-category">
                                        <div className="category-image zoomimg"><Link to="/"><img src="images/catergory-venue.jpg" alt="" /></Link></div>
                                        <div className="category-content">
                                            <h3 className="cateogry-title"> <Link to="/vendorlist">Venue</Link> <span className="category-count">(12)</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="card-category">
                                        <div className="category-image zoomimg"><Link to="/vendorlist"><img src="images/catergory-photographer.jpg" alt="" /></Link></div>
                                        <div className="category-content">
                                            <h3 className="cateogry-title"> <Link to="/vendorlist">Photographer</Link> <span className="category-count">(2)</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="card-category">
                                        <div className="category-image zoomimg"><Link to="/vendorlist"><img src="images/catergory-florist.jpg" alt="" /></Link></div>
                                        <div className="category-content">
                                            <h3 className="cateogry-title"><Link to="/vendorlist">Florist</Link> <span className="category-count">(3)</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="card-category">
                                        <div className="category-image zoomimg"><Link to="/vendorlist"><img src="images/wedding-cake-small.jpg" alt="" /></Link></div>
                                        <div className="category-content">
                                            <h3 className="cateogry-title"> <Link to="/vendorlist">Wedding Cakes</Link> <span className="category-count">(4)</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="card-category">
                                        <div className="category-image zoomimg"><Link to="/vendorlist"><img src="images/wedding-dresses-small.jpg" alt="" /></Link></div>
                                        <div className="category-content">
                                            <h3 className="cateogry-title"> <Link to="">Wedding  Dresses</Link> <span className="category-count">(8)</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="card-category">
                                        <div className="category-image zoomimg"><Link to=""><img src="images/wedding-dj-small.jpg" alt="" /></Link></div>
                                        <div className="category-content">
                                            <h3 className="cateogry-title"><Link to="">Dj</Link> <span className="category-count">(6)</span></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}

                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="card-category">
                                        <div className="category-image zoomimg"><Link to="/vendorlist"><img src="images/catergory-venue.jpg" alt="" /></Link></div>
                                        <div className="category-content">
                                            <h3 className="cateogry-title"> <Link to="/vendorlist">Venue</Link> <span className="category-count">(12)</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="card-category">
                                        <div className="category-image zoomimg"><Link to="/vendorlist"><img src="images/catergory-photographer.jpg" alt="" /></Link></div>
                                        <div className="category-content">
                                            <h3 className="cateogry-title"> <Link to="/vendorlist">Photographer</Link> <span className="category-count">(2)</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="card-category">
                                        <div className="category-image zoomimg"><Link to="/vendorlist"><img src="images/catergory-florist.jpg" alt="" /></Link></div>
                                        <div className="category-content">
                                            <h3 className="cateogry-title"><Link to="/vendorlist">Florist</Link> <span className="category-count">(3)</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="card-category">
                                        <div className="category-image zoomimg"><Link to="/vendorlist"><img src="images/wedding-cake-small.jpg" alt="" /></Link></div>
                                        <div className="category-content">
                                            <h3 className="cateogry-title"> <Link to="/vendorlist">Wedding Cakes</Link> <span className="category-count">(4)</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="card-category">
                                        <div className="category-image zoomimg"><Link to="/vendorlist"><img src="images/wedding-dresses-small.jpg" alt="" /></Link></div>
                                        <div className="category-content">
                                            <h3 className="cateogry-title"> <Link to="">Wedding  Dresses</Link> <span className="category-count">(8)</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="card-category">
                                        <div className="category-image zoomimg"><Link to=""><img src="images/wedding-dj-small.jpg" alt="" /></Link></div>
                                        <div className="category-content">
                                            <h3 className="cateogry-title"><Link to="">Dj</Link> <span className="category-count">(6)</span></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </Fragment>
    )
}

export default VendorList