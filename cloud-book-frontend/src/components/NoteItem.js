import React, { useContext} from 'react'
import NoteContext from '../context/notes/NoteContext'

const NoteItem = (props) => {
   const {note,updateNote} = props 
   const context = useContext(NoteContext);
   const {deleteNote} = context;
  
  return (
      <div className="card col-sm-2 my-3 mx-3">
        <div className="card-body">
        <i className="fa-solid fa-trash mx-4" onClick={()=>{deleteNote(note._id);props.showAlert('Note deleted', 'success')}}></i><i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{updateNote(note)}}></i>
            <h5 className="card-title py-2">{note.title}</h5>
            <p className="card-text">{note.description}</p>
        </div>
      </div>
  )
}

export default NoteItem
