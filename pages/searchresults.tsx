import SearchedJob from "@/components/molecules/searchedjob";

interface SearchedJob{
    job: {
			jobId: number,
			employerId: number,
			employerName: string,
			jobTitle: string,
			locationName: string,
			minimumSalary: number,
			maximumSalary: number,
			currency: string,
			expirationDate: number,
			date: Date,
			jobDescription: string,
			applications: number,
			jobUrl: string
		}
}

const SearchResults:React.FC<SearchedJob> = ({job}) => {
    return ( <>
        <h2>Search Results</h2>
        <SearchedJob job={job}/>
        </>
     );
}
 
export default SearchResults;