import { useState } from 'react'
import { Header } from './header'
import { Avatar } from '../avatar'
import './index.scss'

export const Promo = () => {
  const [text, setText] = useState('')

  return (
    <div className="promo">
      <Header />

      <div className="avatar-container">
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
