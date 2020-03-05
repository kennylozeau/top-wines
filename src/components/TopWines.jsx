import React from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import WineIndex from './WineIndex';
import TastingNotes from './TastingNotes';

class TopWines extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wines: [],
      selectedWineId: null,

      loading: false,
      notes: ''
    };

    this.selectWine = this.selectWine.bind(this).debounce(500);
  }

  selectWine(selectedWineId) {
    // this.setState({selectedWineId});

    // if (selectedWineId === null) {
    //   ReactDOM.unmountComponentAtNode(document.getElementById('notes'));
    // }

    this.setState({
      loading: true,
      selectedWineId
    });

    if (selectedWineId) {
      axios({
        method: 'get',
        url: `https://cors-anywhere.herokuapp.com/https://top-100-example.s3.amazonaws.com/${selectedWineId}.json`
      }).then(response => {
        // debugger
        this.setState({
          loading: false,
          notes: response.data.note
        })
      });
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://cors-anywhere.herokuapp.com/https://top-100-example.s3.amazonaws.com/t100_2018.json'
    }).then(response => {
        this.setState({wines: response.data});
      });
  }

  render () {
    // debugger
    if (this.state.selectedWineId) {
      return (
        <div className="top-wines">
          <WineIndex wines={this.state.wines} selectWine={this.selectWine} />
          <div id="notes">
            <TastingNotes id={this.state.selectedWineId} loading={this.state.loading} notes={this.state.notes}/>
          </div>
        </div>
      )
    } else {
      return <WineIndex wines={this.state.wines} selectWine={this.selectWine}/>
    }
  }
}

export default TopWines;

Function.prototype.debounce = function (interval) {
  let timeout;

  return (...args) => {
    const fnCall = () => {
      timeout = null;
      this(...args);
    }
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, interval);
  }
}