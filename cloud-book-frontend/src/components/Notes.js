import React, { useContext,useEffect,useRef,useState} from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import {useNavigate} from 'react-router';

    const Notes = (props) => {
      let navigate = useNavigate();
    const context = useContext(NoteContext);
    const{getNotes,editNote} = context;
    useEffect(() => {
     if (localStorage.getItem('token')) {
       getNotes();
      }
      else{
        navigate('/login');
      }
    })
    const [note,setNote] = useState({id:'',etitle:"",edescription:"",etag:"default"});
    const ref = useRef(null)
    const refClose = useRef(null)
    const updateNote = (currentNote)=>{
        ref.current.click();
        setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
    }
    const handleClick = (e)=>{
      refClose.current.click();
      editNote(note.id,note.etitle,note.edescription,note.etag)
      props.showAlert('Note updated', 'success')
      // console.log(currentNote)
  }
  const onChange = (e)=>{
      setNote({...note,[e.target.name]:e.target.value})
  }
    
  return (
      <>
        
        <AddNote showAlert={props.showAlert}/>
        <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Your Note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <form className='my-3'>
                  <div className="mb-3 ">
                    <label htmlFor="etitle" className="form-label">Title</label>
                    <input type="text"  min={1} required className="form-control" onChange={onChange} value={note.etitle} id="etitle" name="etitle" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">Description</label>
                    <input type="text" min={5} required  className="form-control" onChange={onChange} value={note.edescription} id="edescription" name="edescription" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">Tag</label>
                    <input type="text" className="form-control" onChange={onChange} value={note.etag} id="etag" name="etag" />
                  </div>
              </form>
              </div>
              <div className="modal-footer">
                <button ref={refClose} type="button" className="btn btn-danger" data-bs-dismiss="modal">Discard Changes</button>
                <button disabled={note.etitle.length<1 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-dark">Save changes</button>
              </div>
            </div>
          </div>
        </div>
         <div className="container">
           <div className="row my-3">
          <h3>Your Notes</h3>
          <div className="container">
          {context.notes.length === 0 && 'No notes to display'}
          </div>
          {context.notes.map((initNote)=>{
            return <NoteItem key={initNote._id} updateNote={updateNote} note={initNote} showAlert={props.showAlert}/>
          })}
        </div>
         </div>
      
      </>
  )
}

export default Notes
