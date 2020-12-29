const rectangle = require('./rectangle');
var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("solving for rectanle l = "+ l +" and b = "+ b+" ");
    rect(l,b,(err,rectangle) => {
        if(err){
            console.log("ERROR: "+err.message);
        }
        else{
            console.log("The area of the rectangle of dimension of l"+l+" and b"+ b +" is "+ rectangle.area());
            console.log("The perimeter of the rectangle of dimension of l"+ l+" and b"+ b +" is "+ rectangle.perimeter());
        }
    });
    console.log("This Statement is after the call of react()"); 
}

solveRect(2,3);
solveRect(0,2);
solveRect(3,5);