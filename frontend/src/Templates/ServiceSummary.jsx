import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactMarkdown from 'react-markdown'
import axios from 'axios';
import { Button } from '@material-ui/core';

const gfm = require('remark-gfm')

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
        const res = await axios.get(`${window.env.REACT_APP_BACKEND_API}/categories/${categoryId}/${subCategoryId}`)
        this.setState({ categoryData: res.data, loaded: true });
    }

    componentDidUpdate(prevProps) {
        if (this.props.subCategory !== prevProps.subCategory) {
            this.getCategory(this.props.category, this.props.subCategory)
        }
    }

    lastNextButtons(currentPath) {
        const pathNameArray = currentPath.split("/")
        const currentSection = pathNameArray[1]
        const currentCat = parseInt(pathNameArray[2])
        const currentSubCat = parseInt(pathNameArray[3])

        const lastSubCat = `/${currentSection}/${currentCat}/${currentSubCat <= 1 ? 1 : currentSubCat - 1}`
        const nextSubCat = `/${currentSection}/${currentCat}/${currentSubCat + 1}`

        return (
            <span>
                <Button
                    style={{margin: '5px'}}
                    variant="contained"
                    color="primary"
                    href={lastSubCat}>
                        Last
                </Button>
                <Button
                    style={{margin: '5px'}}
                    variant="contained"
                    color="primary"
                    href={nextSubCat}>
                        Next
                </Button>
            </span>
        )
    }

    render() {
        return (
            this.state.loaded ?
                <div>
                    <Breadcrumbs aria-label='breadcrumb'>
                        <Link color='inherit' href='/'>
                            {this.state.categoryData[0].section_title}
                        </Link>
                        <Link color='inherit'>
                            {this.state.categoryData[0].category_title}
                        </Link>
                        <Typography color='textPrimary'>{this.state.categoryData[0].sub_category_title}</Typography>
                    </Breadcrumbs>
                    <span>
                        <ReactMarkdown plugins={[gfm]} source={this.state.categoryData[0].summary} />

                        {/* Example using summary object */}
                        {/* <h1>{this.state.categoryData[0].summary.title}</h1>
                        {
                            this.state.categoryData[0].summary.subHeaders.map(subHeader => {
                                return(
                                    <div>
                                        <h2>{subHeader.title}</h2>
                                        <SubHeader contents={subHeader.contents} />
                                    </div>
                                )
                            })
                        } */}

                    </span>
                    <div style={{paddingTop: '50px'}}>
                        {this.lastNextButtons(window.location.pathname)}
                    </div>
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
