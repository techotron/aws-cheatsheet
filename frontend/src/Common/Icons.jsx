import React from 'react'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import Info from '@material-ui/icons/Info'
import ListIcon from '@material-ui/icons/List'
import BubbleChartIcon from '@material-ui/icons/BubbleChart'

import EC2 from 'react-aws-icons/dist/aws/logo/EC2'
import RDS from 'react-aws-icons/dist/aws/logo/RDS'
import S3 from 'react-aws-icons/dist/aws/logo/S3'
import DynamoDB from 'react-aws-icons/dist/aws/logo/DynamoDB'
import ECS from 'react-aws-icons/dist/aws/logo/ECS'
import Lambda from 'react-aws-icons/dist/aws/logo/Lambda'
import Glacier from 'react-aws-icons/dist/aws/logo/Glacier'
import ElasticCache from 'react-aws-icons/dist/aws/logo/ElasticCache'
import IAM from 'react-aws-icons/dist/aws/logo/IAM'
import KMS from 'react-aws-icons/dist/aws/logo/KMS'

function AwsIconMatcher(service) {
    if (service === 'ec2') {
        return <EC2 />
    } else if (service === 'rds') {
        return <RDS />
    } else if (service === 's3') {
        return <S3 />
    } else if (service === 'dynamodb') {
        return <DynamoDB />
    } else if (service === 'ecs') {
        return <ECS />
    } else if (service === 'aurora') {
        return <RDS />
    } else if (service === 'lambda') {
        return <Lambda />
    } else if (service === 's3glacier') {
        return <Glacier />
    } else if (service === 'elasticcache') {
        return <ElasticCache />
    } else if (service === 'iam') {
        return <IAM />
    } else if (service === 'kms') {
        return <KMS />
    }
}

function GeneralIconMatcher(item) {
    if (item === 'pricing') {
        return <MonetizationOnIcon />
    } else if (item === 'summary') {
        return <Info />
    } else if (item === 'checklist') {
        return <ListIcon />
    } else if (item.includes('scenario')) {
        return <BubbleChartIcon />
    }
}

export {
    AwsIconMatcher,
    GeneralIconMatcher
}
