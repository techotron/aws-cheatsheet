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
INSERT INTO sub_categories (sub_category_id, category_id, sub_category_name, sub_category_title, sub_items)
VALUES
    (1, 1, 'ec2', 'EC2', '[{"id": 1, "name": "summary", "title": "Summary"},{"id": 2, "name": "checklist", "title": "Revision Checklist"},{"id": 3, "name": "pricing", "title": "Pricing Model"}]'),
    (2, 1, 'ecs', 'ECS', '[{"id": 1, "name": "summary", "title": "Summary"},{"id": 2, "name": "checklist", "title": "Revision Checklist"},{"id": 3, "name": "pricing", "title": "Pricing Model"}]'),
    (3, 1, 'lambda', 'Lambda', '[{"id": 1, "name": "summary", "title": "Summary"},{"id": 2, "name": "checklist", "title": "Revision Checklist"},{"id": 3, "name": "pricing", "title": "Pricing Model"}]'),
    (4, 2, 's3', 'S3', '[{"id": 1, "name": "summary", "title": "Summary"},{"id": 2, "name": "checklist", "title": "Revision Checklist"},{"id": 3, "name": "pricing", "title": "Pricing Model"}]'),
    (5, 2, 's3glacier', 'S3 Glacier', '[{"id": 1, "name": "summary", "title": "Summary"},{"id": 2, "name": "checklist", "title": "Revision Checklist"},{"id": 3, "name": "pricing", "title": "Pricing Model"}]'),
    (6, 3, 'rds', 'RDS', '[{"id": 1, "name": "summary", "title": "Summary"},{"id": 2, "name": "checklist", "title": "Revision Checklist"},{"id": 3, "name": "pricing", "title": "Pricing Model"}]'),
    (7, 3, 'dynamodb', 'DynamoDB', '[{"id": 1, "name": "summary", "title": "Summary"},{"id": 2, "name": "checklist", "title": "Revision Checklist"},{"id": 3, "name": "pricing", "title": "Pricing Model"}]'),
    (8, 3, 'aurora', 'Aurora', '[{"id": 1, "name": "summary", "title": "Summary"},{"id": 2, "name": "checklist", "title": "Revision Checklist"},{"id": 3, "name": "pricing", "title": "Pricing Model"}]'),
    (9, 3, 'elasticcache', 'ElasticCache', '[{"id": 1, "name": "summary", "title": "Summary"},{"id": 2, "name": "checklist", "title": "Revision Checklist"},{"id": 3, "name": "pricing", "title": "Pricing Model"}]'),
    (10, 4, 'iam', 'IAM', '[{"id": 1, "name": "summary", "title": "Summary"},{"id": 2, "name": "checklist", "title": "Revision Checklist"}]'),
    (11, 4, 'kms', 'KMS', '[{"id": 1, "name": "summary", "title": "Summary"},{"id": 2, "name": "checklist", "title": "Revision Checklist"},{"id": 3, "name": "pricing", "title": "Pricing Model"}]');

-- Add summaries
INSERT INTO summaries (summary_id, summary, use_case)
VALUES
    (1, 'This is the summary for the EC2 service', 'Use cases - when you want a virtual machine'),
    (2, 'This is the summary for the ECS service', 'Use cases - when you want to run containers'),
    (3, 'This is the summary for the Lambda service', 'Use cases - when you want to run functions'),
    (4, 'This is the summary for the S3 service', 'Use cases - when you want storage'),
    (5, 'This is the summary for the S3 Glacier service', 'Use cases - when you want long term storage'),
    (6, 'This is the summary for the RDS service', 'Use cases - when you want a relational DB instance'),
    (7, 'This is the summary for the DynamoDB service', 'Use cases - when you want a NoSQL DB'),
    (8, 'This is the summary for the Aurora service', 'Use cases - when you want a managed, scalable DB cluster'),
    (9, 'This is the summary for the ElasticCache service', 'Use cases - when you want a caching/KV database'),
    (10, 'This is the summary for the IAM service', 'Use cases - for securing resources'),
    (11, 'This is the summary for the KMS service', 'Use cases - encryption/decryption, key managed service');

-- Add checklists
INSERT INTO checklists (checklist_id, checklist)
VALUES
    (1, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (2, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (3, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (4, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (5, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (6, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (7, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (8, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (9, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (10, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item'),
    (11, '## Markdown list of key facts
* This is going to be a markdown pointed list
* Second item
* Third item
* Forth item');

-- Add pricing models
INSERT INTO pricing_models (pricing_model_id, pricing_model)
VALUES
    (1, 'Some information about the pricing model of the service'),
    (2, 'Some information about the pricing model of the service'),
    (3, 'Some information about the pricing model of the service'),
    (4, 'Some information about the pricing model of the service'),
    (5, 'Some information about the pricing model of the service'),
    (6, 'Some information about the pricing model of the service'),
    (7, 'Some information about the pricing model of the service'),
    (8, 'Some information about the pricing model of the service'),
    (9, 'Some information about the pricing model of the service'),
    (10, 'Some information about the pricing model of the service'),
    (11, 'Some information about the pricing model of the service');
