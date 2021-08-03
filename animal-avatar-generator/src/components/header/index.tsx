import { useState } from 'react'
import { Avatar } from '../avatar'
import './index.scss'

export const Header = () => {
  const [text, setText] = useState('')

  return (
    <div className="header">
      <div className="top">
        <h1 className="title">
          Animal Avatar Generator
        </h1>
        <div className="avatar">
          <Avatar name={text} size={350}/>
        </div>
      </div>
      <div className="bottom">
        <input
          className="input"
          type="text"
          placeholder="Type your name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="description">
          Animal Avatar Generator creates SVG avatars on client side from a string seed.<br/>
          As long as the same version of the library is used it always returns the same avatar
          for the corresponding seed.
        </div>
      </div>
    </div>
  )
}
