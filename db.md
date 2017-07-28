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
(99, 'Other');

INSERT INTO tbl_rel_status
VALUES (1, 'Single'),
(2, 'Married'),
(3, 'Separated'),
(4, 'Divorced'),
(5, 'Widowed'),
(6, 'Widower'),
(99, 'Other');

INSERT INTO tbl_sci_cause
VALUES (1, 'Motor Vehicle Accident'),
(2, 'Fall'),
(3, 'Alcohol'),
(4, 'Act of Violence'),
(5, 'Sport/Recreation'),
(6, 'Medical/Surgical'),
(99, 'Other');

INSERT INTO tbl_sci_rel
VALUES (1, 'Self'),
(2, 'Spouse/Partner'),
(3, 'Parent'),
(4, 'Sibling'),
(5, 'Friend'),
(6, 'Relative'),
(7, 'Caregiver'),
(8, 'Medical Professional'),
(99, 'Other');

INSERT INTO tbl_trans_type
VALUES (1, 'Personal vehicle'),
(2, 'Public transportation'),
(99, 'Other');

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
 ('fab_grahm@gmail.com','07/18/17',2,TRUE,'Fabiola','Grahm','08/16/05','Female','9525086450','Home','8492 Corona St','St. Louis Park','MN','55416',4,1,1,'10','T6 - T12','C','Wheelchair (manual)',2,1,'No children','Elementary','None',1,FALSE,NULL,'Yes','None','Nothing',NULL,'Hospital System')
,('tam.gilkson@3m.com','07/19/17',2,TRUE,'Tamiko','Gilkson','06/08/03','Female','7635894980','Other','9169 Grant St','Shakopee','MN','55379',8,3,3,'12','T6 - T12','B','Wheelchair (powered)',99,1,'No children','Some High School','Student',4,FALSE,NULL,'No','N/A','No',NULL,'Website')
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
,('jbm@gmail.com','07/22/17',3,TRUE,'Jabrmo','Rumilmgil','04/24/90','Male','6125551212','Work','301 S 4th St, #577','Minneapolis','MN','55145',6,99,1,'12','C2,C3,C4,C5','B','Wheelchair (powered)',1,1,'No children','Some College','Volunteer',1,FALSE,NULL,'No','Nothing',NULL,NULL,'Website')
,('percyjmurray@rhyta.com','07/18/17',2,TRUE,'Percy','Murray','01/11/74','Male','2482607130','Home','3840 Tennessee Avenue','Detroit','MI','48226',4,1,1,'22','T6 - T12','C','Wheelchair (manual)',2,2,'No children','Elementary','Law librarian',1,FALSE,NULL,'Yes','None','Nothing',NULL,'Hospital System')
,('matthewrcallahan@armyspy.com','07/19/17',2,TRUE,'Matthew','Callahan','01/01/33','Male','7168865039','Other','1175 Jarvis Street','Buffalo','NY','14222',8,3,3,'35','T6 - T12','B','Wheelchair (powered)',99,2,'Children grown, out of home','Some High School','Grandpa',4,FALSE,NULL,'No','N/A','No',NULL,'Website')
,('cynthiaawilliams@armyspy.com','07/21/17',2,TRUE,'Cynthia','Williams','04/15/94','Female','5808838298','Home','1949 Dovetail Estates','Ringwood','OK','73768',3,2,2,'16','C1 - C4','A','Wheelchair (powered)',1,1,'No children','HS Grad/GED','Professional scout',1,FALSE,NULL,'No','None really…','I''d prefer being matched with someone close to my age',NULL,'Hospital System')
,('keneromero@armyspy.com','07/22/17',2,TRUE,'Ken','Romero','01/04/08','Male','6305665453','Cell','3003 Kembery Drive','Chicago','IL','60601',6,1,1,'7','L1 - L5','C','Wheelchair (powered)',1,1,'No children','Elementary','Student',1,FALSE,NULL,'No','Just myself',NULL,NULL,'Personal Reference')
,('michaelrgreen@dayrep.com','07/23/17',2,TRUE,'Michael','Green','03/05/58','Male','7184753042','Cell','4930 Church Street','Flushing','NY','11354',5,1,2,'46','L1 - L5','C','Wheelchair (manual)',1,1,'Children grown, out of home','Some High School','Prosthodontist',5,FALSE,NULL,'Yes','Volunteered once with GetUp StandUp',NULL,NULL,'Email')
,('richardsmccrady@superrito.com','07/24/17',2,TRUE,'Richard','McCrady','01/12/33','Male','2402097856','Cell','2932 Village View Drive','Reston','MD','20191',6,2,1,'31','C6','B','Wheelchair (manual)',2,1,'Children grown, out of home','HS Grad/GED','Nothing',1,FALSE,NULL,'No','Nothing really',NULL,NULL,'Website')
,('kevincgeiger@gustr.com','07/25/17',1,TRUE,'Kevin','Geiger','08/05/63','Male','9363913060','Cell','4840 Woodrow Way','Houston','TX','77032',4,1,1,'33','C8','B','Wheelchair (manual)',1,1,'No children','HS Grad/GED','Engine and machine assembler',1,TRUE,NULL,'No','I help at the hospital a couple times a month',NULL,NULL,'Website')
,('michaelcyang@superrito.com','07/26/17',1,TRUE,'Michael','Yang','10/29/85','Male','2157362543','Cell','1410 Tipple Road','Morrisville','PA','19067',3,99,6,'25','T1 - T5','B','Wheelchair (manual)',2,1,'No children','HS Grad/GED','HR Trainer',1,FALSE,NULL,'No','-',NULL,NULL,'Other')
,('constancedmccoy@fleckens.hu','07/27/17',2,TRUE,'Constance','McCoy','03/22/36','Female','9095566446','Work','4724 Gordon Street','Fullerton','CA','93632',8,1,1,'63','C5','C','Wheelchair (manual)',1,2,'Children grown, out of home','Some College','Retired Metallurgical Engineer',3,FALSE,NULL,'Yes','Mentored before',NULL,NULL,'Website')
,('danieltbruce@superrito.com','07/28/17',1,TRUE,'Daniel','Bruce','06/24/65','Male','3208570879','Home','548 Red Hawk Road','Grove City','MN','56243',5,1,4,'44','C7','D','Wheelchair (manual)',99,2,'No children','Associate Degree','Interviewer',1,TRUE,NULL,'No','None',NULL,NULL,'Website')
,('timhlantigua@teleworm.us','07/18/17',1,TRUE,'Tim','Lantigua','05/02/01','Male','2766228706','Cell','195 Douglas Dairy Road','Roanoke','VA','24011',8,1,2,'15','T1 - T5','A','Wheelchair (manual)',2,2,'No children','Some High School','Student',1,FALSE,NULL,'No','This is my first time mentoring',NULL,NULL,'Hospital System')
,('teresaanorwood@teleworm.us','07/19/17',1,TRUE,'Teresa','Norwood','02/27/06','Female','7022296241','Cell','3323 Hiney Road','Las Vegas','NV','89101',2,99,4,'7','C7','B','Wheelchair (powered)',1,2,'No children','Elementary','Student',1,FALSE,NULL,'No','N/A',NULL,NULL,'Personal Reference')
,('meganjflagg@rhyta.com','07/21/17',1,TRUE,'Megan','Flagg','03/15/39','Female','7154188437','Cell','1135 Abner Road','Barron','WI','54812',5,7,99,'56','C8','A','Wheelchair (powered)',1,1,'Children grown, out of home','Associate Degree','Part-time greeter',2,FALSE,NULL,'No','Nothing',NULL,NULL,'Personal Reference')
,('laurajjohnson@cuvox.de','07/22/17',2,TRUE,'Laura','Johnson','02/12/55','Female','3618864838','Home','4725 Franklin Avenue','Corpus Christi','TX','78401',8,1,2,'61','C7','B','Wheelchair (powered)',2,4,'Children at home','Undergraduate Degree','Osteopathic Doctor',1,FALSE,NULL,'No','Used to mentor…getting back into it!',NULL,'Nothing to add.','Personal Reference')
,('reneeesasser@armyspy.com','07/23/17',1,TRUE,'Renee','Sasser','02/18/03','Female','9258959777','Home','3150 Brown Street','Oakland','CA','94607',8,2,1,'14','T1 - T5','D','Wheelchair (manual)',1,2,'Children at home','Some High School','Student',1,TRUE,NULL,'No','None to speak of',NULL,NULL,'Hospital System')
,('anthonyrbiron@armyspy.com','07/24/17',1,TRUE,'Anthony','Biron','12/06/86','Male','3028653863','Home','2083 Columbia Road','Philadelphia','DE','19103',3,1,2,'27','S1 - S5','B','Wheelchair (manual)',2,2,'Children grown, out of home','Graduate Degree','LAN Manager',1,FALSE,NULL,'Yes','I''ve helped out once before with this program',NULL,NULL,'Other')
,('jamesastubbs@cuvox.de','07/25/17',1,TRUE,'James','Stubbs','05/28/73','Male','9548874972','Cell','331 Pointe Lane','Hialeah','FL','33012',7,1,1,'29','C5','D','Wheelchair (manual)',2,4,'Children grown, out of home','Associate Degree','Floor broker',4,FALSE,NULL,'No','N/A',NULL,'Great program. Thank you!','Email')
,('roserseals@dayrep.com','07/26/17',1,TRUE,'Rose','Seals','05/13/72','Female','5413623705','Cell','4296 New Street','Portland','OR','97209',6,2,4,'14','L1 - L5','A','Wheelchair (powered)',1,1,'No children','Undergraduate Degree','Photographic Processing Operator',1,FALSE,NULL,'No','Never mentored before, but I had a mentor for a couple years',NULL,'I''m looking forward to helping!','Other')
,('jessicajkuster@einrot.com','07/27/17',1,TRUE,'Jessica','Kuster','12/08/08','Female','6416739272','Work','4663 Park Boulevard','Oskaloosa','IA','52577',7,1,6,'6','S1 - S5','B','Wheelchair (powered)',2,1,'No children','Elementary','Student',1,FALSE,NULL,'No','None',NULL,NULL,'Other')
,('dorothyhherrick@jourrapide.com','07/28/17',1,TRUE,'Dorothy','Herrick','03/21/69','Female','7136002555','Home','1118 Gore Street','Houston','TX','77002',8,1,1,'31','C8','D','Wheelchair (manual)',99,6,'Children grown, out of home','Some College','Recruiter',1,FALSE,NULL,'Yes','I don''t have any',NULL,NULL,'Personal Reference')
,('miguelrwaters@rhyta.com','07/22/17',3,TRUE,'Miguel','Waters','04/12/35','Male','2483331334','Work','3308 Tennessee Avenue','Pontiac','MI','48342',6,99,1,'25','C2,C3,C4,C5','B','Wheelchair (powered)',1,1,'No children','Some College','Retired',1,FALSE,NULL,'No','Nothing',NULL,NULL,'Website')
,('waltersray@cuvox.de','07/18/17',2,TRUE,'Walter','Ray','07/02/69','Male','2769305240','Home','320 Payne Street','Woolwine','VA','24185',4,1,1,'39','T6 - T12','C','Wheelchair (manual)',2,2,'No children','Elementary','Manicurist',1,FALSE,NULL,'Yes','None','Nothing',NULL,'Hospital System')
,('jackiedflanagan@einrot.com','07/19/17',2,TRUE,'Jackie','Flanagan','09/25/97','Male','7154271433','Other','1611 Abner Road','Rib Lake','WI','54470',8,3,3,'19','T6 - T12','B','Wheelchair (powered)',99,2,'No children','HS Grad/GED','Student',4,FALSE,NULL,'No','N/A','No',NULL,'Website')
,('charlesabailey@gustr.com','07/21/17',2,TRUE,'Charles','Bailey','01/26/90','Male','2403049490','Home','4725 Wilmar Farm Road','Silver Spring','MD','20904',3,2,2,'23','C1 - C4','A','Wheelchair (powered)',1,1,'No children','Some High School','Mobile home installer',1,FALSE,NULL,'No','None really…','I''d prefer being matched with someone close to my age',NULL,'Hospital System')
,('oscargwilder@superrito.com','07/22/17',2,TRUE,'Oscar','Wilder','05/05/90','Male','6173512300','Cell','4773 Aspen Court','Boston','MA','2115',6,1,1,'24','L1 - L5','C','Wheelchair (powered)',1,1,'No children','HS Grad/GED','Student',1,FALSE,NULL,'No','Just myself',NULL,NULL,'Personal Reference')
,('melvajyarbrough@gustr.com','07/23/17',2,TRUE,'Melva','Yarbrough','01/19/96','Female','7012697304','Cell','4453 Catherine Drive','Jamestown','ND','58401',5,1,2,'20','L1 - L5','C','Wheelchair (manual)',1,1,'No children','Associate Degree','Controller',5,FALSE,NULL,'Yes','Volunteered once with GetUp StandUp',NULL,NULL,'Email')
,('sandratmartin@teleworm.us','07/24/17',2,TRUE,'Sandra','Martin','05/12/90','Female','9144589469','Cell','2175 Mount Tabor','New York','NY','10013',6,2,1,'24','C6','B','Wheelchair (manual)',2,1,'No children','HS Grad/GED','Affirmative Action Coordinator',1,FALSE,NULL,'No','Nothing really',NULL,NULL,'Website')
,('marisaremerson@fleckens.hu','07/25/17',1,TRUE,'Marisa','Emerson','11/10/58','Female','5184836199','Cell','3960 Hardesty Street','Malone','NY','12953',4,1,1,'52','C8','B','Wheelchair (manual)',1,1,'No children','HS Grad/GED','Respiratory Therapist',1,TRUE,NULL,'No','I help at the hospital a couple times a month',NULL,NULL,'Website')
,('troymcorrea@armyspy.com','07/26/17',1,TRUE,'Troy','Correa','03/29/83','Male','4018278980','Cell','3901 Bond Street','West Warwick','RI','2893',3,99,6,'33','T1 - T5','B','Wheelchair (manual)',2,1,'No children','HS Grad/GED','Spanish Interpreter',1,FALSE,NULL,'No','-',NULL,NULL,'Other')
,('carlpvillanueva@armyspy.com','07/27/17',2,TRUE,'Carl','Villanueva','04/19/99','Male','7325424424','Work','1979 Webster Street','Eatontown','NJ','7724',8,1,1,'17','C5','C','Wheelchair (manual)',1,2,'Children at home','Some College','Student',3,FALSE,NULL,'Yes','Mentored before',NULL,NULL,'Website')
,('dennisjstowe@einrot.com','07/28/17',1,TRUE,'Dennis','Stowe','12/23/81','Male','3135103883','Home','648 Woodbridge Lane','Bloomfield Township','MI','48302',5,1,4,'28','C7','D','Wheelchair (manual)',99,2,'No children','Associate Degree','Electrician',1,TRUE,NULL,'No','None',NULL,NULL,'Website')
,('emmettdjohnson@gustr.com','07/18/17',1,TRUE,'Emmett','Johnson','11/28/38','Male','7403571735','Cell','60 Robinson Lane','Portsmouth','OH','45662',8,1,2,'63','T1 - T5','A','Wheelchair (manual)',2,2,'No children','Undergraduate Degree','Part-time Tool Clerk',1,FALSE,NULL,'No','This is my first time mentoring',NULL,NULL,'Hospital System')
,('corywcampbell@fleckens.hu','07/19/17',1,TRUE,'Cory','Campbell','07/29/69','Male','2406047556','Cell','1815 Chatham Way','Beltsville','MD','20705',2,99,4,'41','C7','B','Wheelchair (powered)',1,2,'No children','Some College','General clerk',1,FALSE,NULL,'No','N/A',NULL,NULL,'Personal Reference')
,('verlenerkent@einrot.com','07/21/17',1,TRUE,'Verlene','Kent','12/29/60','Female','9724064169','Cell','1343 Whispering Pines Circle','Farmers Branch','TX','75234',5,7,99,'33','C8','A','Wheelchair (powered)',1,1,'No children','Associate Degree','Admin. Asst.',2,FALSE,NULL,'No','Nothing',NULL,NULL,'Personal Reference')
,('jennifermbrown@dayrep.com','07/22/17',2,TRUE,'Jennifer','Brown','05/15/45','Female','6307751980','Home','300 Millbrook Road','Bensenville','IL','60106',8,1,2,'40','C7','B','Wheelchair (powered)',2,4,'Children at home','Undergraduate Degree','Food Scientist',1,FALSE,NULL,'No','Used to mentor…getting back into it!',NULL,'Nothing to add.','Personal Reference')
,('janiepcook@armyspy.com','07/23/17',1,TRUE,'Janie','Cook','02/09/03','Female','8648506556','Home','2701 Pooh Bear Lane','Easley','SC','29640',8,2,1,'10','T1 - T5','D','Wheelchair (manual)',1,1,'No children','Graduate Degree','Student',1,TRUE,NULL,'No','None to speak of',NULL,NULL,'Hospital System')
,('brianlpotter@einrot.com','07/24/17',1,TRUE,'Brian','Potter','08/31/59','Male','6312734990','Home','4821 Clark Street','Brentwood','NY','11717',3,1,2,'43','S1 - S5','B','Wheelchair (manual)',2,2,'hildren grown, out of home','Graduate Degree','Choke Setter',1,FALSE,NULL,'Yes','I''ve helped out once before with this program',NULL,NULL,'Other')
,('robertjhawkins@superrito.com','07/25/17',1,TRUE,'Robert','Hawkins','07/08/44','Male','4105438400','Cell','4181 Cambridge Place','Salisbury','MD','21875',7,1,1,'59','C5','D','Wheelchair (manual)',2,4,'Children grown, out of home','Associate Degree','Real estate asset manager',4,FALSE,NULL,'No','N/A',NULL,'Great program. Thank you!','Email')
,('josedpearson@superrito.com','07/26/17',1,TRUE,'Jose','Pearson','11/12/77','Male','6418474289','Cell','3326 Morningview Lane','Ackley','IA','50601',6,2,4,'38','L1 - L5','A','Wheelchair (powered)',1,1,'No children','Undergraduate Degree','Product Development Mgr.',1,FALSE,NULL,'No','Never mentored before, but I had a mentor for a couple years',NULL,'I''m looking forward to helping!','Other')
,('brendaaparadise@fleckens.hu','07/27/17',1,TRUE,'Brenda','Paradise','10/18/76','Female','4025258704','Work','3414 Commerce Boulevard','Lincoln','NE','68501',7,1,6,'39','S1 - S5','B','Wheelchair (powered)',2,1,'No children','Undergraduate Degree','CAN',1,FALSE,NULL,'No','None',NULL,NULL,'Other')
,('amandaskhalil@teleworm.us','07/28/17',1,TRUE,'Amanda','Khalil','07/08/85','Female','6506108561','Home','1490 Rardin Drive','San Carlos','CA','94070',8,1,1,'18','C8','D','Wheelchair (manual)',99,6,'Children grown, out of home','Some College','Accountant',1,FALSE,NULL,'Yes','I don''t have any',NULL,NULL,'Personal Reference')
,('cathyjboard@einrot.com','07/22/17',3,TRUE,'Cathy','Board','10/21/69','Female','2029945336','Work','829 School Street','Washington','DC','20036',6,99,1,'21','C2,C3,C4,C5','B','Wheelchair (powered)',1,1,'No children','Some College','Industrial Relations Supervisor',1,FALSE,NULL,'No','Nothing',NULL,NULL,'Website')
,('bettycoliver@gustr.com','07/21/17',2,TRUE,'Betty','Oliver','04/29/41','Female','9705245591','Home','1319 Shobe Lane','Gypsum','CO','81637',4,1,1,'28','T6 - T12','C','Wheelchair (manual)',2,2,'No children','Elementary','Bindery worker',1,FALSE,NULL,'Yes','None','Nothing',NULL,'Hospital System')
,('doloresgarrington@rhyta.com','07/22/17',2,TRUE,'Dolores','Arrington','04/06/58','Female','5162801024','Other','4787 Heavner Court','Garden City','NY','11530',8,3,3,'59','T6 - T12','B','Wheelchair (powered)',99,2,'No children','HS Grad/GED','Digital Imaging Tech',4,FALSE,NULL,'No','N/A','No',NULL,'Website')
,('thelmarpaxson@cuvox.de','07/23/17',2,TRUE,'Thelma','Paxson','09/23/44','Female','7759019582','Home','603 Wescam Court','Sparks','NV','89431',3,2,2,'71','C1 - C4','A','Wheelchair (powered)',1,1,'No children','Some High School','Press Operator',1,FALSE,NULL,'No','None really…','I''d prefer being matched with someone close to my age',NULL,'Hospital System')
,('shellyjwilliams@gustr.com','07/24/17',2,TRUE,'Shelly','Williams','02/13/44','Female','5173019451','Cell','2311 Amethyst Drive','Adrian','MI','49221',6,1,1,'37','L1 - L5','C','Wheelchair (powered)',1,1,'No children','HS Grad/GED','Retired',1,FALSE,NULL,'No','Just myself',NULL,NULL,'Personal Reference')
,('tysonjferguson@teleworm.us','07/25/17',1,TRUE,'Tyson','Ferguson','05/12/35','Male','8082940140','Cell','3826 Stratford Drive','Waipahu','HI','96797',5,1,2,'15','L1 - L5','C','Wheelchair (manual)',1,1,'No children','Some High School','Insurance sales agent',5,FALSE,NULL,'Yes','Volunteered once with GetUp StandUp',NULL,NULL,'Email')
,('taradelms@superrito.com','07/26/17',1,TRUE,'Tara','Elms','08/13/32','Female','7347460993','Cell','3218 Eagle Drive','Petersburg','MI','49270',6,2,1,'48','C6','B','Wheelchair (manual)',2,1,'No children','HS Grad/GED','Housing relocator',1,FALSE,NULL,'No','Nothing really',NULL,NULL,'Website')
,('donaldwmariani@superrito.com','07/27/17',2,TRUE,'Donald','Mariani','03/20/00','Male','4403618270','Cell','2717 Vineyard Drive','Ashtabula','OH','44004',4,1,1,'15','C8','B','Wheelchair (manual)',1,1,'No children','HS Grad/GED','Student',1,TRUE,NULL,'No','I help at the hospital a couple times a month',NULL,NULL,'Website')
,('stacyeshade@armyspy.com','07/28/17',1,TRUE,'Stacy','Shade','04/18/34','Female','7034586505','Cell','4742 Daffodil Lane','Arlington','VA','22201',3,99,6,'17','T1 - T5','B','Wheelchair (manual)',2,1,'No children','HS Grad/GED','Retired',1,FALSE,NULL,'No','-',NULL,NULL,'Other');
