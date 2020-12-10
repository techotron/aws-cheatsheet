export default function getMockComputeServices(service) {
    if (service == 1) {
        return {
            id: 1,
            category: 1,
            categoryName: "compute",
            name: "ec2",
            title: "EC2",
            summary: "This is the summary for the EC2 service",
            useCase: "Use cases - when you want a virtual machine",
            revisionChecklist: "* This is going to be a markdown pointed list",
            priceModel: "A summary with some data about the price model"
        }
    } else if (service == 2) {
        return {
            id: 2,
            category: 1,
            categoryName: "compute",
            name: "ecs",
            title: "ECS",
            summary: "This is the summary for the ECS service",
            useCase: "Use cases - when you want to run containers",
            revisionChecklist: "* This is going to be a markdown pointed list",
            priceModel: "A summary with some data about the price model"
        }
    } else if (service == 3) {
        return {
            id: 3,
            category: 1,
            categoryName: "compute",
            name: "lambda",
            title: "Lambda",
            summary: "This is the summary for the Lambda service",
            useCase: "Use cases - when you want to run functions",
            revisionChecklist: "* This is going to be a markdown pointed list",
            priceModel: "A summary with some data about the price model"
        }
    }
}
