-- Add category types
INSERT INTO sections (section_id, section_name)
VALUES
    (1, 'saacert'),
    (2, 'srepathways');

-- Add initial AWS SAA categories
INSERT INTO categories (category_id, section_id, category_name, category_title)
VALUES
    (1, 1, 'iams3', 'IAM + S3');

-- Add sub items
INSERT INTO sub_items (sub_item_id, sub_item_name, sub_item_title, sub_item_isEnabled)
VALUES
    (1, 'summary', 'Summary', TRUE),
    (2, 'checklist', 'Revision Checklist', TRUE),
    (3, 'pricing', 'Pricing Model', TRUE);

-- Add sub categories
INSERT INTO sub_categories (sub_category_id, category_id, sub_category_name, sub_category_title, sub_category_icon)
VALUES
    (1, 1, 'iam101', 'IAM 101', 'iam'),
    (2, 1, 'billingalarm', 'Billing Alarm', 'billing');

-- Add summaries
INSERT INTO summaries (summary_id, summary)
VALUES
    (1, '# IAM 101
These are some notes about IAM.

- List item 1
- List item 2
- List item 3

Some example of code block:

```golang
This is a big block of code
with {
    multiple lines
    which do a thing
}
```

This **this is in bold**

This [is a link to Google](https://google.co.uk)


---

A line separator

---

A table:

|Heading1|Heading2|
| --- | --- |
|thing1|thing2|
|thing1a|thing2a|

---

## Some more text
This is a test of a long bit of test to display how this looks. This is a test of a long bit of test to display how this looks. long bit of test to display how this looks. This is a test of a long bit o long bit of test to display how this looks. This is a test of a
long bit o This is a test of a long bit of test to display how this looks. This is a test of a long bit of test to display how this looks. long bit of test to display how this looks. This is a test of a long bit o long bit of test to display how this looks. This is
a test of a long bit oThis is a test of a long bit of test to display how this looks. This is a test of a long bit of test to display how this looks. long bit of test to display how this looks. This is a test of a long bit o long bit of test to display how this looks. This is a test
a long bit oThis is a test of a long bit of test to display how this looks. This is a test of a long bit of test to display how this looks. long bit of test to display how this looks. This is a test of a long bit o long bit of test to display how this looks. This is a test of a long bit oThis
a test of a long bit of test to display how this looks. This is a test of a long bit of test to display how this looks. long bit of test to display how this looks. This is a test of a long bit o long bit of test to display how this looks. This is a test of a long bit oThis is a test of a long bit
test to display how this looks. This is a test of a long bit of test to display how this looks. long bit of test to display how this looks. This is a test of a long bit o long bit of test to display how this looks. This is a test of a long bit oThis is
test of a long bit of test to display how this looks. This is a test of a long bit of test to display how this looks. long bit of test to display how this looks. This is a
of a long bit o long bit of test to display how this looks. This is a test of a long bit oThis is a test of a long bit of test
display how this looks. This is a test of a long bit of test to display how this looks. long bit of test to display how this looks. This is a test of a long bit o long bit of test to display how this looks. This is a test of a long bit oThis is
a test of a long bit of test to display how this looks. This is a test of a long bit of test to display how this looks. long bit of test to display how this looks. 
This is a test of a long bit o long bit of test to display how this looks. This is a test of a long bit oThis is a test of a long bit of test to display how this looks. This is a test of a long bit of test to display how this looks. long bit 
of test to display how this looks. This is a test of a long bit o long bit of test to display how this looks. This is a test of a long bit oThis is a test of a long bit of test to display how this looks. This is a test of a long bit of test to display how this looks. 
long bit of test to display how this looks. This is a test of a long bit o long bit of test to display how this looks. This is a test of a long bit oThis is a test of a long bit of test to display how this looks. This is a test of a long bit of test to display how this looks.
long bit of test to display how this looks. This is a test of a long bit o long bit of test to display how this looks. This is a test of a long bit o

## Another heading
This is a test of a long bit of test to display how this looks. This is a test of a long bit of test to display how this looks. long bit of test to display how this looks. This is a test of a long bit o long bit of test to display how this looks. This is a test of a
long bit o This is a test of a long bit of test to display how this looks. This is a test of a long bit of test to display how this looks. long bit of test to display how this looks. This is a test of a long bit o long bit of test to display how this looks. This is
a test of a long bit oThis is a test of a long bit of test to display how this looks. This is a test of a long bit of test to display how this looks. long bit of test to display how this looks. This is a test of a long bit o long bit of test to display how this looks. This is a test
a long bit oThis is a test of a long bit of test to display how this looks. This is a test of a long bit of test to display how this looks. long bit of test to display how this looks. This is a test of a long bit o long bit of test to display how this looks. This is a test of a long bit oThis
a test of a long bit of test to display how this looks. This is a test of a long bit of test to display how this looks. long bit of test to display how this looks. This is a test of a long bit o long bit of test to display how this looks. This is a test of a long bit oThis is a test of a long bit
test to display how this looks. This is a test of a long bit of test to display how this looks. long bit of test to display how this looks. This is a test of a long bit o long bit of test to display how this looks. This is a test of a long bit oThis is
');
