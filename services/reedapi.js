import React, { useState, useEffect } from "react";

const ReedApi = () => {
  const [allJobs, setAllJobs] = useState(null);
  const [loading, setLoading] = useState(true);
  const key = "71847e48-8f72-4b7b-ae2d-71d746d1ca25";
  const password = "";
  const authHeader = "Basic " + btoa(key + ":" + password);

  useEffect(() => {
    loadAllJobs();
  }, []);

  const loadAllJobs = () => {
    fetch("https://www.reed.co.uk/api/1.0/search?", {
      headers: {
        Authorization: authHeader,
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
          <ul>
            {allJobs ? (
              allJobs.map((job) => {
                return <li key={job.jobId}>{job.jobTitle}</li>;
              })
            ) : (
              <p>No jobs found</p>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default ReedApi;
