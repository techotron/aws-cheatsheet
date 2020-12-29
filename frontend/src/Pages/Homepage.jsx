import React from 'react'
import Typography from '@material-ui/core/Typography'
import ReactMarkdown from 'react-markdown'
import HomepageContent from '../Common/HomepageContent'

class Homepage extends React.Component {
    constructor() {
        super()
        this.state = {
            content: HomepageContent()
        }
    }

    render() {
        return (
            <Typography paragraph>
                <ReactMarkdown source={this.state.content} />
            </Typography>
        )
    }
}

export default Homepage
