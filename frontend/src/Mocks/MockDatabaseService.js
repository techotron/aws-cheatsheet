export default function getMockDatabaseService (service) {
  if (service == 1) {
    return {
      id: 1,
      category: 3,
      categoryName: 'databases',
      name: 'rds',
      title: 'RDS',
      summary: 'This is the summary for the RDS service',
      useCase: 'Use cases - when you want a relational DB',
      checklist: `## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item`,
      priceModel: 'Some information about the pricing model of the service'
    }
  } else if (service == 2) {
    return {
      id: 2,
      category: 3,
      categoryName: 'databases',
      name: 'dynamodb',
      title: 'DynamoDB',
      summary: 'This is the summary for the DynamoDB service',
      useCase: 'Use cases - when you want a NoSQL DB',
      checklist: `## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item`,
      priceModel: 'Some information about the pricing model of the service'
    }
  } else if (service == 3) {
    return {
      id: 3,
      category: 3,
      categoryName: 'databases',
      name: 'aurora',
      title: 'Aurora',
      summary: 'This is the summary for the Aurora service',
      useCase: 'Use cases - when you want a managed, scalable DB cluster',
      checklist: `## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item`,
      priceModel: 'Some information about the pricing model of the service'
    }
  } else if (service == 4) {
    return {
      id: 4,
      category: 3,
      categoryName: 'databases',
      name: 'elasticcache',
      title: 'ElasticCache',
      summary: 'This is the summary for the ElasticCache service',
      useCase: 'Use cases - when you want a caching/KV database',
      checklist: `## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item`,
      priceModel: 'Some information about the pricing model of the service'
    }
  }
}
