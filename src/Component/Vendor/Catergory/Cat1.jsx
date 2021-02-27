import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
const Cat1 = () => {
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
                <div className="content" style={{background: "linear-gradient(to bottom right, #33ccff 0%, #ff99cc 100%)"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="card-category">
                                    <div className="category-image zoomimg"><Link to="/category"><img src="images/catergory-venue.jpg" alt="" /></Link></div>
                                    <div className="category-content">
                                        <h3 className="cateogry-title"> <Link to="/category">Venue</Link> <span className="category-count">(12)</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="card-category">
                                    <div className="category-image zoomimg"><Link to="/photos"><img src="images/catergory-photographer.jpg" alt="" /></Link></div>
                                    <div className="category-content">
                                        <h3 className="cateogry-title"> <Link to="photos">Photographer</Link> <span className="category-count">(2)</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="card-category">
                                    <div className="category-image zoomimg"><Link to="/florist"><img src="images/catergory-florist.jpg" alt="" /></Link></div>
                                    <div className="category-content">
                                        <h3 className="cateogry-title"><Link to="/florist">Florist</Link> <span className="category-count">(3)</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="card-category">
                                    <div className="category-image zoomimg"><Link to="/cakes"><img src="images/wedding-cake-small.jpg" alt="" /></Link></div>
                                    <div className="category-content">
                                        <h3 className="cateogry-title"> <Link to="/cakes">Wedding Cakes</Link> <span className="category-count">(4)</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="card-category">
                                    <div className="category-image zoomimg"><Link to="/weddingdress"><img src="images/wedding-dresses-small.jpg" alt="" /></Link></div>
                                    <div className="category-content">
                                        <h3 className="cateogry-title"> <Link to="/weddingdress">Bridal & Groom Dresses</Link> <span className="category-count">(8)</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="card-category">
                                    <div className="category-image zoomimg"><Link to="/dj"><img src="images/wedding-dj-small.jpg" alt="" /></Link></div>
                                    <div className="category-content">
                                        <h3 className="cateogry-title"><Link to="/dj">Dj</Link> <span className="category-count">(6)</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}

                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="card-category">
                                    <div className="category-image zoomimg"><Link to="/food"><img src="https://cdn.shopify.com/s/files/1/0115/1578/9369/articles/wedding-buffet-menu-ideas_512x.png?v=1571263706" alt="" /></Link></div>
                                    <div className="category-content">
                                        <h3 className="cateogry-title"> <Link to="/food">Food And Services</Link> <span className="category-count">(12)</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="card-category">
                                    <div className="category-image zoomimg"><Link to="/Makeup"><img src="https://lh3.googleusercontent.com/sMvYUcc8N9i6SFTIqU6xbzwFA8mqDQa8iazJhuu2s1VJ1xfBkv3yd-uvW-HmbKbQAgh6Yzntzg8vSbiZ=w1080-h608-p-no-v0" alt="" /></Link></div>
                                    <div className="category-content">
                                        <h3 className="cateogry-title"> <Link to="/Makeup">Make up</Link> <span className="category-count">(2)</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="card-category">
                                    <div className="category-image zoomimg"><Link to="/weddingplanner"><img src="https://asset2.zankyou.com/images/mag-post/3f0/c85f/685//-/in/wp-content/uploads/2016/11/Bharti-Siddharth-Delhi.png" alt="" /></Link></div>
                                    <div className="category-content">
                                        <h3 className="cateogry-title"><Link to="/category">Weddng Planner</Link> <span className="category-count">(3)</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="card-category">
                                    <div className="category-image zoomimg"><Link to="/jewles"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5jFqfhMDP5-vM4ERhhjH-4D_poExfLBaFfA&usqp=CAU" alt="" /></Link></div>
                                    <div className="category-content">
                                        <h3 className="cateogry-title"> <Link to="/category">Jewellery</Link> <span className="category-count">(4)</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="card-category">
                                    <div className="category-image zoomimg"><Link to="/pandit"><img src="https://media.weddingsonly.in/vendor/pandit.rajesh.mishra.delhi/Featured.jpg" style={{height:"180px"}} alt="" /></Link></div>
                                    <div className="category-content">
                                        <h3 className="cateogry-title"> <Link to="">Pandits & More</Link> <span className="category-count">(8)</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="card-category">
                                    <div className="category-image zoomimg"><Link to="/mendhi"><img src="data:image/jpeg;base64,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" alt="" /></Link></div>
                                    <div className="category-content">
                                        <h3 className="cateogry-title"><Link to="">Mehndi</Link> <span className="category-count">(6)</span></h3>
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

export default Cat1