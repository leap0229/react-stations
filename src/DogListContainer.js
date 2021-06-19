import React, { useEffect, useState } from 'react'
import { BreedsSelect } from './BreedsSelect'
import { DogImage } from './DogImage'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import Button from '@material-ui/core/Button'

// DO NOT DELETE
export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')
  const [dogUrls, setDogUrls] = useState([])

  useEffect(() => {
    const initializeBreeds = async () => {
      const DOGAPIURL = 'https://dog.ceo/api/breeds/list/all'
      const res = await fetch(DOGAPIURL)
      if (!res.ok) return

      const { message, status } = await res.json()

      if (status === 'success') {
        const newBreeds = Object.keys(message)

        setBreeds(newBreeds)
        setSelectedBreed(newBreeds[0])
      }
    }

    initializeBreeds()
  }, [])

  const updateDogUrls = async () => {
    const DOGBYBREEDAPIURL = `https://dog.ceo/api/breed/${selectedBreed}/images/random/12`
    const res = await fetch(DOGBYBREEDAPIURL)
    if (!res.ok) return

    const { message, status } = await res.json()

    if (status === 'success') {
      setDogUrls(message)
    }
  }

  const dogImagesList = () => {
    return (
      <ImageList cols={3} rowHeight={480}>
        {dogUrls.map(dogUrl => (
          <ImageListItem key={dogUrl}>
            <DogImage url={dogUrl} />
          </ImageListItem>
        ))}
      </ImageList>
    )
  }

  return (
    <>
      {breeds.length !== 0 && (
        <div id="dog-select">
          <BreedsSelect
            breeds={breeds}
            selectHandler={setSelectedBreed}
            selectedBreed={selectedBreed}
          />
          <Button onClick={updateDogUrls} variant="contained" color="primary">
            表示
          </Button>
        </div>
      )}

      {dogUrls.length !== 0 && dogImagesList()}
    </>
  )
}
