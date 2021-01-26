import React from "react";
import PropTypes from "prop-types";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import { AwsIconMatcher, GeneralIconMatcher } from '../Common/Icons';
import { Link } from 'react-router-dom';
import getPathwayHeadings from "../Mocks/MockSREPathway";
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        background: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4
    }
});


class NavList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: {},
            section: this.props.section,
            loaded: false
        }
    }

    handleClick = e => {
        this.setState({ [e]: !this.state[e] });
    };

    getContent(section) {
        if (section === "saacert") {
            this.setState({ section: section})
            this.getAllCategories()
        } else if (section === "srepathways") {
            this.setState({ items: getPathwayHeadings(), section: section })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.section !== prevProps.section) {
            this.getContent(this.props.section)
        }
    }

    componentDidMount() {
        this.getAllCategories()
    }

    getAllCategories = async () => {
        const res = await axios.get(`${window.env.REACT_APP_BACKEND_API}/categories`);
        this.setState({ items: res.data[0].categories, loaded: true });
    }

    render() {
        const { classes } = this.props;
        return (
            this.state.loaded ?
                <div>
                    {this.state.items.categories.map(list => {
                        return (
                            <List className={classes.root} key={list.category_id} subheader={<ListSubheader>{list.title}</ListSubheader>} >
                                {list.items.map(item => {
                                    return (
                                        <div key={item.sub_category_id}>
                                            {item.sub_items != null ? (
                                                <div key={item.sub_category_id}>
                                                    <ListItem button key={item.sub_category_id} onClick={this.handleClick.bind(this, item.sub_category_name)} >
                                                        <ListItemIcon>
                                                            {AwsIconMatcher(item.sub_category_icon)}
                                                        </ListItemIcon>
                                                        <ListItemText primary={item.sub_category_title} />
                                                        {this.state[item.sub_category_name] ? (<ExpandLess />) : (<ExpandMore />)}
                                                    </ListItem>
                                                    <Collapse key={list.items.sub_category_id} component="li" in={this.state[item.sub_category_name]} timeout="auto" unmountOnExit >
                                                        <List disablePadding>
                                                            {item.sub_items.map(
                                                                sitem => {
                                                                    return (
                                                                        <ListItem button key={sitem.sub_item_id} className={classes.nested} component={Link} to={"/" + this.props.section + "/" + sitem.sub_item_name + "/" + list.category_id + "/" + item.sub_category_id}>
                                                                            <ListItemIcon>
                                                                                {GeneralIconMatcher(sitem.sub_item_name)}
                                                                            </ListItemIcon>
                                                                            <ListItemText key={sitem.sub_item_id} primary={sitem.sub_item_title} />
                                                                        </ListItem>
                                                                    );
                                                                }
                                                            )}
                                                        </List>
                                                    </Collapse>{" "}
                                                </div>
                                            ) : (
                                                <ListItem button key={item.sub_category_id} className={classes.nested} component={Link} to={"/" + this.props.section + "/" + list.category_id + "/" + item.sub_category_id}>
                                                    <ListItemIcon>
                                                        {AwsIconMatcher(item.sub_category_icon)}
                                                    </ListItemIcon>
                                                    <ListItemText primary={item.sub_category_title} />
                                                </ListItem>
                                            )}
                                        </div>
                                    );
                                })}
                                <Divider key={list.category_id} absolute />
                            </List>
                        );
                    })}
                </div> : <div><CircularProgress /></div>
        );
    }
}

NavList.propTypes = {
    classes: PropTypes.object.isRequired,
    items: Object,
    section: String,
    newItems: Object,
    loaded: Boolean
};

export default withStyles(styles)(NavList);
