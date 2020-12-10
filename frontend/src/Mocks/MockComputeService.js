export default function getMockComputeServices(service) {
    if (service == 1) {
        return {
            id: 1,
            category: 1,
            categoryName: "compute",
            name: "ec2",
            title: "EC2",
            summary: `This is the summary for the EC2 service`,
            useCase: `Use cases - when you want a virtual machine`,
            checklist: `## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item`,
            priceModel: `Some information about the pricing model of the service`
        }
    } else if (service == 2) {
        return {
            id: 2,
            category: 1,
            categoryName: "compute",
            name: "ecs",
            title: "ECS",
            summary: `This is the summary for the ECS service`,
            useCase: `Use cases - when you want to run containers`,
            checklist: `## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item`,
            priceModel: `Some information about the pricing model of the service`
        }
    } else if (service == 3) {
        return {
            id: 3,
            category: 1,
            categoryName: "compute",
            name: "lambda",
            title: "Lambda",
            summary: `This is the summary for the Lambda service`,
            useCase: `Use cases - when you want to run functions`,
            checklist: `## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item`,
            priceModel: `Some information about the pricing model of the service`
        }
    }
}
