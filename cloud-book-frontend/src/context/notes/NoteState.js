import { useState } from "react";
import NoteContext from "./NoteContext";
import { baseUrl } from "../../url";
// props as param

const host = baseUrl;
const NoteState = (props) => {
  // const s1 = {
  //     name:'Ahmer',
  //     personality:'introvert'
  // }
  // const [state, setState] = useState(s1)
  // const update = ()=>{
  //     setTimeout(()=>{
  //         setState({
  //             name:'Ahm',
  //             personality:'extrovert'
  //         })
  //     },1000)
  // }
  const initNote = [];
  const [notes, setNotes] = useState(initNote);

  // Get all notes
  const getNotes = async () => {
    //API call
    const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "*cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token')
      }
    });
    let json = await response.json()
    setNotes(json);
  };

  // add note function
  const addNote = async (title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/addNote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "*cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // delete note function
  const deleteNote = async(id) => {
    //API call
    const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "*cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token')
      }
    });
    const json = await response.json();
    console.log(json)
    //Delete a note in client side
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  // edit note function
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "*cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);

    //Edit a note in client side
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        notes[index].title = title;
        notes[index].description = description;
        notes[index].tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote ,getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};
// state,update

export default NoteState;
