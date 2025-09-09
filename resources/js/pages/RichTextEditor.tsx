import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

interface Props {
    value: string;
    onChange: (content: string) => void;
}

export default function RichTextEditor({ value, onChange }: Props) {
    const editorRef = useRef<any>(null);

    return (
        <Editor
            apiKey="no-api-key" // free usage, or get a free API key from TinyMCE website
            onInit={(_evt, editor) => (editorRef.current = editor)}
            initialValue={value}
            init={{
                height: 400,
                menubar: true,
                plugins: [
                    'advlist',
                    'autolink',
                    'lists',
                    'link',
                    'image',
                    'charmap',
                    'preview',
                    'anchor',
                    'searchreplace',
                    'visualblocks',
                    'code',
                    'fullscreen',
                    'insertdatetime',
                    'media',
                    'table',
                    'help',
                    'wordcount',
                ],
                toolbar:
                    'undo redo | formatselect | bold italic underline strikethrough | ' +
                    'alignleft aligncenter alignright alignjustify | ' +
                    'bullist numlist outdent indent | removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
            onEditorChange={(content) => onChange(content)}
        />
    );
}
