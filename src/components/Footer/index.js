import React from 'react'
import PropTypes from 'prop-types'
import LockIcon from 'react-icons/lib/md/lock-outline'
import CartIcon from 'emblematic-icons/svg/ShoppingCart24.svg'
import { themr } from 'react-css-themr'
import classNames from 'classnames'

import { Grid, Row, Col } from '../Grid'
import { Button } from '..'

const applyThemr = themr('UIFooter')

const palmColSize = 12
const buttonColSize = 12
const defaultColSize = 6

const Footer = ({
  companyName,
  theme,
  onToggleCart,
  cartButtonVisible,
  base,
}) => (
  <footer className={classNames(theme[base], theme.wrapper)}>
    <Grid>
      <Row>
        <Col
          desk={buttonColSize}
          tv={buttonColSize}
          tablet={buttonColSize}
          palm={palmColSize}
        >
          <Button
            hidden={!cartButtonVisible}
            size="extra-large"
            fill="outline"
            relevance="normal"
            onClick={onToggleCart}
            className={classNames(theme.button, theme.cartButton)}
          >
            <CartIcon className={theme.cartIcon} />
            Carrinho de Compras
          </Button>
        </Col>
      </Row>
      <Row>
        <Col
          desk={defaultColSize}
          tv={defaultColSize}
          tablet={defaultColSize}
          palm={palmColSize}
          className={theme.safe}
        >
          <LockIcon />
          Ambiente Seguro
        </Col>
        <Col
          desk={defaultColSize}
          tv={defaultColSize}
          tablet={defaultColSize}
          palm={palmColSize}
          className={theme.powered}
        >
          Powered by { companyName }
        </Col>
      </Row>
    </Grid>
  </footer>
)

Footer.propTypes = {
  theme: PropTypes.shape({
    button: PropTypes.string,
    powered: PropTypes.string,
    safe: PropTypes.string,
    total: PropTypes.string,
    value: PropTypes.string,
    light: PropTypes.string,
    dark: PropTypes.string,
    wrapper: PropTypes.string,
    cartIcon: PropTypes.string,
  }),
  base: PropTypes.string,
  onToggleCart: PropTypes.func,
  cartButtonVisible: PropTypes.bool.isRequired,
  companyName: PropTypes.string.isRequired,
}

Footer.defaultProps = {
  theme: {},
  onToggleCart: null,
  base: 'dark',
}

export default applyThemr(Footer)