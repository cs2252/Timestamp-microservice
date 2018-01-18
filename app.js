//Basic required imporst for NodeJS
var express=require("express");
var bodyParser =require("body-parser");

//Create an instance of express for our app and instantiate bodypaser
var app=express();
app.use(bodyParser.json());
//GET CALL TO RETURN JSON THAT FORMATS NATURAL AND NNIX DATA
app.get("/:dateVal",function(req,res,next){
	//GETS THE REQUEST DATA FOR DATE
	var dateVal=req.params.dateVal;
	//Options for formatting in natual date representation
	var dateFormattingOptions={
		year:"numeric",
		month:'long',
		day:"numeric"
	};
	var unixDate;
	var naturalDate;
	if(isNaN(dateVal))
	{
		console.log("if condition is satisfied");
		naturalDate=new Date(dateVal);
		naturalDate=naturalDate.toLocaleDateString("en-us",dateFormattingOptions);
		unixDate=new Date(dateVal).getTime()/1000;
	}
	else if(!isNaN(Number(dateVal))){
		console.log("else condition is satisfied");
		unixDate=dateVal;
		naturalDate=new Date(dateVal*1000);
		naturalDate=naturalDate.toLocaleDateString("en-us",dateFormattingOptions);

	}
	res.json({unix:unixDate,natural:naturalDate});
});

app.listen(3000,function(){
	console.log("its working");
});