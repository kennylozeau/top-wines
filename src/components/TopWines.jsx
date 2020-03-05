import React from 'react';
import axios from 'axios';
import WineIndex from './WineIndex';
import TastingNotes from './TastingNotes';
import debounce from '../util/debounce';

class TopWines extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wines: [],
      selectedWineId: null,

      loading: false,
      notes: ''
    };

    this.selectWine = debounce(this.selectWine.bind(this), 500);
  }

  selectWine(selectedWineId) {
    this.setState({
      loading: true,
      selectedWineId
    });

    if (selectedWineId) {
      axios({
        method: 'get',
        url: `https://cors-anywhere.herokuapp.com/https://top-100-example.s3.amazonaws.com/${selectedWineId}.json`
      }).then(response => {
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
    return (
      <>
        <div className="header">
          <h1>Top 100 Wines</h1>
          <h3>Below and to the left is a 2018 list of the top 100 wines, listed by ranking. Hovering over a wine in the list will display relevant tasting notes.</h3>
        </div>
        <div className="top-wines">
          <WineIndex wines={this.state.wines} selectWine={this.selectWine} />
          {this.state.selectedWineId &&
            <TastingNotes
              id={this.state.selectedWineId}
              loading={this.state.loading}
              notes={this.state.notes} />}
        </div>
      </>
    )
  }
}

export default TopWines;