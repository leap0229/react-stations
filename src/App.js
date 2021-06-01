// DO NOT DELETE

import React, { useState } from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const DOGAPIURL = 'https://dog.ceo/api/breeds/image/random'

  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/germanshepherd/n02106662_597.jpg',
  )

  const updateDogUrl = async () => {
    const res = await fetch(DOGAPIURL)
    const { message } = await res.json()
    setDogUrl(message)
  }

  return (
    <>
      <header>Dog App</header>
      <div>
        <h2>犬の画像を表示するサイト</h2>
        <img src={dogUrl}></img>
        <button onClick={updateDogUrl}>更新</button>
      </div>
    </>
  )
}
