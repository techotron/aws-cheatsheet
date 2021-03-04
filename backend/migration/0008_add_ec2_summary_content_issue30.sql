-- Add initial AWS SAA categories
INSERT INTO categories (category_id, section_id, category_name, category_title, category_icon)
VALUES
    (2, 1, 'ec2', 'EC2', 'ec2');

-- Add sub categories
INSERT INTO sub_categories (category_id, sub_category_name, sub_category_title, sub_category_icon)
VALUES
    (2, 'ec2101', 'EC2 101', 'ec2'),
    (2, 'ec2ebs', 'EBS', 'ec2');

-- Add summaries
INSERT INTO summaries (summary)
VALUES
    ('asd'),

    ('asd');
