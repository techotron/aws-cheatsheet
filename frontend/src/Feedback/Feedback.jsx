import React from 'react'
import Button from '@material-ui/core/Button';
import FeedbackModal from './FeedbackModal'
import Modal from '@material-ui/core/Modal';


const feedbackButtonStyle = {
    position: 'fixed',
    top: '75%',
    right: '0',
    transform: `rotate(${-90}deg)`
}

const modalStyle = {
    top: '50%',
    left: '50%',
    position: 'absolute',
    width: 400,
    border: '2px solid #000',
}


export class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false };
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="primary" style={feedbackButtonStyle} onClick={() => this.setState({ showModal: true })}>
                    Feedback
                </Button>
                <Modal style={modalStyle} open={this.state.showModal} onClose={() => this.setState({showModal: false})}>
                    {<FeedbackModal />}
                </Modal>
            </div>
        )
    }
}

export default Feedback
