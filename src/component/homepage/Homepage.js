import React from 'react';
import './homepage.css'
import { Card } from 'react-bootstrap'
import apple from '../images/applenewslogo.jpg'
import tech from '../images/technewslogo.jpeg'
import  tesla from '../images/teslalogo.jpg'
import business from '../images/businessnewslogo.jpg'
import { Link, Route } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container mt-4 text-center">
            <div className="row">
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tesla} alt="Tesla News" />
                        <Card.Body>
                            <Card.Title>Tesla News</Card.Title>
                            <Card.Text>
                                Exciting news about Tesla!
                            </Card.Text>
                            {/* <button className='btn btn-primary'>View News</button> */}
                            <Link to="/tesla-news" className='btn btn-primary'>View News</Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={apple} alt="Tesla News" />
                        <Card.Body>
                            <Card.Title>Apple News</Card.Title>
                            <Card.Text>
                            Discover the latest news about Apple products.
                            </Card.Text>
                            {/* <button className='btn btn-primary'>View News</button> */}
                            <Link to="/apple-news" className='btn btn-primary'>View News</Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={tech} alt="Tesla News" />
                        <Card.Body>
                            <Card.Title>Tech News</Card.Title>
                            <Card.Text>
                            Stay updated with the latest in technology!
                            </Card.Text>
                            {/* <button className='btn btn-primary'>View News</button> */}
                            <Link to="/tech-news" className='btn btn-primary'>View News</Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={business} alt="Tesla News" />
                        <Card.Body>
                            <Card.Title>Business News</Card.Title>
                            <Card.Text>
                            Insights into the world of business and finance.
                            </Card.Text>
                            {/* <button className='btn btn-primary'>View News</button> */}
                            <Link to="/business-news" className='btn btn-primary'>View News</Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
