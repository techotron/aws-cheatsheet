export default function getMockSecurityService (service) {
  if (service == 1) {
    return {
      id: 1,
      category: 4,
      categoryName: 'security',
      name: 'iam',
      title: 'IAM',
      summary: 'This is the summary for the IAM service',
      useCase: 'Use cases - for securing resources',
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
      category: 4,
      categoryName: 'security',
      name: 'kms',
      title: 'KMS',
      summary: 'This is the summary for the KMS service',
      useCase: 'Use cases - encryption/decryption, key managed service',
      checklist: `## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item`,
      priceModel: 'Some information about the pricing model of the service'
    }
  }
}
