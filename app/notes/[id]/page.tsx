import { getSingleNote } from "@/lib/api";
import NoteDetails from "@/components/NoteDetails/NoteDetails";

const NoteDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  try {
    const note = await getSingleNote(id);

    return <NoteDetails note={note} />;
  } catch (error: any) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Помилка</h1>
        <p>{error.message}</p>
      </div>
    );
  }
};

export default NoteDetailPage;
