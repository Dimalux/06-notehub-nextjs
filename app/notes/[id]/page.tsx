// import { notFound } from 'next/navigation';
// import { Note, NewNote } from "@/types/note";


// // Функція для отримання нотатки (замініть на реальну реалізацію)
// async function getNoteById(id: string): Promise<Note | null> {
//   // Тут буде ваша логіка отримання нотатки з бази даних або API
//   // Наприклад:
//   // const response = await fetch(`/api/notes/${id}`);
//   // return response.json();
  
//   // Заглушка для прикладу:
//   const notes: Note[] = [
//     { id: '1', title: 'Перша нотатка', content: 'Це вміст першої нотатки', createdAt: new Date() },
//     { id: '2', title: 'Друга нотатка', content: 'Це вміст другої нотатки', createdAt: new Date() },
//   ];
  
//   return notes.find(note => note.id === id) || null;
// }

// interface NotePageProps {
//   params: Promise<{ id: string }>;
// }

// export default async function NotePage({ params }: NotePageProps) {
//   const { id } = await params;
//   const note = await getNoteById(id);

//   if (!note) {
//     notFound();
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold mb-4">{note.title}</h1>
//         <div className="text-gray-600 mb-4">
//           Створено: {note.createdAt.toLocaleDateString()}
//         </div>
//         <div className="prose prose-lg">
//           <p className="whitespace-pre-wrap">{note.content}</p>
//         </div>
//         <div className="mt-8">
//           <a 
//             href="/notes" 
//             className="text-blue-500 hover:text-blue-700 underline"
//           >
//             ← Назад до списку нотаток
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export async function generateMetadata({ params }: NotePageProps) {
//   const { id } = await params;
//   const note = await getNoteById(id);
  
//   return {
//     title: note ? `${note.title} - NoteHub` : 'Нотатка не знайдена',
//   };
// }





const Notes = () => {
  return <div>[id]</div>;
};

export default Notes;