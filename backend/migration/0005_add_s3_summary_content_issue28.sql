-- Add sub categories
INSERT INTO sub_categories (category_id, sub_category_name, sub_category_title, sub_category_icon)
VALUES
    (1, 's3glacierselect', 'AWS DataSync', 's3'),
    (1, 's3cloudfrontbilling', 'CloudFront', 'cloudfront'),
    (1, 's3cloudfrontdist', 'Create a CloudFront Distribution', 'cloudfront'),
    (1, 's3cloudfronturlcookied', 'CloudFront Signed URLs and Cookies', 'cloudfront'),
    (1, 's3snowball', 'Snowball', 's3');

-- Add summaries
INSERT INTO summaries (summary)
VALUES
    (''),
    (''),
    (''),
    (''),
    ('');
