create table if not exists category_types(
    category_type_id int primary key,
    category_type_name varchar(50) not null
);

create table if not exists categories(
    category_id int primary key,
    type_id int not null,
    category_name varchar(50) unique not null,
    constraint fk_type_in_category_types foreign key(type_id) references category_types(category_type_id)
);

create table if not exists sub_categories(
    sub_category_id int primary key,
    category_id int not null,
    sub_category_name varchar(50) unique not null,
    sub_category_title varchar(50) unique not null,
    constraint fk_subcategory_in_category foreign key(category_id) references categories(category_id)
);

create table if not exists summaries(
    summary_id int primary key,
    summary text not null,
    use_case text not null,
    constraint fk_subcategory_in_subcategory foreign key(summary_id) references sub_categories(sub_category_id)
);

create table if not exists checklists(
    checklist_id int primary key,
    checklist text not null,
    constraint fk_subcategory_in_subcategory foreign key(checklist_id) references sub_categories(sub_category_id)
);

create table if not exists pricing_models(
    pricing_model_id int primary key,
    pricing_model text not null,
    constraint fk_subcategory_in_subcategory foreign key(pricing_model_id) references sub_categories(sub_category_id)
);
