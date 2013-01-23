/*
 *	CM.JS v1.02
 *	cmjs.timseverien.nl
 */

(function(){window.CM={set:function(b,a,c,d){b+="=";var e=escape;a="object"!==typeof a||!JSON.stringify?a:JSON.stringify(a);a=b+e(a);c&&(a+="; expires="+c.toUTCString());d&&(a+="; path="+d);document.cookie=a},setObject:function(b,a,c){for(var d in b)CM.set(d,b[d],expires,c)},get:function(b){return CM.getObject()[b]},getObject:function(){var b=document.cookie.split(/;\s?/i),a={},c,d;for(d in b)if(c=b[d].split("="),!(1>=c.length)){var e=a,g=c[0],f;a:{c=unescape(c[1]);try{f=JSON.parse(c);break a}catch(h){}f=c}e[g]=f}return a},unset:function(b){document.cookie=b+"=; expires="+(new Date(0)).toUTCString()},clear:function(){var b=CM.getObject(),a;for(a in b)CM.unset(a)}}})();