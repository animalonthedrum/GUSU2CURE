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
    email character varying(50) PRIMARY KEY,
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
    sci_age character(2),
    sci_lvl character varying(45),
    asia_score character(1),
    mobility_req character varying(20),
    trans_type integer REFERENCES tbl_trans_type,
    rel_status integer REFERENCES tbl_rel_status,
    fam_status character varying(30),
    ed_lvl character varying(25),
    emp_work text,
    lang integer REFERENCES tbl_lang,
    pets boolean,
    hobbies text,
    questions text,
    experience text,
    additional text,
    comments text,
    heard_about text,
    password text
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



<!-- DUMMY DATA -->
INSERT INTO tbl_user (email, date_created, access_lvl, enabled, first_name, last_name, dob, gender, phone, phone_type, street, city, state, zip, visit_pref, sci_relation, sci_cause, sci_age, sci_lvl, asia_score, mobility_req, trans_type, rel_status, fam_status, ed_lvl, emp_work, lang, pets, hobbies, questions, experience, additional, comments, heard_about) VALUES
('tam.gilkson@3m.com','07/19/17',2,TRUE,'Tamiko','Gilkson','06/08/03','Female','7635894980','Other','9169 Grant St','Shakopee','MN','55379',8,3,3,'12','T6 - T12','B','Wheelchair (powered)',99,1,'No children','Some High School','Student',4,FALSE,NULL,'No','N/A','No',NULL,'Website')
,('bhadden@mywork.net','07/21/17',2,TRUE,'Barry','Hadden','08/03/01','Male','6519693171','Home','260 Rosewood Ave','Richfield','MN','55423',3,2,2,'16','C1 - C4','A','Wheelchair (powered)',1,1,'No children','Some High School','Student',1,FALSE,NULL,'No','None really…','I''d prefer being matched with someone close to my age',NULL,'Hospital System')
,('j.l.hickman@pdallas.com','07/22/17',2,TRUE,'Javier','Hickman','12/18/00','Male','7636578057','Cell','772 Glen Creek Ln','Savage','MN','55372',6,1,1,'15','L1 - L5','C','Wheelchair (powered)',1,1,'No children','Some High School','N/A',1,FALSE,NULL,'No','Just myself',NULL,NULL,'Personal Reference')
,('lpal@gmail.com','07/23/17',2,TRUE,'Lon','Palacio','04/15/00','Male','6512925856','Cell','47 Poplar Ct','Eagan','MN','55121',5,1,2,'17','L1 - L5','C','Wheelchair (manual)',1,1,'No children','Some High School','None',5,FALSE,NULL,'Yes','Volunteered once with GetUp StandUp',NULL,NULL,'Email')
,('cliff.deca@msn.com','07/24/17',2,TRUE,'Clif','Delcastillo','07/28/98','Male','7637318143','Cell','328 S Illinois St','Hopkins','MN','55343',6,2,1,'19','C6','B','Wheelchair (manual)',2,1,'No children','HS Grad/GED','Student',1,FALSE,NULL,'No','Nothing really',NULL,NULL,'Website')
,('ja.degroot@msn.com','07/25/17',1,TRUE,'Jana','Degroot','04/12/98','Female','6511708715','Cell','7415 W Brown Ct','Minneapolis','MN','55405',4,1,1,'18','C8','B','Wheelchair (manual)',1,1,'No children','HS Grad/GED','Student',1,TRUE,NULL,'No','I help at the hospital a couple times a month',NULL,NULL,'Website')
,('spedroso@titan.com','07/26/17',1,TRUE,'Sasha','Pedroso','08/01/97','Female','7635658443','Cell','89 E Howard Dr','St. Paul','MN','55114',3,99,6,'17','T1 - T5','B','Wheelchair (manual)',2,1,'No children','HS Grad/GED','No job',1,FALSE,NULL,'No','-',NULL,NULL,'Other')
,('genasmiles@msn.com','07/27/17',2,TRUE,'Gena','Pratts','04/24/90','Female','7636779624','Work','8293 Buckingham Ln','Woodbury','MN','55125',8,1,1,'24','C5','C','Wheelchair (manual)',1,2,'Children at home','Some College','IT Network Admin',3,FALSE,NULL,'Yes','Mentored before',NULL,NULL,'Website')
,('patmarcella@msn.com','07/28/17',1,TRUE,'Patricia','Marcella','01/20/88','Female','6127601747','Home','57 Acacia St','Minneapolis','MN','55423',5,1,4,'13','C7','D','Wheelchair (manual)',99,2,'No children','Associate Degree','Copyrighter',1,TRUE,NULL,'No','None',NULL,NULL,'Website')
,('c_leask@frankinc.com','07/18/17',1,TRUE,'Cecilia','Leask','03/28/84','Female','6518384939','Cell','447 Canal Ave','Burnsville','MN','55306',8,1,2,'27','T1 - T5','A','Wheelchair (manual)',2,2,'No children','Undergraduate Degree','Programmer',1,FALSE,NULL,'No','This is my first time mentoring',NULL,NULL,'Hospital System')
,('wendyreineke74@friendorfoe.com','07/19/17',1,TRUE,'Wendy','Reineke','01/17/82','Female','9523078045','Cell','9695 White Dr','Bloomington','MN','55437',2,99,4,'25','C7','B','Wheelchair (powered)',1,2,'No children','Some College','New auto sales',1,FALSE,NULL,'No','N/A',NULL,NULL,'Personal Reference')
,('scott_hockey@gmail.com','07/21/17',1,TRUE,'Scott','Wolter','08/15/81','Male','6125824643','Cell','99 Pineknoll Ave','Crystal','MN','55422',5,7,99,'29','C8','A','Wheelchair (powered)',1,1,'No children','Associate Degree','Landscape work',2,FALSE,NULL,'No','Nothing',NULL,NULL,'Personal Reference')
,('collinfar@yahoo.com','07/22/17',2,TRUE,'Collin','Farnum','01/15/78','Male','9520199932','Home','69 Franklin St','Golden Valley','MN','55405',8,1,2,'19','C7','B','Wheelchair (powered)',2,4,'Children at home','Undergraduate Degree','Retail manager',1,FALSE,NULL,'No','Used to mentor…getting back into it!',NULL,'Nothing to add.','Personal Reference')
,('ken.mcnary@fieldsmate.come','07/23/17',1,TRUE,'Ken','McNary','05/15/74','Male','6122873788','Home','806 S Lawrence Dr','Fridley','MN','55421',8,2,1,'17','T1 - T5','D','Wheelchair (manual)',1,2,'Children at home','Graduate Degree','Insurance',1,TRUE,NULL,'No','None to speak of',NULL,NULL,'Hospital System')
,('clarmoe279@gmail.com','07/24/17',1,TRUE,'Clarisa','Moench','01/12/73','Female','9524816239','Home','9228 New Saddle St','Apple Valley','MN','55124',3,1,2,'38','S1 - S5','B','Wheelchair (manual)',2,2,'hildren grown, out of home','Graduate Degree','Stay-at-home mom',1,FALSE,NULL,'Yes','I''ve helped out once before with this program',NULL,NULL,'Other')
,('kendar_borrego@philnow.org','07/25/17',1,TRUE,'Kendar','Borrego','08/04/69','Prefer not to answer','9520915415','Cell','7668 Thomas St','Savage','MN','55378',7,1,1,'21','C5','D','Wheelchair (manual)',2,4,'Children grown, out of home','Associate Degree','Day care',4,FALSE,NULL,'No','N/A',NULL,'Great program. Thank you!','Email')
,('rodthebody@yahoo.com','07/26/17',1,TRUE,'Rodney','Hellwig','09/20/67','Male','6125097217','Cell','42 Gartner Ln','Bloomington','MN','55425',6,2,4,'28','L1 - L5','A','Wheelchair (powered)',1,1,'No children','Undergraduate Degree','Student',1,FALSE,NULL,'No','Never mentored before, but I had a mentor for a couple years',NULL,'I''m looking forward to helping!','Other')
,('marishap@twotone.net','07/27/17',1,TRUE,'Marisha','Priestly','06/16/67','Female','6515141843','Work','9 W Mayflower Dr','Bloomington','MN','55122',7,1,6,'21','S1 - S5','B','Wheelchair (powered)',2,1,'No children','Undergraduate Degree','Admin assistant',1,FALSE,NULL,'No','None',NULL,NULL,'Other')
,('kelsberry@gmail.com','07/28/17',1,TRUE,'Kylee','Elsberry','02/10/67','Female','6121094779','Home','87 N High Dr','Robbinsdale','MN','55412',8,1,1,'26','C8','D','Wheelchair (manual)',99,6,'Children grown, out of home','Some College','Officer work',1,FALSE,NULL,'Yes','I don''t have any',NULL,NULL,'Personal Reference')
,('jbm@gmail.com','07/22/17',3,TRUE,'Jabrmo','Rumilmgil','04/24/90','Male','6125551212','Work','301 S 4th St, #577','Minneapolis','MN','55145',6,99,1,'12','C2,C3,C4,C5','B','Wheelchair (powered)',1,1,'No children','Some College','Volunteer',1,FALSE,NULL,'No','Nothing',NULL,NULL,'Website');
