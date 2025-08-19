import axios from "axios";
import { Note, NewNote } from "../types/note";

const BASE_URL = "https://notehub-public.goit.study/api";

// Захисник від подвійних запитів
let lastRequestTime = 0;
const REQUEST_DELAY = 500; // мс

interface NotesResponse {
  notes: Note[];
  totalPages: number; 
}

export const fetchNotes = async (
  page = 1,
  perPage = 12,
  search = ""
): Promise<NotesResponse> => {
  const now = Date.now();
  if (now - lastRequestTime < REQUEST_DELAY) {
    console.log("Запит відхилено: занадто швидко після попереднього");
    throw new Error("Request too fast");
  }
  lastRequestTime = now;

  try {
    const response = await axios.get<NotesResponse>(`${BASE_URL}/notes`, {
      params: { page, perPage, search },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Помилка запиту:", error);
    throw error;
  }
};

export const createNote = async (note: NewNote): Promise<Note> => {
  try {
    const response = await axios.post<Note>(`${BASE_URL}/notes`, note, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Помилка створення:", error);
    throw error;
  }
};

export const deleteNote = async (id: string): Promise<Note> => {
  try {
    const response = await axios.delete<Note>(`${BASE_URL}/notes/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Помилка видалення:", error);
    throw error;
  }
};