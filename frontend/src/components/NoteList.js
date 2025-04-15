import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { BASE_URL } from "../utils";

function NoteList() {
    const [notes, setNotes] = useState([]);

    useEffect(() =>{
        getNotes();
    }, []);

    const getNotes = async () => {
        const response = await axios.get(`${BASE_URL}/notes`);
        setNotes(response.data);
    };

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
        <Link to={'add'} className='button is-info is-small is-fullwidth'>Add Note</Link>
            <table className='table is-fullwidth'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((note, index)=>(
                    <tr key={note.id}>
                        <td>{note.title}</td>
                        <td>
                            <Link to={`detail/${note.id}`} className='button is-info is-small'>See</Link>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default NoteList