/*
 *	CM.JS v1.01
 *	cmjs.timseverien.nl
 */

(function(){window.CM={set:function(b,a,c){var b=b+"=",d=escape;a="object"!==typeof a||!JSON.stringify?a:JSON.stringify(a);a=b+d(a);c&&(a+="; expires="+c.toUTCString());document.cookie=a},setObject:function(b){for(var a in b)CM.set(a,b[a],expires)},get:function(b){return CM.getObject()[b]},getObject:function(){var b=document.cookie.split(/;\s?/i),a={},c,d;for(d in b)if(c=b[d].split("="),!(1>=c.length)){var f=a,g=c[0],e;a:{c=unescape(c[1]);try{e=JSON.parse(c);break a}catch(h){}e=c}f[g]=e}return a},unset:function(b){document.cookie=b+"=; expires="+(new Date(0)).toUTCString()},clear:function(){var b=CM.getObject(),a;for(a in b)CM.unset(a)}}})();