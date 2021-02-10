export default function getMockSummaryObject() {
    return {
        title: 'IAM 101',
        subHeaders: [
            {
                title: 'Subheader 1',
                contents: [
                    {
                        type: "text",
                        content: 'This **is** markdown `content`'
                    },
                    {
                        type: "list",
                        content: [
                            "item1",
                            "item2",
                            "item3"
                        ]
                    },
                    {
                        type: "table",
                        content: 'this is meant to be a table'
                    },
                    {
                        type: "image",
                        content: "https://marketingweek.imgix.net/content/uploads/2014/09/asda-460.jpg?auto=compress,format&q=60&w=460&h="
                    }
                ]
            },
            {
                title: 'Subheader 1',
                contents: [
                    {
                        type: "text",
                        content: 'This **is** markdown `content`'
                    },
                    {
                        type: "list",
                        content: [
                            "item1",
                            "item2",
                            "item3"
                        ]
                    },
                    {
                        type: "text",
                        content: 'this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text this is meant to be some text '
                    }
                ]
            }
        ]
    }
}
