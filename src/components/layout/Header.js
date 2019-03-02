import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div style = {headerStyle}>
      <h1>Todo App</h1>
      <Link to = "/" style = {navStyle}>Home</Link> | <Link to = "/about" style = {navStyle}>About</Link> | <Link to = "/contact" style = {navStyle}>Contact Us</Link>
    </div>
  )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const navStyle = {
  color: '#fff',
textDecoration: 'none'
}