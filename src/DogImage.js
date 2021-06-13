// DO NOT DELETE
import React from 'react'
import PropTypes from 'prop-types'

export const DogImage = ({ url }) => {
  return <img className="dog-img" src={url}></img>
}

DogImage.propTypes = {
  url: PropTypes.string,
}
