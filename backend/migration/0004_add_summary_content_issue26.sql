-- Add sub categories
INSERT INTO sub_categories (sub_category_id, category_id, sub_category_name, sub_category_title, sub_category_icon)
VALUES
    (4, 1, 's3secenc', 'S3 Security and Encryption', 's3'),
    (5, 1, 's3versioning', 'S3 Versioning', 's3'),
    (6, 1, 's3lifecycles', 'Lifecycle Management with S3', 's3'),
    (7, 1, 's3objlock', 'S3 Object Lock and Glacier Vault Lock', 's3'),
    (8, 1, 's3perf', 'S3 Performance', 's3');

-- Add summaries
INSERT INTO summaries (summary_id, summary)
VALUES
    (4, '# S3 Security and Encryption
- Buckets are private by default
- Setup access control using **Bucket Policies** and **Access Control Lists**
- Access logs for buckets can be sent to another bucket (in another account if required)

## Encryption
- In transit (HTTPS): Data encrypted using TLS over the wire
- Encryption at rest (server side): Data is encrypted as it''s stored
    - SSE-S3 (S3 managed keys, when you upload/download a file, AWS will encrypt/decrypt it using a managed key)
    - SSE-KMS (You and AWSK manage the keys used to encrypt the data)
    - SSE-C (You give AWS a key to encrypt the data)
- Encryption at rest (client side): You encrypt the data before uploading it to S3

**Note:** You can encrypt files individually or turn on encryption for the entire bucket.'),
    (5, '# S3 Versioning
Versioning stores all versions of an object (including all writes and deletes of an object). It could be leveraged as a basic backup method.
- It can be integrated with Lifecycle rules.
- You can''t turn it off once turned on. You can only suspend it so if you wanted to remove the feature, you''d have to delete the bucket and recreate one without versioning.
- Versions don''t inherit the permissions of the parent object. Eg, if you make the original file publically accessable and then upload a new version. The previous object still exists but it doesn''t automatically become publically available.
- A delete on an object in a bucket with version simply puts a delete marker on it, hiding it from view. You can undo this by deleting the delete marker which unhides the object back in view.
- You can view previous versions by clicking the **List versions** switch in the UI
- It _is_ possible to permanently delete each object version which would delete the object entirely but you''d have to do this for each existing version.
- Versioning''s MFA delete capability can be combined for an extra layer of security.'),
    (6, '# Lifecycle Management with S3
This is a way of automating the moving of objects to different storage tiers
- You can scope Lifecycle rules using filters or apply to all objects in a bucket
- Filters can be made up of a prefix/tags or both
- Rule actions:
    - Transition current versions of objects between storage classes
    - Transition prevous versions of objects between storage classes
    - Expire current versions of objects
    - Permanently delete previous versions of objects
    - Delete expired delete markers of incomplete multipart uploads
- You configure the above actions to occur after a certain number of days which with transition the object from one storage class/state to another.'),
    (7, '# S3 Object Lock and Glacier Vault Lock
## Object Lock
- Write Once Read Many (WORM). When you want to lock an object in place without any modifications. This can prevent objects from getting deleted/modified for a fix/indefinate amount of time
- This can help to meet regulatory requirements
    - Governance Mode:
        - Can''t overwrite, delete or alter lock settings (unless you have special permissions)
        - You can grant users these special permsissions to delegate this responsibility
    - Compliance Mode:
        - Can''t overwrite, delete or alter lock settings **by anyone** (including the root account)
        - Ensures the protection of an object for the duration of the retention period
- The retention period is a timestamp stored in the object''s metadata. When this time expires, the object can be overwritten or deleted unless you also placed a **legal hold** on the object version
- Legal holds is another layer of protection but it doesn''t have a retention period and anyone with the `s3:PutObjectLegalHold` permission can remove it.

## Glacier Vault Lock
Vault lock is a way to enforce controls (such as the ones listed above) **in Glacier** and lock the policy from future edits. Once locked the polciy can no longer be changed.'),
    (8, '# S3 Performance
## Prefixes
- The prefix is the bit after the bucket name and before the object name, eg:
    - bucketname/folder1/subfolder1/file.txt    -> Prefix: **/folder1/subfolder1**
    - bucketname/folder2/subfolder1/file.txt    -> Prefix: **/folder2/subfolder1**
    - bucketname/folder3/file.txt               -> Prefix: **/folder1**

- 3500 PUT/COPY/POST/DELETE requests and 5500 GET/HEAD requests per second **per prefix**
- Low latency - first byte out of S3 within 100-200ms

You can use the above to spread the load by using different prefixes. If you are using 2 prefixes, you can achieve 11,000 req per second.

## KMS
- If you''re using SSE-KMS, you''ll be bound by the KMS API limits as each call to encrypt/decrypt will call the `GenerateDataKey`/`Decrypt` KMS API.
- KMS has hard quotas which are region specific. These are either going to be 5,500, 10,000 or 30,000 per second (depending on region).

## Multipart Uploads/Downloads
- Recommended for files over 100MB and required for files over 5GB
- Allows you to parallelize uploads by splitting the file into parts and uploading each one to S3 in parallel
- You can do the same with downloads by specifying byte ranges. This is also called S3 Bytes-Range fetches.
- Byte range fetches can speed up downloads of large files and also to download partial amounts of information of a file (eg header information).');
