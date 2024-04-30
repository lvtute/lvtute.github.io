import useBodyBackgroundColor from '@src/hooks/useBodyBackgroundColor'
import Landing from '@src/pages/Landing'

import styleVars from '@src/assets/style/themeVars.module.scss'
import Nav from './components/Nav'

const App = () => {
  useBodyBackgroundColor(styleVars.darkBackgroundColor)

  return (
    <>
      <Nav />
      <Landing />;
    </>
  )
}

export default App
