type Job = { 
    reedId?: number,
    user: Object,
    id?: number,
    jobTitle: string,
    employerName: string,
    location?: string,
    expirationDate?: Date,
    jobDescription?: string,
    minSalary?: number,
    maxSalary?: number,
    notes?: string,
    reedUrl?: string,
    externalUrl?: string,
    partTime?: Boolean,
    fullTime?: Boolean,
    contractType?: string,
    applicationCount?: number,
    applicationStage?: number,
    rejected?: Boolean
};

export default Job;