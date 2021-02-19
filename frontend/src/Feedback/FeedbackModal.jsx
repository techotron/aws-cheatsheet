import React from 'react'
import Input from '@material-ui/core/Input';

export class FeedbackModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackType: "General feedback"
        };
    }

    render() {
        return (
            <form noValidate autoComplete="off">
                <Input defaultValue="Hello world" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
            </form>
        )
    }
}

// FeedbackModal.propTypes = {
//     open: Boolean
// }

export default FeedbackModal
