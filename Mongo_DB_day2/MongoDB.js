// Design database for Zen class programme
// users
// codekata
// attendance
// topics
// tasks
// company_drives
// mentors


db.createCollection("users");


db.users.insertMany([
    {
      user_id: 1,
      Name: "Aakash Singh",
      Email: "AakashSingh@gmail.com",
    },
    {
      user_id: 2,
      Name: "Chinna Thala",
      Email: "ChinnaThala@gmail.com",
    },
    {
      user_id: 3,
      Name: "Deepak Chahar",
      Email: "DeepakChahar@gmail.com",
    },
    {
      user_id: 4,
      Name: "Dhoni",
      Email: "Dhoni@gmail.com",
    },
    {
      user_id: 5,
      Name: "Moeen Ali",
      Email: "MoeenAli@gmail.com",
    },
    {
        user_id: 6,
        Name: "Shivam Dube",
        Email: "ShivamDube@gmail.com",
      },
      {
        user_id: 7,
        Name: "Ben Stokes",
        Email: "Benstokes@gmail.com",
      },
      {
        user_id: 8,
        Name: "Pathirana",
        Email: "Pathiranae@gmail.com",
      },
      {
        user_id: 9,
        Name: "Theekshana",
        Email: "Theekshana@gmail.com",
      },
      {
        user_id: 10,
        Name: "Deshpande",
        Email: "ShivamDube@gmail.com",
      },
      {
        user_id: 11,
        Name: "Devon Conway",
        Email: "DevanConway@gmail.com",
      },
  ]);

db.createCollection("Codekata");

db.Codekata.insertMany([
    {
      user_id: 1,
      no_of_problems_solved: 100,
    },
    {
      user_id: 2,
      no_of_problems_solved: 200,
    },
    {
      user_id: 3,
      no_of_problems_solved: 300,
    },
    {
      user_id: 4,
      no_of_problems_solved: 400,
    },
    {
      user_id: 5,
      no_of_problems_solved: 200,
    },
    {
        user_id: 6,
        no_of_problems_solved: 150,
      },
      {
        user_id: 7,
        no_of_problems_solved: 500,
      },
      {
        user_id: 8,
        no_of_problems_solved: 25,
      },
      {
        user_id: 9,
        no_of_problems_solved: 75,
      },
      {
        user_id: 10,
        no_of_problems_solved: 100,
      },
      {
        user_id: 11,
        no_of_problems_solved: 250,
      },
  ]);

  db.createCollection("Attendance");

  db.Attendance.insertMany([
    {
      user_id: 1,
      present: true,
    },
    {
      user_id: 2,
      present: false,
    },
    {
      user_id: 3,
      present: false,
    },
    {
      user_id: 4,
      present: false,
    },
    {
      user_id: 5,
      present: true,
    },
    {
        user_id: 6,
        present: true,
      },
      {
        user_id: 7,
        present: false,
      },
      {
        user_id: 8,
        present: false,
      },
      {
        user_id: 9,
        present: true,
      },
      {
        user_id: 10,
        present: false,
      },
      {
        user_id: 11,
        present: true,
      },
  ]);

  db.createCollection("Topics");

  db.Topics.insertMany([
    {
      Topic_id: 1,
      Topic: "JavaScript",
      Topic_date: new ISODate("2021-10-01"),
    },
    {
      Topic_id: 2,
      Topic: "HTML",
      Topic_date: new ISODate("2021-10-05"),
    },
    {
      Topic_id: 3,
      Topic: "CSS",
      Topic_date: new ISODate("2021-10-10"),
    },
    {
      Topic_id: 4,
      Topic: "Advanced JavaScript",
      Topic_date: new ISODate("2021-10-15"),
    },
    {
      Topic_id: 5,
      Topic: "ReactJs",
      Topic_date: new ISODate("2021-10-20"),
    },
    {
        Topic_id: 6,
        Topic: "MYSQL",
        Topic_date: new ISODate("2021-10-25"),
      },
      {
        Topic_id: 5,
        Topic: "NodeJS",
        Topic_date: new ISODate("2021-10-30"),
      },
  ]);

  db.createCollection("Tasks");
  
  db.Tasks.insertMany([
    {
      Task_id: 1,
      Topic_id: 1,
      user_id: 1,
      task: "JavaScript task",
      due_date: new ISODate("2021-10-05"),
      submitted: true,
    },
    {
      Task_id: 2,
      Topic_id: 2,
      user_id: 2,
      task: "HTML task",
      due_date: new ISODate("2021-10-10"),
      submitted: true,
    },
    {
      Task_id: 3,
      Topic_id: 3,
      user_id: 3,
      task: "CSS task",
      due_date: new ISODate("2021-10-15"),
      submitted: false,
    },
    {
      Task_id: 4,
      Topic_id: 4,
      user_id: 4,
      task: "Advanced JavaScript task",
      due_date: new ISODate("2021-10-20"),
      submitted: false,
    },
    {
      Task_id: 5,
      Topic_id: 5,
      user_id: 5,
      task: "ReactJs task",
      due_date: new ISODate("2021-10-25"),
      submitted: true,
    },
    {
        Task_id: 6,
        Topic_id: 6,
        user_id: 6,
        task: "MYSQL",
        due_date: new ISODate("2021-10-30"),
        submitted: false,
      },
  ]);
  

  
db.createCollection("Company_drives");

db.Company_drives.insertMany([
    {
      user_id: 1,
      Drive_Date: new ISODate("2021-10-01"),
      Company_name: "TCS",
    },
    {
      user_id: 1,
      Drive_Date: new ISODate("2021-10-05"),
      Company_name: "COGNIZANT",
    },
    {
        user_id: 1,
        Drive_Date: new ISODate("2021-10-10"),
        Company_name: "ZOHO",
      },
    {
      user_id: 2,
      Drive_Date: new ISODate("2021-10-10"),
      Company_name: "WALMART",
    },
    {
        user_id: 2,
        Drive_Date: new ISODate("2021-10-20"),
        Company_name: "COGNIZANT",
      },
      {
        user_id: 3,
        Drive_Date: new ISODate("2021-10-15"),
        Company_name: "COGNIZANT",
      },
    {
      user_id: 3,
      Drive_Date: new ISODate("2021-10-25"),
      Company_name: "TCS",
    },
    {
      user_id: 4,
      Drive_Date: new ISODate("2021-10-20"),
      Company_name: "AVASOFT",
    },
    {
        user_id: 4,
        Drive_Date: new ISODate("2021-10-25"),
        Company_name: "TCS",
      },
      {
        user_id: 5,
        Drive_Date: new ISODate("2021-10-23"),
        Company_name: "CTS",
      },
      {
        user_id: 5,
        Drive_Date: new ISODate("2021-10-24"),
        Company_name: "ZOHO",
      },
      {
        user_id: 6,
        Drive_Date: new ISODate("2021-10-24"),
        Company_name: "CTS",
      },
      {
        user_id: 6,
        Drive_Date: new ISODate("2021-10-25"),
        Company_name: "TCS",
      },
      {
        user_id: 7,
        Drive_Date: new ISODate("2021-10-28"),
        Company_name: "GOOGLE",
      },
      {
        user_id: 7,
        Drive_Date: new ISODate("2021-10-30"),
        Company_name: "WALMART",
      },
      {
        user_id: 8,
        Drive_Date: new ISODate("2021-10-20"),
        Company_name: "TCS",
      },
      {
        user_id: 8,
        Drive_Date: new ISODate("2021-10-21"),
        Company_name: "WALMART",
      },
      {
        user_id: 9,
        Drive_Date: new ISODate("2021-10-20"),
        Company_name: "TCS",
      },
      {
        user_id: 9,
        Drive_Date: new ISODate("2021-10-21"),
        Company_name: "WALMART",
      },
      {
        user_id: 10,
        Drive_Date: new ISODate("2021-10-18"),
        Company_name: "TCS",
      },
      {
        user_id: 10,
        Drive_Date: new ISODate("2021-10-19"),
        Company_name: "WALMART",
      },
      {
        user_id: 11,
        Drive_Date: new ISODate("2021-10-22"),
        Company_name: "TCS",
      },
      {
        user_id: 11,
        Drive_Date: new ISODate("2021-10-29"),
        Company_name: "WALMART",
      },

  ]);
  
  
db.createCollection("Mentors");

db.Mentors.insertMany([
    {
      Mentor_id: 7,
      Mentor_name: "Dhoni",
      Mentor_Email_id: "Dhoni@gmail.com",
      Mentees_Count:50,
    },
    {
      Mentor_id: 3,
      Mentor_name: "Raina",
      Mentor_Email_id: "Raina@gmail.com",
      Mentees_Count:28,
    },
    {
      Mentor_id: 8,
      Mentor_name: "Jadeja",
      Mentor_Email_id: "Jadeja@gmail.com",
      Mentees_Count:8,
    },
    {
      Mentor_id: 18,
      Mentor_name: "Kholi",
      Mentor_Email_id: "Kholi@gmail.com",
      Mentees_Count:20,
    },
    {
      Mentor_id: 32,
      Mentor_name: "Rohit",
      Mentor_Email_id: "Rohit@gmail.com",
      Mentees_Count:10,
    },
    {
        Mentor_id: 97,
        Mentor_name: "Bumrah",
        Mentor_Email_id: "Bumrah@gmail.com",
        Mentees_Count:14,
      },
      {
        Mentor_id: 99,
        Mentor_name: "Ashwin",
        Mentor_Email_id: "Ashwin@gmail.com",
        Mentees_Count:15,
      },
  ]);
  
  // Find all the topics and tasks which are thought in the month of October

  db.Topics.find({$and : [{Topic_date : {$gte :new ISODate("2021-10-01")}},{Topic_date :{$lte :new ISODate("2021-10-31")}}] }).pretty();

  //Output

//   {
//     "_id" : ObjectId("645134fbf4509f24cd8af7f8"),
//     "Topic_id" : 1,
//     "Topic" : "JavaScript",
//     "Topic_date" : ISODate("2021-10-01T00:00:00Z")
// }
// {
//     "_id" : ObjectId("645134fbf4509f24cd8af7f9"),
//     "Topic_id" : 2,
//     "Topic" : "HTML",
//     "Topic_date" : ISODate("2021-10-05T00:00:00Z")
// }
// {
//     "_id" : ObjectId("645134fbf4509f24cd8af7fa"),
//     "Topic_id" : 3,
//     "Topic" : "CSS",
//     "Topic_date" : ISODate("2021-10-10T00:00:00Z")
// }
// {
//     "_id" : ObjectId("645134fbf4509f24cd8af7fb"),
//     "Topic_id" : 4,
//     "Topic" : "Advanced JavaScript",
//     "Topic_date" : ISODate("2021-10-15T00:00:00Z")
// }
// {
//     "_id" : ObjectId("645134fbf4509f24cd8af7fc"),
//     "Topic_id" : 5,
//     "Topic" : "ReactJs",
//     "Topic_date" : ISODate("2021-10-20T00:00:00Z")
// }
// {
//     "_id" : ObjectId("645134fbf4509f24cd8af7fd"),
//     "Topic_id" : 6,
//     "Topic" : "MYSQL",
//     "Topic_date" : ISODate("2021-10-25T00:00:00Z")
// }
// {
//     "_id" : ObjectId("645134fbf4509f24cd8af7fe"),
//     "Topic_id" : 5,
//     "Topic" : "NodeJS",
//     "Topic_date" : ISODate("2021-10-30T00:00:00Z")
// }


db.Tasks.find({$and : [{due_date : {$gte :new ISODate("2021-10-05")}},{due_date :{$lte :new ISODate("2021-10-30")}}] }).pretty();

// {
//     "_id" : ObjectId("6451368df4509f24cd8af7ff"),
//     "Task_id" : 1,
//     "Topic_id" : 1,
//     "user_id" : 1,
//     "task" : "JavaScript task",
//     "due_date" : ISODate("2021-10-05T00:00:00Z"),
//     "submitted" : true
// }
// {
//     "_id" : ObjectId("6451368df4509f24cd8af800"),
//     "Task_id" : 2,
//     "Topic_id" : 2,
//     "user_id" : 2,
//     "task" : "HTML task",
//     "due_date" : ISODate("2021-10-10T00:00:00Z"),
//     "submitted" : true
// }
// {
//     "_id" : ObjectId("6451368df4509f24cd8af801"),
//     "Task_id" : 3,
//     "Topic_id" : 3,
//     "user_id" : 3,
//     "task" : "CSS task",
//     "due_date" : ISODate("2021-10-15T00:00:00Z"),
//     "submitted" : false
// }
// {
//     "_id" : ObjectId("6451368df4509f24cd8af802"),
//     "Task_id" : 4,
//     "Topic_id" : 4,
//     "user_id" : 4,
//     "task" : "Advanced JavaScript task",
//     "due_date" : ISODate("2021-10-20T00:00:00Z"),
//     "submitted" : false
// }
// {
//     "_id" : ObjectId("6451368df4509f24cd8af803"),
//     "Task_id" : 5,
//     "Topic_id" : 5,
//     "user_id" : 5,
//     "task" : "ReactJs task",
//     "due_date" : ISODate("2021-10-25T00:00:00Z"),
//     "submitted" : true
// }
// {
//     "_id" : ObjectId("6451368df4509f24cd8af804"),
//     "Task_id" : 6,
//     "Topic_id" : 6,
//     "user_id" : 6,
//     "task" : "MYSQL",
//     "due_date" : ISODate("2021-10-30T00:00:00Z"),
//     "submitted" : false
// }


// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

//Output

db.Company_drives.find({$and : [{Drive_Date : {$lte : new ISODate("2021-10-31")}},{Drive_Date: {$gte:new ISODate("2021-10-15")}}] }).pretty();

// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af809"),
//     "user_id" : 2,
//     "Drive_Date" : ISODate("2021-10-20T00:00:00Z"),
//     "Company_name" : "COGNIZANT"
// }
// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af80a"),
//     "user_id" : 3,
//     "Drive_Date" : ISODate("2021-10-15T00:00:00Z"),
//     "Company_name" : "COGNIZANT"
// }
// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af80b"),
//     "user_id" : 3,
//     "Drive_Date" : ISODate("2021-10-25T00:00:00Z"),
//     "Company_name" : "TCS"
// }
// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af80c"),
//     "user_id" : 4,
//     "Drive_Date" : ISODate("2021-10-20T00:00:00Z"),
//     "Company_name" : "AVASOFT"
// }
// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af80d"),
//     "user_id" : 4,
//     "Drive_Date" : ISODate("2021-10-25T00:00:00Z"),
//     "Company_name" : "TCS"
// }
// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af80e"),
//     "user_id" : 5,
//     "Drive_Date" : ISODate("2021-10-23T00:00:00Z"),
//     "Company_name" : "CTS"
// }
// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af80f"),
//     "user_id" : 5,
//     "Drive_Date" : ISODate("2021-10-24T00:00:00Z"),
//     "Company_name" : "ZOHO"
// }
// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af810"),
//     "user_id" : 6,
//     "Drive_Date" : ISODate("2021-10-24T00:00:00Z"),
//     "Company_name" : "CTS"
// }
// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af811"),
//     "user_id" : 6,
//     "Drive_Date" : ISODate("2021-10-25T00:00:00Z"),
//     "Company_name" : "TCS"
// }
// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af812"),
//     "user_id" : 7,
//     "Drive_Date" : ISODate("2021-10-28T00:00:00Z"),
//     "Company_name" : "GOOGLE"
// }
// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af813"),
//     "user_id" : 7,
//     "Drive_Date" : ISODate("2021-10-30T00:00:00Z"),
//     "Company_name" : "WALMART"
// }
// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af814"),
//     "user_id" : 8,
//     "Drive_Date" : ISODate("2021-10-20T00:00:00Z"),
//     "Company_name" : "TCS"
// }
// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af815"),
//     "user_id" : 8,
//     "Drive_Date" : ISODate("2021-10-21T00:00:00Z"),
//     "Company_name" : "WALMART"
// }
// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af816"),
//     "user_id" : 9,
//     "Drive_Date" : ISODate("2021-10-20T00:00:00Z"),
//     "Company_name" : "TCS"
// }
// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af817"),
//     "user_id" : 9,
//     "Drive_Date" : ISODate("2021-10-21T00:00:00Z"),
//     "Company_name" : "WALMART"
// }
// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af818"),
//     "user_id" : 10,
//     "Drive_Date" : ISODate("2021-10-18T00:00:00Z"),
//     "Company_name" : "TCS"
// }
// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af819"),
//     "user_id" : 10,
//     "Drive_Date" : ISODate("2021-10-19T00:00:00Z"),
//     "Company_name" : "WALMART"
// }
// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af81a"),
//     "user_id" : 11,
//     "Drive_Date" : ISODate("2021-10-22T00:00:00Z"),
//     "Company_name" : "TCS"
// }
// {
//     "_id" : ObjectId("6451de8ff4509f24cd8af81b"),
//     "user_id" : 11,
//     "Drive_Date" : ISODate("2021-10-29T00:00:00Z"),
//     "Company_name" : "WALMART"
// }


// Find all the company drives and students who are appeared for the placement.

//Output

db.users.aggregate([{ $lookup :{ from : "Company_drives" ,localField :"user_id",foreignField :"user_id",as : "Company_drives" }},{$project :{"Company_drives.Drive_Date" :1}} ]).pretty();

// {
//     "_id" : ObjectId("6451313f15f8868faf540e55"),
//     "Company_drives" : [
//             {
//                     "Drive_Date" : ISODate("2021-10-01T00:00:00Z")
//             },
//             {
//                     "Drive_Date" : ISODate("2021-10-05T00:00:00Z")
//             },
//             {
//                     "Drive_Date" : ISODate("2021-10-10T00:00:00Z")
//             }
//     ]
// }
// {
//     "_id" : ObjectId("6451313f15f8868faf540e56"),
//     "Company_drives" : [
//             {
//                     "Drive_Date" : ISODate("2021-10-10T00:00:00Z")
//             },
//             {
//                     "Drive_Date" : ISODate("2021-10-20T00:00:00Z")
//             }
//     ]
// }
// {
//     "_id" : ObjectId("6451313f15f8868faf540e57"),
//     "Company_drives" : [
//             {
//                     "Drive_Date" : ISODate("2021-10-15T00:00:00Z")
//             },
//             {
//                     "Drive_Date" : ISODate("2021-10-25T00:00:00Z")
//             }
//     ]
// }
// {
//     "_id" : ObjectId("6451313f15f8868faf540e58"),
//     "Company_drives" : [
//             {
//                     "Drive_Date" : ISODate("2021-10-20T00:00:00Z")
//             },
//             {
//                     "Drive_Date" : ISODate("2021-10-25T00:00:00Z")
//             }
//     ]
// }
// {
//     "_id" : ObjectId("6451313f15f8868faf540e59"),
//     "Company_drives" : [
//             {
//                     "Drive_Date" : ISODate("2021-10-23T00:00:00Z")
//             },
//             {
//                     "Drive_Date" : ISODate("2021-10-24T00:00:00Z")
//             }
//     ]
// }
// {
//     "_id" : ObjectId("645132755dd7a9964150de70"),
//     "Company_drives" : [
//             {
//                     "Drive_Date" : ISODate("2021-10-24T00:00:00Z")
//             },
//             {
//                     "Drive_Date" : ISODate("2021-10-25T00:00:00Z")
//             }
//     ]
// }
// {
//     "_id" : ObjectId("645132755dd7a9964150de71"),
//     "Company_drives" : [
//             {
//                     "Drive_Date" : ISODate("2021-10-28T00:00:00Z")
//             },
//             {
//                     "Drive_Date" : ISODate("2021-10-30T00:00:00Z")
//             }
//     ]
// }
// {
//     "_id" : ObjectId("645132755dd7a9964150de72"),
//     "Company_drives" : [
//             {
//                     "Drive_Date" : ISODate("2021-10-20T00:00:00Z")
//             },
//             {
//                     "Drive_Date" : ISODate("2021-10-21T00:00:00Z")
//             }
//     ]
// }
// {
//     "_id" : ObjectId("645132755dd7a9964150de73"),
//     "Company_drives" : [
//             {
//                     "Drive_Date" : ISODate("2021-10-20T00:00:00Z")
//             },
//             {
//                     "Drive_Date" : ISODate("2021-10-21T00:00:00Z")
//             }
//     ]
// }
// {
//     "_id" : ObjectId("645132755dd7a9964150de74"),
//     "Company_drives" : [
//             {
//                     "Drive_Date" : ISODate("2021-10-18T00:00:00Z")
//             },
//             {
//                     "Drive_Date" : ISODate("2021-10-19T00:00:00Z")
//             }
//     ]
// }
// {
//     "_id" : ObjectId("645132755dd7a9964150de75"),
//     "Company_drives" : [
//             {
//                     "Drive_Date" : ISODate("2021-10-22T00:00:00Z")
//             },
//             {
//                     "Drive_Date" : ISODate("2021-10-29T00:00:00Z")
//             }
//     ]
// }

// Find the number of problems solved by the user in codekata

db.Codekata.find({}).pretty();

//Output

// {
//     "_id" : ObjectId("64513350f4509f24cd8af7e2"),
//     "user_id" : 1,
//     "no_of_problems_solved" : 100
// }
// {
//     "_id" : ObjectId("64513350f4509f24cd8af7e3"),
//     "user_id" : 2,
//     "no_of_problems_solved" : 200
// }
// {
//     "_id" : ObjectId("64513350f4509f24cd8af7e4"),
//     "user_id" : 3,
//     "no_of_problems_solved" : 300
// }
// {
//     "_id" : ObjectId("64513350f4509f24cd8af7e5"),
//     "user_id" : 4,
//     "no_of_problems_solved" : 400
// }
// {
//     "_id" : ObjectId("64513350f4509f24cd8af7e6"),
//     "user_id" : 5,
//     "no_of_problems_solved" : 200
// }
// {
//     "_id" : ObjectId("64513350f4509f24cd8af7e7"),
//     "user_id" : 6,
//     "no_of_problems_solved" : 150
// }
// {
//     "_id" : ObjectId("64513350f4509f24cd8af7e8"),
//     "user_id" : 7,
//     "no_of_problems_solved" : 500
// }
// {
//     "_id" : ObjectId("64513350f4509f24cd8af7e9"),
//     "user_id" : 8,
//     "no_of_problems_solved" : 25
// }
// {
//     "_id" : ObjectId("64513350f4509f24cd8af7ea"),
//     "user_id" : 9,
//     "no_of_problems_solved" : 75
// }
// {
//     "_id" : ObjectId("64513350f4509f24cd8af7eb"),
//     "user_id" : 10,
//     "no_of_problems_solved" : 100
// }
// {
//     "_id" : ObjectId("64513350f4509f24cd8af7ec"),
//     "user_id" : 11,
//     "no_of_problems_solved" : 250
// }

// Find all the mentors with who has the mentee's count more than 15
db.Mentors.find({Mentees_Count:{$gte:15}}).pretty();
//Ouput

// {
//     "_id" : ObjectId("6451dffef4509f24cd8af81c"),
//     "Mentor_id" : 7,
//     "Mentor_name" : "Dhoni",
//     "Mentor_Email_id" : "Dhoni@gmail.com",
//     "Mentees_Count" : 50
// }
// {
//     "_id" : ObjectId("6451dffef4509f24cd8af81d"),
//     "Mentor_id" : 3,
//     "Mentor_name" : "Raina",
//     "Mentor_Email_id" : "Raina@gmail.com",
//     "Mentees_Count" : 28
// }
// {
//     "_id" : ObjectId("6451dffef4509f24cd8af81f"),
//     "Mentor_id" : 18,
//     "Mentor_name" : "Kholi",
//     "Mentor_Email_id" : "Kholi@gmail.com",
//     "Mentees_Count" : 20
// }
// {
//     "_id" : ObjectId("6451dffef4509f24cd8af822"),
//     "Mentor_id" : 99,
//     "Mentor_name" : "Ashwin",
//     "Mentor_Email_id" : "Ashwin@gmail.com",
//     "Mentees_Count" : 15
// }

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

//Output

db.Attendance.find({present:{$eq:false}}).pretty();
// {
//     "_id" : ObjectId("64513411f4509f24cd8af7ee"),
//     "user_id" : 2,
//     "present" : false
// }
// {
//     "_id" : ObjectId("64513411f4509f24cd8af7ef"),
//     "user_id" : 3,
//     "present" : false
// }
// {
//     "_id" : ObjectId("64513411f4509f24cd8af7f0"),
//     "user_id" : 4,
//     "present" : false
// }
// {
//     "_id" : ObjectId("64513411f4509f24cd8af7f3"),
//     "user_id" : 7,
//     "present" : false
// }
// {
//     "_id" : ObjectId("64513411f4509f24cd8af7f4"),
//     "user_id" : 8,
//     "present" : false
// }
// {
//     "_id" : ObjectId("64513411f4509f24cd8af7f6"),
//     "user_id" : 10,
//     "present" : false
// }

db.Tasks.find({due_date:{$gte:new ISODate("2021-10-15"),$lte:new ISODate("2021-10-30")},submitted:{$eq:true}}).pretty();

// {
//     "_id" : ObjectId("6451368df4509f24cd8af803"),
//     "Task_id" : 5,
//     "Topic_id" : 5,
//     "user_id" : 5,
//     "task" : "ReactJs task",
//     "due_date" : ISODate("2021-10-25T00:00:00Z"),
//     "submitted" : true
// }