import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0
    };
    render() {
        return (
        <div>
            <h1>Hello World</h1>
            <span>{this.state.count}</span>
            <button>Increment</button>
    </div>
    );
    }
}

export default Counter;