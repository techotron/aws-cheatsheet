import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import EC2 from 'react-aws-icons/dist/aws/logo/EC2';
import RDS from 'react-aws-icons/dist/aws/logo/RDS';
import S3 from 'react-aws-icons/dist/aws/logo/S3';
import DynamoDB from 'react-aws-icons/dist/aws/logo/DynamoDB';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));

// export default function NestedList() {

class NestedList extends Component {
    constructor() {
        super()
        this.state = {
            computeOpen: false,
            databaseOpen: false,
            storageOpen: false
        }
    }

    useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }));

    classes = this.useStyles();

    // const [open, setOpen] = React.useState(false);

    // handleClick = () => {
    //     setOpen(!open);
    // };

    render() {
        return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Categories
                    </ListSubheader>
                }
                className={this.classes.root}
            >
                <ListItem button>
                    <ListItemIcon>
                        <EC2 />
                    </ListItemIcon>
                    <ListItemText primary="Compute" />
                </ListItem>
                <ListItem button onClick={() => {this.setState({computeOpen: !this.computeOpen})}}>
                    <ListItemIcon>
                        <RDS />
                    </ListItemIcon>
                    <ListItemText primary="Databases" />
                    {this.computeOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse key="database" in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={this.classes.nested}>
                            <ListItemIcon>
                                <DynamoDB />
                            </ListItemIcon>
                            <ListItemText primary="DynamoDB" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={() => {this.setState({databaseOpen: !this.databaseOpen})}}>
                    <ListItemIcon>
                        <S3 />
                    </ListItemIcon>
                    <ListItemText primary="Storage" />
                    {this.databaseOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse key="storage" in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={this.classes.nested}>
                            <ListItemIcon>
                                <S3 />
                            </ListItemIcon>
                            <ListItemText primary="S3" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        );
    }
}

export default NestedList;