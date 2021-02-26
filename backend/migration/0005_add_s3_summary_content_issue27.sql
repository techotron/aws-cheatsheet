-- Add sub categories
INSERT INTO sub_categories (category_id, sub_category_name, sub_category_title, sub_category_icon)
VALUES
    (1, 's3glacierselect', 'S3 Select and Glacier Select', 's3'),
    (1, 'billingawsorgs', 'AWS Organizations and Consolidated Billing', 'billing'),
    (1, 's3crossaccounts', 'Sharing S3 Buckets Across Accounts', 's3'),
    (1, 's3crossregionreplication', 'Cross-Region Replication', 's3'),
    (1, 's3transferaccl', 'S3 Transfer Acceleration', 's3');

-- Add summaries
INSERT INTO summaries (summary)
VALUES
    ('# S3 Select and Glacier Select
- Return a sub-set of data from S3 using SQL expressions
- Example: if you want to query a file (such as a CSV file) you''d have to download it first, then run a query against it. With S3 Select, you could query against the content of the file directly
- The entire object doesn''t need to get returned, therefore you''re dealing with less data (plus less costs in terms of data transfer)
- Up to 400% faster
- Glacier select is the same'),

('# AWS Organizations and Consolidated Billing
- An account management service to consolidate multiple AWS accounts
- It has a separate console UI where you can set it up
- A root account to manage bills and identities assign to child Organisational Units (OUs) to trickle policies down to
- Advantages of consolidated billing:
    - One bill per account
    - Easier cost tracking
    - Volume pricing discounts
- Best practices:
    - Use MFA + complex password
    - Only use for billing purposes
    - Enable/Disable AWS services using Service Control Policies (SCP)'),

('# Sharing S3 Buckets Across Accounts
- Share bucket access across accounts in 3 ways:
    - Bucket policies and IAM (programmatic access only + applied to entire bucket)
    - Bucket ACLs and IAM (programmatic access only + individual objects)
    - Cross-account IAM roles (programmatic and console access)

To enable a cross-account IAM role:
1. You need to create the role and specify the AWS account IDs that can use the role + assign a policy.
1. Create an IAM user in the second account and login as that user.
1. That user will now be able to switch account to the first AWS account and will have the permissions that the policy in step 1 allow'),

('# Cross-Region Replication
- Versioning needs to be enabled in source and destination in order to use cross-region replication
- Existing files are not replicated automatically (but updated files are)
- When you create a replicate rule, you have the option to:
    - Change the storage class for the replicated objects
    - Encrypt replicated objects using KMS
    - Enable Replication Time Control (RTC) - 99.99% of new objects are replicated within 15 mins
    - Replicate delete markers (off by default)
- Only the latest version is replicated
- The object will inherit the permissions of the destination bucket
- You can replicate objects to a bucket in another account. Use case for this is for logs going into a bucket in the prod account and then replicating them into a bucket in an audit acocunt.'),

('# S3 Transfer Acceleration
- Uses CloudFront Edge Network to accelerate uploads
- You can use a distinct URL to upload directly to an edge location (eg bucket.s3-accelerate.amazonaws.com)
- Data goes from user -> CF Edge Network -> Bucket
- There is a tool which allows you to compare upload speeds from different locations, using transfer accelerator.');
