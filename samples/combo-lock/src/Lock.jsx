import React from 'react';
import LockButton from './LockButton';
import DisplaySeries from './DisplaySeries';
import DisplayStatus from './DisplayStatus';
import ResetButton from './ResetButton';


class Lock extends React.Component {
  constructor() {
    super();
    this.state = {
      series: [],
      status: "Locked",
      secret: [1,2,3,4],
    };
    this.record = this.record.bind(this);
    this.reset = this.reset.bind(this);
  }

  isCorrect() {
    return this.state.series.join('') === this.state.secret.join('');
  }

  record(number) {
    console.log(number);
    if(this.state.series.length < this.state.secret.length) {
      this.setState({
        series: [...this.state.series, number ]
      }, () => {
        if (this.isCorrect()) {
          this.setState({
            status: "Unlocked",
            series: []
          });
        }
      });
    }
  }

  reset() {
    this.setState({
      series: []
    });
  }

  render() {
    return (
      <div className="combo-lock">
        <DisplayStatus status={this.state.status}/>
        <DisplaySeries series={this.state.series}/>
        <div className="lock-row">
          <LockButton className="other" number="1" onClick={this.record} />
          <LockButton number="2" onClick={this.record} />
          <LockButton number="3" onClick={this.record} />
        </div>
        <div className="lock-row">
          <LockButton number="4" onClick={this.record} />
          <LockButton number="5" onClick={this.record} />
          <LockButton number="6" onClick={this.record} />
        </div>
        <div className="lock-row">
          <LockButton number="7" onClick={this.record} />
          <LockButton number="8" onClick={this.record} />
          <LockButton number="9" onClick={this.record} />
        </div>
        <ResetButton onClick={this.reset} />
      </div>
    );
  }
}

export default Lock;
