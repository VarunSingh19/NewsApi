import React, { useEffect, useState } from 'react';
import axios from 'axios';
import loaderGif from '../News/loadergif.gif';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TeslaNewsComponent = () => {
  const [teslaNews, setTeslaNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = 'b5167e7ee263477ba06cade383fde7e6';

  useEffect(() => {
    const fetchTeslaNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=tesla&from=2023-11-20&sortBy=publishedAt&apiKey=${apiKey}`
        );

        setTeslaNews(response.data.articles);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching Tesla news:', error);
      }
    };

    fetchTeslaNews();
  }, []);

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

  return (
    <div>
      <h2 className="mb-4 test-center">Tesla Related News</h2>
      {loading ? (
        <img src={loaderGif} alt="Loading..." />
      ) : (
        <div className="row">
          {teslaNews.map((newsItem, index) => (
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
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeslaNewsComponent;
