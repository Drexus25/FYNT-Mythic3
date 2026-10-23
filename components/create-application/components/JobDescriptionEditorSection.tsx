"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect } from "react";

interface JobDescriptionEditorSectionProps {
  content: string;
  onChange: (html: string) => void;
}

export default function JobDescriptionEditorSection({
  content,
  onChange,
}: JobDescriptionEditorSectionProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Placeholder.configure({
        placeholder:
          "Tuliskan ringkasan peran, tanggung jawab utama, dan kualifikasi yang dicari...",
      }),
    ],
    content,
    editable: true,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Sync if external reset happens
  useEffect(() => {
    if (editor && content !== editor.getHTML() && content === "") {
      editor.commands.setContent("");
    }
  }, [editor, content]);

  const setLink = () => {
    if (!editor) return;
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Masukkan URL tautan:", previousUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  };

  return (
    <div className="bg-white border border-line rounded-2xl p-6 md:p-8 flex flex-col gap-5 shadow-xs">
      {/* Header */}
      <h2 className="text-base md:text-lg font-semibold text-ink">
        Deskripsi Pekerjaan
      </h2>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-ink">
          Deskripsi <span className="text-danger">*</span>
        </label>

        {/* TipTap Container */}
        <div className="border border-line rounded-xl overflow-hidden bg-white focus-within:border-teal focus-within:ring-1 focus-within:ring-teal transition-all">
          {/* Toolbar */}
          <div className="bg-gray-50/70 border-b border-line px-3 py-2 flex flex-wrap items-center gap-1.5 text-xs select-none">
            {/* Bold */}
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBold().run()}
              className={`w-7 h-7 rounded-lg font-bold flex items-center justify-center transition-all cursor-pointer ${
                editor?.isActive("bold")
                  ? "bg-teal text-white shadow-2xs"
                  : "text-ink hover:bg-gray-200/70"
              }`}
              title="Tebal (Ctrl+B)"
            >
              B
            </button>

            {/* Italic */}
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className={`w-7 h-7 rounded-lg italic font-serif flex items-center justify-center transition-all cursor-pointer ${
                editor?.isActive("italic")
                  ? "bg-teal text-white shadow-2xs"
                  : "text-ink hover:bg-gray-200/70"
              }`}
              title="Miring (Ctrl+I)"
            >
              I
            </button>

            {/* Bullet List */}
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
              className={`px-2 h-7 rounded-lg font-bold flex items-center justify-center gap-1 transition-all cursor-pointer ${
                editor?.isActive("bulletList")
                  ? "bg-teal text-white shadow-2xs"
                  : "text-ink hover:bg-gray-200/70"
              }`}
              title="Daftar poin"
            >
              <span>•</span>
              <span className="text-[11px] font-normal">List</span>
            </button>

            {/* Link */}
            <button
              type="button"
              onClick={setLink}
              className={`px-2.5 h-7 rounded-lg text-xs font-medium flex items-center justify-center transition-all cursor-pointer ${
                editor?.isActive("link")
                  ? "bg-teal text-white shadow-2xs"
                  : "text-ink hover:bg-gray-200/70"
              }`}
              title="Tambah tautan"
            >
              Link
            </button>

            <div className="h-4 w-px bg-line mx-1"></div>

            {/* Heading 2 */}
            <button
              type="button"
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={`px-2 h-7 rounded-lg text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
                editor?.isActive("heading", { level: 2 })
                  ? "bg-teal text-white shadow-2xs"
                  : "text-ink hover:bg-gray-200/70"
              }`}
              title="Judul bagian (H2)"
            >
              H2
            </button>

            {/* Heading 3 */}
            <button
              type="button"
              onClick={() =>
                editor?.chain().focus().toggleHeading({ level: 3 }).run()
              }
              className={`px-2 h-7 rounded-lg text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
                editor?.isActive("heading", { level: 3 })
                  ? "bg-teal text-white shadow-2xs"
                  : "text-ink hover:bg-gray-200/70"
              }`}
              title="Sub-judul (H3)"
            >
              H3
            </button>
          </div>

          {/* Editor Body */}
          <div className="p-4 min-h-45 max-h-95 overflow-y-auto text-xs sm:text-sm text-ink leading-relaxed [&_.tiptap]:outline-none [&_.tiptap]:min-h-40 [&_p]:mb-2.5 [&_p:last-child]:mb-0 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:mt-4 [&_h2]:mb-2 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mt-3 [&_h3]:mb-1.5 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ul]:mb-3 [&_li]:marker:text-teal [&_a]:text-teal [&_a]:underline [&_.tiptap.ProseMirror-focused]:outline-none">
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>
    </div>
  );
}
