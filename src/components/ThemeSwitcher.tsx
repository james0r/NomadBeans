"use client"

import React, { useEffect } from 'react'

const ThemeSwitcher = () => {
  const [theme, setTheme] = React.useState('light')

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [theme])

  const onButtonClick = (e: any) => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button 
      onClick={onButtonClick}
      className="btn"
      >
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  )
}

export default ThemeSwitcher