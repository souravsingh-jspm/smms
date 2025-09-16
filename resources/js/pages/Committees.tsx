import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from './Layout';
import ShimmerUI from './ShimmerUI';

export default function Committees() {
    // 1. Set initial state to null, as we're fetching a single object, not an array.
    const [committee, setCommittee] = useState(null);
    // 2. Add loading and error states for a better user experience.
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 3. Simplified the API call - no need for Promise.all for a single request.
                const response = await axios.get('/api/committe/2');
                setCommittee(response.data);
            } catch (err) {
                console.error('Error fetching committee data:', err);
                setError('Failed to load the content. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs only once.

    // Display a loading message while data is being fetched.
    if (isLoading) {
        return <ShimmerUI />;
    }

    // Display an error message if the API call fails.
    if (error) {
        return <div className="container text-red-500">{error}</div>;
    }

    // 4. Render the title and content properly once data is available.
    return (
        <div className="solid-black border p-3">
            <Layout>
                {committee && (
                    // <article className="prose max-w-none">
                    //     {/* <h1>{committee.title}</h1> */}
                    //     <div className="container" dangerouslySetInnerHTML={{ __html: committee.content }} />
                    // </article>
                    // <article className="max-w-none">
                    //     <div className="max-w-none" dangerouslySetInnerHTML={{ __html: committee.content }} />
                    // </article>
                    <article className="prose max-w-none">
                        <div
                            className="[&_li]:ml-6 [&_li]:list-disc [&_table]:w-full [&_table]:table-auto [&_td]:border [&_td]:px-2 [&_td]:py-1 [&_th]:border [&_th]:px-2 [&_th]:py-1"
                            dangerouslySetInnerHTML={{ __html: committee.content }}
                        />
                    </article>
                )}
            </Layout>
        </div>
    );
}
