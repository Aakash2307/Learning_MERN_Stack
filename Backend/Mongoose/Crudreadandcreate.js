const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/schoolDb')

const studentSchema = new mongoose.Schema({
    name : String, 
    email : String,
    rollNumber : Number ,
    marks : Number , 
    department : String 
}) ;

//  now we will be creating a model 

const Student  = mongoose.model('Student' , studentSchema);

// now we will be creating an api and that helps us to add the data into the database

//  here we will be creating or adding only one student 

async function createOne() {
    try {
        const student = new Student({
            name: 'Rahul Kumar',
            email: 'rahul@example.com',
            rollNumber: 101,
            marks: 85,
            department: 'CSE'


        });

        await student.save(); // this will help me save the data into the model which will be in the database
        console.log("Student data has been created ")

    }catch(error){
        console.log("Error detected please wait ....." , error.message)
    }
}



// now what if we want to create a multiple elements at once then we will create a function which accepts multiple one 


async function createMany(){
    try {
        await Student.create([
            {
            
        name: 'Priya Singh',
        email: 'priya@example.com',
        rollNumber: 102,
        marks: 90,
        department: 'ECE'
      },
      {
        name: 'Amit Patel',
        email: 'amit@example.com',
        rollNumber: 103,
        marks: 78,
        department: 'Mechanical'
      },
      {
        name: 'Neha Sharma',
        email: 'neha@example.com',
        rollNumber: 104,
        marks: 88,
        department: 'Civil'
      }
        ])
    }
    catch(error ){
        console.log("Error has been occured" , error.message)

    }
}


// now its time to read the data for that we gonna create functionns which could help us read the functions 

// funciton to read all the students

async function readall(){
    try{
        const Students = await Student.find()  // finding all the students at once 
        console.log("finally found all the students yayyyy")
    }
    catch (error){
        console.log("Error" , error.message)
    }
}


// get student by id 

async function  readById(id){
    try {
        const student = await Student.findById(id) ;  // finding the students by id
    }
    catch(error){
        console.log( 'error found ',error.message)
    }
}


async function readByRollNumber(rollNumber) {
  try {
    const student = await Student.findOne({ rollNumber: rollNumber });
    console.log('✅ Student by roll number:', student);
  } catch (error) {
    console.log('❌ Error:', error.message);
  }
}

// READ 4: Get students by department
async function readByDepartment(department) {
  try {
    const students = await Student.find({ department: department });
    console.log(`✅ Students in ${department}:`, students);
  } catch (error) {
    console.log('❌ Error:', error.message);
  }
}

// READ 5: Get students sorted by marks (highest first)
async function readSortedByMarks() {
  try {
    const students = await Student.find().sort({ marks: -1 });
    console.log('✅ Students sorted by marks:', students);
  } catch (error) {
    console.log('❌ Error:', error.message);
  }
}



// now lets pracitce the what we have lets test whether the things we have written works or not 

async function practice(){
    console.log('\n-----CREATE-----')

    await createOne()
    await createMany()

    console.log('\n ------ READ -------')

    await readall()
    mongoose.connection.close();
}


practice()