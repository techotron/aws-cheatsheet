-- Add category types
INSERT INTO category_types (category_type_id, category_type_name)
VALUES
    (1, 'revision'),
    (2, 'srepathways');

-- Add revision categories
INSERT INTO categories (category_id, type_id, category_name)
VALUES
    (1, 1, 'compute'),
    (2, 1, 'storage'),
    (3, 1, 'databases'),
    (4, 1, 'security');

-- Add sub categories
INSERT INTO sub_categories (sub_category_id, type_id, parent_category, sub_category_name, sub_category_title)
VALUES
    (1, 1, 1, 'ec2', 'EC2'),
    (2, 1, 1, 'ecs', 'ECS'),
    (3, 1, 1, 'lambda', 'Lambda'),
    (4, 1, 2, 's3', 'S3'),
    (5, 1, 2, 's3glacier', 'S3 Glacier'),
    (6, 1, 3, 'rds', 'RDS'),
    (7, 1, 3, 'dynamodb', 'DynamoDB'),
    (8, 1, 3, 'aurora', 'Aurora'),
    (9, 1, 3, 'elasticcache', 'ElasticCache'),
    (10, 1, 4, 'iam', 'IAM'),
    (11, 1, 4, 'kms', 'KMS');

-- Add summaries
INSERT INTO summaries (summary_id, type_id, parent_category_id, summary, use_case)
VALUES
    (1, 1, 1, 'This is the summary for the EC2 service', 'Use cases - when you want a virtual machine'),
    (2, 1, 1, 'This is the summary for the ECS service', 'Use cases - when you want to run containers'),
    (3, 1, 1, 'This is the summary for the Lambda service', 'Use cases - when you want to run functions'),
    (4, 1, 2, 'This is the summary for the S3 service', 'Use cases - when you want storage'),
    (5, 1, 2, 'This is the summary for the S3 Glacier service', 'Use cases - when you want long term storage'),
    (6, 1, 3, 'This is the summary for the RDS service', 'Use cases - when you want a relational DB instance'),
    (7, 1, 3, 'This is the summary for the DynamoDB service', 'Use cases - when you want a NoSQL DB'),
    (8, 1, 3, 'This is the summary for the Aurora service', 'Use cases - when you want a managed, scalable DB cluster'),
    (9, 1, 3, 'This is the summary for the ElasticCache service', 'Use cases - when you want a caching/KV database'),
    (10, 1, 4, 'This is the summary for the IAM service', 'Use cases - for securing resources'),
    (11, 1, 4, 'This is the summary for the KMS service', 'Use cases - encryption/decryption, key managed service');

-- Add checklists
INSERT INTO checklists (revision_checklist_id, type_id, parent_category_id, checklist)
VALUES
    (1, 1, 1, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (2, 1, 1, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (3, 1, 1, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (4, 1, 2, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (5, 1, 2, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (6, 1, 3, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (7, 1, 3, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (8, 1, 3, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (9, 1, 3, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (10, 1, 4, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (11, 1, 4, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item');

-- Add pricing models
INSERT INTO pricing_models (pricing_model_id, type_id, parent_category_id, pricing_model)
VALUES
    (1, 1, 1, 'Some information about the pricing model of the service'),
    (2, 1, 1, 'Some information about the pricing model of the service'),
    (3, 1, 1, 'Some information about the pricing model of the service'),
    (4, 1, 2, 'Some information about the pricing model of the service'),
    (5, 1, 2, 'Some information about the pricing model of the service'),
    (6, 1, 3, 'Some information about the pricing model of the service'),
    (7, 1, 3, 'Some information about the pricing model of the service'),
    (8, 1, 3, 'Some information about the pricing model of the service'),
    (9, 1, 3, 'Some information about the pricing model of the service'),
    (10, 1, 4, 'Some information about the pricing model of the service'),
    (11, 1, 4, 'Some information about the pricing model of the service');
