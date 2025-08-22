import { fetchNoteById } from "@/lib/api";
import NoteDetails from "@/app/notes/[id]/NoteDetailsClient";

const NoteDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return <NoteDetails note={note} />;
};

export default NoteDetailPage;
