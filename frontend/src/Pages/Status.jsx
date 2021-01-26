import React from 'react';
import axios from 'axios';

export default class Status extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios.get(`${window.env.REACT_APP_BACKEND_API}/status`)
            .then(res => {
                this.setState({ data: res.data });
            })

        console.log(this.state.data)
    }

    render() {
        return (
            <p>
                <b>DB Connection Status: </b>{this.state.data.DbConnectionStatus}<br></br>
                <b>DB Timestamp: </b>{this.state.data.DbTimestamp}
            </p>
        )
    }
}
