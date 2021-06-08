// DO NOT DELETE

import React from 'react'
import { Header } from './Header'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Description />
      </main>

      <DogListContainer />
    </>
  )
}
