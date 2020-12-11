import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

class ServiceSummary extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" >
                        summary
                    </Link>
                    <Link color="inherit" >
                        {this.props.data.categoryName}
                    </Link>
                    <Typography color="textPrimary">{this.props.data.name}</Typography>
                </Breadcrumbs>
                <span>
                    <h1>This is where some information about AWS services will go.</h1>
                    {this.props.data.summary}
                </span>
            </div>
        )
    }
}

ServiceSummary.propTypes = {
    category: Number,
    service: Number,
    data: Object,
}

export default ServiceSummary;
