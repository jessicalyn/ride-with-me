import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import { Welcome } from '../../components/Welcome/Welcome';
import RideSearch from '../RideSearch/RideSearch';
import CreateRide from '../CreateRide/CreateRide';
import MyRides from '../MyRides/MyRides';
import Profile from '../Profile/Profile';
import RideInfo from '../RideInfo/RideInfo';
import Login from '../Login/Login';
import MyRequests from '../MyRequests/MyRequests';
import { Callback } from '../../components/Callback/Callback';
import { NotFound } from '../../components/NotFound/NotFound';
import { fetchCities } from '../../thunks/fetchCities';
import { fetchRideInfo } from '../../thunks/fetchRideInfo';

export class App extends Component {

  componentDidMount() {
    this.props.fetchCities()
    this.props.fetchRideInfo()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/' className="home-button"><h1>Ride With Me</h1></Link>
          <div className="header-buttons">
            <Link to='/findride' className="nav-buttons">Find a Ride</Link>
            <Link to='/newride' className="nav-buttons">Create a Ride</Link>
            <Link to='/myrides' className="nav-buttons">My Rides</Link>
            <Link to='/myrequests' className="nav-buttons">My Requests</Link>
            <Link to='/profile' className="nav-buttons">Profile</Link>
          </div>
        </header>
        <Switch>
          <Route exact path='/' component={ Welcome } />
          <Route exact path='/findride' component={ RideSearch } />
          <Route exact path='/newride' component={ CreateRide } />
          <Route path='/myrides' component={ MyRides } />
          <Route path='/profile' component={ Profile } />
          <Route path='/myrequests' component={ MyRequests } />
          <Route path='/rides/:id' render={({ match }) => {
            const currentRide = this.props.rides.find(ride => parseInt(ride.id) === parseInt(match.params.id))
            if(currentRide === undefined) return <p>RIDE NOT FOUND</p>
            return <RideInfo match={match} {...currentRide} />
          }} />
          <Route path='/login' component={ Login } />
          <Route path='/callback' component={ Callback } />
          <Route path='*' component={ NotFound } />
        </Switch>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  rides: state.rides,
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  fetchCities: () => dispatch(fetchCities()),
  fetchRideInfo: () => dispatch(fetchRideInfo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)