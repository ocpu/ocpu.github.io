import Document, { Head, Main, NextScript } from 'next/document'
import Link from '../components/link'

import css from "../styles.sass"
import Router from 'next/router'

const NavLink = (props) => <Link as={props.as} href={props.href}><a {...props}>{props.children}</a></Link>

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comfortaa|Roboto:300" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <body className={css.body}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}