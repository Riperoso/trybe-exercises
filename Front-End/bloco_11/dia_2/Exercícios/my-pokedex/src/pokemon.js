import React from 'react'
import PropTypes from 'prop-types'

class Pokemon extends React.Component {
  render() {

    const { infoPoke } = this.props

    return <div className='Pokemon'>
      <p>name: {infoPoke.name}</p>
      <p>type: {infoPoke.type}</p>
      <p>Average Weight: {infoPoke.averageWeight.value} {infoPoke.averageWeight.measurementUnit}</p>
      <img src={infoPoke.image} alt={infoPoke.name}/>
    </div>
  }
};

Pokemon.propTypes = {
  infoPoke: PropTypes.shape({
    id : PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    genre: PropTypes.string,
  })
}

export default Pokemon