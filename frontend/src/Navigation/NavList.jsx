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
            items:  this.props.items,
            parent: this.props.parent
        }
    }

    handleClick = e => {
        this.setState({ [e]: !this.state[e] });
    };

    // TODO: this.props isn't updating when it's changed in App.jsx
    // componentDidUpdate(prevProps) {
    //     if (this.props != prevProps) {
    //         this.setState({items: this.props.items, parent: this.props.parent})
    //     }
    //     console.log(prevProps)
    //     console.log(this.props)
    // }

    render() {
        const { classes } = this.props;
        return (
            <div>
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
                                                                    <ListItem button key={sitem.id} className={classes.nested} component={Link} to={"/" + this.props.parent + "/" + sitem.name + "/" + list.id + "/" + item.id}>
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
    classes: PropTypes.object.isRequired,
    items: Object,
    parent: String
};

export default withStyles(styles)(NavList);
