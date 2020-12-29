export default function getPathwayHeadings() {
    return {
        categories: [
            {
                id: 1,
                title: 'Chapter 1',
                name: 'ch1',
                items: [
                    {
                        id: 1,
                        name: 'ch1s1',
                        title: 'Section 1',
                        subitems: [
                            {
                                id: 1,
                                name: 'ch1s1ss1',
                                title: 'Subsection 1'
                            },
                            {
                                id: 2,
                                name: 'ch1s1ss2',
                                title: 'Subsection 2'
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: 'Chapter 2',
                name: 'ch2',
                items: [
                    {
                        id: 1,
                        name: 'ch2s1',
                        title: 'Section 1',
                        subitems: [
                            {
                                id: 1,
                                name: 'ch2s1ss1',
                                title: 'Subsection 1'
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
