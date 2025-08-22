import { Note } from "@/types/note";
import styles from "@/components/NoteDetails/NoteDetails.module.css";

interface NoteDetailsProps {
  note: Note;
}

export default function NoteDetails({ note }: NoteDetailsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.header}>
          <h2>{note.title}</h2>
        </div>
        
        <p className={styles.content}>{note.content}</p>
        
        <p className={styles.date}>
          {note.createdAt && new Date(note.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}





