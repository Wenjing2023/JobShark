import React, { useState, useEffect } from 'react';
import SearchedJob from '@/components/molecules/searchedjob';


const reedAPI = () => {

    const key = '71847e48-8f72-4b7b-ae2d-71d746d1ca25';
    const password = '';
    const authHeader = 'Basic ' + btoa(key + ':' + password);
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch(proxyUrl + 'https://www.reed.co.uk/api/1.0/search', {
          headers: {
            'Origin': 'http://localhost:3000',
            'Authorization': authHeader,
          },
        })
          .then(response => response.json())
          .then(data => setJobs(data.results))
          .catch(error => console.error('Error fetching jobs:', error));
      }, []);

      if (!jobs) return <h1>Loading...</h1>

    return (
        <>
        {jobs.map(job => <SearchedJob key={job.jobId} job={job}/>)}
        </>
     );
}
 
export default reedAPI;