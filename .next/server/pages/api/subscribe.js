"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fauna */ \"./src/services/fauna.ts\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stripe */ \"./src/services/stripe.ts?2e25\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, resp) => {\n  if (req.method === \"POST\") {\n    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n      req\n    });\n    const user = await _services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Casefold(session.user.email))));\n    let customerId = user.data.stripe_customer_id;\n\n    if (!customerId) {\n      const stripeCustomer = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.customers.create({\n        email: session.user.email // metadata\n\n      });\n      await _services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Ref(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Collection(\"users\"), user.ref.id), {\n        data: {\n          stripe_customer_id: stripeCustomer.id\n        }\n      }));\n      customerId = stripeCustomer.id;\n    }\n\n    const stripeCheckoutSession = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.checkout.sessions.create({\n      customer: customerId,\n      payment_method_types: [\"card\"],\n      billing_address_collection: \"required\",\n      line_items: [{\n        price: \"price_1JpxkNAz0GL82oV7Q0QIznWD\",\n        quantity: 1\n      }],\n      mode: \"subscription\",\n      allow_promotion_codes: true,\n      success_url: process.env.STRIPE_SUCCESS_URL,\n      cancel_url: process.env.STRIPE_CANCEL_URL\n    });\n    return resp.status(200).json({\n      sessionId: stripeCheckoutSession.id\n    });\n  } else {\n    resp.setHeader(\"Allow\", \"POST\");\n    resp.status(405).end(\"Method not allowed\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQSxpRUFBZSxPQUFPSyxHQUFQLEVBQTRCQyxJQUE1QixLQUFzRDtBQUNuRSxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixVQUFNQyxPQUFPLEdBQUcsTUFBTVIsNERBQVUsQ0FBQztBQUFFSyxNQUFBQTtBQUFGLEtBQUQsQ0FBaEM7QUFFQSxVQUFNSSxJQUFJLEdBQUcsTUFBTU4sd0RBQUEsQ0FDakJELDhDQUFBLENBQU1BLGdEQUFBLENBQVFBLGdEQUFBLENBQVEsZUFBUixDQUFSLEVBQWtDQSxtREFBQSxDQUFXTSxPQUFPLENBQUNDLElBQVIsQ0FBYUssS0FBeEIsQ0FBbEMsQ0FBTixDQURpQixDQUFuQjtBQUlBLFFBQUlDLFVBQVUsR0FBR04sSUFBSSxDQUFDTyxJQUFMLENBQVVDLGtCQUEzQjs7QUFFQSxRQUFJLENBQUNGLFVBQUwsRUFBaUI7QUFDZixZQUFNRyxjQUFjLEdBQUcsTUFBTWQscUVBQUEsQ0FBd0I7QUFDbkRVLFFBQUFBLEtBQUssRUFBRU4sT0FBTyxDQUFDQyxJQUFSLENBQWFLLEtBRCtCLENBRW5EOztBQUZtRCxPQUF4QixDQUE3QjtBQUtBLFlBQU1YLHdEQUFBLENBQ0pELGlEQUFBLENBQVNBLDhDQUFBLENBQU1BLHFEQUFBLENBQWEsT0FBYixDQUFOLEVBQTZCTyxJQUFJLENBQUNlLEdBQUwsQ0FBU0MsRUFBdEMsQ0FBVCxFQUFvRDtBQUNsRFQsUUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFVBQUFBLGtCQUFrQixFQUFFQyxjQUFjLENBQUNPO0FBRC9CO0FBRDRDLE9BQXBELENBREksQ0FBTjtBQVFBVixNQUFBQSxVQUFVLEdBQUdHLGNBQWMsQ0FBQ08sRUFBNUI7QUFDRDs7QUFFRCxVQUFNQyxxQkFBcUIsR0FBRyxNQUFNdEIsNkVBQUEsQ0FBZ0M7QUFDbEV5QixNQUFBQSxRQUFRLEVBQUVkLFVBRHdEO0FBRWxFZSxNQUFBQSxvQkFBb0IsRUFBRSxDQUFDLE1BQUQsQ0FGNEM7QUFHbEVDLE1BQUFBLDBCQUEwQixFQUFFLFVBSHNDO0FBSWxFQyxNQUFBQSxVQUFVLEVBQUUsQ0FBQztBQUFFQyxRQUFBQSxLQUFLLEVBQUUsZ0NBQVQ7QUFBMkNDLFFBQUFBLFFBQVEsRUFBRTtBQUFyRCxPQUFELENBSnNEO0FBS2xFQyxNQUFBQSxJQUFJLEVBQUUsY0FMNEQ7QUFNbEVDLE1BQUFBLHFCQUFxQixFQUFFLElBTjJDO0FBT2xFQyxNQUFBQSxXQUFXLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxrQkFQeUM7QUFRbEVDLE1BQUFBLFVBQVUsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHO0FBUjBDLEtBQWhDLENBQXBDO0FBV0EsV0FBT3BDLElBQUksQ0FBQ3FDLE1BQUwsQ0FBWSxHQUFaLEVBQWlCQyxJQUFqQixDQUFzQjtBQUFFQyxNQUFBQSxTQUFTLEVBQUVuQixxQkFBcUIsQ0FBQ0Q7QUFBbkMsS0FBdEIsQ0FBUDtBQUNELEdBdENELE1Bc0NPO0FBQ0xuQixJQUFBQSxJQUFJLENBQUN3QyxTQUFMLENBQWUsT0FBZixFQUF3QixNQUF4QjtBQUNBeEMsSUFBQUEsSUFBSSxDQUFDcUMsTUFBTCxDQUFZLEdBQVosRUFBaUJJLEdBQWpCLENBQXFCLG9CQUFyQjtBQUNEO0FBQ0YsQ0EzQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cz8wNThhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSBcImZhdW5hZGJcIjtcbmltcG9ydCB7IGZhdW5hIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2ZhdW5hXCI7XG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RyaXBlXCI7XG5cbnR5cGUgVXNlciA9IHtcbiAgcmVmOiB7XG4gICAgaWQ6IHN0cmluZztcbiAgfTtcbiAgZGF0YToge1xuICAgIHN0cmlwZV9jdXN0b21lcl9pZDogc3RyaW5nO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlc3A6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBmYXVuYS5xdWVyeTxVc2VyPihcbiAgICAgIHEuR2V0KHEuTWF0Y2gocS5JbmRleChcInVzZXJfYnlfZW1haWxcIiksIHEuQ2FzZWZvbGQoc2Vzc2lvbi51c2VyLmVtYWlsKSkpXG4gICAgKTtcblxuICAgIGxldCBjdXN0b21lcklkID0gdXNlci5kYXRhLnN0cmlwZV9jdXN0b21lcl9pZDtcblxuICAgIGlmICghY3VzdG9tZXJJZCkge1xuICAgICAgY29uc3Qgc3RyaXBlQ3VzdG9tZXIgPSBhd2FpdCBzdHJpcGUuY3VzdG9tZXJzLmNyZWF0ZSh7XG4gICAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwsXG4gICAgICAgIC8vIG1ldGFkYXRhXG4gICAgICB9KTtcblxuICAgICAgYXdhaXQgZmF1bmEucXVlcnkoXG4gICAgICAgIHEuVXBkYXRlKHEuUmVmKHEuQ29sbGVjdGlvbihcInVzZXJzXCIpLCB1c2VyLnJlZi5pZCksIHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBzdHJpcGVfY3VzdG9tZXJfaWQ6IHN0cmlwZUN1c3RvbWVyLmlkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBjdXN0b21lcklkID0gc3RyaXBlQ3VzdG9tZXIuaWQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaXBlQ2hlY2tvdXRTZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgICBjdXN0b21lcjogY3VzdG9tZXJJZCxcbiAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbXCJjYXJkXCJdLFxuICAgICAgYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb246IFwicmVxdWlyZWRcIixcbiAgICAgIGxpbmVfaXRlbXM6IFt7IHByaWNlOiBcInByaWNlXzFKcHhrTkF6MEdMODJvVjdRMFFJem5XRFwiLCBxdWFudGl0eTogMSB9XSxcbiAgICAgIG1vZGU6IFwic3Vic2NyaXB0aW9uXCIsXG4gICAgICBhbGxvd19wcm9tb3Rpb25fY29kZXM6IHRydWUsXG4gICAgICBzdWNjZXNzX3VybDogcHJvY2Vzcy5lbnYuU1RSSVBFX1NVQ0NFU1NfVVJMLFxuICAgICAgY2FuY2VsX3VybDogcHJvY2Vzcy5lbnYuU1RSSVBFX0NBTkNFTF9VUkwsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcC5zdGF0dXMoMjAwKS5qc29uKHsgc2Vzc2lvbklkOiBzdHJpcGVDaGVja291dFNlc3Npb24uaWQgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzcC5zZXRIZWFkZXIoXCJBbGxvd1wiLCBcIlBPU1RcIik7XG4gICAgcmVzcC5zdGF0dXMoNDA1KS5lbmQoXCJNZXRob2Qgbm90IGFsbG93ZWRcIik7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsInF1ZXJ5IiwicSIsImZhdW5hIiwic3RyaXBlIiwicmVxIiwicmVzcCIsIm1ldGhvZCIsInNlc3Npb24iLCJ1c2VyIiwiR2V0IiwiTWF0Y2giLCJJbmRleCIsIkNhc2Vmb2xkIiwiZW1haWwiLCJjdXN0b21lcklkIiwiZGF0YSIsInN0cmlwZV9jdXN0b21lcl9pZCIsInN0cmlwZUN1c3RvbWVyIiwiY3VzdG9tZXJzIiwiY3JlYXRlIiwiVXBkYXRlIiwiUmVmIiwiQ29sbGVjdGlvbiIsInJlZiIsImlkIiwic3RyaXBlQ2hlY2tvdXRTZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImN1c3RvbWVyIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbiIsImxpbmVfaXRlbXMiLCJwcmljZSIsInF1YW50aXR5IiwibW9kZSIsImFsbG93X3Byb21vdGlvbl9jb2RlcyIsInN1Y2Nlc3NfdXJsIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TVUNDRVNTX1VSTCIsImNhbmNlbF91cmwiLCJTVFJJUEVfQ0FOQ0VMX1VSTCIsInN0YXR1cyIsImpzb24iLCJzZXNzaW9uSWQiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/subscribe.ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n  secret: process.env.FAUNADB_KEY,\n  domain: \"db.us.fauna.com\"\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxLQUFLLEdBQUcsSUFBSUQsMkNBQUosQ0FBVztBQUM5QkUsRUFBQUEsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FEVTtBQUU5QkMsRUFBQUEsTUFBTSxFQUFFO0FBRnNCLENBQVgsQ0FBZCIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9mYXVuYS50cz8zMjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gXCJmYXVuYWRiXCI7XG5cbmV4cG9ydCBjb25zdCBmYXVuYSA9IG5ldyBDbGllbnQoe1xuICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BREJfS0VZLFxuICBkb21haW46IFwiZGIudXMuZmF1bmEuY29tXCIsXG59KTtcbiJdLCJuYW1lcyI6WyJDbGllbnQiLCJmYXVuYSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX0tFWSIsImRvbWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts?2e25":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json?2eee\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n  apiVersion: \"2020-08-27\",\n  appInfo: {\n    name: \"Ignews\",\n    version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzPzJlMjUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNRSxNQUFNLEdBQUcsSUFBSUYsK0NBQUosQ0FBV0csT0FBTyxDQUFDQyxHQUFSLENBQVlDLGNBQXZCLEVBQXVDO0FBQzNEQyxFQUFBQSxVQUFVLEVBQUUsWUFEK0M7QUFFM0RDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxJQUFJLEVBQUUsUUFEQztBQUVQUCxJQUFBQSxPQUFPQSxvREFBQUE7QUFGQTtBQUZrRCxDQUF2QyxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL3N0cmlwZS50cz9hYjk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gXCIuLi8uLi9wYWNrYWdlLmpzb25cIjtcblxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksIHtcbiAgYXBpVmVyc2lvbjogXCIyMDIwLTA4LTI3XCIsXG4gIGFwcEluZm86IHtcbiAgICBuYW1lOiBcIklnbmV3c1wiLFxuICAgIHZlcnNpb25cbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIlN0cmlwZSIsInZlcnNpb24iLCJzdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX0FQSV9LRVkiLCJhcGlWZXJzaW9uIiwiYXBwSW5mbyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/stripe.ts?2e25\n");

/***/ }),

/***/ "./package.json?2eee":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint","test":"jest"},"dependencies":{"@prismicio/client":"^5.1.0","@stripe/stripe-js":"^1.21.1","axios":"^0.24.0","faunadb":"^4.4.1","next":"12.0.1","next-auth":"^3.29.0","prismic-dom":"^2.2.6","react":"17.0.2","react-dom":"17.0.2","react-icons":"^4.3.1","sass":"^1.43.4","stripe":"^8.186.0"},"devDependencies":{"@testing-library/dom":"^8.11.2","@testing-library/jest-dom":"^5.16.1","@testing-library/react":"^12.1.2","@types/jest":"^27.4.0","@types/node":"^16.11.6","@types/prismic-dom":"^2.1.1","@types/react":"^17.0.33","babel-jest":"^27.4.6","eslint":"7","eslint-config-next":"12.0.1","identity-obj-proxy":"^3.0.0","jest":"^27.4.7","jest-dom":"^4.0.0","jest-mock":"^27.4.6","ts-jest":"^27.1.3","typescript":"^4.4.4"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/subscribe.ts"));
module.exports = __webpack_exports__;

})();