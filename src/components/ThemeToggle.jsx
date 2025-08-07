import React from 'react'
import { useTheme } from '../context/ThemeProvider';

const ThemeToggle = () => {
 const { toggleTheme } = useTheme();


  return (
    <div>
        <button onClick={toggleTheme}>Cambiar Tema</button>
    </div>
  )
}

export default ThemeToggle