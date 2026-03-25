https://fifa-player-card.vercel.app/
# ⚽ FIFA Player Cards

A modern React application that displays FIFA player cards in an interactive, responsive grid layout. Built with React, Vite, and React Bootstrap to showcase professional football players with their detailed information.

---

## 📋 Table of Contents

- [Features](#features)
- [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Components Documentation](#components-documentation)
- [File Descriptions](#file-descriptions)
- [How It Works](#how-it-works)
- [Code Highlights](#code-highlights)
- [Future Enhancements](#future-enhancements)

---

## ✨ Features

- **Dynamic Player Display**: Displays 5 professional FIFA players with complete details
- **Responsive Grid Layout**: Cards adapt to different screen sizes (mobile, tablet, desktop)
- **Redux-Style Prop Management**: Uses spread operator for clean prop passing
- **Error Handling**: Fallback placeholder images if player images fail to load
- **Professional Styling**: React Bootstrap cards with customizable inline CSS
- **State Management**: Uses React hooks (useState) for image loading states
- **Default Props**: All player attributes have sensible defaults
- **Modern UI**: Hover effects, shadows, and smooth transitions
- **Clean Code**: Well-commented and easy to understand

---

## 🚀 Technologies Used

| Technology            | Purpose                                                   |
| --------------------- | --------------------------------------------------------- |
| **React**             | Frontend JavaScript library for building UI components    |
| **Vite**              | Lightning-fast build tool and dev server                  |
| **React Bootstrap**   | Pre-built Bootstrap components for React                  |
| **Bootstrap 5**       | CSS framework for responsive design                       |
| **JavaScript (ES6+)** | Modern JavaScript with destructuring and spread operators |
| **CSS3**              | Inline styling for component customization                |

---

## 📁 Project Structure

```
fifa-player-cards/
├── src/
│   ├── App.jsx                 # Root component that renders PlayersList
│   ├── App.css                 # Global application styles
│   ├── Player.jsx              # Individual player card component
│   ├── PlayersList.jsx         # Container component that maps and displays all players
│   ├── players.js              # Player data array with 5 FIFA players
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global CSS styles
├── public/                     # Static assets directory
├── package.json                # Project dependencies and scripts
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint rules configuration
├── index.html                  # HTML template
└── README.md                   # This file
```

---

## ⚙️ Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. **Clone or navigate to the project directory:**

   ```bash
   cd fifa-player-cards
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   This will install all required packages including React, React Bootstrap, and Bootstrap.

3. **Verify installation:**
   ```bash
   npm list react react-bootstrap bootstrap
   ```

---

## 🎯 Running the Project

### Development Mode (with Hot Module Replacement)

```bash
npm run dev
```

- Opens at `http://localhost:5173/`
- Changes reflect instantly in the browser
- Great for development and testing

### Build for Production

```bash
npm run build
```

- Creates optimized production-ready files in the `dist/` folder
- Minified and tree-shaken for better performance

### Preview Production Build

```bash
npm run preview
```

- Previews the production build locally
- Useful for testing before deployment

### Lint Code

```bash
npm run lint
```

- Checks code for style issues using ESLint
- Helps maintain code quality and consistency

---

## 🏗️ Components Documentation

### 1. **App.jsx** (Root Component)

- **Purpose**: Main entry point of the application
- **Imports**: `PlayersList` component and global styles
- **Renders**: `<PlayersList />` component
- **Role**: Serves as the top-level container for the entire app

```jsx
function App() {
  return <PlayersList />;
}
```

### 2. **PlayersList.jsx** (Container Component)

- **Purpose**: Manages the layout and displays all player cards in a responsive grid
- **Key Features**:
  - Imports and maps through the `players` array
  - Uses `.map()` function to iterate over player data
  - Implements responsive layout with React Bootstrap (`Container`, `Row`, `Col`)
  - Passes player data to `Player` component using spread operator `{...player}`
- **Responsive Breakpoints**:
  - `md={6}`: 2 columns on medium screens (tablets)
  - `lg={4}`: 3 columns on large screens (desktops)
  - Single column on small screens (mobile)

- **Styling**:
  - Custom heading with footer emoji and text-shadow
  - Container padding for spacing
  - Responsive grid gaps

### 3. **Player.jsx** (Presentational Component)

- **Purpose**: Renders an individual player card with all player details
- **Props** (with Destructuring and Default Values):
  - `name` - Player's full name (default: "Unknown Player")
  - `team` - Current team (default: "Unknown Team")
  - `nationality` - Player's country (default: "Unknown")
  - `jerseyNumber` - Shirt number (default: "N/A")
  - `age` - Player's age (default: "N/A")
  - `image` - Player's photo URL (default: placeholder image)

- **State Management**:
  - Uses `useState` to manage image source
  - Handles image loading errors gracefully
  - Falls back to placeholder on failed load

- **Inline Styling**:
  - Card styles with rounded corners and shadow effects
  - Image container styling with fixed height
  - Typography styling for different text elements
  - Jersey number badge with circular design

- **Bootstrap Component**: Uses `<Card>` from react-bootstrap for consistent styling

### 4. **players.js** (Data/State File)

- **Purpose**: Central data store for all player information
- **Structure**: Exports array of player objects
- **Player Object Schema**:
  ```javascript
  {
    name: String,
    team: String,
    nationality: String,
    jerseyNumber: Number,
    age: Number,
    image: String (URL)
  }
  ```
- **Contains**: 5 professional FIFA players with real image URLs

---

## 📄 File Descriptions

### Source Files

| File              | Type      | Description                                            |
| ----------------- | --------- | ------------------------------------------------------ |
| `App.jsx`         | Component | Root component and entry point                         |
| `Player.jsx`      | Component | Individual player card with error handling and styling |
| `PlayersList.jsx` | Component | Maps through players and renders grid layout           |
| `players.js`      | Data      | Array of player objects with sport details             |
| `main.jsx`        | Script    | React DOM render and app initialization                |
| `index.html`      | HTML      | Page template and app mount point                      |
| `App.css`         | Styles    | Application-level CSS (customizable)                   |
| `index.css`       | Styles    | Global styles and resets                               |

### Configuration Files

| File               | Purpose                                     |
| ------------------ | ------------------------------------------- |
| `package.json`     | Dependencies, scripts, and project metadata |
| `vite.config.js`   | Vite build tool configuration               |
| `eslint.config.js` | Code linting rules                          |

---

## 🔄 How It Works

### Data Flow

```
App.jsx (Root)
    ↓
PlayersList.jsx (Container)
    ├─ Imports players array from players.js
    ├─ Maps through each player
    └─ Renders Player component for each
        ↓
    Player.jsx (Card)
        ├─ Receives player props via spread operator
        ├─ Displays player details with styling
        ├─ Handles image loading with error fallback
        └─ Renders React Bootstrap Card
```

### Component Lifecycle

1. **App loads** → `App.jsx` renders
2. **App renders** → `PlayersList.jsx` is mounted
3. **PlayersList mounts** → Imports player data and maps through array
4. **For each player** → `Player.jsx` receives props
5. **Each Player card** → Renders with image, details, and styling
6. **Image loads** → If succeeds, displays; if fails, shows placeholder

---

## 💡 Code Highlights

### 1. **Destructuring with Default Props**

```javascript
const Player = ({
  name = "Unknown Player",
  team = "Unknown Team",
  nationality = "Unknown",
  jerseyNumber = "N/A",
  age = "N/A",
  image = "https://via.placeholder.com/300x400?text=Player+Photo",
}) => {
```

- Makes code more readable
- Handles missing data gracefully

### 2. **Spread Operator for Props**

```javascript
{
  players.map((player, index) => (
    <Col key={index} md={6} lg={4} className="mb-4">
      <Player {...player} />
    </Col>
  ));
}
```

- Passes all player properties without manual listing
- Cleaner and more maintainable code

### 3. **Array Mapping**

```javascript
players.map((player, index) => (
  <Col key={index} ...>
```

- Iterates through array dynamically
- Each item gets unique key for React reconciliation

### 4. **Error Handling with State**

```javascript
const [imageSrc, setImageSrc] = React.useState(image);

const handleImageError = () => {
  setImageSrc("https://via.placeholder.com/300x400?text=Player+Photo");
};
```

- Graceful fallback if image URL fails
- Maintains good user experience

### 5. **Inline Styling**

```javascript
const cardStyle = {
  borderRadius: "12px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "pointer",
  height: "100%",
};
```

- Component-scoped styling
- No CSS file conflicts
- Easy to customize per component

### 6. **Responsive Grid Layout**

```jsx
<Container style={containerStyle}>
  <Row>
    {players.map((player, index) => (
      <Col key={index} md={6} lg={4} className="mb-4">
```

- `md={6}`: 2 columns on tablets
- `lg={4}`: 3 columns on desktops
- Bootstrap's responsive system handles mobile

---

## 🎨 Styling Details

### Colors Used

- **Primary Blue**: `#007bff` (Jersey badge)
- **Dark Blue**: `#1f3744` (Headings and titles)
- **Gray**: `#333` (Body text)
- **Light Gray**: `rgba(0, 0, 0, 0.1)` (Shadows and text-shadow)

### Typography

- **Heading**: 2.5rem, bold, with text-shadow
- **Player Name**: 1.25rem, bold, dark blue
- **Card Text**: 0.95rem, normal weight, gray

### Effects

- **Card Shadow**: `0 4px 8px rgba(0, 0, 0, 0.2)`
- **Hover Transition**: 0.3s smooth transform and shadow
- **Image Border Radius**: 12px (rounded corners)
- **Jersey Badge**: Circular design with inline-block

---

## 🚀 Future Enhancements

Potential improvements for this project:

1. **Search/Filter** - Add search functionality to filter players by name
2. **Sorting** - Sort players by age, team, nationality, or jersey number
3. **Pagination** - Display players with pagination controls
4. **Favorites** - Allow users to mark favorite players (with localStorage)
5. **Modal Detail View** - Click card to see full player stats in a modal
6. **International Flags** - Display country flags alongside nationality
7. **Performance Stats** - Add player statistics (goals, assists, matches)
8. **Admin Panel** - Add ability to add/edit/delete players
9. **Dark Mode** - Toggle between light and dark themes
10. **API Integration** - Fetch player data from a real sports API
11. **Player Comparison** - Compare stats between two players
12. **Animations** - Add entry animations when cards load

---

## 📝 Learning Outcomes

This project demonstrates:

- ✅ **React Fundamentals**: Components, props, state, and hooks
- ✅ **Component Composition**: Breaking UI into reusable components
- ✅ **Destructuring**: ES6 destructuring for cleaner code
- ✅ **Array Methods**: Using `.map()` for dynamic rendering
- ✅ **Spread Operator**: Passing props efficiently
- ✅ **Inline Styling**: CSS-in-JS approach for component styles
- ✅ **Error Handling**: Gracefully handling failed image loads
- ✅ **Responsive Design**: Mobile-first approach with Bootstrap
- ✅ **Default Props**: Providing sensible defaults
- ✅ **React Bootstrap**: Using pre-built styled components

---

## 📞 Support & Contribution

For questions or improvements, feel free to:

- Review the code comments for detailed explanations
- Reference React documentation: [react.dev](https://react.dev)
- Check out Bootstrap docs: [getbootstrap.com](https://getbootstrap.com)
- Explore components individually and modify as needed

---

## 📄 License

This project is created for educational purposes.

---

**Created on**: March 25, 2026  
**Last Updated**: March 25, 2026  
**Version**: 1.0.0
