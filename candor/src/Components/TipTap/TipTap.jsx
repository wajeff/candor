// src/Components/Tiptap/Tiptap.jsx
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import styles from './Tiptap.module.css'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World</p>',
  })

  if (!editor) return null

  return (
    <div className={styles.editorContainer}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          Bold
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          Italic
        </button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
          Bullet List
        </button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        Numbered List
        </button>
      </div>

      {/* Editor content */}
      <EditorContent editor={editor} className={styles.editor} />
    </div>
  )
}

export default Tiptap
