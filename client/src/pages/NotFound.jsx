import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="text-center py-5">
      <h1 className="display-1 fw-bold">404</h1>
      <p className="fs-3">Page Not Found</p>
      <p className="lead">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </Container>
  );
};

export default NotFound;
