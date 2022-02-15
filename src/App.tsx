import { useState } from 'react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global-styles'
import { lightTheme, darkTheme } from './theme'
import ReadWriteCount from './components/ReadWriteCount'
import ReadOnlyCount from './components/ReadOnlyCount'

const App = () => {
  const [themeMode, setThemeMode] = useState('light')
  const styledTheme = themeMode === 'light' ? lightTheme : darkTheme
  const toggleTheme = () =>
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')

  return (
    <RecoilRoot>
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

        <div style={{ border: '1px solid red' }}>
          <ReadOnlyCount />
          <br />
          <ReadWriteCount />
        </div>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
