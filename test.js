function *foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var it = foo( 5 );

// note: not sending anything into `next()` here
var temp = it.next();
console.log(temp);

temp  = it.next( 12 )  // { value:6, done:false }
console.log( temp );   // { value:8, done:false }

temp = it.next( 13 )
console.log( temp );   // { value:42, done:true }

