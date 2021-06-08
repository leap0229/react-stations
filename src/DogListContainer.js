import React, { useEffect, useState } from 'react'

const DOGAPIURL = 'https://dog.ceo/api/breeds/list/all'

// DO NOT DELETE
export const DogListContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    const initializeBreeds = async () => {
      const res = await fetch(DOGAPIURL)
      if (!res.ok) return

      const { message, status } = await res.json()

      if (status === 'success') {
        setBreeds(message)
      }
    }

    initializeBreeds()
  }, [])

  return (
    <>
      <div></div>
    </>
  )
}
