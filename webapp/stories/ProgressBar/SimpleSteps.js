import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import ProgressBar from '../../src/components/ProgressBar'

class Wrapper extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      progress: 0,
    }
  }

  progressIncrese () {
    if (this.state.progress < 3) {
      this.setState({ progress: this.state.progress + 1 })
    }
  }

  progressDecrease () {
    if (this.state.progress > 0) {
      this.setState({ progress: this.state.progress - 1 })
    }
  }

  render () {
    return (
      <Fragment>
        <ProgressBar steps={3} progress={this.state.progress} />
        <br />
        <button onClick={this.progressDecrease.bind(this)}>Backward</button>
        <button onClick={this.progressIncrese.bind(this)}>Forward</button>
      </Fragment>
    )
  }
}

storiesOf('Progress Bar')
  .add('3 steps', () => (
    <Wrapper />
  ))