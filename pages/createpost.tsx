import React from 'react'
import CreateReviewForm from "../components/Forms/CreateReviewForm"
import Navbar from '../components/Navbar/'
function CreatePost(props){
  const addMeetupHandler = (enteredMeetupData) =>{
    console.log(enteredMeetupData)
  }
    return(
      <div>
        <Navbar />
        <CreateReviewForm onAddMeetup ={addMeetupHandler} />
 
      </div>
      
    )
}

export default CreatePost