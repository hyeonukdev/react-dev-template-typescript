import { useState } from 'react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global-styles'
import { lightTheme, darkTheme } from './theme'

const App = () => {
  const [themeMode, setThemeMode] = useState('light')
  const styledTheme = themeMode === 'light' ? lightTheme : darkTheme
  const toggleTheme = () =>
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')

  return (
    <RecoilRoot>
      <ThemeProvider theme={styledTheme}>
        <GlobalStyle />
        <button
          style={{ height: '30px', width: '100px' }}
          onClick={toggleTheme}
        >
          Dark Mode!
        </button>
        <footer />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
