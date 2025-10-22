import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

export default function MovieCard({ img, title, text, genre }) {
  const [showDetail, setShowDetail] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  const handleAddFavourite = () => {
    setIsFavourite(true);

    alert(`"${title}" added to favourites`);
  };

  return (
    <>
      <Card style={{ width: "20rem", height: "100%" }} className="d-flex flex-column">
        <Card.Img
          variant="top"
          src={img}
          alt={title}
          style={{
            height: "400px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text.substring(0, 80)}...</Card.Text>
            <div>
              <strong>Genre:</strong> {genre}
            </div>
          </div>

          <div className="d-flex justify-content-center gap-2 mt-3">
            <Button variant="primary" onClick={() => setShowDetail(true)}>
              Details
            </Button>
            <Button
              variant={isFavourite ? "success" : "outline-warning"}
              size="sm"
              onClick={handleAddFavourite}
            >
              {isFavourite ? "Added ❤️" : "Add to Favourite"}
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Modal hiển thị chi tiết */}
      <Modal show={showDetail} onHide={() => setShowDetail(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={img}
            alt={title}
            className="img-fluid rounded mb-3"
            style={{ height: "300px", objectFit: "cover" }}
          />
          <p><strong>Description:</strong> {text}</p>
          <p><strong>Genre:</strong> {genre}</p>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDetail(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
