import React    from "react";
import ReactDOM from 'react-dom';
import request from 'superagent';

import Stop from './components/Stop';


export default class Container extends React.Component {

    constructor() {
      super();
      this.state = {
        stops: null
      }
    }

    fetchStopTimes() {
      request.get('http://localhost:3000/nexttimes')
      .query({time: Date.now()})
      .end((err, res) => {
        if (err) console.error(err);
        this.setState({
          stops: res.body
        })
      })

    }

    componentWillMount = () => {
      // Refresh every minute
      this.fetchStopTimes();
      setInterval(() => {
        this.fetchStopTimes();
      }, 60000)
    }

    render() {
      return (
        <div className='container'>
          { !this.state.stops &&
            'Loading Stop Data'
          }
          { this.state.stops &&
            this.state.stops.map((stop, i) => {
              return <Stop data={ stop } colorId={ i + 1 } key={ i }/>;
            })
          }
        </div>
      )
    }
};

ReactDOM.render(<Container />, document.getElementById('main'));
