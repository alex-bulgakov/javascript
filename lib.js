/*jslint devel: true*/
var out = '';
var br = '<br>';
var buffer = '';
var count = 1;

function print(data) {
  "use strict";
  data = '<i>' + count + ': </i>' + data + br;
  buffer += data;
  out = buffer;
  count++;
}

function circleArea(dmtr) {
  "use strict";
  return Math.PI * ((dmtr * dmtr) / 4);
}