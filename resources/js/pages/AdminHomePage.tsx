import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AdminConferencePage() {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Home Page',
            href: '/admin/home-page',
        },
    ];
    // State for each section
    const [conferenceHighlights, setConferenceHighlights] = useState([]);
    const [importantDates, setImportantDates] = useState([]);
    const [aboutConference, setAboutConference] = useState([]);

    // Form states + Edit Mode
    const [highlightForm, setHighlightForm] = useState({ id: null, icon: '', date: '', description: '' });
    const [importantForm, setImportantForm] = useState({ id: null, title: '', description: '', icon: '' });
    const [aboutForm, setAboutForm] = useState({ id: null, conference_detail: '', conference_venue: '', conference_heading: '' });

    useEffect(() => {
        fetchAllData();
    }, []);

    const fetchAllData = async () => {
        const [highlightsRes, importantRes, aboutRes] = await Promise.all([
            axios.get('/api/conferencehigh-lights'),
            axios.get('/api/important-dates'),
            axios.get('/api/about-conference'),
        ]);
        setConferenceHighlights(highlightsRes.data);
        setImportantDates(importantRes.data);
        setAboutConference(aboutRes.data);
    };

    // Handle Create or Update
    const handleSubmit = async (e: React.FormEvent, type: string) => {
        e.preventDefault();

        if (type === 'highlights') {
            if (highlightForm.id) {
                await axios.put(`/api/conferencehigh-lights/${highlightForm.id}`, highlightForm);
            } else {
                await axios.post('/api/conferencehigh-lights', highlightForm);
            }
            setHighlightForm({ id: null, icon: '', date: '', description: '' });
        } else if (type === 'important') {
            if (importantForm.id) {
                await axios.put(`/api/important-dates/${importantForm.id}`, importantForm);
            } else {
                await axios.post('/api/important-dates', importantForm);
            }
            setImportantForm({ id: null, title: '', description: '', icon: '' });
        } else if (type === 'about') {
            if (aboutForm.id) {
                await axios.put(`/api/about-conference/${aboutForm.id}`, aboutForm);
            } else {
                await axios.post('/api/about-conference', aboutForm);
            }
            setAboutForm({ id: null, conference_detail: '', conference_venue: '', conference_heading: '' });
        }

        fetchAllData();
    };

    const handleEdit = (type: string, item: any) => {
        if (type === 'highlights') {
            setHighlightForm({ id: item.id, icon: item.icon, date: item.date, description: item.description });
        }
        if (type === 'important') {
            setImportantForm({ id: item.id, title: item.title, description: item.description, icon: item.icon });
        }
        if (type === 'about') {
            setAboutForm({
                id: item.id,
                conference_detail: item.conference_detail,
                conference_venue: item.conference_venue,
                conference_heading: item.conference_heading,
            });
        }
    };

    const handleDelete = async (type: string, id: number) => {
        let endpoint = '';
        // if (type === 'highlights') endpoint = `/api/conferencehigh-lights/${id}`;
        if (type === 'important') endpoint = `/api/important-dates/${id}`;
        if (type === 'about') endpoint = `/api/about-conference/${id}`;
        await axios.delete(endpoint);
        fetchAllData();
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="space-y-10 p-6">
                {/* Conference Highlights */}
                {/* <section className="rounded bg-white p-4 shadow">
                <h2 className="mb-4 text-xl font-bold">Conference Highlights</h2>
                <form className="space-y-3" onSubmit={(e) => handleSubmit(e, 'highlights')}>
                    <input
                        type="text"
                        placeholder="Icon"
                        value={highlightForm.icon}
                        onChange={(e) => setHighlightForm({ ...highlightForm, icon: e.target.value })}
                        className="w-full border p-2"
                    />
                    <input
                        type="date"
                        value={highlightForm.date}
                        onChange={(e) => setHighlightForm({ ...highlightForm, date: e.target.value })}
                        className="w-full border p-2"
                    />
                    <textarea
                        placeholder="Description"
                        value={highlightForm.description}
                        onChange={(e) => setHighlightForm({ ...highlightForm, description: e.target.value })}
                        className="w-full border p-2"
                    ></textarea>
                    <button className="rounded bg-blue-500 px-4 py-2 text-white">{highlightForm.id ? 'Update' : 'Submit'}</button>
                </form>
                <ul className="mt-4 space-y-2">
                    {conferenceHighlights.map((item: any) => (
                        <li key={item.id} className="flex items-center justify-between border p-2">
                            <span>
                                {item.icon} - {item.date} - {item.description}
                            </span>
                            <div className="space-x-3">
                                <button className="text-green-500" onClick={() => handleEdit('highlights', item)}>
                                    Edit
                                </button>
                                <button className="text-red-500" onClick={() => handleDelete('highlights', item.id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section> */}

                {/* Important Dates */}
                <section className="rounded bg-white p-4 shadow">
                    <h2 className="mb-4 text-xl font-bold">Important Dates</h2>
                    <form className="space-y-3" onSubmit={(e) => handleSubmit(e, 'important')}>
                        <input
                            type="text"
                            placeholder="Title"
                            value={importantForm.title}
                            onChange={(e) => setImportantForm({ ...importantForm, title: e.target.value })}
                            className="w-full border p-2"
                        />
                        <input
                            type="text"
                            placeholder="Icon"
                            value={importantForm.icon}
                            onChange={(e) => setImportantForm({ ...importantForm, icon: e.target.value })}
                            className="w-full border p-2"
                        />
                        <textarea
                            placeholder="Date/Description"
                            value={importantForm.description}
                            onChange={(e) => setImportantForm({ ...importantForm, description: e.target.value })}
                            className="w-full border p-2"
                        ></textarea>
                        <button className="rounded bg-blue-500 px-4 py-2 text-white">{importantForm.id ? 'Update' : 'Submit'}</button>
                    </form>
                    <ul className="mt-4 space-y-2">
                        {importantDates.map((item: any) => (
                            <li key={item.id} className="flex items-center justify-between border p-2">
                                <span>
                                    {item.title} - {item.icon} - {item.description}
                                </span>
                                <div className="space-x-3">
                                    <button
                                        className="rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600"
                                        onClick={() => handleEdit('important', item)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="ml-1 rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                                        onClick={() => handleDelete('important', item.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* About Conference */}
                <section className="rounded bg-white p-4 shadow">
                    <h2 className="mb-4 text-xl font-bold">About Conference</h2>
                    <form className="space-y-3" onSubmit={(e) => handleSubmit(e, 'about')}>
                        <textarea
                            placeholder="Conference Detail"
                            value={aboutForm.conference_detail}
                            onChange={(e) => setAboutForm({ ...aboutForm, conference_detail: e.target.value })}
                            className="w-full border p-2"
                        ></textarea>
                        <input
                            type="text"
                            placeholder="Conference Venue"
                            value={aboutForm.conference_venue}
                            onChange={(e) => setAboutForm({ ...aboutForm, conference_venue: e.target.value })}
                            className="w-full border p-2"
                        />

                        <input
                            type="text"
                            placeholder="Conference Heading"
                            value={aboutForm.conference_heading}
                            onChange={(e) => setAboutForm({ ...aboutForm, conference_heading: e.target.value })}
                            className="w-full border p-2"
                        />
                        <button className="rounded bg-blue-500 px-4 py-2 text-white">{aboutForm.id ? 'Update' : 'Submit'}</button>
                    </form>
                    <ul className="mt-4 space-y-2">
                        {aboutConference.map((item: any) => (
                            <li key={item.id} className="flex items-center justify-between border p-2">
                                <span>
                                    {item.conference_detail} - {item.conference_venue} - {item.conference_heading}
                                </span>
                                <div className="space-x-3">
                                    <button
                                        className="rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600"
                                        onClick={() => handleEdit('about', item)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                                        onClick={() => handleDelete('about', item.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </AppLayout>
    );
}
