import React from 'react'
import RDPhoto from '../../../Public/Images/RideDiaries.png'
import './RideDiariesStyles.scss'

const RideDiaries = () => {
  return (
    <div id='RDCard'>
      <a href='https://ridediaries.herokuapp.com/' id='RDTitle'>RideDiaries</a>
      <br/>
      <img src={RDPhoto} alt='CoronaFilesPagePhoto' id='RDPhoto'/>
      <p id='RDWriteUp'>RideDiaries is a blogging platform specifically for cyclists built using a React front-end and Ruby on Rails on the back-end.  Users create their blogposts using the Markdown based text editor Showdown. JSON Web Tokens are utilized for authentication.  Click here for a link to the project hosted on Heroku.</p>
    </div>
  )
}

export default RideDiaries
