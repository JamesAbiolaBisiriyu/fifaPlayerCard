// Import react-bootstrap components for layout (Container, Row, Col)
// Import Player component to render individual player cards
// Import players array from players.js - contains all player data
import { Container, Row, Col } from "react-bootstrap";
import Player from "./Player";
import { players } from "./players";

// PlayersList component - main component that maps and displays all player cards in a grid
const PlayersList = () => {
  // Inline styling for container layout - padding for top and bottom spacing
  const containerStyle = {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  };

  // Inline styling for main heading
  const headingStyle = {
    textAlign: "center",
    marginBottom: "2rem",
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#1f3744",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Container style={containerStyle}>
      <h1 style={headingStyle}>⚽ FIFA Player Cards</h1>
      {/* Using .map() to iterate through players array and render a Player component for each */}
      {/* Using spread operator (...player) to pass all player properties as individual props */}
      <Row>
        {players.map((player, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
