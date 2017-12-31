import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Broadcast from './Broadcast'

class Provider extends Component {
  static propTypes = {
    offset: PropTypes.number,
    position: PropTypes.oneOf([
      'top left',
      'top right',
      'top center',
      'bottom left',
      'bottom right',
      'bottom center'
    ]),
    timeout: PropTypes.number,
    type: PropTypes.oneOf(['info', 'success', 'error']),
    transition: PropTypes.oneOf(['fade', 'scale']),
    alertTemplate: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
  }

  static defaultProps = {
    offset: 10,
    position: 'top center',
    timeout: 0,
    type: 'info',
    transition: 'fade'
  }

  alertRootElement = document.createElement('div')

  componentDidMount () {
    document.body.insertBefore(this.alertRootElement, document.body.firstChild)
  }

  componentWillUnmount () {
    document.body.removeChild(this.alertRootElement)
  }

  render () {
    const { children, alertTemplate, offset, position, timeout, type, transition } = this.props

    return (
      <Broadcast
        alertRoot={this.alertRootElement}
        alertTemplate={alertTemplate}
        options={{ offset, position, timeout, type, transition }}
      >
        {children}
      </Broadcast>
    )
  }
}

export default Provider
