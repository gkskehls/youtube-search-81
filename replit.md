# YouTube Search App

## Overview
A React-based YouTube video search application with the following features:
- Video search functionality
- Popular videos display
- Video details view
- Favorites functionality
- Dark/Light theme toggle
- Firebase integration for storage

## Tech Stack
- React 18
- Vite (build tool)
- React Router v6
- Tailwind CSS v4
- Firebase

## Project Structure
```
src/
  components/    # Reusable UI components
  context/       # React contexts (Theme, Storage)
  pages/         # Page components (Home, SearchResults, VideoDetail, Favorites)
  services/      # API services (youtube.js, firebase.js)
public/          # Static assets
```

## Running the App
The app runs on port 5000 via Vite dev server:
```bash
npm run dev
```

## Configuration
- **YouTube API Key**: Currently hardcoded in `src/services/youtube.js`. To use the app, you'll need a valid YouTube Data API v3 key with proper referer restrictions configured in Google Cloud Console.
- **Firebase**: Configuration is in `src/services/firebase.js`

## Known Issues
- The YouTube API key may require referer restrictions to be updated in Google Cloud Console to allow requests from the Replit domain.
