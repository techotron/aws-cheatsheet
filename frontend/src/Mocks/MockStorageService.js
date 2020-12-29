export default function getMockStorageService(service) {
    if (service === '1') {
        return {
            id: 1,
            category: 2,
            categoryName: 'storage',
            name: 's3',
            title: 'S3',
            summary: 'This is the summary for the S3 service',
            useCase: 'Use cases - when you want storage',
            checklist: `## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item`,
            priceModel: 'Some information about the pricing model of the service'
        }
    } else if (service === '2') {
        return {
            id: 2,
            category: 2,
            categoryName: 'storage',
            name: 's3glacier',
            title: 'S3 Glacier',
            summary: 'This is the summary for the S3 Glacier service',
            useCase: 'Use cases - when you want storage',
            checklist: `## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item`,
            priceModel: 'Some information about the pricing model of the service'
        }
    }
}
