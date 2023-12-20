import React from 'react';
import './homepage.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import apple from '../images/applenewslogo.jpg';
import tech from '../images/technewslogo.jpeg';
import tesla from '../images/teslalogo.jpg';
import business from '../images/businessnewslogo.jpg';

const HomePage = () => {
  return (
    <div className="container mt-4 mx-auto text-center">
      <h1>Welcome to our News Aggregator!</h1>
      <div className="row">
        <div className="col-md-3  mb-4">
          <Card style={{ width: '18rem' }} className='mx-auto'>
            <Card.Img variant="top" src={tesla} alt="Tesla News" />
            <Card.Body>
              <Card.Title>Tesla News</Card.Title>
              <Card.Text>Exciting news about Tesla!</Card.Text>
              <Link to="/tesla-news" className="btn btn-primary">
                View News
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-4">
          <Card style={{ width: '18rem' }} className='mx-auto'> 
            <Card.Img variant="top" src={apple} alt="Tesla News" />
            <Card.Body>
              <Card.Title>Apple News</Card.Title>
              <Card.Text>Discover the latest news about Apple products.</Card.Text>
              <Link to="/apple-news" className="btn btn-primary">
                View News
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-4">
          <Card style={{ width: '18rem' }} className='mx-auto'>
            <Card.Img variant="top" src={tech} alt="Tesla News" /> 
            <Card.Body>
              <Card.Title>Tech News</Card.Title>
              <Card.Text>Stay updated with the latest in technology!</Card.Text>
              <Link to="/tech-news" className="btn btn-primary">
                View News
              </Link>
            </Card.Body>
            
          </Card>
        </div>
        <div className="col-md-3 mb-4">
          <Card style={{ width: '18rem' }} className='mx-auto'>
            <Card.Img variant="top" src={business} alt="Tesla News" />
            <Card.Body>
              <Card.Title>Business News</Card.Title>
              <Card.Text>Insights into the world of business and finance.</Card.Text>
              <Link to="/business-news" className="btn btn-primary">
                View News
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
