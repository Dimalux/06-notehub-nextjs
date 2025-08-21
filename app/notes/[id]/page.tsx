import { getSingleNote } from "@/lib/api";
import NoteDetails from "@/components/NoteDetails/NoteDetails";


interface ApiError {
  message: string; 
}

const NoteDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  try {
    const note = await getSingleNote(id);

    return <NoteDetails note={note} />;
 } catch (error) {
    const apiError = error as ApiError;

    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Помилка</h1>
        <p>{apiError.message}</p>
      </div>
    );
  }
};

export default NoteDetailPage;



