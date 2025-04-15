import Note from "../models/noteModel.js";

export const getNote = async(req,res) =>{
    try {
        const response = await Note.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
export const getNoteById = async(req,res) =>{
    try {
        const response = await Note.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const addNote = async(req,res) => {
    try {
        await Note.create(req.body);
        res.status(201).json({msg:"Note Added"});
    } catch (error) {
        console.log(error.message)
    }
}

export const updateNote = async(req,res) => {
    try {
        Note.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Note Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
export const deleteNote = async(req,res) => {
    try {
        Note.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Note Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}