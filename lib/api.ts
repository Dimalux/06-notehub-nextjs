// import axios from "axios";
// import { Note, NewNote } from "../types/note";

// const BASE_URL = "https://notehub-public.goit.study/api";

// // Захисник від подвійних запитів
// let lastRequestTime = 0;
// const REQUEST_DELAY = 500; // мс

// interface NotesResponse {
//   notes: Note[];
//   totalPages: number;
// }

// // Додаємо тип для помилки Axios
// interface AxiosErrorResponse {
//   response?: {
//     status: number;
//     data?: any;
//   };
//   message: string;
// }

// export const fetchNotes = async (
//   page = 1,
//   perPage = 12,
//   search = ""
// ): Promise<NotesResponse> => {
//   const now = Date.now();
//   if (now - lastRequestTime < REQUEST_DELAY) {
//     console.log("Запит відхилено: занадто швидко після попереднього");
//     throw new Error("Request too fast");
//   }
//   lastRequestTime = now;

//   try {
//     const response = await axios.get<NotesResponse>(`${BASE_URL}/notes`, {
//       params: { page, perPage, search },
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Помилка запиту:", error);
//     throw error;
//   }
// };

// export const createNote = async (note: NewNote): Promise<Note> => {
//   try {
//     const response = await axios.post<Note>(`${BASE_URL}/notes`, note, {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Помилка створення:", error);
//     throw error;
//   }
// };

// export const deleteNote = async (id: string): Promise<Note> => {
//   try {
//     const response = await axios.delete<Note>(`${BASE_URL}/notes/${id}`, {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Помилка видалення:", error);
//     throw error;
//   }
// };

// export const getSingleNote = async (id: string): Promise<Note> => {
//   // Додаємо валідацію ID
//   if (!id || typeof id !== "string" || id.trim() === "") {
//     throw new Error("Неправильний формат ID нотатки");
//   }

//   const now = Date.now();
//   if (now - lastRequestTime < REQUEST_DELAY) {
//     console.log("Запит відхилено: занадто швидко після попереднього");
//     throw new Error("Request too fast");
//   }
//   lastRequestTime = now;

//   try {
//     const response = await axios.get<Note>(`${BASE_URL}/notes/${id}`, {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });

//     return response.data;
//   } catch (error: unknown) { // ЗМІНА ТУТ: замість any використовуємо unknown
//     // Спеціальна обробка для 404 помилки
//     if (axios.isAxiosError(error)) {
//       if (error.response?.status === 404) {
//         throw new Error(`Нотатку з ID "${id}" не знайдено`);
//       }

//       // Обробка інших помилок
//       if (error.response?.status === 401) {
//         throw new Error("Помилка авторизації. Перевірте токен доступу");
//       }
//     }

//     console.error("Помилка отримання нотатки:", error);

//     // Обробка звичайних помилок
//     if (error instanceof Error) {
//       throw error;
//     }

//     throw new Error("Невідома помилка при отриманні нотатки");
//   }
// };

// // Додаємо функцію для дебагінга
// export const getAllNotesForDebug = async (): Promise<Note[]> => {
//   try {
//     const response = await axios.get(`${BASE_URL}/notes?page=1&perPage=100`, {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });
//     console.log("Всі нотатки:", response.data.notes);
//     return response.data.notes;
//   } catch (error) {
//     console.error("Помилка отримання нотаток:", error);
//     return [];
//   }
// };

// import axios from "axios";
// import { Note, NewNote } from "../types/note";

// const BASE_URL = "https://notehub-public.goit.study/api";

// // Захисник від подвійних запитів
// let lastRequestTime = 0;
// const REQUEST_DELAY = 500; // мс

// interface NotesResponse {
//   notes: Note[];
//   totalPages: number;
// }

// export const fetchNotes = async (
//   page = 1,
//   perPage = 12,
//   search = ""
// ): Promise<NotesResponse> => {
//   const now = Date.now();
//   if (now - lastRequestTime < REQUEST_DELAY) {
//     console.log("Запит відхилено: занадто швидко після попереднього");
//     throw new Error("Request too fast");
//   }
//   lastRequestTime = now;

//   try {
//     const response = await axios.get<NotesResponse>(`${BASE_URL}/notes`, {
//       params: { page, perPage, search },
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Помилка запиту:", error);
//     throw error;
//   }
// };

// export const createNote = async (note: NewNote): Promise<Note> => {
//   try {
//     const response = await axios.post<Note>(`${BASE_URL}/notes`, note, {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Помилка створення:", error);
//     throw error;
//   }
// };

// export const deleteNote = async (id: string): Promise<Note> => {
//   try {
//     const response = await axios.delete<Note>(`${BASE_URL}/notes/${id}`, {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Помилка видалення:", error);
//     throw error;
//   }
// };

// export const getSingleNote = async (id: string): Promise<Note> => {
//   // Додаємо валідацію ID
//   if (!id || typeof id !== "string" || id.trim() === "") {
//     throw new Error("Неправильний формат ID нотатки");
//   }

//   const now = Date.now();
//   if (now - lastRequestTime < REQUEST_DELAY) {
//     console.log("Запит відхилено: занадто швидко після попереднього");
//     throw new Error("Request too fast");
//   }
//   lastRequestTime = now;

//   try {
//     const response = await axios.get<Note>(`${BASE_URL}/notes/${id}`, {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });

//     return response.data;
//   } catch (error: unknown) {
//     // Спеціальна обробка для 404 помилки
//     if (axios.isAxiosError(error)) {
//       if (error.response?.status === 404) {
//         throw new Error(`Нотатку з ID "${id}" не знайдено`);
//       }

//       // Обробка інших помилок
//       if (error.response?.status === 401) {
//         throw new Error("Помилка авторизації. Перевірте токен доступу");
//       }
//     }

//     console.error("Помилка отримання нотатки:", error);

//     // Обробка звичайних помилок
//     if (error instanceof Error) {
//       throw error;
//     }

//     throw new Error("Невідома помилка при отриманні нотатки");
//   }
// };

// // Додаємо функцію для дебагінга
// export const getAllNotesForDebug = async (): Promise<Note[]> => {
//   try {
//     const response = await axios.get<{notes: Note[]}>(`${BASE_URL}/notes?page=1&perPage=100`, {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });
//     console.log("Всі нотатки:", response.data.notes);
//     return response.data.notes;
//   } catch (error) {
//     console.error("Помилка отримання нотаток:", error);
//     return [];
//   }
// };

// import axios from "axios";
// import { Note, NewNote } from "../types/note";

// const BASE_URL = "https://notehub-public.goit.study/api";

// // Захисник від подвійних запитів (тільки для клієнтських запитів)
// let lastRequestTime = 0;
// const REQUEST_DELAY = 500; // мс

// interface NotesResponse {
//   notes: Note[];
//   totalPages: number;
// }

// // Допоміжна функція для перевірки, чи виконується на клієнті
// const isClient = () => typeof window !== 'undefined';

// const shouldCheckRateLimit = () => {
//   return isClient();
// };

// export const fetchNotes = async (
//   page = 1,
//   perPage = 12,
//   search = ""
// ): Promise<NotesResponse> => {
//   // Перевіряємо rate limit тільки на клієнті
//   if (shouldCheckRateLimit()) {
//     const now = Date.now();
//     if (now - lastRequestTime < REQUEST_DELAY) {
//       console.log("Запит відхилено: занадто швидко після попереднього");
//       throw new Error("Request too fast");
//     }
//     lastRequestTime = now;
//   }

//   try {
//     const response = await axios.get<NotesResponse>(`${BASE_URL}/notes`, {
//       params: { page, perPage, search },
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Помилка запиту:", error);
//     throw error;
//   }
// };

// export const createNote = async (note: NewNote): Promise<Note> => {
//   try {
//     const response = await axios.post<Note>(`${BASE_URL}/notes`, note, {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Помилка створення:", error);
//     throw error;
//   }
// };

// export const deleteNote = async (id: string): Promise<Note> => {
//   try {
//     const response = await axios.delete<Note>(`${BASE_URL}/notes/${id}`, {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Помилка видалення:", error);
//     throw error;
//   }
// };

// export const getSingleNote = async (id: string): Promise<Note> => {
//   // Додаємо валідацію ID
//   if (!id || typeof id !== "string" || id.trim() === "") {
//     throw new Error("Неправильний формат ID нотатки");
//   }

//   // Перевіряємо rate limit тільки на клієнті
//   if (shouldCheckRateLimit()) {
//     const now = Date.now();
//     if (now - lastRequestTime < REQUEST_DELAY) {
//       console.log("Запит відхилено: занадто швидко після попереднього");
//       throw new Error("Request too fast");
//     }
//     lastRequestTime = now;
//   }

//   try {
//     const response = await axios.get<Note>(`${BASE_URL}/notes/${id}`, {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });

//     return response.data;
//   } catch (error: unknown) {
//     // Спеціальна обробка для 404 помилки
//     if (axios.isAxiosError(error)) {
//       if (error.response?.status === 404) {
//         throw new Error(`Нотатку з ID "${id}" не знайдено`);
//       }

//       // Обробка інших помилок
//       if (error.response?.status === 401) {
//         throw new Error("Помилка авторизації. Перевірте токен доступу");
//       }
//     }

//     console.error("Помилка отримання нотатки:", error);

//     // Обробка звичайних помилок
//     if (error instanceof Error) {
//       throw error;
//     }

//     throw new Error("Невідома помилка при отриманні нотатки");
//   }
// };

// // Додаємо функцію для дебагінга
// export const getAllNotesForDebug = async (): Promise<Note[]> => {
//   try {
//     const response = await axios.get<{notes: Note[]}>(`${BASE_URL}/notes?page=1&perPage=100`, {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });
//     console.log("Всі нотатки:", response.data.notes);
//     return response.data.notes;
//   } catch (error) {
//     console.error("Помилка отримання нотаток:", error);
//     return [];
//   }
// };

// import axios from "axios";
// import { Note, NewNote, NotesResponse } from "../types/note";

// const BASE_URL = "https://notehub-public.goit.study/api";

// // Захисник від подвійних запитів (тільки для клієнтських запитів)
// let lastRequestTime = 0;
// const REQUEST_DELAY = 500; // мс

// // Допоміжна функція для перевірки, чи виконується на клієнті
// const isClient = () => typeof window !== 'undefined';

// const shouldCheckRateLimit = () => {
//   return isClient();
// };

// export const fetchNotes = async (
//   page = 1,
//   perPage = 12,
//   search = ""
// ): Promise<NotesResponse> => {
//   // Перевіряємо rate limit тільки на клієнті
//   if (shouldCheckRateLimit()) {
//     const now = Date.now();
//     if (now - lastRequestTime < REQUEST_DELAY) {
//       console.log("Запит відхилено: занадто швидко після попереднього");
//       throw new Error("Request too fast");
//     }
//     lastRequestTime = now;
//   }

//   try {
//     const response = await axios.get<NotesResponse>(`${BASE_URL}/notes`, {
//       params: { page, perPage, search },
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Помилка запиту:", error);
//     throw error;
//   }
// };

// export const createNote = async (note: NewNote): Promise<Note> => {
//   try {
//     const response = await axios.post<Note>(`${BASE_URL}/notes`, note, {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Помилка створення:", error);
//     throw error;
//   }
// };

// export const deleteNote = async (id: string): Promise<Note> => {
//   try {
//     const response = await axios.delete<Note>(`${BASE_URL}/notes/${id}`, {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Помилка видалення:", error);
//     throw error;
//   }
// };

// export const getSingleNote = async (id: string): Promise<Note> => {
//   // Додаємо валідацію ID
//   if (!id || typeof id !== "string" || id.trim() === "") {
//     throw new Error("Неправильний формат ID нотатки");
//   }

//   // Перевіряємо rate limit тільки на клієнті
//   if (shouldCheckRateLimit()) {
//     const now = Date.now();
//     if (now - lastRequestTime < REQUEST_DELAY) {
//       console.log("Запит відхилено: занадто швидко після попереднього");
//       throw new Error("Request too fast");
//     }
//     lastRequestTime = now;
//   }

//   try {
//     const response = await axios.get<Note>(`${BASE_URL}/notes/${id}`, {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });

//     return response.data;
//   } catch (error: unknown) {
//     // Спеціальна обробка для 404 помилки
//     if (axios.isAxiosError(error)) {
//       if (error.response?.status === 404) {
//         throw new Error(`Нотатку з ID "${id}" не знайдено`);
//       }

//       // Обробка інших помилок
//       if (error.response?.status === 401) {
//         throw new Error("Помилка авторизації. Перевірте токен доступу");
//       }
//     }

//     console.error("Помилка отримання нотатки:", error);

//     // Обробка звичайних помилок
//     if (error instanceof Error) {
//       throw error;
//     }

//     throw new Error("Невідома помилка при отриманні нотатки");
//   }
// };

// // Додаємо функцію для дебагінга
// export const getAllNotesForDebug = async (): Promise<Note[]> => {
//   try {
//     const response = await axios.get<{notes: Note[]}>(`${BASE_URL}/notes?page=1&perPage=100`, {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//       },
//     });
//     console.log("Всі нотатки:", response.data.notes);
//     return response.data.notes;
//   } catch (error) {
//     console.error("Помилка отримання нотаток:", error);
//     return [];
//   }
// };

import axios from "axios";
import { Note, NewNote, NotesResponse } from "../types/note";

const BASE_URL = "https://notehub-public.goit.study/api";

// Захисник від подвійних запитів (тільки для клієнтських запитів)
let lastRequestTime = 0;
const REQUEST_DELAY = 500; // мс

// Допоміжна функція для перевірки, чи виконується на клієнті
const isClient = () => typeof window !== "undefined";

const shouldCheckRateLimit = () => {
  return isClient();
};

export const fetchNotes = async (
  page = 1,
  perPage = 12,
  search = ""
): Promise<NotesResponse> => {
  // Перевіряємо rate limit тільки на клієнті
  if (shouldCheckRateLimit()) {
    const now = Date.now();
    if (now - lastRequestTime < REQUEST_DELAY) {
      console.log("Запит відхилено: занадто швидко після попереднього");
      throw new Error("Request too fast");
    }
    lastRequestTime = now;
  }

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

export const fetchNoteById = async (id: string): Promise<Note> => {
  // Додаємо валідацію ID
  if (!id || typeof id !== "string" || id.trim() === "") {
    throw new Error("Неправильний формат ID нотатки");
  }

  // Перевіряємо rate limit тільки на клієнті
  if (shouldCheckRateLimit()) {
    const now = Date.now();
    if (now - lastRequestTime < REQUEST_DELAY) {
      console.log("Запит відхилено: занадто швидко після попереднього");
      throw new Error("Request too fast");
    }
    lastRequestTime = now;
  }

  try {
    const response = await axios.get<Note>(`${BASE_URL}/notes/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
    });

    return response.data;
  } catch (error: unknown) {
    // Спеціальна обробка для 404 помилки
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error(`Нотатку з ID "${id}" не знайдено`);
      }

      // Обробка інших помилок
      if (error.response?.status === 401) {
        throw new Error("Помилка авторизації. Перевірте токен доступу");
      }
    }

    console.error("Помилка отримання нотатки:", error);

    // Обробка звичайних помилок
    if (error instanceof Error) {
      throw error;
    }

    throw new Error("Невідома помилка при отриманні нотатки");
  }
};

// Додаємо функцію для дебагінга
export const getAllNotesForDebug = async (): Promise<Note[]> => {
  try {
    const response = await axios.get<{ notes: Note[] }>(
      `${BASE_URL}/notes?page=1&perPage=100`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
        },
      }
    );
    console.log("Всі нотатки:", response.data.notes);
    return response.data.notes;
  } catch (error) {
    console.error("Помилка отримання нотаток:", error);
    return [];
  }
};
