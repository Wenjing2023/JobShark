type Job = { 
    reedId: number,
    userId: number,
    id: number,
    jobTitle: String,
    employerName: String,
    location: String,
    expirationDate: Date,
    jobDescription: String,
    minSalary: number,
    maxSalary: number,
    notes: String,
    reedUrl: String,
    externalUrl: String,
    partTime: Boolean,
    fullTime: Boolean,
    contractType: String,
    applicationCount: number,
    applicationStage: number,
    rejected: Boolean
};

export default Job;