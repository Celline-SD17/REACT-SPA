# Personal Project Showcase App
## Overview
- This is a React Single Page Application (SPA) that allows users to search and view completed projects, and add new projects dynamically.
## Setup Instructions
1. Clone my github repository [Github repository]-([https://github.com/Celline-SD17/REACT-SPA.git])
- Navigate to the project's directory.
2. Install necessary dependencies:
- npm install
3. Run the development server.
- npm run dev
4. Open the url provided in a browser.
## Project Structure
 src
├── components
│  ├── SearchBar.jsx
│ ├── ProjectForm.jsx
│ ├── ProjectList.jsx
│ └── ProjectCard.jsx
├── App.jsx
└── main.jsx
 public

└── projects.json
## Features
- Displaying completed projects: it displays a list of projects loaded from a local JSON file.
- Search Functionality- users can search for projects using their title in real time.
- Project Form- Allows users to add new projects dynamically without refreshing the page.
- Dynamic Updates- Newly added projects appear instantly in the project list.
- Data Fetching- Initial project data is fetched using the Fetch API and useEffect.
- Component-Based Architecture- Each project area is buily separately using reusable React components.
- Responsive Design- Layout adapts to different screen sizes.
## Known Limitations
- No Persistent Storage: Newly added projects are not saved permanently. Refreshing the page resets data to the original JSON file.
- No delete Functionality- Users can add projects but cannot modify or remove them.
## Technologies Used
- React (Vite)
- JavaScript
- CSS
## License
- This project is for educational purposes.