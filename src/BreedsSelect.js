// DO NOT DELETE
import React from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

export const BreedsSelect = ({ breeds, selectHandler, selectedBreed }) => {
  const handleChange = event => {
    selectHandler(event.target.value)
  }

  return (
    <Select value={selectedBreed} onChange={handleChange}>
      {breeds.map(breed => (
        <MenuItem key={breed} value={breed}>
          {breed}
        </MenuItem>
      ))}
    </Select>
  )
}

BreedsSelect.propTypes = {
  breeds: PropTypes.array,
  selectHandler: PropTypes.func,
  selectedBreed: PropTypes.string,
}
