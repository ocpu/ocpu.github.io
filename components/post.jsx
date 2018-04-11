import React from 'react'
import moment from 'moment'

import Link from './link'

import css from '../post.sass'

export default class Post extends React.Component {
  render() {
    return (
      <article>
        <header className={css.header}>
          <Link href={`/posts/${this.props.id}`} as={`/posts/${this.props.title}`}><h2>{this.props.title}</h2></Link>
          <date datetime={this.props.modified}>{moment(new Date(this.props.modified)).format('YYYY-MM-DD')}</date>
        </header>
        <p>{this.props.content}</p>
      </article>
    )
  }
}