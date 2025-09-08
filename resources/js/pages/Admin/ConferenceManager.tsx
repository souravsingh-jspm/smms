import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ConferenceManager() {
    const [conferenceHighlights, setConferenceHighlights] = useState([]);
    const [importantDates, setImportantDates] = useState([]);
    const [aboutConference, setAboutConference] = useState([]);

    // Form states
    const [newHighlight, setNewHighlight] = useState({ icon: '', date: '', description: '' });
    const [newDate, setNewDate] = useState({ title: '', description: '', icon: '' });
    const [aboutData, setAboutData] = useState({ title: '', content: '' });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const highlightsRes = await axios.get('/api/conferencehigh-lights');
        const datesRes = await axios.get('/api/important-dates');
        const aboutRes = await axios.get('/api/about-conference');
        setConferenceHighlights(highlightsRes.data);
        setImportantDates(datesRes.data);
        setAboutConference(aboutRes.data);
    };

    const handleAddHighlight = async () => {
        await axios.post('/api/conferencehigh-lights', newHighlight);
        fetchData();
    };

    return (
        <div className="space-y-10 p-6">
            <h1 className="mb-4 text-2xl font-bold">Conference Management</h1>

            {/* Conference Highlights */}
            <section className="rounded border p-4">
                <h2 className="mb-2 text-xl font-semibold">Conference Highlights</h2>
                <div className="flex space-x-2">
                    <input className="border p-2" placeholder="Icon" onChange={(e) => setNewHighlight({ ...newHighlight, icon: e.target.value })} />
                    <input className="border p-2" type="date" onChange={(e) => setNewHighlight({ ...newHighlight, date: e.target.value })} />
                    <input
                        className="border p-2"
                        placeholder="Description"
                        onChange={(e) => setNewHighlight({ ...newHighlight, description: e.target.value })}
                    />
                    <button onClick={handleAddHighlight} className="bg-blue-500 px-4 py-2 text-white">
                        Add
                    </button>
                </div>
                <ul className="mt-4">
                    {conferenceHighlights.map((item: any) => (
                        <li key={item.id} className="flex justify-between border-b py-2">
                            <span>
                                {item.icon} - {item.date} - {item.description}
                            </span>
                            <div className="space-x-2">
                                <button className="text-yellow-500">Edit</button>
                                <button className="text-red-500">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Similarly, create sections for Important Dates & About Conference */}
        </div>
    );
}
