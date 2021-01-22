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
            categoryData: this.getCategory(this.props.category, this.props.subCategory),
            loaded: false
        }
    }

    getCategory = async (categoryId, subCategoryId) => {
        const res = await axios.get(`http://localhost:5000/categories/${categoryId}/${subCategoryId}`)
        this.setState({ categoryData: res.data, loaded: true });
    }

    componentDidUpdate(prevProps) {
        if (this.props.subCategory !== prevProps.subCategory) {
            this.getCategory(this.props.category, this.props.subCategory)
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
                            {this.state.categoryData[0].category_name}
                        </Link>
                        <Typography color='textPrimary'>{this.state.categoryData[0].sub_category_name}</Typography>
                    </Breadcrumbs>
                    <span>
                        <h1>This is where some information about AWS services will go.</h1>
                        {this.state.categoryData[0].summary}
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
