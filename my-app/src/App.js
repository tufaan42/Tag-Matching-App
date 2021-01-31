import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionType from './redux/Actions/actionTypes';
import { fetchAll, getActivities } from './Utility/fetchs';
import './App.css';
import RenderApp from './RenderFuntions/App/RenderApp';
import ActivityButton from './Components/Buttons/ActivityButton';

function App( props ) {
  useEffect(() => {
    fetchAll(props.addCountries);
    getActivities(props.addActivities);
    //eslint-disable-next-line
  }, [])
  const showActivityHandler = () => {
      props.changeFlag(4);
  }
  return (
    <div className="App">
      <ActivityButton handler = {showActivityHandler}/>
      {RenderApp(props.flag)}
    </div>
  );
}

const mapStateToProps = ( state ) => {
  return{
    flag: state.flag,
    countries: state.countries
  }
} 

const mapDispatchToProps = dispatch => {
  return{
    changeFlag: flag => dispatch({ type: actionType.CHANGE_FLAG, flag: flag }),
    addCountries: countries => { dispatch({ type: actionType.INIT_COUNTRIES, countries: countries }) },
    addActivities: activities => { dispatch({ type: actionType.ADD_ACTIVITIES, activities: activities }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
