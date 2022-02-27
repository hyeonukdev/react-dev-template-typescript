import { useState } from 'react'
import { HashRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { GlobalStyle } from './global-styles'
import Router from './Router'
import { themeList } from './config/theme'
import ThemeContext from './context/ThemeContext'
import { LIGHT } from './constants/Theme'
import 'antd/dist/antd.css'

const App = () => {
  const [theme, setTheme] = useState<THEME>(LIGHT)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GlobalStyle theme={theme === LIGHT ? themeList.light : themeList.dark} />
      <HashRouter>
        <Router />
      </HashRouter>
    </ThemeContext.Provider>
  )
}

export default hot(module)(App)
