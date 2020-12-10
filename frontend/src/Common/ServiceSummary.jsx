import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import getMockComputeService from '../Mocks/MockComputeServices'



class ServiceSummary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: this.props.category,
            service: this.props.service,
            data: getMockComputeService(this.props.service),
        }
    }

    componentDidUpdate() {
        console.log(this.props.service)
        console.log(this.state.service)
    }

    render() {
        return(
            <div>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" >
                        Summary
                    </Link>
                    <Link color="inherit" >
                        {this.state.data.categoryName}
                    </Link>
                    <Typography color="textPrimary">{this.state.data.title}</Typography>
                </Breadcrumbs>
                <span>
                    <h1>This is where some information about AWS services will go.</h1>
                    {this.state.data.summary}
                </span>
            </div>
        )
    }
}

ServiceSummary.propTypes = {
    category: Number,
    service: Number
}

export default ServiceSummary;