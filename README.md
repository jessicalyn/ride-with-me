# Ride With Me

Ride With Me is live on Heroku: https://ride-with-me-fe.herokuapp.com/

Wireframe Link: https://docs.google.com/presentation/d/1W3fXfZMwBxfFtAGYkvNURCo6KWHYg57moM7XoHlfgY0/edit?usp=sharing

## Overview:

Ride With Me is a carpooling application that connects drivers with passengers in need of a ride for a long distance trip. It allows drivers to have a more affordable ride by charging for available seats in the car, and it allows passengers to pay an affordable fee for an eco-friendly ride.

By using Ride With Me, a user can search for a ride between different cities, choose the best ride for them and send a request to join that ride. The driver for that ride can then choose to accept or deny their request.

All the payments are made in person, so there are no transaction fees involved.

## Getting Started:

These instructions will get a copy of the project up and running on your local machine for usage and testing purposes.

clone down the repo: ```$ git clone https://github.com/jessicalyn/ride-with-me```

cd into directory and run npm install: ```$ npm install```

launch in your browser: ```$ npm start ```

## Site Functionality

### User Login/Logout

Site login is handled by Google OAuth. To login, visit http://ride-with-me-fe.herokuapp.com/ and click the Google login button on the main page. After logging in with Google, a user account will be created and they will be redirected to the ride search page. Users can logout by clicking the Google logout button from the 'Profile' tab.

### Ride Search

Users can search for rides with available seats by accessing the ride search page at http://ride-with-me-fe.herokuapp.com/. Users can search for rides with a certain start and end city with an optional date search parameter. Rides matching the start and cities with a start date on or after the search date will be returned and displayed. Users can then click 'Request to Join' which will take them to a form where they can create a new Ride Request. They can send a message to the driver to let them know they want to join their Ride. 

### Create a Ride

Users can offer a ride by clicking on Create a Ride in the navigation bar. They have to choose a start city, end city, compensation, number of available seats and a description of the ride. Once they click the "Add Ride" button, their ride gets created and is now available. 

### My Rides

Users can visit their My Rides page where they can see all of their upcoming rides. They can see the name of the driver, the departure city, arrival city, departure date and a small map. They can also see more information about a specific ride by clicking on "See Ride Info". On a ride's info page, they can see whether they are the driver or a passenger on that ride, the cost of the ride, the description, a map and options to cancel the ride or mark as completed. Only the driver can mark a ride as completed. 

### My Requests

Once a user has requested to join a ride, that driver's ride can see all pending requests in their My Requests page. For each pending request, they can see the name of the person who sent the request, the ride's start city, end city and date, the request's message and how many seats are still available on that ride. They have the options to either add the passenger to the ride or reject their request. 

### Profile

A user can see their account information (email and profile picture) on their profile page. They can also logout of the application. 

## Future Development and Extensions Notes:


### Technologies Used
Ride with Me was built using:
- [SCSS](https://sass-lang.com/)
- [React.js](https://reactjs.org/)
- [React-Router](https://reacttraining.com/react-router/)
- [Redux.js](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Apollo Client](https://www.apollographql.com/docs/react/)

And tested using:
- [Enzyme](https://airbnb.io/enzyme/) & [Jest](https://airbnb.io/enzyme/docs/guides/jest.html)

## Credits
Credit for this project goes to:
- [Jessica Hansen](https://github.com/jessicalyn)
- [Teresa Knowles](https://github.com/teresa-m-knowles)
- [Chris Lewis](https://github.com/csvlewis)
---
This project was assigned by Jessica Hansen, Teresa Knowles, and Chris Lewis

*@ Turing School of Software and Design, Denver, CO.*

---
**[Back to top](https://github.com/jessicalyn/ride-with-me/blob/master/README.md#ride-with-me)**
