import React from 'react'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import Info from '@material-ui/icons/Info'
import ListIcon from '@material-ui/icons/List'

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
import Bank from 'react-aws-icons/dist/aws/thing/Bank'
import CloudFront from 'react-aws-icons/dist/aws/logo/CloudFront'
import StorageGateway from 'react-aws-icons/dist/aws/logo/StorageGateway'
import Athena from 'react-aws-icons/dist/aws/logo/Athena'
import CloudWatch from 'react-aws-icons/dist/aws/logo/CloudWatch'
import EFS from 'react-aws-icons/dist/aws/logo/EFS'
import WAF from 'react-aws-icons/dist/aws/logo/WAF'
import Redshift from 'react-aws-icons/dist/aws/logo/Redshift'
import DMS from 'react-aws-icons/dist/aws/logo/DMS'
import EMR from 'react-aws-icons/dist/aws/logo/EMR'
import Route53 from 'react-aws-icons/dist/aws/logo/Route53'
import VPC from 'react-aws-icons/dist/aws/logo/VPC'
import DirectConnect from 'react-aws-icons/dist/aws/logo/DirectConnect'
import ELB from 'react-aws-icons/dist/aws/logo/ELB'
import ElasticBeanstalk from 'react-aws-icons/dist/aws/logo/ElasticBeanstalk'
import SQS from 'react-aws-icons/dist/aws/logo/SQS'
import SWF from 'react-aws-icons/dist/aws/logo/SWF'
import SNS from 'react-aws-icons/dist/aws/logo/SNS'
import ElasticTranscoder from 'react-aws-icons/dist/aws/logo/ElasticTranscoder'
import APIGateway from 'react-aws-icons/dist/aws/logo/APIGateway'
import Kinesis from 'react-aws-icons/dist/aws/logo/Kinesis'
import Cognito from 'react-aws-icons/dist/aws/logo/Cognito'
import CloudHSM from 'react-aws-icons/dist/aws/logo/CloudHSM'
import SystemsManager from 'react-aws-icons/dist/aws/logo/SystemsManager'
import Shield from 'react-aws-icons/dist/aws/logo/Shield'



// List if icons: https://travomic.github.io/react-aws-icons/aws.html
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
    } else if (service === 'billing') {
        return <Bank />
    } else if (service === 'cloudfront') {
        return <CloudFront />
    } else if (service === 'storagegw') {
        return <StorageGateway />
    } else if (service === 'athena') {
        return <Athena />
    } else if (service === 'cloudwatch') {
        return <CloudWatch />
    } else if (service === 'efs') {
        return <EFS />
    } else if (service === 'waf') {
        return <WAF />
    } else if (service === 'redshift') {
        return <Redshift />
    } else if (service === 'dms') {
        return <DMS />
    } else if (service === 'emr') {
        return <EMR />
    } else if (service === 'route53') {
        return <Route53 />
    } else if (service === 'vpc') {
        return <VPC />
    } else if (service === 'directconnect') {
        return <DirectConnect />
    } else if (service === 'elb') {
        return <ELB />
    } else if (service === 'elasticbeanstalk') {
        return <ElasticBeanstalk />
    } else if (service === 'sqs') {
        return <SQS />
    } else if (service === 'swf') {
        return <SWF />
    } else if (service === 'sns') {
        return <SNS />
    } else if (service === 'elastictranscoder') {
        return <ElasticTranscoder />
    } else if (service === 'apigateway') {
        return <APIGateway />
    } else if (service === 'kinesis') {
        return <Kinesis />
    } else if (service === 'cognito') {
        return <Cognito />
    } else if (service === 'cloudhsm') {
        return <CloudHSM />
    } else if (service === 'systemsmanager') {
        return <SystemsManager />
    } else if (service === 'shield') {
        return <Shield />
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
