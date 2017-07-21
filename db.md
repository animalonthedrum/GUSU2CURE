1. Open Postico, if needed
2. Connect to your server, if needed
3. Create a new database with the name 'db_gusu'
3. Go the 'db_gusu' database you created
4. In the SQL query window, run the following queries.
5. Click on the OK tab/button to save your database
6. Open the SQL editor and run the following queries




CREATE TABLE tbl_access_lvl (
    id SERIAL PRIMARY KEY,
    access_lvl character varying(6)
);

CREATE TABLE tbl_lang (
    id SERIAL PRIMARY KEY,
    lang character varying(15)
);

CREATE TABLE tbl_rel_status (
    id SERIAL PRIMARY KEY,
    rel_status character varying(10)
);

CREATE TABLE tbl_sci_cause (
    id SERIAL PRIMARY KEY,
    sci_cause character varying(25)
);

CREATE TABLE tbl_sci_rel (
    id SERIAL PRIMARY KEY,
    sci_rel character varying(20)
);

CREATE TABLE tbl_trans_type (
    id SERIAL PRIMARY KEY,
    trans_type character varying(25)
);

CREATE TABLE tbl_visit_pref (
    id SERIAL PRIMARY KEY,
    visit_pref character varying(25)
);

CREATE TABLE tbl_user (
    email character varying(40) PRIMARY KEY,
    date_created date,
    access_lvl integer REFERENCES tbl_access_lvl,
    enabled boolean,
    first_name character varying(25),
    last_name character varying(35),
    dob date,
    gender character varying(20),
    phone character varying(10),
    phone_type character varying(10),
    street character varying(50),
    city character varying(30),
    state character(2),
    zip character(5),
    visit_pref integer REFERENCES tbl_visit_pref,
    sci_relation integer REFERENCES tbl_sci_rel,
    sci_cause integer REFERENCES tbl_sci_cause,
    sci_year character(4),
    sci_lvl character varying(8),
    asia_score character(1),
    mobility_req character varying(20),
    trans_type integer REFERENCES tbl_trans_type,
    rel_status integer REFERENCES tbl_rel_status,
    fam_status character varying(30),
    ed_lvl character varying(25),
    emp_work text,
    lang integer REFERENCES tbl_lang,
    pets boolean,
    hobbies text
);

INSERT INTO tbl_access_lvl
VALUES (1, 'Mentor'),
(2, 'Mentee'),
(3, 'Admin');

INSERT INTO tbl_lang
VALUES (1, 'English'),
(2, 'Hmong'),
(3, 'Somali'),
(4, 'Spanish'),
(5, 'Vietnamese'),
(6, 'Other');

INSERT INTO tbl_rel_status
VALUES (1, 'Single'),
(2, 'Married'),
(3, 'Separated'),
(4, 'Divorced'),
(5, 'Widowed'),
(6, 'Widower'),
(7, 'Other');

INSERT INTO tbl_sci_cause
VALUES (1, 'Motor Vehicle Accident'),
(2, 'Fall'),
(3, 'Alcohol'),
(4, 'Act of Violence'),
(5, 'Sport/Recreation'),
(6, 'Medical/Surgical'),
(7, 'Other');

INSERT INTO tbl_sci_rel
VALUES (1, 'Self'),
(2, 'Spouse/Partner'),
(3, 'Parent'),
(4, 'Sibling'),
(5, 'Friend'),
(6, 'Relative'),
(7, 'Caregiver'),
(8, 'Medical Professional'),
(9, 'Other');

INSERT INTO tbl_trans_type
VALUES (1, 'Personal vehicle'),
(2, 'Public transportation'),
(3, 'Other');

INSERT INTO tbl_visit_pref
VALUES (1, 'Any/All'),
(2, 'Hospital'),
(3, 'Rehabilitation Center'),
(4, 'Care Center/Nursing Home'),
(5, 'At their home'),
(6, 'Online (e.g. Skype)'),
(7, 'Phone Calls'),
(8, 'In Public');

INSERT INTO tbl_user
VALUES ('fab_grahm@gmail.com', '07/21/17', '2', TRUE, 'Fabiola', 'Grahm', '08/16/05', 'Female', '9525086450', 'Home', '8492 Corona St', 'St. Louis Park', 'MN', '55416', 1, 1, 1, '2015', 'C5', 'C', NULL, 1, 1, NULL, NULL, NULL, 1, FALSE, ''),
('jaruby@me.com', '07/21/17', 3, TRUE, 'Jason', 'Ruby', '01/01/1999', 'Male', '9522779414', 'Mobile', '2626 Mockingbird Ln', 'Minneapolis', 'MN', '55379', 1, 9, NULL, NULL, NULL, NULL, NULL, 1, 2, NULL, NULL, NULL, 1, FALSE, NULL);
