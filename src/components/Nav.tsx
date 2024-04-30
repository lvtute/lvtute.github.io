import style from './Nav.module.scss'

const Nav = () => {
  return (
    <nav className={style.navbar}>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">What I'm working on</a>
        </li>
        <li>
          <a href="#">Coding notes</a>
        </li>
      </ul>
    </nav>
  )
}
export default Nav
