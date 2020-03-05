import React from 'react';
import axios from 'axios';
import WineIndex from './WineIndex';

class TopWines extends React.Component {
  constructor(props) {
    super(props);

    this.state = {wines: []};
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
        <WineIndex wines={this.state.wines} />
      </>
    )
  }
}

export default TopWines;