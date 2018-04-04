import React from 'react'
import { Route, Switch } from 'react-router'
import { HashRouter, NavLink } from 'react-router-dom'
import SwipeableRoutes from 'react-swipeable-routes';
import css from '../styles.sass'
import Link from '../components/link'

export default class Navigation extends React.PureComponent {
  render() {
    return (
      <div className={css.main}>
        <div className={css['nav-wrapper']}>
          <h1>ocpu.me</h1>
          <nav className={css.nav}>
            <Link href="/">Home</Link>
            <Link href="/test">Test</Link>
          </nav>
        </div>
        <div className={css.breadcrumb}>home</div>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
