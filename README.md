# FortyGuard Heatmap Explorer

## Live Demo

[View the FortyGuard Heatmap Explorer](https://fortyguard-heatmap-explorer.vercel.app)

An interactive web application that visualizes temperature data retrieved from the FortyGuard Temperature API on a geographic map.

Built as part of a product evaluation for the **FortyGuard Software Development Internship – January 2027**.

## Project Overview

FortyGuard Heatmap Explorer demonstrates how developers can transform geospatial temperature data into an interactive and accessible visualization.

The application displays temperature measurements across a selected area of Lower Manhattan, New York City, using a heatmap generated from a successful FortyGuard API request.

The goal is to help users understand spatial temperature variations and identify relatively warmer and cooler areas.

## Features

- **Interactive Map:** Explore the temperature heatmap using zoom and pan controls.
- **Color-Coded Temperature Visualization:** Different colors represent different temperature ranges.
- **Temperature Legend:** Understand how colors correspond to temperature values.
- **Temperature Statistics:** View the minimum, average, and maximum temperatures.
- **Responsive Layout:** The interface adapts to desktop and mobile screen sizes.
- **Geospatial Data Visualization:** Display geographic features returned by the FortyGuard API.

## Technologies Used

- React
- JavaScript
- Vite
- Leaflet
- React Leaflet
- CSS
- GeoJSON
- FortyGuard Temperature API

## Data Source

The application uses real temperature data obtained from the **FortyGuard Temperature API** during product evaluation.

The API returned geospatial data in GeoJSON format, including temperature measurements associated with geographic features.

The response was saved locally as:

`public/heatmap_result.json`

**Important:** This application currently displays a previously retrieved API response. It does not make live API requests when users open the website.

This approach allows the demonstration to run without exposing an API key or consuming additional API credits.

## Temperature Summary

The tested geographic area produced the following temperature statistics:

| Metric | Temperature |
|---|---|
| Minimum | 31.89°C |
| Average | 32.26°C |
| Maximum | 33.14°C |

These values represent the dataset used in this demonstration, not current weather conditions.

## Getting Started

### Prerequisites

Install Node.js and npm.

### Installation

Clone the repository:

```bash
git clone https://github.com/Drsara82/fortyguard-heatmap-explorer.git
```

Navigate to the project folder:

```bash
cd fortyguard-heatmap-explorer
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local address displayed in the terminal, usually:

`http://localhost:5173`

## How to Use

1. Open the application in your browser.
2. Review the minimum, average, and maximum temperature values.
3. Use the temperature legend to interpret the heatmap colors.
4. Zoom in or out to explore the geographic area.
5. Pan across the map to examine the spatial distribution of temperatures.

## API Integration Process

During development, I tested the FortyGuard Temperature API using Python and the `requests` library.

The integration process included:

1. Sending an authenticated API request.
2. Handling an unsuccessful request outside the supported coverage area.
3. Submitting a heatmap request for a supported area.
4. Polling the API until processing completed.
5. Receiving a successful response containing GeoJSON data.
6. Saving the response and visualizing it using React Leaflet.

The successful response returned HTTP status code `200` and a completed processing status.

API credentials are not included in this repository.

## Current Limitations

- The heatmap uses a saved API response rather than live data.
- The demonstrated dataset covers a specific area of Lower Manhattan.
- Users cannot currently request a different city or date from within the application.
- The application is intended as a functional prototype, not a production-ready weather service.

## Potential Future Improvements

- Add city and location search.
- Allow users to select dates and times.
- Integrate a secure backend for live API requests.
- Add interactive temperature details when selecting map features.
- Support comparisons between multiple locations.
- Improve accessibility and map interaction.

## Purpose of the Project

This project was developed to evaluate the developer experience of FortyGuard's Temperature API and demonstrate a practical use case for its geospatial temperature data.

It forms part of a broader evaluation covering:

- FortyGuard Temperature Dashboard
- FortyGuard Temperature API
- FortyGuard Temperature MCP

## Author

**Sara Hussein**

Software Development Internship Applicant – January 2027

## Acknowledgment

Temperature data was provided by the FortyGuard Temperature API. Map tiles are provided through OpenStreetMap-based mapping services.