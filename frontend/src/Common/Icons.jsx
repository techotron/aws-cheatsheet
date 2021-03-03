import React from 'react'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import Info from '@material-ui/icons/Info'
import ListIcon from '@material-ui/icons/List'

import EC2 from 'react-aws-icons/dist/aws/logo/EC2'
import Rds from 'react-aws-icons/dist/aws/logo/RDS'
import S3 from 'react-aws-icons/dist/aws/logo/S3'
import DynamoDB from 'react-aws-icons/dist/aws/logo/DynamoDB'
import Ecs from 'react-aws-icons/dist/aws/logo/ECS'
import Lambda from 'react-aws-icons/dist/aws/logo/Lambda'
import Glacier from 'react-aws-icons/dist/aws/logo/Glacier'
import ElasticCache from 'react-aws-icons/dist/aws/logo/ElasticCache'
import Iam from 'react-aws-icons/dist/aws/logo/IAM'
import Kms from 'react-aws-icons/dist/aws/logo/KMS'
import Bank from 'react-aws-icons/dist/aws/thing/Bank'
import CloudFront from 'react-aws-icons/dist/aws/logo/CloudFront'
import StorageGateway from 'react-aws-icons/dist/aws/logo/StorageGateway'

// List if icons: https://travomic.github.io/react-aws-icons/aws.html
function AwsIconMatcher(service) {
    if (service === 'ec2') {
        return <EC2 />
    } else if (service === 'rds') {
        return <Rds />
    } else if (service === 's3') {
        return <S3 />
    } else if (service === 'dynamodb') {
        return <DynamoDB />
    } else if (service === 'ecs') {
        return <Ecs />
    } else if (service === 'aurora') {
        return <Rds />
    } else if (service === 'lambda') {
        return <Lambda />
    } else if (service === 's3glacier') {
        return <Glacier />
    } else if (service === 'elasticcache') {
        return <ElasticCache />
    } else if (service === 'iam') {
        return <Iam />
    } else if (service === 'kms') {
        return <Kms />
    } else if (service === 'billing') {
        return <Bank />
    } else if (service === 'cloudfront') {
        return <CloudFront />
    } else if (service === 'storagegw') {
        return <StorageGateway />
    }
}

function GeneralIconMatcher(item) {
    if (item === 'pricing') {
        return <MonetizationOnIcon />
    } else if (item === 'summary') {
        return <Info />
    } else if (item === 'checklist') {
        return <ListIcon />
    }
}

export {
    AwsIconMatcher,
    GeneralIconMatcher
}
