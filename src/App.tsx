import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { HashRouter } from 'react-router-dom'
import { GlobalStyle } from './global-styles'
import { lightTheme, darkTheme } from './theme'
import Router from './Router'

const App = () => {
  const [themeMode, setThemeMode] = useState('light')
  const styledTheme = themeMode === 'light' ? lightTheme : darkTheme
  const toggleTheme = () =>
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')

  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyle />
      <HashRouter>
        <Router />
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
