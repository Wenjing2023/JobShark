import { useState, useEffect } from "react";
import { loadAllJobs } from "../api/reedapi";
import SearchForm from "@/components/organisms/searchform";

const SearchResults: React.FC = ({}) => {
  const [allJobs, setAllJobs] = useState<[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAllJobs()
      .then((data) => {
        console.log(data);
        setAllJobs(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error getting data", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>{allJobs ? <SearchForm allJobs={allJobs} /> : <p>No jobs found</p>}</>
      )}
    </>
  );
};

export default SearchResults;
