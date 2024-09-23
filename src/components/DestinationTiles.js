import React from 'react'

const DestinationTiles = ({ destinations }) => {

    // Component that is a tile listing a unique destination in the database. Once clicked it takes you to the DestinationPage where you can see the reviews for a destination. 

    return (
        <div className='destination-tiles'>
            <h3>{destinations}</h3>
        </div>
    )
}

export default DestinationTiles
