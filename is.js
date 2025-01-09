is.num = function(n){return typeof(n)=="number" ? true : false}
is.str = function(n){return typeof(n)=="string" ? true : false}
is.bool = function(n){return typeof(n)=="boolean" ? true : false}
is.undef = function(n){return typeof(n)=="undefined" ? true : false}
is.def = function(n){return typeof(n)=="undefined" ? false : true}
is.nan = function(n){return Number.isNaN(n) ? true : false}
is.arr = function(n){return n instanceof Array ? true : false}
is.obj = (n) => typeof n === "object" && !is.fun(n) && !is.arr(n) && n !== null
is.fun = function(n){return n instanceof Function ? true : false}
is.truthy = function(n){return Boolean(n) ? true : false}
is.falsy = function(n){return Boolean(n) ? false : true}
