const mongoose = require("mongoose");

// now lets create a schema
// a schema is defined as the blueprint that defines the structure of the documents
// it specifies field names data types validation rules  and default values

// now lets define a schema

const studentSchema = new mongoose.Schema({
  name: {
    type: String, // it means the value should be in letters only no numbers allowed
    required: true, // it means its compulsory to fill the name or any field
    trim: true, // this removes whitespacess
  },


  email :{
    type : String,
    required:true,
    lowercase : true , // converts all the letters into lowercase 
    unique : true , // no duplicates allowed

  },

  rollNumber :{
    type : Number,
    required : true,
    unique : true , 
  },


   marks: {
    type: Number,
    default: 0              // If not provided, default is 0
  },
  
  department: {
    type: String,
    enum: ['CSE', 'ECE', 'Mechanical', 'Civil'],  // Only these values allowed
    default: 'CSE'
  },
  
  isActive: {
    type: Boolean,
    default: true
  },
  
  enrolledDate: {
    type: Date,
    default: Date.now       // Current date/time
  }
});

// now to use this we need to create a model which will be used so 

const Student = mongoose.model('Student' , studentSchema)
// now here the above collection would be named as student or the student data

console.log('SCHEMA vs MODEL:');
console.log('Schema - studentSchema:', studentSchema);
console.log('Model - Student:', Student);

module.exports = Student;


