// DO NOT DELETE
import React from 'react'
import PropTypes from 'prop-types'

export const BreedsSelect = ({ breeds, selectHandler, selectedBreed }) => {
  const handleChange = event => {
    selectHandler(event.target.value)
  }

  return (
    <select value={selectedBreed} onChange={handleChange}>
      {breeds.map(breed => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  )
}

BreedsSelect.propTypes = {
  breeds: PropTypes.array,
  selectHandler: PropTypes.func,
  selectedBreed: PropTypes.string,
}
