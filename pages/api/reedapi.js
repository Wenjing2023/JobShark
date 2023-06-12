import React, { useState, useEffect } from "react";

import SearchResults from "../searchresults";

const ReedApi = () => {
  const [allJobs, setAllJobs] = useState(null);
  const [loading, setLoading] = useState(true);
  const key = "71847e48-8f72-4b7b-ae2d-71d746d1ca25";
  const password = "";
  const authHeader = "Basic " + btoa(key + ":" + password);
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  useEffect(() => {
    loadAllJobs();
  }, []);

  const loadAllJobs = () => {
    fetch(proxyUrl + 'https://www.reed.co.uk/api/1.0/search', {
          headers: {
            'Origin': 'http://localhost:3000',
            'Authorization': authHeader,
          },
    })
      .then((res) => {
        if (!res.ok) {
          console.log(res);
          throw new Error("API request failed");
        }
        return res.json();
      })
      .then((data) => {
        setAllJobs(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error getting data", error);
        setLoading(false);
      });
  };

  return (
    <>
      <div>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            {allJobs ? (
              allJobs.slice(0, 15).map((job) => {
                return <SearchResults key={job.jobId} job={job}/>;
                console.log({job})
              })
            ) : (
              <p>No jobs found</p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ReedApi;
