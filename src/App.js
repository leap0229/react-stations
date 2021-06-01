// DO NOT DELETE

import React, { useState } from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/germanshepherd/n02106662_597.jpg',
  )

  return (
    <>
      <header>Dog App</header>
      <div>
        <h2>犬の画像を表示するサイト</h2>
        <img src={dogUrl}></img>
      </div>
    </>
  )
}
