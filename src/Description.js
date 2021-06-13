// DO NOT DELETE
import React, { useState } from 'react'
import { DogImage } from './DogImage'
import Button from '@material-ui/core/Button'

const DOGAPIURL = 'https://dog.ceo/api/breeds/image/random'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/germanshepherd/n02106662_597.jpg',
  )

  const updateDogUrl = async () => {
    const res = await fetch(DOGAPIURL)
    if (!res.ok) return

    const { message, status } = await res.json()

    if (status === 'success') {
      setDogUrl(message)
    }
  }

  return (
    <>
      <h2 className="description">犬の画像を表示するサイト</h2>
      <div className="content">
        <DogImage url={dogUrl} />
        <div className="dog-button">
          <Button onClick={updateDogUrl} variant="contained" color="primary">
            更新
          </Button>
        </div>
      </div>
    </>
  )
}
