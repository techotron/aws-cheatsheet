// import React from 'react';
// import axios from 'axios';

// export default function Status() {
//     return(
//         <h1>This is from the frontend</h1>
//     )
// }


import React from 'react';
import axios from 'axios';

export default class Status extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/`)
        .then(res => {
            this.setState({ data: res.data });
        })

        console.log(this.state.data)
    }

    render() {
        return (
            <h1>{this.state.data}</h1>
        )
    }
}