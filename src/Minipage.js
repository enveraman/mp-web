import {useState, useEffect, Component} from 'react';

class Minipage extends Component {
  render() {
    const {children, maxHeight, maxWidth} = this.props;
    return (
        <div style={{'maxHeight': maxHeight, 'maxWidth': maxWidth, 'flex': 1, 'padding': '4px'}}>
          {children}
        </div>
    );
  }
}

export default Minipage;