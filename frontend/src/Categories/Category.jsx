import React from 'react';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs'
// import Typography from '@material-ui/core/Typography'
// import Link from '@material-ui/core/Link'
import getMockComputeService from '../Mocks/MockComputeServices'
import ServiceSummary from '../Common/ServiceSummary';



class Category extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: this.props.category,
            service: this.props.service,
            data: getMockComputeService(this.props.service),
        }
    }

    render() {
        return(
            <div>
                {/* <Breadcrumbs aria-label="breadcrumb">
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
                </span> */}
                <ServiceSummary props={this.state}/>
            </div>
        )
    }
}

Category.propTypes = {
    category: Number,
    service: Number
}

export default Category;