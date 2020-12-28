export default function getScenarios () {
  return {
    categories: [
      {
        id: 1,
        title: 'Compute',
        items: [
          {
            id: 1,
            name: 'ec2',
            title: 'EC2',
            subitems: [
              {
                id: 1,
                name: 'scenario1',
                title: 'Scenario 1'
              },
              {
                id: 2,
                name: 'scenario2',
                title: 'Scenario 2'

              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Security',
        items: [
          {
            id: 1,
            name: 'kms',
            title: 'KMS',
            subitems: [
              {
                id: 1,
                name: 'scenario1',
                title: 'Scenario 1'
              }
            ]
          }
        ]
      }
    ]
  }
}
