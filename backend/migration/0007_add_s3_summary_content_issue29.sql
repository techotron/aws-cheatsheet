-- Add sub categories
INSERT INTO sub_categories (category_id, sub_category_name, sub_category_title, sub_category_icon)
VALUES
    (1, 's3storagegw', 'Storage Gateway', 'storagegw'),
    (1, 's3athena', 'Athena vs. Macie', 'athena');

-- Add summaries
INSERT INTO summaries (summary)
VALUES
    ('# Storage Gateway
- Connects an on-premises storage appliance with cloud-based storage
- It''s a virtual of physical device which replicates your data into AWS
- A virtual device would come in the form of an image you can run on eg ESXi or Hyper-V
- Once activated, you use the management console to create the appropriate gateway option
- Comes in 3 different types:
    - File Gateway (NFS + SMB)
    - Volume Gateway (iSCSI)
        - Stored Volumes
        - Cached Volumes
    - Tape Gateway (Virtual Tape Library VTL)

## File Gateway
![image](https://docs.aws.amazon.com/storagegateway/latest/userguide/images/file-gateway-concepts-diagram.png)
- Files are stored as objects in your S3 buckets and accessed through an NFS mount point
- Permissions and timestamps are stored as S3 user-metadata of the object associated with the file
- Once in S3, they can be treated like normal S3 objects (eg versioning, lifecycle management, CRR)

## Volume Gateway
- The volume interface presents your applications with disk volumes using the iSCSI block protocol
- Data written to these volumes can be async backed up as PIT snapshots and stored as EBS snapshots
- Snapshops only contain changes blocks are are compressed to minimise storage charges

### Stored Volumes
![image](https://docs.aws.amazon.com/storagegateway/latest/userguide/images/aws-storage-gateway-stored-diagram.png)
- Let''s you store primary data locally while asynchronously backing up data to AWS
- This provide low latency access to data (as it''s local to your datacentre) whilst provide a copy offsite
- The gateway service has moutned storage which you present as iSCSI targets to you app servers. The data is then asnyc backed up to S3 as EBS snapshots
- Sizes range from 1GB - 16TB

### Cached Volumes
![image](https://docs.aws.amazon.com/storagegateway/latest/userguide/images/aws-storage-gateway-cached-diagram.png)
- Uses S3 as the primary data storage but with cached items stored locally (on the storage gateway instance)
- Still provide low latency access but with scalability of cloud based storage
- Can create volumes up to 32 TiB in size and attach them as iSCSI devices to your app servers
- Sizes range from 1GB - 32TB

###
![image](https://docs.aws.amazon.com/storagegateway/latest/userguide/images/Gateway-VTL-Architecture2-diagram.png)
- You can replace tape media backup strategy with this option
- Supported by NetBackup, Backup Exec, Veeam etc'),

    ('# Athena vs. Macie
**Hint** A popular exam question is to give a scenario and ask which service best suits the use case. 

## Athena
- Service which allows you to query data in S3 using SQL syntax
- It''s serverless. Pay by query / per TB scanned
- Saves on having to create ETL processes
- Works directly with data stored in S3

### Use Cases
- Query log files in S3 (eg ALB logs)
- Generate reports on data stored in S3
- Analyse AWS cost and usage
- Run queries on click-stream data

## Macie
- Uses machine learning natural langauge processing to find PII data in S3
- Macie can recognise if S3 objects contain sensitive data (eg PII) and alert you
- It can anaslyse CloudTrail logs for suspicious API activity


### Use cases
- When you have a requirement to not store PII data in S3
- Good for PCI-DSS and preventing ID theft');
