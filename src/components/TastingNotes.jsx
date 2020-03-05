import React from 'react';
// import axios from 'axios';

class TastingNotes extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   loading: true,
    //   notes: ''
    // }
  }

  // componentDidUpdate() {
  //   axios({
  //     method: 'get',
  //     url: `https://cors-anywhere.herokuapp.com/https://top-100-example.s3.amazonaws.com/${this.props.id}.json`
  //   }).then(response => {
  //     // debugger
  //     this.setState({
  //       loading: false,
  //       notes: response.data.note
  //     })
  //   });
  // }

  // componentWillUnmount() {
  //   debugger
  // }

  render() {
    if (this.props.loading) {
      return <h3>Loading tasting notes</h3>
    } else {
      return <div>{this.props.notes}</div>
    };
  }
}

export default TastingNotes;