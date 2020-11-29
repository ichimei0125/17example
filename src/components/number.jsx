import React from 'react';

export default class Number extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
          number: this.props.number,
          displayNumber: this.props.number
      };
    }
    
    componentWillReceiveProps(nextProps) {
      if (this.props.number !==  nextProps.number) {
        this.setState({
            displayNumber: this.state.number,
            number: nextProps.number
        });
      }
    }

    componentDidMount() {
        this.change = setInterval(() => this.setState(prevState => {
            let n = prevState.displayNumber;
            let number = this.state.number;
            if (n !== number) {
                let l = Math.abs(n - number);
                let step = Math.floor(l / 20); // rank table change 1s, number change 50ms
                if (n > number) {
                    n -= step;
                    if (n < number ) {n = number};
                } else {
                    n += step;
                    if (n > number ) {n = number};
                }
            }

            return {displayNumber: n};
        }), 50);
    }

    componentWillUnmount() {
        clearInterval(this.change);
    }

    render() {

        return this.state.displayNumber + "pt";
    }
}