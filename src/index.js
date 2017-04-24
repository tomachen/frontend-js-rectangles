//  var obj1 = {
//   left: 0,
// 	top: 0,
// 	width: 20,
// 	height: 20
//   };
//  var obj2 = {
// 	left: 10,
// 	top: 10,
// 	width: 25,
// 	height: 25  
//   }
  
 
 var rectangleFirst = {
  left: 0,
	top: 0,
	width: 20,
	height: 20
  };
 var rectangleSecond = {
	left: 10,
	top: 10,
	width: 25,
	height: 25  
  }
 rectangleFirst.foo = areIntersected
 rectangleSecond.foo = areIntersected
  
function areIntersected(rectangleFirst, rectangleSecond){

var left = this.height - this.top
var right = this.height - this.top
var top = this.width - this.left
var bottom = this.width - this.left
if(rectangleFirst.top < rectangleSecond.bottom && 
   rectangleFirst.bottom > rectangleSecond.top &&
   rectangleFirst.left < rectangleSecond.right && 
   rectangleFirst.right > rectangleSecond.left){
  console.log ("areIntersected")
}
  else{
    return ("notIntersected")
  }

}

// function areIntersected(obj1,obj2){
//   var XColl=false;
//   var YColl=false;

//   if ((obj1.left + obj1.width > obj2.left) && (obj1.left < obj2.left + obj2.width)) XColl = true;
//   if ((obj1.top + obj1.height > obj2.top) && (obj1.top < obj2.top + obj2.height)) YColl = true;

//   if (XColl&YColl){return true;}
//   return false;
// }

