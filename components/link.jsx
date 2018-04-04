import Router from 'next/router'

/**
 * @param {{href: string}} props
 */
export default props => <a href={props.href} onClick={e => {e.preventDefault();Router.push(props.href)}}>{props.children}</a>
