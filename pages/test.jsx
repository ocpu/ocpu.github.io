import css from "../styles.sass"
import Layout from '../components/layout'

export default () => (
  <Layout>
    <Date>Torsdag</Date>
    <Event name="Samling inför Hackathon" time="09:00 - 10:00"></Event>
    <Event name="Hackaton" time="10:00 - 17:00"></Event>
    <Event name="The Fox &amp; Anchor, med eller utan karaoke" time="18:00"></Event>
    <Date>Fredag</Date>
    <Event name="Hackathon frukost" time="09:00 - 10:00"></Event>
    <Event name="Konferens med seminarier och presentationer" time="10:00 - 15:00"></Event>
    <Event name="Samtal, fika och allmänt häng, ev öppen kårpub" time="15:00 - 17:00"></Event>
    <Event name="Traditionell Grill med aktiviteter" time="17:00"></Event>
    <Event name="Kårpuben håller extra öppet för GrillCon gäster" time="17:00 - 23:00"></Event>
    <Date>Lördag</Date>
    <Event name="Utflykt i Foto- och Fritidsklubbens regi" time="09:00 - 14:00" end></Event>
  </Layout>
)

const Event = ({name, time, text, end, children}) => <div className={css.event}>
  <div className={css.time}>
    <span className={css['time-text']}>{time}</span>
    <span className={css.rest} hidden={!!end}></span>
  </div>
  <div className={css.info}>
    <h3 className={css.title}>{name}</h3>
    <p className={css.text}>{children}</p>
  </div>
</div>

const Date = ({children}) => <h2 className={css.day}>
  {children}
</h2>
