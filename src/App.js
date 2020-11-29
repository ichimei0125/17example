import React from 'react';

import data from './data.json';

import RankTable from './components/ranktable'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      prevOrder: []
    };
  }

  componentDidMount() {
    this.updatedata = setInterval(() => this.setState(prevState => {
      // prev list index
      let prevOrder = {};
      prevState.data.forEach((d, index) => {
        prevOrder[d.userID] = index;
      });

      // update score
      let _data = prevState.data;
      _data.map((d) => {
        let scale = Math.random() * 2 - 1;
        d.score += Math.floor(5000 * scale);
        return d;
      });
      // sort by score
      _data.sort(function (a, b) {
        if (a.score < b.score) return 1;
        if (a.score > b.score) return -1;
        return 0;
      });

      return {data: _data, prevOrder: prevOrder};

    }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.updatedata);
  }

  render() {
    return(
      <RankTable data={this.state.data} prevOrder={this.state.prevOrder} />
    );
  }
}

export default App;
