"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect } from "react";

interface JobDescriptionProps {
  content: string;
  title?: string;
}

export default function JobDescription({
  content,
  title = "Deskripsi Pekerjaan",
}: JobDescriptionProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Deskripsi pekerjaan belum tersedia.",
      }),
    ],
    content,
    editable: false,
    immediatelyRender: false,
  });

  // Keep in sync if content changes (e.g. navigating between slugs)
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  return (
    <div className="bg-white border border-line rounded-2xl p-6 flex flex-col gap-4">
      {title && (
        <h3 className="text-base font-semibold text-ink">{title}</h3>
      )}
      <div className="text-sm text-ink-muted leading-relaxed [&_p]:mb-3 [&_p:last-child]:mb-0 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:mt-6 [&_h2]:mb-3 [&_h2:first-child]:mt-0 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mt-6 [&_h3]:mb-3 [&_h3:first-child]:mt-0 [&_h4]:text-sm [&_h4]:font-semibold [&_h4]:text-ink [&_h4]:mt-4 [&_h4]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_ol]:mb-4 [&_li]:marker:text-teal [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-ink">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
