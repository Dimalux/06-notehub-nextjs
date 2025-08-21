import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link"; // Додаємо цей імпорт
import { Note } from "@/types/note";
import styles from "@/components/NoteList/NoteList.module.css";
import { deleteNote } from "@/lib/api";

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  const queryClient = useQueryClient();

  const deleteNoteMutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (error) => {
      console.error("Помилка при видаленні нотатки:", error);
    },
  });

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.preventDefault(); // Запобігаємо переходу по посиланню
    e.stopPropagation(); // Зупиняємо спливання події
    
    if (window.confirm("Ви впевнені, що хочете видалити цю нотатку?")) {
      deleteNoteMutation.mutate(id);
    }
  };

  return (
    <ul className={styles.list}>
      {notes.map((note) => (
        <li key={note.id} className={styles.listItem}>
          {/* Додаємо посилання на детальну сторінку */}
          <Link href={`/notes/${note.id}`} className={styles.cardLink}>
            <h2 className={styles.title}>{note.title}</h2>
            <p className={styles.content}>{note.content}</p>
          </Link>
          
          <div className={styles.footer}>
            <span className={styles.tag}>{note.tag}</span>
            <button
              className={styles.button}
              onClick={(e) => handleDelete(note.id, e)} // Змінюємо обробник
              disabled={deleteNoteMutation.isPending}
            >
              {deleteNoteMutation.isPending ? "Видалення..." : "Delete"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}