import React from 'react'
import ReactMarkdown from 'react-markdown'
import { List, ListItem, ListItemText, CardMedia } from "@material-ui/core";

const gfm = require('remark-gfm')

class SubHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contents: this.props.contents
        }
    }

    render() {
        return  (
            this.state.contents.map(content => {
                if (content.type === "text") {
                    return (
                        <div>
                            <ReactMarkdown plugins={[gfm]} source={content.content} />
                        </div>
                    )
                }
                else if (content.type === "list") {
                    return (
                        <List>
                            {content.content.map(item => {
                                return (
                                    <ListItem key={item}>
                                        <ListItemText primary={`* ${item}`} />
                                    </ListItem>
                                )
                            })}
                        </List>
                    )
                }
                else if (content.type === "table") {
                    return (
                        <ReactMarkdown plugins={[gfm]} source={content.content} />
                    )
                }
                else if (content.type === "image") {
                    return (
                        <CardMedia style={{height: 400, width: 700}} image={content.content} />
                    )
                }
                else {
                    return null
                }
            })
        )
    }
}

SubHeader.propTypes = {
    contents: Object
}

export default SubHeader;
