import React from "react";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Info from '@material-ui/icons/Info';

import EC2 from 'react-aws-icons/dist/aws/logo/EC2';
import RDS from 'react-aws-icons/dist/aws/logo/RDS';
import S3 from 'react-aws-icons/dist/aws/logo/S3';
import DynamoDB from 'react-aws-icons/dist/aws/logo/DynamoDB';
import ECS from 'react-aws-icons/dist/aws/logo/ECS';
import Lambda from 'react-aws-icons/dist/aws/logo/Lambda';
import Glacier from 'react-aws-icons/dist/aws/logo/Glacier';

function AwsIconMatcher(service) {
    if (service === "EC2") {
        return <EC2 />
    } else if (service === "RDS") {
        return <RDS />
    } else if (service === "S3") {
        return <S3 />
    } else if (service === "DynamoDB") {
        return <DynamoDB />
    } else if (service === "ECS") {
        return <ECS />
    } else if (service === "Aurora") {
        return <RDS />
    } else if (service === "Lambda") {
        return <Lambda />
    } else if (service === "S3 Glacier") {
        return <Glacier />
    }
}

function GeneralIconMatcher(item) {
    if (item === "Pricing Model") {
        return <MonetizationOnIcon />
    } else if (item === "Summary") {
        return <Info />
    }
}


export {
    AwsIconMatcher,
    GeneralIconMatcher
}
