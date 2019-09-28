import React, { Component } from 'react';
import Clear from '@material-ui/icons/Clear';
import Grid from '@material-ui/core/Grid';
import './CardHeader.css';

import Unknown from '../../../img/Ranks/Unknown.png';
import Beginner5 from '../../../img/Ranks/Beginner_05.png';
import Beginner4 from '../../../img/Ranks/Beginner_04.png';
import Beginner3 from '../../../img/Ranks/Beginner_03.png';
import Beginner2 from '../../../img/Ranks/Beginner_02.png';
import Beginner1 from '../../../img/Ranks/Beginner_01.png';
import Novice5 from '../../../img/Ranks/Novice_05.png';
import Novice4 from '../../../img/Ranks/Novice_04.png';
import Novice3 from '../../../img/Ranks/Novice_03.png';
import Novice2 from '../../../img/Ranks/Novice_02.png';
import Novice1 from '../../../img/Ranks/Novice_01.png';
import Experienced5 from '../../../img/Ranks/Experienced_05.png';
import Experienced4 from '../../../img/Ranks/Experienced_04.png';
import Experienced3 from '../../../img/Ranks/Experienced_03.png';
import Experienced2 from '../../../img/Ranks/Experienced_02.png';
import Experienced1 from '../../../img/Ranks/Experienced_01.png';
import Skilled5 from '../../../img/Ranks/Skilled_05.png';
import Skilled4 from '../../../img/Ranks/Skilled_04.png';
import Skilled3 from '../../../img/Ranks/Skilled_03.png';
import Skilled2 from '../../../img/Ranks/Skilled_02.png';
import Skilled1 from '../../../img/Ranks/Skilled_01.png';
import Specialist5 from '../../../img/Ranks/Specialist_05.png';
import Specialist4 from '../../../img/Ranks/Specialist_04.png';
import Specialist3 from '../../../img/Ranks/Specialist_03.png';
import Specialist2 from '../../../img/Ranks/Specialist_02.png';
import Specialist1 from '../../../img/Ranks/Specialist_01.png';
import Expert from '../../../img/Ranks/Expert.png';
import Survivor from '../../../img/Ranks/Survivor.png';
import Lone_Survivor from '../../../img/Ranks/Lone_Survivor.png';

class CardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clear: false,
      desc: 'test'
    };

    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
    this.handleTest = this.handleTest.bind(this);
  }

  handleHoverOn() {
    console.log('hover on test');
    this.setState(prevState => ({
      clear: !prevState.clear
    }));
  }
  handleHoverOff() {
    console.log('hover on test off');
    this.setState(prevState => ({
      clear: !prevState.clear
    }));
  }

  handleTest() {
    return <p className='rankName'>{this.state.desc}</p>;
  }

  handleRankName() {
    return <p className='rankName'>{this.state.desc}</p>;
  }

  render() {
    /* const rank = () => {
      if (this.props.view === null) {
        return this.props.gameType;
      } else {
        return this.props.gameType + '-' + this.props.view;
      }
    }; */
    const RankName = rank => {
      const rankNumber = parseInt(rank, 10);

      switch (true) {
        case rankNumber === 0:
          return <p className='rankName'>Unknown</p>;
        case rankNumber >= 1 && rankNumber <= 199:
          return <p className='rankName'>Beginner V</p>;
        case rankNumber >= 200 && rankNumber <= 399:
          return <p className='rankName'>Beginner IV</p>;
        case rankNumber >= 400 && rankNumber <= 599:
          return <p className='rankName'>Beginner III</p>;
        case rankNumber >= 600 && rankNumber <= 799:
          return <p className='rankName'>Beginner II</p>;
        case rankNumber >= 800 && rankNumber <= 999:
          return <p className='rankName'>Beginner I</p>;
        case rankNumber >= 1000 && rankNumber <= 1199:
          return <p className='rankName'>Novice V</p>;
        case rankNumber >= 1200 && rankNumber <= 1399:
          return <p className='rankName'>Novice IV</p>;
        case rankNumber >= 1400 && rankNumber <= 1599:
          return <p className='rankName'>Novice III</p>;
        case rankNumber >= 1600 && rankNumber <= 1799:
          return <p className='rankName'>Novice II</p>;
        case rankNumber >= 1800 && rankNumber <= 1999:
          return <p className='rankName'>Novice I</p>;
        case rankNumber >= 2000 && rankNumber <= 2199:
          return <p className='rankName'>Experienced V</p>;
        case rankNumber >= 2200 && rankNumber <= 2399:
          return <p className='rankName'>Experienced IV</p>;
        case rankNumber >= 2400 && rankNumber <= 2599:
          return <p className='rankName'>Experienced III</p>;
        case rankNumber >= 2600 && rankNumber <= 2799:
          return <p className='rankName'>Experienced II</p>;
        case rankNumber >= 2800 && rankNumber <= 2999:
          return <p className='rankName'>Experienced I</p>;
        case rankNumber >= 3000 && rankNumber <= 3199:
          return <p className='rankName'>Skilled V</p>;
        case rankNumber >= 3200 && rankNumber <= 3399:
          return <p className='rankName'>Skilled IV</p>;
        case rankNumber >= 3400 && rankNumber <= 3599:
          return <p className='rankName'>Skilled III</p>;
        case rankNumber >= 3600 && rankNumber <= 3799:
          return <p className='rankName'>Skilled II</p>;
        case rankNumber >= 3800 && rankNumber <= 3999:
          return <p className='rankName'>Skilled I</p>;
        case rankNumber >= 4000 && rankNumber <= 4199:
          return <p className='rankName'>Specialist V</p>;
        case rankNumber >= 4200 && rankNumber <= 4399:
          return <p className='rankName'>Specialist IV</p>;
        case rankNumber >= 4400 && rankNumber <= 4599:
          return <p className='rankName'>Specialist III</p>;
        case rankNumber >= 4600 && rankNumber <= 4799:
          return <p className='rankName'>Specialist II</p>;
        case rankNumber >= 4800 && rankNumber <= 4999:
          return <p className='rankName'>Specialist I</p>;
        case rankNumber >= 5000 && rankNumber <= 5999:
          return <p className='rankName'>Expert</p>;
        case rankNumber >= 6000 && rankNumber <= 9999:
          return <p className='rankName'>Survivor</p>;
        // build leadershipTop 1000
        case rankNumber >= 10000:
          return <p>Lone Survivor</p>;

        default:
          return rank;
      }
    };

    const rankIcon = rank => {
      const rankNumber = parseInt(rank, 10);

      switch (true) {
        case rankNumber === 0:
          return <img src={Unknown} alt='Rank icon' className='rankIcon'></img>;
        case rankNumber >= 1 && rankNumber <= 199:
          return (
            <img src={Beginner5} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 200 && rankNumber <= 399:
          return (
            <img src={Beginner4} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 400 && rankNumber <= 599:
          return (
            <img src={Beginner3} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 600 && rankNumber <= 799:
          return (
            <img src={Beginner2} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 800 && rankNumber <= 999:
          return (
            <img src={Beginner1} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 1000 && rankNumber <= 1199:
          return <img src={Novice5} alt='Rank icon' className='rankIcon'></img>;
        case rankNumber >= 1200 && rankNumber <= 1399:
          return <img src={Novice4} alt='Rank icon' className='rankIcon'></img>;
        case rankNumber >= 1400 && rankNumber <= 1599:
          return <img src={Novice3} alt='Rank icon' className='rankIcon'></img>;
        case rankNumber >= 1600 && rankNumber <= 1799:
          return <img src={Novice2} alt='Rank icon' className='rankIcon'></img>;
        case rankNumber >= 1800 && rankNumber <= 1999:
          return <img src={Novice1} alt='Rank icon' className='rankIcon'></img>;
        case rankNumber >= 2000 && rankNumber <= 2199:
          return (
            <img src={Experienced5} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 2200 && rankNumber <= 2399:
          return (
            <img src={Experienced4} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 2400 && rankNumber <= 2599:
          return (
            <img src={Experienced3} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 2600 && rankNumber <= 2799:
          return (
            <img src={Experienced2} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 2800 && rankNumber <= 2999:
          return (
            <img src={Experienced1} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 3000 && rankNumber <= 3199:
          return (
            <img src={Skilled5} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 3200 && rankNumber <= 3399:
          return (
            <img src={Skilled4} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 3400 && rankNumber <= 3599:
          return (
            <img src={Skilled3} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 3600 && rankNumber <= 3799:
          return (
            <img src={Skilled2} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 3800 && rankNumber <= 3999:
          return (
            <img src={Skilled1} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 4000 && rankNumber <= 4199:
          return (
            <img src={Specialist5} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 4200 && rankNumber <= 4399:
          return (
            <img src={Specialist4} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 4400 && rankNumber <= 4599:
          return (
            <img src={Specialist3} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 4600 && rankNumber <= 4799:
          return (
            <img src={Specialist2} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 4800 && rankNumber <= 4999:
          return (
            <img src={Specialist1} alt='Rank icon' className='rankIcon'></img>
          );
        case rankNumber >= 5000 && rankNumber <= 5999:
          return <img src={Expert} alt='Rank icon' className='rankIcon'></img>;
        case rankNumber >= 6000 && rankNumber <= 9999:
          return (
            <img src={Survivor} alt='Rank icon' className='rankIcon'></img>
          );
        // build leadershipTop 1000
        case rankNumber >= 10000:
          return (
            <img src={Lone_Survivor} alt='Rank icon' className='rankIcon'></img>
          );

        default:
          return rank;
      }
    };

    return (
      <div>
        <Grid item xs={12} className='headerCard'>
          <Grid item xs={1} className='headerCardLeftSection'>
            {rankIcon(this.props.rank)}
          </Grid>
          <Grid item xs={10} className='headerCardMiddleSection'>
            <p className='playerName'>{this.props.item.name}</p>
            {RankName(this.props.rank)}
            <h4 className='rankNumber'>{this.props.rank} Points</h4>
          </Grid>
          <Grid item xs={1} className='headerCardRightSection'>
            <Clear
              onClick={this.props.delete.bind(this, this.props.index)}
              onMouseEnter={() => this.handleHoverOn}
              onMouseLeave={() => this.handleHoverOff}
              className='removeCard'
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default CardHeader;
