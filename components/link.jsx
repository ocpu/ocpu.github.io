import Router from 'next/router'

import Link from 'next/link'

/**
 * @param {{href: string}} props
 */
// export default props => <a href={props.href} onClick={e => {e.preventDefault();Router.push(props.href)}}>{props.children}</a>
export default ({ href, as, ...props }) => <Link href={href} as={as}><a {...props}>{props.children}</a></Link>
