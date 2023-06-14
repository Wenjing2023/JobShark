type Job = { 
    reedId: Number,
    userId: Number,
    id: Number,
    jobTitle: String,
    employerName: String,
    location: String,
    expirationDate: Date,
    jobDescription: String,
    minSalary: Number,
    maxSalary: Number,
    notes: String,
    reedUrl: String,
    externalUrl: String,
    partTime: Boolean,
    fullTime: Boolean,
    contractType: String,
    applicationCount: Number,
    applicationStage: Number,
    rejected: Boolean
};

export default Job;