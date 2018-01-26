import React from 'react'
import { themr } from 'react-css-themr'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const applyThemr = themr('UIGrid')

const classnames = ({
  theme,
  flex,
  stretch,
  alignCenter,
  className,
  hidden,
}) =>
  classNames(
    className,
    theme.row,
    {
      [theme.flex]: flex,
      [theme.stretch]: stretch,
      [theme.alignItensCenter]: alignCenter,
      [theme.hidden]: hidden,
    }
  )

const Row = ({
  theme,
  children,
  flex,
  stretch,
  alignCenter,
  className,
  hidden,
}) => (
  <div className={classnames({ theme, flex, stretch, alignCenter, className, hidden })}>
    {children}
  </div>
)

Row.propTypes = {
  theme: PropTypes.shape({
    row: PropTypes.string,
    flex: PropTypes.string,
    stretch: PropTypes.string,
    alignItensCenter: PropTypes.string,
    hidden: PropTypes.string,
  }).isRequired,
  alignCenter: PropTypes.bool,
  children: PropTypes.node,
  flex: PropTypes.bool,
  stretch: PropTypes.bool,
  hidden: PropTypes.bool,
  className: PropTypes.string,
}

Row.defaultProps = {
  alignCenter: false,
  children: null,
  flex: false,
  stretch: false,
  hidden: false,
  className: null,
}

export default applyThemr(Row)