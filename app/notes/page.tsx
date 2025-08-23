import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";
import { NotesResponse } from "@/lib/api";

interface NotesPageProps {
  searchParams: Promise<{
    page?: string;
    search?: string;
  }>;
}

export default async function NotesPage({ searchParams }: NotesPageProps) {
  // Розпаковуємо Promise
  const resolvedSearchParams = await searchParams;
  const page = parseInt(resolvedSearchParams.page || "1");
  const searchQuery = resolvedSearchParams.search || "";

  // Отримуємо дані на сервері
  const notesData: NotesResponse = await fetchNotes(page, 12, searchQuery);

  return (
    <NotesClient
      initialData={notesData}
      initialPage={page}
      initialSearchQuery={searchQuery}
    />
  );
}
