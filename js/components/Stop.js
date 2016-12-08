import React, { Component, PropTypes } from "react";
import ReactDOM from 'react-dom';

import moment from 'moment';


export default class Stop extends Component {


  static propTypes = {
    data: PropTypes.object,
    colorId: PropTypes.number
  };

  minutesFromNow = (time) => {
    if (time === 'now') return time;
    return moment(time).add(1, 'minute').diff(moment(), 'minutes');
  }

  render() {
    const stop = this.props.data;
    console.log(stop);
    return (
      <div className={ `stop color${this.props.colorId}` }>
        <i className="fa fa-bus" aria-hidden="true"></i>
        <div className='stop-name'>Stop { stop.stopId}</div>
        { stop.routes.map(route => {
          return <div className='route'>Route { route.routeId } in { this.minutesFromNow(route.nextTimes[0]) } and { this.minutesFromNow(route.nextTimes[1]) } mins</div>
        })}

      </div>
    )
  }
};
