import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './themes/global-styles'
import { lightTheme, darkTheme } from './themes/theme'

const App = () => {
  const [themeMode, setThemeMode] = useState('light')
  const styledTheme = themeMode === 'light' ? lightTheme : darkTheme
  const toggleTheme = () =>
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')

  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyle />
      <button style={{ height: '30px', width: '100px' }} onClick={toggleTheme}>
        Dark Mode!
      </button>
      <footer />
    </ThemeProvider>
  )
}

export default App
