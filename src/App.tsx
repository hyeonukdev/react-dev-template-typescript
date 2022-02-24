import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global-styles'
import { lightTheme, darkTheme } from './theme'

const App = () => {
  const [themeMode, setThemeMode] = useState('light')
  const styledTheme = themeMode === 'light' ? lightTheme : darkTheme
  const toggleTheme = () =>
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')

  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyle />
      <div>
        <button
          style={{ height: '30px', width: '100px' }}
          onClick={toggleTheme}
        >
          Dark Mode!
        </button>
      </div>
    </ThemeProvider>
  )
}

export default App
