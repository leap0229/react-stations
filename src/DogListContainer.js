import React, { useEffect, useState } from 'react'
import { BreedsSelect } from './BreedsSelect'

const DOGAPIURL = 'https://dog.ceo/api/breeds/list/all'

// DO NOT DELETE
export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')

  useEffect(() => {
    const initializeBreeds = async () => {
      const res = await fetch(DOGAPIURL)
      if (!res.ok) return

      const { message, status } = await res.json()

      if (status === 'success') {
        setBreeds(Object.keys(message))
      }
    }

    initializeBreeds()
  }, [])

  return (
    <>
      {breeds && (
        <BreedsSelect
          breeds={breeds}
          selectHandler={setSelectedBreed}
          selectedBreed={selectedBreed}
        />
      )}
    </>
  )
}
