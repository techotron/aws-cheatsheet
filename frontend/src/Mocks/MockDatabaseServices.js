export default function getMockDatabaseServices() {
    return [
        {
            service: "dynamodb",
            summary: "This is the summary for the DDB service",
            useCase: "Use cases - when you want a NoSQL database",
            keyFacts: "* This is going to be a markdown pointed list",
            priceModel: "A summary with some data about the price model"
        },
        {
            service: "rds",
            summary: "This is the summary for the RDS service",
            useCase: "Use cases - when you want a relational database",
            keyFacts: "* This is going to be a markdown pointed list",
            priceModel: "A summary with some data about the price model"
        },
    ]
}


