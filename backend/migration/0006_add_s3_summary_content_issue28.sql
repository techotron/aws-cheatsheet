-- Add sub categories
INSERT INTO sub_categories (category_id, sub_category_name, sub_category_title, sub_category_icon)
VALUES
    (1, 's3datasync', 'AWS DataSync', 's3'),
    (1, 's3cloudfront', 'CloudFront', 'cloudfront'),
    (1, 's3cloudfronturlcookies', 'CloudFront Signed URLs and Cookies', 'cloudfront'),
    (1, 's3snowball', 'Snowball', 's3');

-- Add summaries
INSERT INTO summaries (summary)
VALUES
    ('# AWS DataSync
- DataSync agent on a server which is connected to NFS/SMB file system will sync data to AWS
- DataSync will encrypt and accelerate tranfer over the WAN
- Automatic integrity checks in-transit and at rest.
- Connects to S3, EFS, Amazon FSx (for Windows File Server) to copy data **and** metadata
- Used to move **large** amounts of data
- Replication can be done hourly, daily or weekly
- Can be used to replicate EFS to EFS (eg EC2 connected to 2 EFS volumes + the agent installed can replicate the data)'),

    ('# CloudFront
- Content Delivery Network (CDN) - distributed network of servers that delivers web content to a user based on their geographical location to provide optimal performance
- It can be used to deliver static/dynamic websites, streaming and interactive content
- Edge Locations can be written to as well - **not** just read only.
- Key terms:
    - **Edge Location**: Where the content will be cached
    - **Origin**: The source of the files that the CDN will distribute (S3 bucket, EC2 instance, ELB or Route53)
    - **Distribution**: Name of the CDN, which consists of a collection of Edge Locations
- A user''s request will hit an edge location. If the edge location doesn''t have a copy of the requested file, it will fetch it from the origin and cache it for a configurable time period (TTL).
- You can clear cached content by invalidating them (meaning the edge locations will fetch from the origin when it''s next requested)
- There are 2 different types of distributions: **Web Distribution** (used for websites) and **RTMP** used for media streaming.'),

    ('# CloudFront Signed URLs and Cookies
- Signed URLs and cookies are a way of restricting access to the content in a CDN to they''re only accessable for the intended users.
- **Signed URLs**: are used for invididual files
- **Signed Cookies**: are for multiple files
- You attach a policy to the signed URL or cookies, which can include:
    - URL Expiration
    - IP ranges
    - Trusted signers (which AWS accounts can create signed URLS)
    - Path
    - Date

A typical workflow would look like this:
1. Client authenticates to application (eg Linux Academy)
1. Application uses SDK to generate a signed URL (or cookie) for a CloudFront resource (from an edge location)
1. The signed URL (or cookie) is passed back to the client
1. Client uses signed URL to fetch file from CloudFront

## S3 Signed URL
- Allows access to the file in the bucket directly
- Slightly different to the CloudFront example above in that it issues a request as the IAM user who creates the pre-signed URL (therefore has the same permissions as that IAM user)
- S3 signed URL requests have a limited lifetime
**Note:** If your origin is EC2, then this isn''t an option'),

    ('# Snowball Services
- Big portable disk (petebyte scale) for moving large amounts of data into and out of AWS.

## Snowball
- Addresses problems like security concerns (eg if source of data isn''t/shouldn''t have internet access), large transfer time and costs
- 50TB and 80TB sizes
- 256-bit encryption
- Trusted Platform Module (TPM) to ensure full chain of custody of data
- When data has been processed and verified, AWS erases data on the Snowball appliance

## Snowball Edge
- 100TB of data with on-board compute (eg for running lambda functions).
- Used for:
    - Moving large amounts of data in/out of AWS
    - Temp storage tier for large local datasets
    - Support local workloads in remote of offline locations
    - Can cluster multiple Snowball edges together
    - Think of it like a portable AWS you can have on site locally

## Snowmobile
- Exabyte scale data transfer service used to move large amounts of data
- Can transfer up to 100PB per Snowmobile
- Used for video libraries, image repositories or complete data center migration
- Contained within a shipping container

## When to use Snowball
|Available Internet Connection|Min Transfer Time (80% network utilisation)|When to use|
|---|---|---|
|44Mpbs (T3)|269 days|When import/exporting 2TB or more|
|100Mbps|120 days|When import/exporting 5TB or more|
|1000Mbps|12 days|When import/exporting 60TB or more|');
