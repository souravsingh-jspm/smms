// import axios from 'axios'; // Add Axios
// import { useEffect, useState } from 'react';

// export default function Committees() {
//     const [committe, setCommitte] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const [committeData] = await Promise.all([axios.get('/api/committe/2')]);
//                 setCommitte(committeData.data);

//                 // Log data for now
//                 console.log('Conference Highlights:', committeData.data);
//             } catch (error) {
//                 console.error('Error fetching home page data:', error);
//             }
//         };

//         fetchData();
//     }, []);
//     return (
//         <>
//             <div className="container">{JSON.stringify(committe)}</div>
//         </>
//     );
// }

import axios from 'axios';
import { useEffect, useState } from 'react';

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
        return <div className="container">Loading...</div>;
    }

    // Display an error message if the API call fails.
    if (error) {
        return <div className="container text-red-500">{error}</div>;
    }

    // 4. Render the title and content properly once data is available.
    return (
        <div className="p-3">
            {committee && (
                <article className="prose max-w-none">
                    <h1>{committee.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: committee.content }} />
                </article>
            )}
        </div>
    );
}
