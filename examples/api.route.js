/**
 * @apiDefine successResponse
 * @apiSuccess (200) {String} id User Id
 * @apiSuccess (200) {String} name User full name
 * @apiSuccess (200) {String} username User full username
 * @apiSuccess (200) {String} userGroup Group this user belongs to
 */

/**
 * @apiDefine successExample
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "id": '5c444e1387e95374633c1e0d',
 *   "name": "Jhon Snow",
 *   "userGroup": "User",
 *   "username": "i_know_nothing"
 * }
 */

/**
 * @apiDefine errorExample
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 409 Conflict
 * {
 *   message: "Username already exists"
 * }
 */


/**
 *
 * @api {POST} /api/account/create Create User
 * @apiName Create User
 * @apiDescription An admin can create an new user account
 * @apiGroup Account
 * @apiVersion 1.0.0
 * @apiPermission POST-createAccount
 *
 * @apiHeader {String} Authorization Admin JWT key
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer thisisjwttokenshouldbeonger"
 *     }
 *
 * @apiParam (Body) {String} name User's full name
 * @apiParam (Body) {String{6..20}} username User's username for login
 * @apiParam (Body) {String} [password] If not provided will be auto generated
 * @apiParam (Body) {String="User", "Admin", "Moderator"} [userGroup="User"] User group the user belongs to
 * 
 * @apiExample {cURL} cURL
 *   curl -X POST /api/account/create \
 *        -H "Authorization: Bearer thisisjwttokenshouldbeonger" \
 *        -d '{"name":"Jhon Snow", "username":"i_know_nothing"}'
 * 
 * @apiExample {Node} Node
 *   const axios = require('axios');
 *   try {
 *      const response = await axios({
 *        method: 'POST',
 *        url: '/api/account/create',
 *        headers: {
 *           'Authorization': 'Bearer thisisjwttokenshouldbeonger'
 *        },
 *        data: {
 *          'name': 'Jhon Snow',
 *          'username': 'i_know_nothing'
 *        }
 *     });
 *     console.log('User created: ', response);
 *   } catch (error) {
 *     console.error(error);
 *   }
 * 
 * @apiUse successResponse
 * @apiUse successExample
 *
 * @apiError {Object} error Error response
 * @apiUse errorExample
 *
 */


/**
 *
 * @api {PUT} /api/account/:id Update User
 * @apiName Update User
 * @apiDescription An admin can update user account
 * @apiGroup Account
 * @apiVersion 1.0.0
 * @apiPermission PUT-updateAccount
 *
 * @apiHeader {String} Authorization Admin JWT key
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer thisisjwttokenshouldbeonger"
 *     }
 *
 * @apiParam (Body) {String} [name] User's full name
 * @apiParam (Body) {String="User", "Admin", "Moderator"} [userGroup] User group the user belongs to
 * 
 * @apiExample {cURL} cURL
 *   curl -X PUT /api/account/5c444e1387e95374633c1e0d \
 *        -H "Authorization: Bearer thisisjwttokenshouldbeonger" \
 *        -d '{"name":"I am Snow"}'
 * 
 * @apiExample {Node} Node
 *   const axios = require('axios');
 *   try {
 *      const response = await axios({
 *        method: 'PUT',
 *        url: '/api/account/5c444e1387e95374633c1e0d',
 *        headers: {
 *           'Authorization': 'Bearer thisisjwttokenshouldbeonger'
 *        },
 *        data: {
 *          'name': 'I am Snow'
 *        }
 *     });
 *     console.log('User created: ', response);
 *   } catch (error) {
 *     console.error(error);
 *   }
 * 
 * @apiUse successResponse
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "id": '5c444e1387e95374633c1e0d',
 *   "name": "I am Snow",
 *   "userGroup": "User",
 *   "username": "i_know_nothing"
 * }
 *
 * @apiError {Object} error Error response
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 404 Notfound
 * {
 *   message: "No account found"
 * }
 *
 */


/**
 *
 * @api {DELETE} /api/account/:id Delete User
 * @apiName Delete User
 * @apiDescription An admin can delete user account
 * @apiGroup Account
 * @apiVersion 1.0.0
 * @apiPermission DELETE-deleteAccount
 *
 * @apiHeader {String} Authorization Admin JWT key
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer thisisjwttokenshouldbeonger"
 *     }
 * 
 * @apiExample {cURL} cURL
 *   curl -X DELETE /api/account/5c444e1387e95374633c1e0d \
 *        -H "Authorization: Bearer thisisjwttokenshouldbeonger" \
 * 
 * @apiExample {Node} Node
 *   const axios = require('axios');
 *   try {
 *      const response = await axios({
 *        method: 'DELETE',
 *        url: '/api/account/5c444e1387e95374633c1e0d',
 *        headers: {
 *           'Authorization': 'Bearer thisisjwttokenshouldbeonger'
 *        }
 *     });
 *     console.log('User created: ', response);
 *   } catch (error) {
 *     console.error(error);
 *   }
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": 'Successfuly deleted'
 * }
 *
 * @apiError {Object} error Error response
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 404 Notfound
 * {
 *   message: "No account found"
 * }
 */



/**
 *
 * @api {GET} /api/account/:id Get User
 * @apiName Get User
 * @apiDescription An admin can get an user account
 * @apiGroup Account
 * @apiVersion 1.0.0
 * @apiPermission GET-getAccount
 *
 * @apiHeader {String} Authorization Admin JWT key
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer thisisjwttokenshouldbeonger"
 *     }
 * 
 * @apiExample {cURL} cURL
 *   curl -X GET /api/account/:id \
 *        -H "Authorization: Bearer thisisjwttokenshouldbeonger" \
 * 
 * @apiExample {Node} Node
 *   const axios = require('axios');
 *   try {
 *      const response = await axios({
 *        method: 'GET',
 *        url: '/api/account/:id',
 *        headers: {
 *           'Authorization': 'Bearer thisisjwttokenshouldbeonger'
 *        }
 *     });
 *     console.log('User created: ', response);
 *   } catch (error) {
 *     console.error(error);
 *   }
 *
 * @apiUse successResponse
 * @apiUse successExample
 *
 * @apiError {Object} error Error response
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 404 Notfound
 * {
 *   message: "No account found"
 * }
 */



/**
 *
 * @api {PATCH} /api/account/:id Patch Update an account
 * @apiName Patch Update an account
 * @apiDescription An admin can update account
 * @apiGroup Account
 * @apiVersion 1.0.0
 * @apiPermission PUT-updateFullAccount
 */

/**
 *
 * @api {HEAD} /api/account/:id Account head info
 * @apiName Account head info
 * @apiDescription An admin can update account
 * @apiGroup Account
 * @apiVersion 1.0.0
 */


/**
 *
 * @api {OPTIONS} /api/account/:id Just a options demo
 * @apiName Just a options demo
 * @apiDescription An admin can update account
 * @apiGroup Account
 * @apiVersion 1.0.0
 */



/**
 *
 * @api {POST} /api/user Register user
 * @apiName Register user
 * @apiDescription User registration
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam (Body) {String} [firstname]  Optional Firstname of the User.
 * @apiParam (Body) {String} lastname Mandatory Lastname.
 * @apiParam (Body) {String} username Mandatory username.
 * @apiParam (Body) {String} password Mandatory password.
 * @apiParam (Body) {String} email Mandatory email.
 * @apiParam (Body) {String} country="BD" Mandatory with default value "BD".
 * @apiParam {Number} [age=18] Optional Age with default 18.
 * 
 * @apiSuccess (200) {String} firstname Firstname of the User.
 * @apiSuccess (200) {String} lastname Lastname.
 * @apiSuccess (200) {String} username username.
 * @apiSuccess (200) {Object} email info.
 * @apiSuccess (200) {String} email.address email address.
 * @apiSuccess (200) {Object} email.verified if email is verified.
 * @apiSuccess (200) {String} email.verified.expire if email is verified.
 * @apiSuccess (200) {String} email.verified.value if email is verified.
 * @apiSuccess (200) {String} country country
 * @apiSuccess (200) {Number} age age
 *
 * @apiError {Object} error Error response
 *
 */


