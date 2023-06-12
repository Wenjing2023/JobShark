import { useState, useEffect } from 'react';

import SearchedJob from "@/components/molecules/searchedjob";
import { loadAllJobs } from './api/reedapi';

const SearchResults:React.FC = ({}) => {
    const [allJobs, setAllJobs] = useState<[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadAllJobs()
      .then((data) => {
        console.log(data)
        setAllJobs(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error getting data", error);
        setLoading(false);
      });
    }, []);

    
    return ( <>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            {allJobs ? (
              allJobs.slice(0, 15).map((job, index) => {
                return <SearchedJob key={index} job={job}/>;
              })
            ) : (
              <p>No jobs found</p>
            )}
          </>
        )}
        {/* <h2>Search Results</h2>
        <SearchedJob key={job.jobId} job={job}/> */}
        </>
     );
}
 
export default SearchResults;