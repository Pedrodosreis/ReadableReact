import React, {Component} from 'react';
import { connect } from 'react-redux';

// export class Header extends Component {
class Header extends Component {

  render() {
    return (
      <div >
        <header>
          <h1>Readable</h1>
        </header>
      </div>
    );
  }
}

export default connect()(Header);