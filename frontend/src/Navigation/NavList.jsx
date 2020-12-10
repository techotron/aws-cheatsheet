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
import getCategories from '../Mocks/Categories';
import { AwsIconMatcher, GeneralIconMatcher } from '../Common/Icons';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';


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
    constructor() {
        super()
        this.state = {
            items:  getCategories(),
        }
    }

    handleClick = e => {
        this.setState({ [e]: !this.state[e] });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <ListItem button key={0} component={Link} to="/" >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                {this.state.items.categories.map(list => {
                    return (
                        <List className={classes.root} key={list.id} subheader={<ListSubheader>{list.title}</ListSubheader>} >
                            {list.items.map(item => {
                                return (
                                    <div key={item.id}>
                                        {item.subitems != null ? (
                                            <div key={item.id}>
                                                <ListItem button key={item.id} onClick={this.handleClick.bind(this,item.name)} >
                                                    <ListItemIcon>
                                                        {AwsIconMatcher(item.name)}
                                                    </ListItemIcon>
                                                    <ListItemText primary={item.title} />
                                                    {this.state[item.name] ? (<ExpandLess />) : (<ExpandMore />)}
                                                </ListItem>
                                                <Collapse key={list.items.id} component="li" in={this.state[item.name]} timeout="auto" unmountOnExit >
                                                    <List disablePadding>
                                                        {item.subitems.map(
                                                            sitem => {
                                                                return (
                                                                    <ListItem button key={sitem.id} className={classes.nested} component={Link} to={"/" + sitem.name + "/" + list.id + "/" + item.id}>
                                                                        <ListItemIcon>
                                                                            {GeneralIconMatcher(sitem.name)}
                                                                        </ListItemIcon>
                                                                        <ListItemText key={sitem.id} primary={sitem.title} />
                                                                    </ListItem>
                                                                );
                                                            }
                                                        )}
                                                    </List>
                                                </Collapse>{" "}
                                            </div>
                                        ) : (
                                            <ListItem button onClick={this.handleClick.bind(this, item.name)} key={item.id} >
                                                <ListItemIcon>
                                                    {AwsIconMatcher(item.name)}
                                                </ListItemIcon>
                                                <ListItemText primary={item.name} />
                                            </ListItem>
                                        )}
                                    </div>
                                );
                            })}
                            <Divider key={list.id} absolute />
                        </List>
                    );
                })}
            </div>
        );
    }
}

NavList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavList);
