import Layout from '../components/layout'
import { call, test } from 'fun-sj'
import Slider from '../components/slider'

/**
 * @augments {React.Component<{url: string, parts?: Object, query?: Object, headers?: Object, onResponse?: (res: Response) => (any|Promise<any>), useLocalCache?: string}, {}>}
 */
class APIRequest extends React.Component {
  state = null
  refetch = () => fetch(
    this.props.url.replace(/\/:(\w+)/g, (match, key) => typeof this.props.parts === 'object' ? key in this.props.parts ? this.props.parts[key] : match : match)
    + (this.props.query
      ? '?' + Object
        .getOwnPropertyNames(Object(this.props.query))
        .reduce((query, key) => '&' + encodeURIComponent(key) + '=' + encodeURIComponent(this.props.query[key]), '')
        .slice(1)
      : ''), {
      headers: Object(this.props.headers)
    }
  )
    .then(this.props.onResponse || (res => res.json()))
    .then(data => {if(this.props.useLocalCache)localStorage.setItem(this.props.useLocalCache, JSON.stringify(data));return data})
    .then(data => this.setState(data))

  componentDidMount() {
    if (this.props.useLocalCache) {
      const data = localStorage.getItem(this.props.useLocalCache)
      if (data === null)
        return this.refetch()
      this.setState(JSON.parse(data))
    } else this.refetch()
  }

  render() {
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, { apiData: this.state }))
    return <div>{children}</div>
  }
}

/**
 * @augments {React.Component<{country: string, size?: string}, {}>}
 */
class Flag extends React.PureComponent {
  render() {
    const width = this.props.size || '1.5rem'
    const height = parseFloat(width) * .75 + width.replace(parseFloat(width)+'', '')
    const style = {width, height, display: 'block', ...this.props.style}
    return <img
      src={`https://lipis.github.io/flag-icon-css/flags/4x3/${this.props.country && this.props.country.toLowerCase()}.svg`}
      style={style}
    />
  }
}

/**
 * @augments {React.Component<{userid?: string}, {}>}
 */
class ProfilePicture extends React.PureComponent {
  render() {
    return <img src={'https://a.ppy.sh/' + (this.props.userid ? this.props.userid : '')} alt="Profile picture" style={{
      // border: '2px solid darkgrey',
      borderRadius: '5px',
      // backgroundColor: '#444',
      width: '8rem',
      height: '8rem'
    }}/>
  }
}

/**
 * @augments {React.Component<{level: number, value: string}, {}>}
 */
class UserLevel extends React.PureComponent {
  render() {
    const { level, progress } = this.props
    return <div>
      <div style={{
        display: 'inline-block',
        backgroundImage: `linear-gradient(to right, #E15E98 ${progress}%, #fff ${progress}%)`,
        height: '10px',
        width: '8rem',
        marginRight: '1rem',
        border: '1px solid darkgrey',
        borderRadius: '2px'
      }}></div>
      <span style={{width: '8rem', display: 'inline-block'}} tabIndex="0" aria-label={'Player level ' + level}>level {level || 0} ({(progress || 0) | 0}%)</span>
    </div>
  }
}

/**
 * @augments {React.Component<{value: string, onChange: (event: ChangeEvent) => void}, {}>}
 */
class Username extends React.PureComponent {
  render = () => <input type="text" value={this.props.value} onChange={this.props.onChange} placeholder="Username" style={{
    border: 'none',
    borderBottom: '1px dotted #000',
    background: 'none',
    padding: '0',
    outline: 'none'
  }}/>
}

/**
 * @augments {React.Component<{onClick?: (event: ClickEvent) => void}, {}>}
 */
class Refresh extends React.PureComponent {
  render = () => <button className="material-icons" aria-label="refresh stats" style={{
    border: 'none',
    padding: '0',
    margin: '0',
    background: 'none'
  }} onClick={this.props.onClick}>autorenew</button>
}

/**
 * @augments {React.Component<{name: string, value: string|number, nameStyle?: CSSStyleDeclaration, valueStyle?: CSSStyleDeclaration}, {}>}
 */
class Stat extends React.PureComponent {
  render = () => <tr tabIndex="0" aria-label={'Player ' + this.props.name + ' ' + this.props.value}>
    <td style={Object(this.props.nameStyle)}>{this.props.name}</td>
    <td style={{paddingLeft: '4rem', textAlign: 'right', ...Object(this.props.valueStyle)}}>{
      (this.props.value + '').split('').reverse().join('').replace(/(\d\d\d)/g, '$1,').replace(/,$/, '').split('').reverse().join('')
    }</td>
  </tr>
}

/**
 * @augments {React.Component<{title: string, open?: boolean, }, {}>}
 */
class Section extends React.Component {
  render = () => <details open={this.props.open}><summary>{this.props.title}</summary>{this.props.children}</details>
}

/**
 * @augments {React.Component<{...children: Stat[]}, {}>}
 */
class Stats extends React.PureComponent {
  render = () => <table tabIndex="0" role="group" aria-label="User stats" style={{fontSize: '.7em'}}><tbody>{this.props.children}</tbody></table>
}

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.throttleLookup = throttle(this.lookupPlayer.bind(this), 1500)
  }
  
  state = {
    username: '',
    data: null,
    loading: false,
    writing: false
  }

  componentDidMount() {
    this.setState({
      username: localStorage.getItem('osu_username') || '',
      data: test(()=>JSON.parse(localStorage.getItem('osu_data'))) || void 0
    })
  }

  lookupPlayer() {
    const username = this.state.username
    if (username !== '') {
      this.setState({loading: true, writing: false})
      fetch(`https://osu.ppy.sh/api/get_user?k=1f76c94d5d7b242be46edf656907abeb4f9dfaee&u=${encodeURIComponent(username)}&m=0&event_days=31&type=string`)
        .then(call('json'))
        .then(([user]) => {
          const newState = {data:user,loading: false}
          if (user === undefined)
            return void this.setState(newState)
          this.setState(newState)
          localStorage.setItem('osu_username', username)
          localStorage.setItem('osu_data', JSON.stringify(user))
        })
    } else {
      localStorage.setItem('osu_username', '')
      localStorage.setItem('osu_data', '{}')
      this.setState({loading: false, writing: false})
    }
  }

  handleInput(e) {
    this.setState({username: e.target.value, writing: true})
    this.throttleLookup()
  }

  render() {
    return (
      <Layout>
        <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end'}}>
          <div>
            <Username value={this.state.username} onChange={this.handleInput.bind(this)}/>
            <Refresh onClick={this.lookupPlayer.bind(this)}/>
            {this.state.data || this.state.username === '' || this.state.writing ? (
              <span></span>
            ) : this.state.loading ? (
              <span>Awaiting responce</span>
            ) : (
              <span style={{color: '#f00'}}>No such user</span>
            )}
            {this.state.data && <Stats>
              <Stat name="Rank" value={this.state.data.pp_rank}/>
              <Stat name="Country Rank" value={this.state.data.pp_country_rank}/>
              <Stat name="Performance Points" value={this.state.data.pp_raw | 0 + ''}/>
              <Stat name="Accuracy" value={this.state.data.accuracy && this.state.data.accuracy.slice(0, 5) + '%'}/>
              <Stat name="SS+" value={this.state.data.count_rank_ssh}/>
              <Stat name="SS" value={this.state.data.count_rank_ss}/>
              <Stat name="S+" value={this.state.data.count_rank_sh}/>
              <Stat name="S" value={this.state.data.count_rank_s}/>
              <Stat name="A" value={this.state.data.count_rank_a}/>
            </Stats>}
          </div>
          <div style={{marginRight: '1rem'}}>
            <ProfilePicture userid={this.state.data && this.state.data.user_id}/>
            {this.state.data && <Flag country={this.state.data.country} size='3rem' style={{float: 'right'}}/>}
            <UserLevel
              level={this.state.data && (this.state.data.level | 0)}
              progress={this.state.data ? (this.state.data.level - (this.state.data.level | 0)) * 100 : 0}
            />
          </div>
        </div>
        {this.state.data && <div>
          <h3>Activity</h3>
          <style>{'.activity:has(>img){transform:translateX(1.5rem)}b{font-weight:bold}.activity>img{height:1em;width:1em;}'}</style>
          {this.state.data.events && this.state.data.events.map(({date, display_html}, i) =>
            <div key={i} className="activity" dangerouslySetInnerHTML={{
              __html: display_html
                .replace(/\\(\/|")/g, '$1')
                .replace('/u', 'https://osu.ppy.sh/users')
                .replace('/s', 'https://osu.ppy.sh/beatmapsets')
                .replace(/[^<]\/b/, 'https://osu.ppy.sh/b')
                .replace(/\/images\/(.+)_(.+)\.png/, (_, rank, size) => `https://osu.ppy.sh/images/badges/score-ranks/Score-${rank === 'SH' ? 'SPlus' : rank}-${size[0].toUpperCase() + size.slice(1)}-60.png`)
            }}></div>
          )}
          <Section title="Event" open>
            Hello
            {/* <APIRequest url="https://osu.ppy.sh/api/get_user" query={{
              k: '1f76c94d5d7b242be46edf656907abeb4f9dfaee',
              u: 'Poro Shadows',
              m: 0,
              event_days: 31,
              type: 'string'
            }}>
              {props => <p>{JSON.stringify(props.apiData)}</p>}
            </APIRequest> */}
          </Section>
        </div>}
        <Slider width="12.5em" height=".25em" thumbSize="1.5em" min="0" max="100" value="50"/>
      </Layout>
    )
  }
}

function throttle(f, delay){
  var timer = null;
  return function(){
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = window.setTimeout(function(){
      f.apply(context, args);
    },
    delay || 500);
  };
}
