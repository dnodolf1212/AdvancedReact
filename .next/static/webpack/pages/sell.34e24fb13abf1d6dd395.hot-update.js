webpackHotUpdate_N_E("pages/sell",{

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CreateProduct; });\n/* harmony import */ var _Users_dwightnodolf_Development_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dwightnodolf_Development_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dwightnodolf_Development_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_dwightnodolf_Development_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_dwightnodolf_Development_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_dwightnodolf_Development_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/dwightnodolf/Development/Advanced-React/sick-fits/frontend/components/CreateProduct.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_dwightnodolf_Development_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n  mutation CREATE_PRODUCT_MUTATION(\\n    #variables and types should be defined here\\n    $name: String!\\n    $description: String!\\n    $price: Int!\\n    $image: Upload\\n  ) {\\n    createProduct(\\n      data: {\\n        name: $name\\n        description: $description\\n        price: $price\\n        status: \\\"AVAILABLE\\\"\\n        photo: {\\n          create: {image: $image, altText: $name }}\\n      }\\n    ) {\\n      id \\n      price \\n      description\\n      name\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar CREATE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject());\nfunction CreateProduct() {\n  _s();\n\n  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n    image: '',\n    name: \"Hot taters\",\n    price: 1234,\n    description: \"Ratchet but couturrrr\"\n  }),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      clearForm = _useForm.clearForm,\n      resetForm = _useForm.resetForm;\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"useMutation\"])(CREATE_PRODUCT_MUTATION, {\n    variables: inputs\n  }),\n      _useMutation2 = Object(_Users_dwightnodolf_Development_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMutation, 2),\n      createProduct = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      loading = _useMutation2$.loading,\n      error = _useMutation2$.error,\n      data = _useMutation2$.data;\n\n  console.log(createProduct);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    onSubmit: /*#__PURE__*/function () {\n      var _ref = Object(_Users_dwightnodolf_Development_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_dwightnodolf_Development_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n        return _Users_dwightnodolf_Development_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                e.preventDefault();\n                console.log(inputs); // submit input fields to the backend\n\n                _context.next = 4;\n                return createProduct();\n\n              case 4:\n                //data from the destructured useMutation above\n                clearForm();\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }(),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      error: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"fieldset\", {\n      disabled: loading,\n      \"aria-busy\": loading,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"image\",\n        children: [\"Image\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n          required: true,\n          type: \"file\",\n          id: \"image\",\n          name: \"image\",\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"name\",\n        children: [\"Name\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          id: \"name\",\n          name: \"name\",\n          placeholder: \"Name\",\n          value: inputs.name,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"price\",\n        children: [\"Price\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n          type: \"number\",\n          id: \"price\",\n          name: \"price\",\n          placeholder: \"Price\",\n          value: inputs.price,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"description\",\n        children: [\"Description\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"textarea\", {\n          type: \"text\",\n          id: \"description\",\n          name: \"description\",\n          placeholder: \"Description\",\n          value: inputs.description,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \" + Add Product\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CreateProduct, \"RYAKW67IL5YWm7+bUw0UMSOGLYw=\", false, function () {\n  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"useMutation\"]];\n});\n\n_c = CreateProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzP2UwNTAiXSwibmFtZXMiOlsiQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04iLCJncWwiLCJDcmVhdGVQcm9kdWN0IiwidXNlRm9ybSIsImltYWdlIiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsImNyZWF0ZVByb2R1Y3QiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSx1QkFBdUIsR0FBR0Msa0RBQUgsbUJBQTdCO0FBMEJlLFNBQVNDLGFBQVQsR0FBeUI7QUFBQTs7QUFBQSxpQkFDaUJDLDREQUFPLENBQUM7QUFDN0RDLFNBQUssRUFBRSxFQURzRDtBQUU3REMsUUFBSSxFQUFFLFlBRnVEO0FBRzdEQyxTQUFLLEVBQUUsSUFIc0Q7QUFJN0RDLGVBQVcsRUFBRTtBQUpnRCxHQUFELENBRHhCO0FBQUEsTUFDOUJDLE1BRDhCLFlBQzlCQSxNQUQ4QjtBQUFBLE1BQ3RCQyxZQURzQixZQUN0QkEsWUFEc0I7QUFBQSxNQUNSQyxTQURRLFlBQ1JBLFNBRFE7QUFBQSxNQUNHQyxTQURILFlBQ0dBLFNBREg7O0FBQUEscUJBUVlDLGtFQUFXLENBQzNEWix1QkFEMkQsRUFFM0Q7QUFDRWEsYUFBUyxFQUFFTDtBQURiLEdBRjJELENBUnZCO0FBQUE7QUFBQSxNQVEvQk0sYUFSK0I7QUFBQTtBQUFBLE1BUWRDLE9BUmMsa0JBUWRBLE9BUmM7QUFBQSxNQVFMQyxLQVJLLGtCQVFMQSxLQVJLO0FBQUEsTUFRRUMsSUFSRixrQkFRRUEsSUFSRjs7QUFhcENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxhQUFaO0FBRUYsc0JBRUUscUVBQUMsb0RBQUQ7QUFBTSxZQUFRO0FBQUEsa1lBQUUsaUJBQU9NLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQSxpQkFBQyxDQUFDQyxjQUFGO0FBQ0FILHVCQUFPLENBQUNDLEdBQVIsQ0FBWVgsTUFBWixFQUZjLENBR2Q7O0FBSGM7QUFBQSx1QkFJUk0sYUFBYSxFQUpMOztBQUFBO0FBSVM7QUFDdkJKLHlCQUFTOztBQUxLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZDtBQUFBLDRCQVFFLHFFQUFDLHFEQUFEO0FBQWMsV0FBSyxFQUFFTTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUFTRTtBQUFVLGNBQVEsRUFBRUQsT0FBcEI7QUFBNkIsbUJBQVdBLE9BQXhDO0FBQUEsOEJBQ0E7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLHlDQUVJO0FBQ0Usa0JBQVEsTUFEVjtBQUVFLGNBQUksRUFBQyxNQUZQO0FBR0UsWUFBRSxFQUFDLE9BSEw7QUFJRSxjQUFJLEVBQUMsT0FKUDtBQUtFLGtCQUFRLEVBQUVOO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQVlFO0FBQU8sZUFBTyxFQUFDLE1BQWY7QUFBQSx3Q0FFRTtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsWUFBRSxFQUFDLE1BRkw7QUFHRSxjQUFJLEVBQUMsTUFIUDtBQUlFLHFCQUFXLEVBQUMsTUFKZDtBQUtFLGVBQUssRUFBRUQsTUFBTSxDQUFDSCxJQUxoQjtBQU1FLGtCQUFRLEVBQUVJO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRixlQXdCRTtBQUFPLGVBQU8sRUFBQyxPQUFmO0FBQUEseUNBRUU7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLFlBQUUsRUFBQyxPQUZMO0FBR0UsY0FBSSxFQUFDLE9BSFA7QUFJRSxxQkFBVyxFQUFDLE9BSmQ7QUFLRSxlQUFLLEVBQUVELE1BQU0sQ0FBQ0YsS0FMaEI7QUFNRSxrQkFBUSxFQUFFRztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJGLGVBb0NFO0FBQU8sZUFBTyxFQUFDLGFBQWY7QUFBQSwrQ0FFRTtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsWUFBRSxFQUFDLGFBRkw7QUFHRSxjQUFJLEVBQUMsYUFIUDtBQUlFLHFCQUFXLEVBQUMsYUFKZDtBQUtFLGVBQUssRUFBRUQsTUFBTSxDQUFDRCxXQUxoQjtBQU1FLGtCQUFRLEVBQUVFO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQ0YsZUFnREU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQStERDs7R0E5RXVCUCxhO1VBQ2lDQyxvRCxFQU9MUywwRDs7O0tBUjVCVixhIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSdcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL3N0eWxlcy9Gb3JtJ1xuXG5jb25zdCBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04oXG4gICAgI3ZhcmlhYmxlcyBhbmQgdHlwZXMgc2hvdWxkIGJlIGRlZmluZWQgaGVyZVxuICAgICRuYW1lOiBTdHJpbmchXG4gICAgJGRlc2NyaXB0aW9uOiBTdHJpbmchXG4gICAgJHByaWNlOiBJbnQhXG4gICAgJGltYWdlOiBVcGxvYWRcbiAgKSB7XG4gICAgY3JlYXRlUHJvZHVjdChcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogJG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvblxuICAgICAgICBwcmljZTogJHByaWNlXG4gICAgICAgIHN0YXR1czogXCJBVkFJTEFCTEVcIlxuICAgICAgICBwaG90bzoge1xuICAgICAgICAgIGNyZWF0ZToge2ltYWdlOiAkaW1hZ2UsIGFsdFRleHQ6ICRuYW1lIH19XG4gICAgICB9XG4gICAgKSB7XG4gICAgICBpZCBcbiAgICAgIHByaWNlIFxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIG5hbWVcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVByb2R1Y3QoKSB7XG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcbiAgICBpbWFnZTogJycsXG4gICAgbmFtZTogXCJIb3QgdGF0ZXJzXCIsXG4gICAgcHJpY2U6IDEyMzQsXG4gICAgZGVzY3JpcHRpb246IFwiUmF0Y2hldCBidXQgY291dHVycnJyXCJcbiAgfSk7XG5cbiAgY29uc3QgW2NyZWF0ZVByb2R1Y3QsIHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfV0gPSB1c2VNdXRhdGlvbihcbiAgICBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTiwgXG4gICAge1xuICAgICAgdmFyaWFibGVzOiBpbnB1dHMsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coY3JlYXRlUHJvZHVjdClcblxuICByZXR1cm4gKFxuXG4gICAgPEZvcm0gb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zb2xlLmxvZyhpbnB1dHMpO1xuICAgICAgLy8gc3VibWl0IGlucHV0IGZpZWxkcyB0byB0aGUgYmFja2VuZFxuICAgICAgYXdhaXQgY3JlYXRlUHJvZHVjdCgpOyAvL2RhdGEgZnJvbSB0aGUgZGVzdHJ1Y3R1cmVkIHVzZU11dGF0aW9uIGFib3ZlXG4gICAgICBjbGVhckZvcm0oKTtcbiAgICB9fT5cblxuICAgICAgPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9Lz5cbiAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17bG9hZGluZ30gYXJpYS1idXN5PXtsb2FkaW5nfT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5cbiAgICAgICAgICBJbWFnZVxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiIFxuICAgICAgICAgICAgaWQ9XCJpbWFnZVwiIFxuICAgICAgICAgICAgbmFtZT1cImltYWdlXCIgXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cbiAgICAgICAgICBOYW1lXG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgIGlkPVwibmFtZVwiIFxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIiBcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiIFxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiPlxuICAgICAgICAgIFByaWNlXG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxuICAgICAgICAgICAgaWQ9XCJwcmljZVwiIFxuICAgICAgICAgICAgbmFtZT1cInByaWNlXCIgXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByaWNlXCIgXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnByaWNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIiBcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiIFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIFxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPiArIEFkZCBQcm9kdWN0PC9idXR0b24+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvRm9ybT5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CreateProduct.js\n");

/***/ })

})