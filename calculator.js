const express=require('express');
const app=express();
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));


app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/bmicalculator",function(req,res){
  var weight=parseFloat(req.body.weight);
  var height=parseFloat(req.body.height);

  var bmi=weight/(height*height);

  res.send=("Your BMI is: "+bmi);
  console.log(bmi);
});

app.listen(3000,function(){
  console.log("Server is up and running on port 3000.");
});
