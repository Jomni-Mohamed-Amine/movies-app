import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router"; // Correct import


const Moviecard = ({ movies }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{movies.title}</Card.Title>
          <Card.Text>
            {movies.actors.map((actor, index) => (
              <h4 key={index}>{actor}</h4> // Added key prop
            ))}
          </Card.Text>
          <Card.Text>{movies.genre}</Card.Text>
          
          <Button variant="primary" onClick={()=>navigate(`/${movies.id}`)}>
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Moviecard;
