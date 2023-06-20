# noon forecast

This repository contains a simple weather app built using React Native. The app retrieves weather data from a free weather API and displays it to the user. It was developed as a challenge for an interview with noon.com.

## Challenge Description

The challenge was to build a weather app using a free weather API. The API used for this project is [Open-Meteo](https://open-meteo.com). The candidate had the freedom to choose the platform (iOS or Android) based on their development workstation's operating system (Windows/Linux or macOS). The UI and scope of the project were left for the candidate to decide.

## Features

- Fetches weather data from the Open-Meteo API.
- Displays current weather information such as temperature, weather condition, humidity, wind speed, etc.
- Supports viewing weather data for different locations.
- Provides a user-friendly interface to navigate and interact with the app.
- Works on one platform iOS or Android.

## Installation

To run this weather app locally, follow these steps:

1. Make sure you have Node.js and yarn installed on your machine.
2. Clone this repository to your local machine.
   ```
   git clone https://github.com/mayyas-nakhli/noon-forecast.git
   ```
3. Navigate to the project directory.
   ```
   cd noon-forecast
   ```
4. Install the required dependencies.
   ```
   yarn i
   ```
5. Start the Metro server.
   ```
   yarn android
   ```

Make sure you have a suitable development environment set up for the chosen platform (iOS or Android).

## Project Structure

The project structure is as follows:

- `/src`: Contains the source code of the React Native app.
  - `/components`: Contains reusable UI components.
  - `/screens`: Contains different app screens/components.
  - `/utils`: Contains utility functions.
  - `/data`: Contains constants.
  - `/schemas`: Contains Zod schemas.
  - `/types`: Contains types and interfaces.
  - `/App.js`: The entry point of the app.
- `/assets`: Contains static assets like images and fonts.
- `package.json`: Defines project metadata and dependencies.

## Dependencies

The main dependencies used in this project are:

- [React Native](https://reactnative.dev): A JavaScript framework for building native mobile apps.
- [Axios](https://axios-http.com): A popular HTTP client for making API requests.
- [Zod](https://zod.dev/): TypeScript-first schema validation with static type inference.
- [TanStack Query](https://tanstack.com/query/latest/): Powerful asynchronous state management for TS/JS, React, Solid, Vue and Svelte

Please refer to the `package.json` file for a complete list of dependencies and their versions.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per your needs.

## Acknowledgments

- The team at noon.com for providing this coding challenge opportunity.
