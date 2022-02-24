import { useState } from 'react'
import ThemeToggleSwitch from '../components/ThemeToggleSwitch'

function Home() {
  const [text, setText] = useState('')
  function onChange(e: any) {
    setText(e.target.value)
  }
  function onSubmit(e: any) {
    e.preventDefault()
    setText('')
  }
  return (
    <>
      <ThemeToggleSwitch />
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul />
    </>
  )
}

export default Home
