 var obj1 = {
  left: 0,
	top: 0,
	width: 20,
	height: 20
  };
 var obj2 = {
	left: 10,
	top: 10,
	width: 25,
	height: 25  
  }
var arr1 = [
          {
            left: 10, top: 10,
            width: 25,  height: 25
          }, 
          {
            left: 15, top: 10,
            width: 20,  height: 20
          }, 
          {
            left: 10, top: 10,
            width: 0,  height: 25
          }, 
          {
            left: 100, top: 10,
            width: 5,  height: 5
          }
        ]

function areIntersected(obj1, obj2){
  var XColl=false;
  var YColl=false;

  if ((obj1.left + obj1.width > obj2.left) && (obj1.left < obj2.left + obj2.width)) XColl = true;
  if ((obj1.top + obj1.height > obj2.top) && (obj1.top < obj2.top + obj2.height)) YColl = true;

  if (XColl&YColl){return true;}
  return false;
}


function filterVisible(obj1, arr1){
  return arr1.filter(function(objects) {
     	if (areIntersected(obj1, objects) === true 
       && objects.width !== 0 
       && objects.height !== 0){
          return true;
        } else {
          return false; 
        }
  })
}


