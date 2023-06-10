import React from 'react';
import './footer.scss'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const Footer = () => {

    const year = new Date().getFullYear()
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='4' className='mb-4' md='6'>
                        <div className="logo">
                            <div>
                                <h1 className='text-white'>Book Store</h1>
                            </div>
                        </div>
                        <p className="footer_text mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Laborum, ullam reprehenderit dolorum quidem error labore, sint molestiae quasi commodi quia excepturi
                            deleniti accusamus nostrum consequuntur asperiores vero optio modi esse!
                        </p>
                    </Col>

                    <Col lg='3' md='3' className='mb-4'>
                        <div className="footer_quick-links">
                            <h4 className="quick_links-title">Top Catogories</h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Mobile Phones</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Modern Sofa</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Arm Chair</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='2' md='3' className='mb-4'>
                        <div className="footer_quick-links">
                            <h4 className="quick_links-title">Useful Links</h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='cart'>Cart</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='3' md='4'>
                        <div className="footer_quick-links">
                            <h4 className="quick_links-title">Contact</h4>
                            <ListGroup className='footer_contact'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className="ri-map-pin-line"></i></span>
                                    <p>162 Duong so 8, Linh Xuan, tp . Thu Duc</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className="ri-phone-line"></i></span>
                                    <p>+0393829761</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className="ri-mail-line"></i></span>
                                    <p>haihungdepzai@gmail.com</p>
                                </ListGroupItem>

                                {/* <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Smart Watches</Link>
                                </ListGroupItem> */}
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='12'>
                        <p className="footer_copyright" >Copyright {year} developed by University FPT. All rights reserved.</p>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
};

export default Footer;




// const Footer = () => {
//     return (
//         <footer className='footer'>
//             <Container >
//                 <Row>
//                     <Col lg='4'>
//                         <div className="logo">
//                             <img src={logo} alt='logo' />
//                             <div>
//                                 <h1>Multimart</h1>
//                             </div>
//                         </div>
//                         <p className="footer_text mb-4">
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                             Laborum, ullam reprehenderit dolorum quidem error labore, sint molestiae quasi commodi quia excepturi
//                             deleniti accusamus nostrum consequuntur asperiores vero optio modi esse!
//                         </p>

//                     </Col>

//                     <Col lg='3'>
//                         <div className="footer_quick-links">
//                             <h4 className="quick_links-title">Top Catogories</h4>
//                             <ListGroup>
//                                 <ListGroupItem className='ps-0 border-0'>
//                                     <Link to='#'>Mobile Phones</Link>
//                                 </ListGroupItem>

//                                 <ListGroupItem className='ps-0 border-0'>
//                                     <Link to='#'>Modern Sofa</Link>
//                                 </ListGroupItem>

//                                 <ListGroupItem className='ps-0 border-0'>
//                                     <Link to='#'>Arm Chair</Link>
//                                 </ListGroupItem>

//                                 <ListGroupItem className='ps-0 border-0'>
//                                     <Link to='#'>Smart Watches</Link>
//                                 </ListGroupItem>
//                             </ListGroup>
//                         </div>


//                     </Col>

//                     <Col lg='2'>
//                         <div className="footer_quick-links">
//                             <h4 className="quick_links-title">Useful Links</h4>
//                             <ListGroup>
//                                 <ListGroupItem className='ps-0 border-0'>
//                                     <Link to='/shop'>Shop</Link>
//                                 </ListGroupItem>

//                                 <ListGroupItem className='ps-0 border-0'>
//                                     <Link to='/cart'>Cart</Link>
//                                 </ListGroupItem>

//                                 <ListGroupItem className='ps-0 border-0'>
//                                     <Link to='/login'>Login</Link>
//                                 </ListGroupItem>

//                                 <ListGroupItem className='ps-0 border-0'>
//                                     <Link tp='#'>Privacy Policy</Link>
//                                 </ListGroupItem>
//                             </ListGroup>
//                         </div>
//                     </Col>

//                     <Col lg='3'>
//                         <div className="footer_quick-links">
//                             <h4 className="quick_links-title">Contact</h4>
//                             <ListGroup>
//                                 <ListGroupItem className='ps-0 border-0'>
//                                     <span><i className="ri-map-pin-line"></i></span>
//                                     <p>162 Duong so 8, Linh Xuan, tp . Thu Duc</p>
//                                 </ListGroupItem>

//                                 <ListGroupItem className='ps-0 border-0'>
//                                     <span><i className="ri-phone-line"></i></span>
//                                     <p>+0393829761</p>
//                                 </ListGroupItem>

//                                 <ListGroupItem className='ps-0 border-0'>
//                                     <span><i className="ri-mail-line"></i></span>
//                                     <p>haihungdepzai@gmail.com</p>
//                                 </ListGroupItem>

//                                 <ListGroupItem className='ps-0 border-0'>
//                                     <Link>Smart Watches</Link>
//                                 </ListGroupItem>
//                             </ListGroup>
//                         </div>
//                     </Col>

//                 </Row>
//             </Container>
//         </footer>
//     );
// };

// export default Footer;