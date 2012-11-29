# CM.JS

cm.js provides easy cookie managing.

* Managing cookies has never been this easy
* Lightweight
* Parses JSON (requires JSON2)

## Documentation

`CM.set( string key, mixed value [, date expires] )`

Sets or overwrites the value of a cookie.

* key: alpha-numeric key
* value: cookie value
* expires: date object

`CM.setObject( object object [, date expires] )`

Sets or overwrites multiple cookies using an object as input.

* object: an object

`CM.get( string key )`

Gets the value of a cookie.

* key: alpha-numeric key

`CM.getObject( void )`

Gets all set cookies as an object.

`CM.unset( string key )`

Unsets a specific cookie.

* key: alpha-numeric key

`CM.clear( void )`

Clears all known accessible cookies.