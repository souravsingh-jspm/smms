import { Editor } from '@tinymce/tinymce-react';
import { useEffect, useRef, useState } from 'react';

// 1. Define the specific ID of the committee to always edit.
//    Replace '1' with the actual ID from your database.
const COMMITTEE_ID_TO_EDIT = 2;

export default function TinyEditor() {
    const editorRef = useRef(null);
    const [title, setTitle] = useState('');
    const [initialContent, setInitialContent] = useState('<p>Loading content...</p>');
    const [isLoading, setIsLoading] = useState(true);

    // 2. useEffect now always runs on mount to fetch this specific committee.
    useEffect(() => {
        fetch(`http://localhost:8000/api/committe/${COMMITTEE_ID_TO_EDIT}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Committee not found. Please check the ID.');
                }
                return res.json();
            })
            .then((data) => {
                setTitle(data.title);
                setInitialContent(data.content);
            })
            .catch((error) => {
                console.error('Failed to fetch committee data:', error);
                setInitialContent('<p>Error loading content. Please check console.</p>');
            })
            .finally(() => setIsLoading(false));
    }, []); // Empty array means this runs only once when the component mounts.

    // 3. The handleSave function is simplified to only handle updates (PUT).
    const handleSave = async () => {
        if (!editorRef.current) return;

        const payload = {
            title: title,
            content: editorRef.current.getContent(),
        };

        try {
            const response = await fetch(`http://localhost:8000/api/committe/${COMMITTEE_ID_TO_EDIT}`, {
                method: 'PUT', // Always use PUT for updates
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error('Failed to update the committee.');

            alert('Content updated successfully!');
        } catch (error) {
            console.error('Failed to save committee:', error);
            alert('An error occurred while saving.');
        }
    };

    if (isLoading) {
        return <p>Loading Editor...</p>;
    }

    return (
        <>
            <div className="container mt-5 rounded-lg border p-4 shadow-lg">
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="committe-title" style={{ display: 'block', marginBottom: '0.5rem' }}>
                        Page Title
                    </label>
                    <input
                        id="committe-title"
                        className="w-full rounded border p-2"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{ width: '100%', padding: '8px', fontSize: '1.2rem' }}
                    />
                </div>

                <Editor
                    apiKey="e0n1a85mrl073ceasq9z3ij0h84l9qjryvl9tytpr11iwntq"
                    onInit={(_evt, editor) => (editorRef.current = editor)}
                    initialValue={initialContent}
                    init={{
                        height: 500,
                        menubar: 'file edit view insert format tools table help',
                        plugins:
                            'advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount',
                        toolbar:
                            'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                    }}
                />
                <button className="m-2 rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600" onClick={handleSave}>
                    Save Changes
                </button>
            </div>
        </>
    );
}
