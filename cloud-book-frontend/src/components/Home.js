import React from 'react'
import Notes from './Notes'

const Home = (props) => {
 
  // const [notes,setNotes] = context;
  const {showAlert} = props;
  return (
    <div>
      <Notes showAlert={showAlert}/>
    </div>
  )
}

export default Home
