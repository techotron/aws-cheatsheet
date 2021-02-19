import React from 'react'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { FormControl, FormGroup } from '@material-ui/core';
import Input from '@material-ui/core/Input';


const modalBody = (
    <Modal.Body>
        Please choose feedback type:

        <FormGroup controlId="feedbackType">
            <FormControl as="select" onChange={(e) => this.setState({ feedbackType: e.target.value })}>
                <option>General feedback</option>
                <option>Typo</option>
            </FormControl>
        </FormGroup>
    </Modal.Body>
)

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
                    <Input defaultValue="Hello world" inputProps={{ 'aria-label': 'description' }} />
                    <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
                    <Input defaultValue="Hello world" inputProps={{ 'aria-label': 'description' }} />
                    <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />                    
                </form>   

                // <FormGroup controlId="feedbackType">
                //     <FormControl as="select" onChange={(e) => this.setState({ feedbackType: e.target.value })}>
                //         <option>General feedback</option>
                //         <option>Typo</option>
                //     </FormControl>
                // </FormGroup>


            // <Modal 
            //     open={this.props.open} 
            //     onClose={this.props.onClose}
            //     aria-labelledby="simple-modal-title"
            //     aria-describedby="simple-modal-description"
            // > 
            //     {modalBody}
            // </Modal>


                            // {/* {
                            //     (this.state.feedbackType === "General feedback") && 
                            //             <Form>
                            //                 <FormGroup>
                            //                     <FormControl
                            //                         type="text"
                            //                         placeholder="Title"
                            //                         name="title"
                            //                         id="title" />
                            //                 </FormGroup>

                            //                 <FormGroup>
                            //                     <FormControl
                            //                         type="text"
                            //                         placeholder="Feedback"
                            //                         name="feedback"
                            //                         id="feedback" />
                            //                 </FormGroup>
                            //             </Form>
                            // }        

                            // {
                            //     (this.state.feedbackType === "Typo") && 
                            //             <Form>
                            //                 <FormGroup>
                            //                     <FormControl
                            //                         type="number"
                            //                         placeholder="SubTitle"
                            //                         name="subTitle"
                            //                         id="subTitle" />
                            //                 </FormGroup>

                            //                 <FormGroup>
                            //                     <FormControl
                            //                         type="text"
                            //                         placeholder="Feedback"
                            //                         name="feedback"
                            //                         id="feedback" />
                            //                 </FormGroup>
                            //             </Form>
                            // }

                            // <Form>
                            //     <Button variant="primary" type="submit" id="new-assessment">Submit</Button>
                            // </Form> */}


        )
    }
}

// FeedbackModal.propTypes = {
//     open: Boolean
// }

export default FeedbackModal
