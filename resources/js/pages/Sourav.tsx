import { useEffect, useState } from 'react';

// IMPORTANT: Replace this with the actual URL of your Laravel backend
const API_BASE_URL = 'http://127.0.0.1:8000';

export default function SliderManager() {
    const [sliders, setSliders] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        link_url: '',
        button_text: '',
    });
    // State to hold the selected image file
    const [imageFile, setImageFile] = useState(null);
    // State to track which slider is being edited
    const [editingId, setEditingId] = useState(null);
    // State for loading and error messages
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to fetch all sliders from the API
    const fetchSliders = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/api/slider`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSliders(data.data);
        } catch (err) {
            setError('Failed to fetch sliders. Please make sure your Laravel server is running.');
        } finally {
            setIsLoading(false);
        }
    };

    // useEffect hook to fetch sliders when the component mounts
    useEffect(() => {
        fetchSliders();
    }, []);

    // Handle changes in text input fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle file input change
    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    // Handle form submission for both creating and updating
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        // We use FormData because we are uploading a file
        const submissionData = new FormData();
        submissionData.append('title', formData.title);
        submissionData.append('description', formData.description);
        submissionData.append('link_url', formData.link_url);
        submissionData.append('button_text', formData.button_text);
        if (imageFile) {
            submissionData.append('image', imageFile);
        }
        console.log('sourav', submissionData);
        let url = `${API_BASE_URL}/api/slider`;
        let method = 'POST';

        // If we are editing, change the URL and method
        if (editingId) {
            url = `${API_BASE_URL}/api/slider/${editingId}`;
            // This is a trick to use PUT with FormData
            submissionData.append('_method', 'PUT');
        }

        try {
            const response = await fetch(url, {
                method: 'POST', // Always POST for FormData with _method trick
                body: submissionData,
                headers: {
                    Accept: 'application/json', // Important for Laravel validation errors
                },
            });

            if (!response.ok) {
                console.log(submissionData);
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to submit form.');
            }

            // Reset form and refresh the list
            resetForm();
            fetchSliders();
        } catch (err) {
            setError(err.message);
        }
    };

    // Set the form up for editing an existing slider
    const handleEdit = (slider) => {
        setEditingId(slider.id);
        setFormData({
            title: slider.title,
            description: slider.description || '',
            link_url: slider.link_url || '',
            button_text: slider.button_text || '',
        });
    };

    // Handle the deletion of a slider
    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this slider?')) return;

        try {
            const response = await fetch(`${API_BASE_URL}/api/slider/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Failed to delete slider.');

            // Refresh the list after deleting
            fetchSliders();
        } catch (err) {
            setError(err.message);
        }
    };

    // Reset the form state
    const resetForm = () => {
        setFormData({ title: '', description: '', link_url: '', button_text: '' });
        setImageFile(null);
        setEditingId(null);
        // This clears the file input visually
        document.getElementById('image-input').value = '';
    };

    return (
        <div className="mx-auto max-w-4xl p-6 font-sans">
            <h1 className="mb-6 text-2xl font-bold">Slider Manager</h1>

            {/* --- The Form --- */}
            <form onSubmit={handleSubmit} className="mb-10 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">{editingId ? 'Edit Slider' : 'Add New Slider'}</h3>

                {error && <p className="mb-3 text-red-600">{error}</p>}

                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                    />
                </div>

                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                    />
                </div>

                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium">Link URL</label>
                    <input
                        type="url"
                        name="link_url"
                        value={formData.link_url}
                        onChange={handleInputChange}
                        className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                    />
                </div>

                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium">Button Text</label>
                    <input
                        type="text"
                        name="button_text"
                        value={formData.button_text}
                        onChange={handleInputChange}
                        className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                    />
                </div>

                <div className="mb-5">
                    <label className="mb-1 block text-sm font-medium">Image</label>
                    <input
                        id="image-input"
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                        required={!editingId}
                        className="block w-full text-sm text-gray-600 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
                    />
                    {editingId && <small className="text-gray-500"> (Leave blank to keep existing image)</small>}
                </div>

                <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    {editingId ? 'Update Slider' : 'Create Slider'}
                </button>

                {editingId && (
                    <button type="button" onClick={resetForm} className="ml-3 rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
                        Cancel Edit
                    </button>
                )}
            </form>

            {/* --- The List of Sliders --- */}
            <h2 className="mb-4 text-xl font-semibold">Existing Sliders</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="space-y-4">
                    {sliders.map((slider) => (
                        <div key={slider.id} className="flex items-center gap-6 rounded-lg border bg-white p-4 shadow-sm">
                            <img
                                src={`${API_BASE_URL}/storage/${slider.image_path}`}
                                alt={slider.title}
                                className="h-auto w-40 rounded-md border object-cover"
                            />
                            <div className="flex-grow">
                                <h4 className="text-lg font-medium">{slider.title}</h4>
                                <p className="text-gray-600">{slider.description}</p>
                                {slider.link_url && <small className="text-blue-600">Link: {slider.link_url}</small>}
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => handleEdit(slider)} className="rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600">
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(slider.id)} className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
