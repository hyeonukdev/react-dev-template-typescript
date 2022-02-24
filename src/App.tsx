import { createContext } from 'react'
import { HashRouter } from 'react-router-dom'
import { GlobalStyle } from './global-styles'
import Router from './Router'
import { Theme } from './interfaces'
import { themeList } from './config/theme'
import useDarkMode from './hooks/useDarkMode'

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: Theme.LIGHT,
  toggleTheme: () => {
    // eslint-disable-next-line no-console
    console.error(
      '[Starter] you should set { theme, toggleTheme } value with useDarkMode(...)'
    )
    return null
  }
})

const App = () => {
  const { theme, toggleTheme } = useDarkMode(Theme.LIGHT)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GlobalStyle
        theme={theme === Theme.LIGHT ? themeList.light : themeList.dark}
      />
      <HashRouter>
        <Router />
      </HashRouter>
    </ThemeContext.Provider>
  )
}

export default App
