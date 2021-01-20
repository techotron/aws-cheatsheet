import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

class ServiceSummary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: this.props.category,
            subCategory: this.props.subCategory,
            categoryData: this.getCategory(1),
            loaded: false
        }
    }

    getCategory = async (subCategoryId) => {
        const res = await axios.get(`http://localhost:5000/categories/category/` + subCategoryId)
        this.setState({ categoryData: res.data, loaded: true });
    }

    componentDidUpdate(prevProps) {
        if (this.props.subCategory !== prevProps.subCategory) {
            this.getCategory(this.props.subCategory)
        }

    }

    render() {
        return (
            this.state.loaded ?
                <div>
                    <Breadcrumbs aria-label='breadcrumb'>
                        <Link color='inherit' href='/'>
                            summary
                        </Link>
                        <Link color='inherit'>
                            {this.props.data.categoryName}
                            {console.log(this.state.categoryData)}
                        </Link>
                        <Typography color='textPrimary'>{this.props.data.name}</Typography>
                    </Breadcrumbs>
                    <span>
                        <h1>This is where some information about AWS services will go.</h1>
                        {this.props.data.summary}
                    </span>
                </div> : <div><CircularProgress /></div>
        )
    }
}

ServiceSummary.propTypes = {
    category: Number,
    subCategory: Number,
    categoryData: Object,
    loaded: Boolean
}

export default ServiceSummary
