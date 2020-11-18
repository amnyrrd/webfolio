import React from 'react'
import CFPhoto from '../../../Public/Images/TheRona.png'
import './CoronaFilesStyles.scss'

const CoronaFiles = () => {
  return (
    <div id='CFCard'>
      <a href='https://coronafiles.herokuapp.com/' id ='CFTitle' >Corona Files</a>
      <br/>
      <img src={CFPhoto} alt='CoronaFilesPagePhoto' id='CFPhoto' className='CFPhotoAndWriteUp'/>
      <p id='CFWriteUp' className='CFPhotoAndWriteUp'>Corona Files is a tool designed to attempt to fight the spread of misinformation related to Covid-19. It is built with a React front-end with Ruby on Rails on the back-end. Users are able to add news they find relevant to the issue, and users can then vote on the article/link either 'True' or 'False'. The GoogleMaps API is used to filter items by location.</p>
    </div>
  )
}

export default CoronaFiles
