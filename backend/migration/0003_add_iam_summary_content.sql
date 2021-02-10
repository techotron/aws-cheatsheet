-- Add summaries
INSERT INTO summaries (summary_id, summary)
VALUES
    (1, '# IAM 101
Identity and Access Management

- Global resource - not tied to specific region
- This is where you can setup users, groups, roles and policies
    - Users 
    - Groups (collection of users which will inherit permissions of the group)
    - Roles (how you assign permissions to an AWS resource eg, grant an EC2 instance to write to S3)
    - Policies (JSON documents which define what permissions a User/Group/Role can do)
- Provides centralised control of the AWS account
- You can provide temporary access for users/devices if required
- You can enable MFA, setup password rotation policies
- It is PCI DSS compliant
- Root account has permissions to do everything

IAM accounts can connect to the console using a username/password (with MFA as an optional). They can conect programmatically by using the Access Key ID and the Secret Access Key.
Permissions are assigned to a user via attaching a policy. There are many built-in policies that AWS manage that tie into a job function, or you can create custom policies for more granular control.


# Billing Alarm
This is a short one but it''s been seen on the exam before such as "How can you get alerts if your bill exceeds $X?". This is done by creating an Alarm via Cloudwatch which uses a SNS topic pointing to an endpoint (such as an e-mail address for example).'),
    (2, '# S3 101
Simple Storage Services

- A global service but the buckets themselves exist in a single region
- Object based storage (eg files) as opposed to block storage
- There is unlimited storage and file sizes can range from 0B to 5TB
- Globally unique names which can be accessed with a DNS record
- Example URLs:
    - us-east-1: https://myuniquebucketname.s3.amazonaws.com/
    - eu-west-2: https://myuniquebucketname.eu-west-2.amazonaws.com/
- HTTP 200 if upload was successful (has been seen as an exam question)

## Objects
S3 is object storage. Objects consist of the following:
- Key (name of the object)
- Value (sequence of bytes that is the actual data of the object)
- VersionID (used for versioning)
- Metadata (about the data you''re storing eg "finance spreadsheet" or "belongs to payroll")
- Subresources (Access Control Lists (ACLs), Torrent)

## Data Consistency
- Read after Write for PUTS of new objects
    - This means you''re able to read it straight after uploading it
- Eventual Consistency for overwrite PUTS and DELETES
    - These can take time to propergate, thus "eventual"
    - Eg, if you overwrite version 1 of an object and then try and read it, you _may_ recieve version 1 but _eventually_ you''ll recieve the next version.

## AWS Guarantees
- Built for 99.99% availability
- AWS guarantee 99.9% availability
- AWS guarantee 99.999999999% durability (11 nines)

## Key Features
- Tired Storage Classes
- Lifecycle Management
- Versioning
- Encryption
- MFA for Deleting objects
- Security using bucket policies and/or access control lists

### Storage Classes
- S3 standard
    - 99.99% avail / 11 nines durability
    - Stored redundantly across multiple devices in multiple facilities
    - Designed to sustain the loss of 2 facilities concurrently
- S3 - IA (Infrequently Accessed)
    - Infrequent access but requires rapid access when needed
    - Lower cost than standard but charged a retrieval fee
- S3 One Zone - IA
    - Lower cost option of S3 -IA
    - Less durable (doesn''t use multiple AZ)
    - Has been known to be referred to as "RRS"
- S3 - Intelligent Tiering
    - Uses machine learning to look at retrieval activity and move objects at different classes
- S3 Glacier
    - For data archiving (low cost)
    - Prices are competitive with comparable on-prem solutions
    - Data retrieval is configurable from minutes to hours
- S3 Glacier Deep Archive
    - Similar to S3 Glacier but even lower cost
    - Retrieval time of 12 hours

| |S3 Standard|S3 - IT|S3 IA|S3 One Zone IA|S3 Glacier|S3 Glacier Deep Archive|
|---|---|---|---|---|---|---|
|Durability|11 9''s|11 9''s|11 9''s|11 9''s|11 9''s|11 9''s|
|Availability|99.99%|99.9%|99.9%|99.5%|n/a|n/a|
|Availability SLA|99.9%|99%|99%|99%|n/a|n/a|
|AZs|>=3|>=3|>=3|1|>=3|>=3|
|Min capacity charge|n/a|n/a|128KB|128KB|40KB|40KB|
|Min storage duration charge|n/a|30 days|30 days|30 days|90 days|180 days|
|Retrieval fee|n/a|n/a|per GB|per GB|per GB|per GB|
|First byte latency|ms|ms|ms|ms|minutes or hours|hours|'),
    (3, '# S3 Pricing Tiers
## Price Model
You''re charged by:
- Amount of storage
- Number of requests
- Tier used
- Data transfer
- Transfer acceleration (S3 makes use of CloudFront edge locations)
- Cross-region replication (replicate contents of buckets between regions)

Questions on the actual price are unlikely to appear in the exam but you may be asked what the best value of storage is, given a set of requirements.

From most expensive to cheapest:  
1. S3 Standard
1. S3 - IA
1. S3 - Intelligent Tiering
1. S3 - One Zone - IA
1. S3 Glacier
1. S3 Glacier Deep Archive

The cost of _S3 - Intelligent Tiering_ is the same as S3 Standard except there is an added cost of the automated migration between the tier so if you only have a small number of objects, this may be the cheapest solution (which isn''t for long term archives)

If redundancy isn''t a factor - then _S3 - One Zone - IA_ might be the best solution.');
