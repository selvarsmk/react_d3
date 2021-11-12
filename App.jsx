import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);
        console.log("constructor calling here");
        this.state = {
            prevCount: 0,
            count: 100
        };

        this.inc = this.incCount.bind(this);
        this.dec = this.decCount.bind(this);
    }

    incCount() {
        this.setState(
            {
                prevCount: this.state.count,
                count: this.state.count + 1
            }
        )
        console.log("prev", this.state.prevCount);
        console.log("curr", this.state.count);
    }

    decCount() {
        this.setState(
            {
                count: this.state.count - 1
            }
        )
    }

    render() {
        return (
            <div>
                <h1>React JSX -- {this.props.name}</h1>
                <h1>State Count -- {this.state.count}</h1>

                <button onClick={this.inc}>Inc++</button>

                <button onClick={this.dec}>Dec--</button>
                </div>
        )
    }
}

export default App;