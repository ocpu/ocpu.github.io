import Link from '../components/link'

import css from '../styles.sass'

export default class Navigation extends React.PureComponent {
  render() {
    return (
      <div className={css.main}>
        <div className={css['nav-wrapper']}>
          <h1 className={css['site-header']}>ocpu.me</h1>
          <nav className={css.nav}>
            <Link href="/">Home</Link>
            <Link href="/test">Test</Link>
          </nav>
        </div>
        <div className={css.breadcrumb}>{''}</div>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
