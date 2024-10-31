# Getting Started

___

### Technical Interview at Handelsbanken

To get started, clone this repository and run the following commands:
**BE AWARE:** in local dev the SSL and certificated can fail, so users current location might be unavailable.

```bash
git clone https://github.com/Stianlars1/weather_app_v1
cd weather_app_v1
npm install
npm run dev
```

### Weather App - Things to be aware of

- API key is included in the project
- Because the navigator API needs a secure context, the users current location wont work in specific browsers. From my
  understanding, `Safari`will work, but not `Google Chrome` due to https not working properly in development mode.
  I've used the FREE API from [OpenWeatherMap](https://openweathermap.org/api) to get the weather data.
  You can get your own API key by signing up on their website.
- I will try to publish this app on Vercel, so you can see the live version of the app. And hopefully no issues will
  occur.
- The app is built with `React` and `Vite` as the bundler. I've used `TypeScript` for the project.
- The app is responsive and should work on all devices.
- The app is using custom built CSS modules generated from SCSS files.

### technical

- The app uses **Tanstack Query** for **data fetching**
    - [x] Great cache management
    - [x] Easy to use
    - [x] Great documentation
    - [x] State (success, error, pending / loading) out of the box

- The app uses React Router for routing
    - [x] Easy to use
    - [x] Great documentation
    - [x] Works well with React
    - [x] Great for single page applications

### functionality

- The app uses the navigator API to get the users current location
- The app uses the OpenWeatherMap API to get the weather data
- The app uses the users current location to get the weather data

### design

- The app is designed with a minimalistic approach
- The app is responsive and should work on all devices
- The app uses custom built CSS modules generated from SCSS files

### Testing

- To be frank, my experience with testing on the frontend is limited. I've used `vitest` _(some dependecies to jest)_
  and `React Testing Library` for testing. I've written a few tests for the app, but not as much as I would like to.
  I've tested the `App` component and the `Weather` component. I've also tested the `useWeather` hook. I've used `Jest`
  for testing the functions and `React Testing Library` for testing the components.
- Time limitations stopped me from having more tests available.

### Problems along the way

the data fetching and the useWeather hook took some time to get right because i started out with YR, but they wouldnt
allow API calls from localhost, so i decided to switch to OpenWeatherMap. The navigator API was also a bit tricky to get
right cause of browser issues in local dev mode, but i managed to get it working.

### Reflections

i definetly would have solves stuff in different ways now that im done:

- data fetching
    - i could easily have just mocked the response from the API instead of using the API itself.
- instead of fidling with the navigator API, i could have used the users IP to get the location ( _at least i think
  so_ ).
- i didnt have to spend so much time designing up stuff, but i wanted to make it look good. (Im no designer, but i love
  dealing with CSS)
- i could have written more tests, but i didnt have the time to do so, nor did i have the experience..

### Addons?

- search input - for seraching for a place
- more weather data - like wind speed, humidity, etc.
- more tests - for the components and the functions
- more error handling - for the data fetching and the navigator API
- more design - for the app, like animations and stuff
- more functionality - like a 5 day forecast or something
- show the users latest searches or earlier current locations.

### Time used

- the app layout and stuff were done pretty quickly.
- the data fetching and the useWeather hook took some time to get right.
- the navigator API was also a bit tricky to get right.

## Refleksjon:

- få ssl til å funke i lokalt-dev modus
- Would clean up the LocationList component. I usually go for code-splitting. but this file currently have both of clean
  and messy code.
    - LocationList
    - useCurrentLocation
 
- Ville vanligvis lagd egne brancher for features. Men for å holde oversikten for dere enklere pushet jeg rett på main.

