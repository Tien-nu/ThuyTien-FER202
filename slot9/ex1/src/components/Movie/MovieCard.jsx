import React from "react";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import { movies } from "../../data/movie";

export default function MovieCard() {
  // Nếu mảng rỗng thì không render
  if (!Array.isArray(movies) || movies.length === 0) return null;

  return (
    <Row xs={1} md={2} lg={3} className="g-4 my-4">
      {movies.map((m) => (
        <Col className="d-flex justify-content-center" key={m.id}>
          <Card style={{ width: "25rem" }}>
            <Card.Img
              variant="top"
              src={m.poster}
              alt={m.title}
              style={{
                objectFit: "cover",
                height: "400px"
              }}
            />

            <Card.Body>
              <Card.Title>
                {m.title}{" "}
                <Badge bg="info" className="text-dark">
                  {m.genre}
                </Badge>
              </Card.Title>

              <Card.Text className="text-muted small">
                {m.description.length > 80
                  ? m.description.slice(0, 80) + "..."
                  : m.description}
              </Card.Text>

              <div className="d-flex justify-content-center">
                <small className="text-secondary">
                  {m.year} • {m.country} • {m.duration}m
                </small>
              </div>

              <div className="d-flex justify-content-center mt-3">
                <Button variant="success" size="sm" className="me-2">
                  Add to Favourites
                </Button>
                <Button variant="primary" size="sm">
                  View Details
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
