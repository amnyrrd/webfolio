import React from 'react'
import { Link } from 'react-router-dom';
import './BikeBlogStyles.scss'


const BikeBlog = () => {
  return (
    <div className='BikeBlog'>
      <ul id='GoalsList'>
      <li id='GoalsList'>When I have any free time, there's a very high likelihood I'm out riding bikes. If you're in Portland,  <Link to='/contact' id='ContactLink'>hit me up</Link> and let's go for a ride!</li>
      </ul>
    </div>
  )
}

export default BikeBlog
