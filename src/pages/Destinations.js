import React from 'react'
import ReviewList from '../components/ReviewList'
import { useParams } from 'react-router-dom'

const Destinations = () => {

    const { destination } = useParams();

    return (
        <div>
            Placeholder text
        </div>
    )
}

export default Destinations
