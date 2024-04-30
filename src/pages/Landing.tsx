import style from './Landing.module.scss'

const Landing = () => {
  return (
    <main className={style.landing}>
      <section className={style.introduction}>
        <div className={style['my-name']}>
          I'M <span className="name">Thuan Luong</span>
        </div>
        <span className={style.role}>
          - a Web Developer from Khanh Hoa, Viet Nam
        </span>
      </section>
    </main>
  )
}

export default Landing
