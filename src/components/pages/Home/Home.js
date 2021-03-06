import React from 'react';
import { Link } from 'react-router-dom';

import AllBirds from '../../shared/AllBirds/AllBirds';

import birdsData from '../../../helpers/data/birdsData';
import authData from '../../../helpers/data/authData';

class Home extends React.Component {
  state = {
    birds: [],
  }

  componentDidMount() {
    birdsData.getBirdsByUid(authData.getUid())
      .then((birds) => {
        console.warn(birds);
        this.setState({ birds });
      })
      .catch((err) => console.error(err));
  }

  editBirbEvent = (e) => {
    e.preventDefault();
    const birbId = 'birb10000';
    this.props.history.push(`/edit/${birbId}`);
  };

  render() {
    return (
      <div className="Home">

        <AllBirds birds={this.state.birds} />
      </div>
    );
  }
}

export default Home;
