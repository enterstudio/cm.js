/*
 * CM.JS
 * A microlibrary to help you manage cookies.
 * http://cmjs.timseverien.nl
 *
 * Tim Severien
 * http://timseverien.nl
 *
 * Copyright (c) 2013 Tim Severien
 * Released under the GPLv2 license.
 *
 */

(function(exports) {
	function tryParse(obj) {
		try {
			return JSON.parse(obj);
		} catch(e) {};
		
		return obj;
	}
	
	function tryStringify(obj) {
		if(typeof obj !== 'object' || !JSON.stringify) return obj;
			
		return JSON.stringify(obj);
	}
	
	var CM = {
		set: function(name, value, expires, path, domain) {
			var pair = escape(name) + '=' + escape(tryStringify(value));
			
			if(!!expires) {
				if(expires.constructor === Number) pair += ';max-age=' + expires;
				else if(expires.constructor === String) pair += ';expires=' + expires;
				else if(expires.constructor === Date)  pair += ';expires=' + expires.toUTCString();
			}
			
			pair += ';path=' + ((!!path) ? path : '/');
			if(!!domain) pair += ';domain=' + domain;
			
			document.cookie = pair;
		},
		
		setObject: function(object, expire, path, domain) {
			for(var key in object) CM.set(key, object[key], expires, path, domain);
		},
		
		get: function(name) {
			var obj = CM.getObject();
			
			return obj[name];
		},
	
		getObject: function() {
			var pairs = document.cookie.split(/;\s?/i);
			var object = {};
			
			var pair;
			
			for(var i in pairs) {
				pair = pairs[i].split('=');
				
				if(pair.length <= 1) continue;
				
				object[unescape(pair[0])] = tryParse(unescape(pair[1]));
			}
			
			return object;
		},
	
		unset: function(name) {
			var date = new Date(0);
			document.cookie = name + '=; expires=' + date.toUTCString();
		},
		
		clear: function() {
			var obj = CM.getObject();
	
			for(var key in obj) CM.unset(key);
		}
	};
	
	/* AMD support */
	
	if (typeof define === 'function' && define.amd) {
	      define(function() {
	           return CM;
	       });
	} else {
	     exports.CM = CM;
	}
})(this);
