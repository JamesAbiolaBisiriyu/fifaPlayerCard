// Import React for state management and Card component from react-bootstrap for styling
import React from "react";
import { Card } from "react-bootstrap";

// Player component - displays individual player card with all player details
// Props are destructured with default values to handle missing data
const Player = ({
  name = "Unknown Player",
  team = "Unknown Team",
  nationality = "Unknown",
  jerseyNumber = "N/A",
  age = "N/A",
  image = "https://via.placeholder.com/300x400?text=Player+Photo",
}) => {
  // State to handle image loading and fallback to placeholder if image fails to load
  const [imageSrc, setImageSrc] = React.useState(image);

  // Error handler that displays placeholder image if the actual image fails to load
  const handleImageError = () => {
    setImageSrc("https://via.placeholder.com/300x400?text=Player+Photo");
  };
  // Inline styling for the card component - rounded corners, shadow, and hover effects
  const cardStyle = {
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    height: "100%",
  };

  // Inline styling for player image - fixed height and proper fit
  const imageStyle = {
    height: "250px",
    objectFit: "cover",
    borderRadius: "12px 12px 0 0",
  };

  // Inline styling for player details text
  const textStyle = {
    fontSize: "0.95rem",
    marginBottom: "0.5rem",
    color: "#333",
  };

  // Inline styling for player name - larger and bold
  const nameStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#1f3744",
    marginBottom: "0.5rem",
  };

  // Inline styling for jersey number badge - circular design
  const badgeStyle = {
    display: "inline-block",
    backgroundColor: "#007bff",
    color: "white",
    padding: "0.5rem 0.75rem",
    borderRadius: "50%",
    fontSize: "0.9rem",
    fontWeight: "bold",
    marginRight: "0.5rem",
  };

  // Render player card using react-bootstrap Card component
  // Image includes error handler for failed loads
  return (
    <Card style={cardStyle} className="player-card">
      <Card.Img
        variant="top"
        src={imageSrc}
        onError={handleImageError}
        style={imageStyle}
        alt={name}
      />
      <Card.Body>
        <Card.Title style={nameStyle}>{name}</Card.Title>
        <Card.Text style={textStyle}>
          <strong>Team:</strong> {team}
        </Card.Text>
        <Card.Text style={textStyle}>
          <strong>Nationality:</strong> {nationality}
        </Card.Text>
        <Card.Text style={textStyle}>
          <strong>Age:</strong> {age}
        </Card.Text>
        <div style={{ display: "flex", alignItems: "center" }}>
          <strong style={{ marginRight: "0.5rem" }}>Jersey #:</strong>
          <div style={badgeStyle}>{jerseyNumber}</div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Player;
