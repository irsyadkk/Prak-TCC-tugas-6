import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link,useNavigate,useParams } from 'react-router-dom';
import { BASE_URL } from "../utils";

function DetailNote() {
    const [notes, setNotes] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() =>{
        getNoteById();
    }, []);

    const getNoteById = async () =>{
        const response = await axios.get(`${BASE_URL}/notes/${id}`);
        setNotes(response.data);
    }

    const deleteNote = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/notes/${id}`);
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <div className="title">
            {notes.title}
            </div>
            <table className='table is-fullwidth'>
                <tbody>
                    <tr>
                        <th>
                        <Link to={`../../edit/${notes.id}`} className='button is-info is-small is-fullwidth'>Edit</Link>
                        </th>
                        <th>
                        <button onClick={()=> deleteNote(notes.id)} className='button is-danger is-small is-fullwidth'>Delete</button>
                        </th>
                    </tr>
                </tbody>
            </table>
            <table className='table is-fullwidth'>
                <thead>
                    <tr>
                        <th>{notes.content}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Link to={'../..'} className='button is-info is-fullwidth'>OK</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DetailNote