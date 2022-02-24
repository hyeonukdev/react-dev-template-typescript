import { useContext } from 'react'
import { Switch } from 'antd'
import { LIGHT, DARK } from '../constants/Theme'
import ThemeProvider from '../context/ThemeContext'

const ThemeToggleSwitch = () => {
  const { theme, setTheme } = useContext(ThemeProvider)
  const getOppositeTheme = () => {
    return theme === LIGHT ? DARK : LIGHT
  }

  const handleOnClickToggle = () => setTheme(getOppositeTheme())
  return (
    <>
      <Switch
        checkedChildren="🌞"
        unCheckedChildren="🌚"
        checked={theme === LIGHT}
        onClick={handleOnClickToggle}
      />
    </>
  )
}

export default ThemeToggleSwitch
