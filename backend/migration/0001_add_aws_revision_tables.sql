create table if not exists categories(
    category_id int primary key,
    type_id int not null,
    category_name varchar(50) unique not null
);

create table if not exists category_types(
    category_type_id int primary key,
    category_type_name varchar(50) not null
);

create table if not exists sub_categories(
    sub_category_id int primary key,
    type_id int not null,
    parent_category varchar (50) not null,
    sub_category_name varchar(50) unique not null,
    constraint fk_subcategory_in_category foreign key(sub_category_id) references categories(category_id),
    constraint fk_type_in_category_types foreign key(type_id) references category_types(category_type_id)
);

create table if not exists summaries(
    summary_id int primary key,
    type_id int not null,
    sub_category_id int not null,
    summary text not null,
    constraint fk_subcategory_in_subcategory foreign key(sub_category_id) references sub_categories(sub_category_id),
    constraint fk_type_in_category_types foreign key(type_id) references category_types(category_type_id)    
);

create table if not exists revision_checklists(
    revision_checklist_id int primary key,
    type_id int not null,
    sub_category_id int not null,
    checklist text not null,
    constraint fk_subcategory_in_subcategory foreign key(sub_category_id) references sub_categories(sub_category_id),
    constraint fk_type_in_category_types foreign key(type_id) references category_types(category_type_id)    
);

create table if not exists pricing_models(
    pricing_model_id int primary key,
    type_id int not null,
    sub_category_id int not null,
    pricing_model text not null,
    constraint fk_subcategory_in_subcategory foreign key(sub_category_id) references sub_categories(sub_category_id),
    constraint fk_type_in_category_types foreign key(type_id) references category_types(category_type_id)
);
