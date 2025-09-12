import { Editor } from '@tinymce/tinymce-react';
import { useEffect, useRef, useState } from 'react';

export default function CommitteEditor({ committeId }) {
    const editorRef = useRef(null);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const isEditMode = Boolean(committeId);

    useEffect(() => {
        if (isEditMode) {
            setIsLoading(true);
            fetch(`http://localhost:8000/api/committe/${committeId}`)
                .then((res) => res.json())
                .then((data) => {
                    setTitle(data.title);
                    setContent(data.content);
                })
                .catch((error) => console.error('Failed to fetch committee data:', error))
                .finally(() => setIsLoading(false));
        }
    }, [committeId]); 
    const handleSave = async () => {
        if (!editorRef.current) return;

        const currentContent = editorRef.current.getContent();

        const payload = {
            title: title,
            content: currentContent,
        };

        const url = isEditMode ? `http://localhost:8000/api/committe/${committeId}` : 'http://localhost:8000/api/committe';

        const method = isEditMode ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            alert(`Success! Committee ${isEditMode ? 'updated' : 'created'} with ID: ${result.id}`);
        } catch (error) {
            console.error('Failed to save committee:', error);
            alert('An error occurred while saving.');
        }
    };

    if (isLoading) {
        return <p>Loading editor...</p>;
    }

    return (
        <>
            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="committe-title" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Committee Title
                </label>
                <input
                    id="committe-title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter committee title"
                    style={{ width: '100%', padding: '8px' }}
                />
            </div>

            <Editor
                apiKey="e0n1a85mrl073ceasq9z3ij0h84l9qjryvl9tytpr11iwntq"
                onInit={(_evt, editor) => (editorRef.current = editor)}
                initialValue={content || '<p></p>'}
                init={{
                    height: 500,
                    menubar: 'file edit view insert format tools table help',
                    plugins:
                        'advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount',
                    toolbar:
                        'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                }}
            />

            <button onClick={handleSave} style={{ marginTop: '10px', padding: '10px 20px' }}>
                {isEditMode ? 'Update Committee' : 'Create Committee'}
            </button>
        </>
    );
}
