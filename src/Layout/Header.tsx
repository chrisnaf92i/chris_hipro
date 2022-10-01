import { MenuOutlined } from '@ant-design/icons'
import React from 'react'

export default function Header() {
  return (
    <header>
      <div></div>
      <h1>
        <a href='/'>
          <span className='subtitle'>
            Chris
          </span>
          <br/>
          Hipro
        </a>
      </h1>
      <button> <h1>  <MenuOutlined/>  </h1> </button>
    </header>
  )
}
