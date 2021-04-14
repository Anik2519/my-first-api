const Joi= require('joi');
const express = require('express');
const app = express();

app.use(express.json()); //?

let students = [
  { id: 1, name: 'stu1' },
  { id: 2, name: 'stu2' },
  { id: 3, name: 'stu3' },
];

app.get('/', (req, res) => {
  res.send('Hi')
});

app.get('/api/students', (req, res) => {
  res.send(students);
});

app.post('/api/students', (req,res)=>{
  
  // const schema={
  //   name: Joi.string().min(4).required()
  // };

  // const result = Joi.validate(req.body,schema);
  // console.log(result);
  // if(result.error){
  //   res.status(404).send(result.error);
  //   return;
  // }

  let new_student={
    id: students.length +1,
    name: req.body.name
  };
  students.push(new_student);
  res.send(new_student);
});

app.listen(3000,()=> console.log('listening on port 3000'));
