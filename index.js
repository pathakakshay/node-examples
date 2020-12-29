var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};

function solveRect(l,b) {
    console.log("solving for rectanle l = "+ l +" and b = "+ b+" ");
    if(l<=0 || b<=0){
        console.log("Rectangular dimension should be greater than zero");
    }
    else{
        console.log("Rectangular area is "+ rect.area(l,b));
        console.log("Rectangular perimeter is "+ rect.perimeter(l,b));
    }
}
solveRect(2,3);
solveRect(0,2);
solveRect(3,5);