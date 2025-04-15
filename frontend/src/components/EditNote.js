import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from "../utils";

function EditNote() {
    const [title,setTitle]= useState("");
    const [content,setContent]= useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getNoteById();
    }, []);

    const updateNote = async (e) =>{
        e.preventDefault();
        try {
            await axios.patch(`${BASE_URL}/notes/${id}`,{
                title,
                content
            });
            navigate(`../../detail/${id}`);
        } catch (error) {
            console.log(error);
        }
    }

    const getNoteById = async () =>{
        const response = await axios.get(`${BASE_URL}/notes/${id}`);
        setTitle(response.data.title);
        setContent(response.data.content);
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateNote}>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input type="text" className="input" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title of your note' />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Content</label>
                    <div className="control">
                        <input type="textarea" className="input" value={content} onChange={(e)=>setContent(e.target.value)} placeholder='Content of your note' />
                    </div>
                </div>
                <div className="field">
                    <button type='submit' className='button is-success'>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditNote