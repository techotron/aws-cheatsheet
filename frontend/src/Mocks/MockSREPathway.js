export default function getPathwayHeadings() {
    return {
        categories: [
            {
                category_id: 1,
                title: 'Chapter 1',
                name: 'ch1',
                items: [
                    {
                        sub_category_id: 1,
                        sub_category_name: 'ch1s1',
                        sub_category_title: 'Section 1',
                        sub_items: [
                            {
                                sub_item_id: 1,
                                sub_item_name: 'ch1s1ss1',
                                sub_item_title: 'Subsection 1'
                            },
                            {
                                sub_item_id: 2,
                                sub_item_name: 'ch1s1ss2',
                                sub_item_title: 'Subsection 2'
                            }
                        ]
                    },
                    {
                        sub_category_id: 1,
                        sub_category_name: 'ch1s1',
                        sub_category_title: 'Section 2',
                        sub_items: [
                            {
                                sub_item_id: 1,
                                sub_item_name: 'ch1s2ss1',
                                sub_item_title: 'Subsection 1'
                            }
                        ]
                    }                    
                ]
            },
            {
                category_id: 2,
                title: 'Chapter 2',
                name: 'ch2',
                items: [
                    {
                        sub_category_id: 1,
                        sub_category_name: 'ch2s1',
                        sub_category_title: 'Section 1',
                        sub_items: [
                            {
                                sub_item_id: 1,
                                sub_item_name: 'ch2s1ss1',
                                sub_item_title: 'Subsection 1'
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
