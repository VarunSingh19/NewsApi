import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loaderGif from '../News/loadergif.gif';

const BusinessNewsComponent = () => {
  const [businessNews, setBusinessNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(7); // Number of news articles per page
  const apiKey = 'b5167e7ee263477ba06cade383fde7e6';

  const [imageLoading, setImageLoading] = useState([]);

  const handleImageLoad = (index) => {
    // Set the loading state for the image at the given index to false
    const updatedImageLoading = [...imageLoading];
    updatedImageLoading[index] = false;
    setImageLoading(updatedImageLoading);
  };

  const handleImageError = (index) => {
    // Handle image load error by setting the loading state to false
    const updatedImageLoading = [...imageLoading];
    updatedImageLoading[index] = false;
    setImageLoading(updatedImageLoading);
  };


  useEffect(() => {
    const fetchBusinessNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
        );

        setBusinessNews(response.data.articles);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching business news:', error);
      }
    };

    fetchBusinessNews();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(businessNews.length / newsPerPage);

  const getVisiblePageNumbers = () => {
    const visiblePageNumbers = [];
    const totalPagesToShow = Math.min(totalPages, 5);
    let startPage = currentPage - Math.floor(totalPagesToShow / 2);
    startPage = Math.max(startPage, 1);
    const endPage = startPage + totalPagesToShow - 1;

    for (let i = startPage; i <= endPage; i++) {
      visiblePageNumbers.push(i);
    }

    return visiblePageNumbers;
  };

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-center">Business Related News</h2>
      {loading ? (
        <img src={loaderGif} alt="Loading..." />
      ) : (
        <div>
          <div className="row">
            {businessNews
              .slice((currentPage - 1) * newsPerPage, currentPage * newsPerPage)
              .map((newsItem, index) => (
                <div key={newsItem.title} className="col-md-4 mb-4">
                  <Card>
                    {newsItem.urlToImage && (
                      <Card.Img
                        variant="top"
                        src={newsItem.urlToImage}
                        alt={newsItem.title}
                        style={{ height: '200px', objectFit: 'cover' }}
                        onLoad={() => handleImageLoad(index)}
                        onError={() => handleImageError(index)}
                      />
                    )}
                    {!newsItem.urlToImage && (
                      <img
                        src={loaderGif}
                        alt="Loading..."
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                    )}
                    <Card.Body>
                      <Card.Title
                        className="mb-2"
                        style={{
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          WebkitLineClamp: 1,
                        }}
                      >
                        {newsItem.title}
                      </Card.Title>
                      <Card.Text
                        style={{
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          WebkitLineClamp: 3,
                        }}
                      >
                        {newsItem.description}
                      </Card.Text>
                      <Button
                        variant="primary"
                        as={Link}
                        to={newsItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read more
                      </Button>
                    </Card.Body>
                    <p style={{ color: 'gray' }}>Article by <b>@{newsItem.author}</b></p>
                    <p style={{color:'gray'}}>Published At : <b>{ newsItem.publishedAt}</b></p>
                 
                  </Card>
                </div>
              ))}
          </div>
          <Pagination className="justify-content-center">
            <Pagination.Prev onClick={prevPage} />
            {getVisiblePageNumbers().map((number) => (
              <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => paginate(number)}
              >
                {number}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={nextPage} />
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default BusinessNewsComponent;
