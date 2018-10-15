// function *foo(x) {
//   var y = 2 * (yield (x + 1));
//   var z = yield (y / 3);
//   return (x + y + z);
// }

// var it = foo( 5 );

// // note: not sending anything into `next()` here
// var temp = it.next(); // { value:6, done:false }
// console.log(temp);

// var temp2  = it.next( 12 ) 
// console.log( temp2 );   // { value:8, done:false }

// var temp3 = it.next( 13 )
// console.log( temp3 );   // { value:42, done:true }

// function *bar(x) {
//   var y = yield(x + 1)
//   var z = 2 * (yield(y + 1))
//   return x + y + z
// }

// var it = bar(1)

// var temp = it.next('fuckery is great')
// console.log(temp)

// var temp2 = it.next(10)
// console.log(temp2)

// var temp3 = it.next(1)
// console.log(temp3)

function* idMaker() {
  var index = 0;
  let x;
  while (index < index+1){
    x = yield index++;
    index = x ? x : index;
  }
}

var it = idMaker()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())