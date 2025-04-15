import express from "express";
import { addNote, deleteNote, getNote, getNoteById, updateNote } from "../controllers/noteController.js";

const router = express.Router();

router.get('/notes', getNote);
router.get('/notes/:id', getNoteById);
router.post('/notes', addNote);
router.patch('/notes/:id', updateNote);
router.delete('/notes/:id', deleteNote);

export default router;