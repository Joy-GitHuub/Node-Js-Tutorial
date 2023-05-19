** Request Properties--------------------------
 * 1. req.baseUrl ** /admin
 * 2. req.originalUrl ** /admin/deshbord
 * 3. req.path ** /deshbord
 * 4. req.hostname ** localhost is a hostname
 * 5. req.ip ** ::1 is a ip
 * 6. req.method ** GET | POST | PETCH | DELETE | PUT
 * 7. req.protocol ** http
 * 8. req.params ** {id: 11} give a object
 * 9. req.query ** {fillter: age} give a object
 * 10. req.body ** { name: 'Joy' } give a data object or array
 * 11. req.cookies ** {user1: 'Programmer'} get cookies
 * 12. req.signedCookies ** [Object: null prototype] {}
 * 13. req.secure ** false https request is True.
 * 14. req.get('accept'); text/html | application/json


  * ** Request Method------------------------
 * 1. req.accepts('text/html) / req.accepts(['json', 'text']) 
 * Checks if the specified content types are acceptable, based on the request’s Accept HTTP header field. The method returns the best match, or if none of the specified content types is acceptable, returns false (in which case, the application should respond with 406 "Not Acceptable").