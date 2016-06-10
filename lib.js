/*jslint devel: true*/
var out = '';
var br = '<br>';
var buffer = '';

function print(data) {
  "use strict";
  data += br;
  buffer += data;
  out = buffer;
}

function slice(dmtr) {
  "use strict";
  return Math.PI * ((dmtr * dmtr) / 4);
}