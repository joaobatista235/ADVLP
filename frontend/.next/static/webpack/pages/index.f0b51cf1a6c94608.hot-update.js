"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProductModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ProductModal */ \"./components/ProductModal.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst products = [\n    {\n        name: \"Cherry Delight\",\n        id: \"#KP287400\",\n        price: \"$90.50\",\n        stock: \"350 pcs\",\n        type: \"Dessert\",\n        status: \"Pending\"\n    },\n    {\n        name: \"Kiwi\",\n        id: \"#TL651535\",\n        price: \"$12.00\",\n        stock: \"650 kg\",\n        type: \"Fruits\",\n        status: \"Active\"\n    },\n    {\n        name: \"Mango Magic\",\n        id: \"#GB51535\",\n        price: \"$100.50\",\n        stock: \"1200 pcs\",\n        type: \"Ice Cream\",\n        status: \"Inactive\"\n    },\n    {\n        name: \"Joy Care\",\n        id: \"#ER651535\",\n        price: \"$59.99\",\n        stock: \"700 pcs\",\n        type: \"Care\",\n        status: \"On Sale\"\n    },\n    {\n        name: \"Blueberry Bliss\",\n        id: \"#SO487441\",\n        price: \"$150.90\",\n        stock: \"100 lt\",\n        type: \"Dessert\",\n        status: \"Bouncing\"\n    },\n    {\n        name: \"Watermelon\",\n        id: \"#TL49003\",\n        price: \"$10.99\",\n        stock: \"23 lt\",\n        type: \"Juice\",\n        status: \"Pending\"\n    },\n    {\n        name: \"Trilogy\",\n        id: \"#KP651535\",\n        price: \"$130.00\",\n        stock: \"3000 pcs\",\n        type: \"Oil\",\n        status: \"Active\"\n    },\n    {\n        name: \"Dryskin\",\n        id: \"#GB49003\",\n        price: \"$40.70\",\n        stock: \"400 pcs\",\n        type: \"Ice Cream\",\n        status: \"Inactive\"\n    },\n    {\n        name: \"Olive Oil\",\n        id: \"#SD46903\",\n        price: \"$35.50\",\n        stock: \"200 lt\",\n        type: \"Oil\",\n        status: \"On Sale\"\n    },\n    {\n        name: \"Citrus Brust\",\n        id: \"#ER58612\",\n        price: \"$9.99\",\n        stock: \"1200 pcs\",\n        type: \"Flowers\",\n        status: \"Bouncing\"\n    },\n    {\n        name: \"Citrus Brust\",\n        id: \"#ER58612\",\n        price: \"$9.99\",\n        stock: \"1200 pcs\",\n        type: \"Flowers\",\n        status: \"Bouncing\"\n    },\n    {\n        name: \"Citrus Brust\",\n        id: \"#ER58612\",\n        price: \"$9.99\",\n        stock: \"1200 pcs\",\n        type: \"Flowers\",\n        status: \"Bouncing\"\n    },\n    {\n        name: \"Citrus Brust\",\n        id: \"#ER58612\",\n        price: \"$9.99\",\n        stock: \"1200 pcs\",\n        type: \"Flowers\",\n        status: \"Bouncing\"\n    },\n    {\n        name: \"Citrus Brust\",\n        id: \"#ER58612\",\n        price: \"$9.99\",\n        stock: \"1200 pcs\",\n        type: \"Flowers\",\n        status: \"Bouncing\"\n    },\n    {\n        name: \"Citrus Brust\",\n        id: \"#ER58612\",\n        price: \"$9.99\",\n        stock: \"1200 pcs\",\n        type: \"Flowers\",\n        status: \"Bouncing\"\n    },\n    {\n        name: \"Citrus Brust\",\n        id: \"#ER58612\",\n        price: \"$9.99\",\n        stock: \"1200 pcs\",\n        type: \"Flowers\",\n        status: \"Bouncing\"\n    },\n    {\n        name: \"Citrus Brust\",\n        id: \"#ER58612\",\n        price: \"$9.99\",\n        stock: \"1200 pcs\",\n        type: \"Flowers\",\n        status: \"Bouncing\"\n    },\n    {\n        name: \"Citrus Brust\",\n        id: \"#ER58612\",\n        price: \"$9.99\",\n        stock: \"1200 pcs\",\n        type: \"Flowers\",\n        status: \"Bouncing\"\n    },\n    {\n        name: \"Citrus Brust\",\n        id: \"#ER58612\",\n        price: \"$9.99\",\n        stock: \"1200 pcs\",\n        type: \"Flowers\",\n        status: \"Bouncing\"\n    },\n    {\n        name: \"Citrus Brust\",\n        id: \"#ER58612\",\n        price: \"$9.99\",\n        stock: \"1200 pcs\",\n        type: \"Flowers\",\n        status: \"Bouncing\"\n    },\n    {\n        name: \"Citrus Brust\",\n        id: \"#ER58612\",\n        price: \"$9.99\",\n        stock: \"1200 pcs\",\n        type: \"Flowers\",\n        status: \"Bouncing\"\n    },\n    {\n        name: \"Citrus Brust\",\n        id: \"#ER58612\",\n        price: \"$9.99\",\n        stock: \"1200 pcs\",\n        type: \"Flowers\",\n        status: \"Bouncing\"\n    },\n    {\n        name: \"Citrus Brust\",\n        id: \"#ER58612\",\n        price: \"$9.99\",\n        stock: \"1200 pcs\",\n        type: \"Flowers\",\n        status: \"Bouncing\"\n    },\n    {\n        name: \"Citrus Brust\",\n        id: \"#ER58612\",\n        price: \"$9.99\",\n        stock: \"1200 pcs\",\n        type: \"Flowers\",\n        status: \"Bouncing\"\n    },\n    {\n        name: \"Citrus Brust\",\n        id: \"#ER58612\",\n        price: \"$9.99\",\n        stock: \"1200 pcs\",\n        type: \"Flowers\",\n        status: \"Bouncing\"\n    },\n    {\n        name: \"Citrus Brust\",\n        id: \"#ER58612\",\n        price: \"$9.99\",\n        stock: \"1200 pcs\",\n        type: \"Flowers\",\n        status: \"Bouncing\"\n    }\n];\nconst getStatusStyle = (status)=>{\n    switch(status){\n        case \"1\":\n            return \"bg-green-200 text-green-700\";\n        case \"2\":\n            return \"bg-red-200 text-red-700\";\n        default:\n            return \"\";\n    }\n};\nfunction Home() {\n    _s();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const itemsPerPage = 10; // Ajustado para 5 itens\n    const totalPages = Math.ceil(products.length / itemsPerPage);\n    const [isModalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const displayedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);\n    const { data: clients, isLoading: clientsLoading } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)({\n        queryKey: [\n            \"list-users\"\n        ],\n        queryFn: async ()=>{\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://127.0.0.7:8091/restapi/clientes/listar\", {\n                headers: {\n                    Authorization: \"Basic YWRtaW46IA==\"\n                }\n            });\n            return data;\n        }\n    });\n    console.log(clients);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-6 bg-white rounded-xl shadow-sm h-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center mb-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-semibold\",\n                            children: \"Clientes\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Fatec\\\\aula\\\\ADVLP\\\\frontend\\\\pages\\\\index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setModalOpen(true),\n                            className: \"bg-blue-500 text-white px-4 py-2 rounded-md\",\n                            children: \"Adicionar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Fatec\\\\aula\\\\ADVLP\\\\frontend\\\\pages\\\\index.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Fatec\\\\aula\\\\ADVLP\\\\frontend\\\\pages\\\\index.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    open: isModalOpen,\n                    handleClose: ()=>setModalOpen(false)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Fatec\\\\aula\\\\ADVLP\\\\frontend\\\\pages\\\\index.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white shadow-md rounded-lg overflow-hidden\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Fatec\\\\aula\\\\ADVLP\\\\frontend\\\\pages\\\\index.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-6 flex justify-between items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            disabled: currentPage === 1,\n                            onClick: ()=>setCurrentPage(currentPage - 1),\n                            className: \"px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50\",\n                            children: \"Previous\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Fatec\\\\aula\\\\ADVLP\\\\frontend\\\\pages\\\\index.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-sm\",\n                            children: [\n                                \"Page \",\n                                currentPage,\n                                \" of \",\n                                totalPages\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Fatec\\\\aula\\\\ADVLP\\\\frontend\\\\pages\\\\index.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            disabled: currentPage === totalPages,\n                            onClick: ()=>setCurrentPage(currentPage + 1),\n                            className: \"px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50\",\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Fatec\\\\aula\\\\ADVLP\\\\frontend\\\\pages\\\\index.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Fatec\\\\aula\\\\ADVLP\\\\frontend\\\\pages\\\\index.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Fatec\\\\aula\\\\ADVLP\\\\frontend\\\\pages\\\\index.tsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Fatec\\\\aula\\\\ADVLP\\\\frontend\\\\pages\\\\index.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"knSY+POYbCBCF+dR9JezDh4Ru8M=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFzRTtBQUM1QztBQUNtQztBQUN0QjtBQUd2QyxNQUFNTSxXQUFXO0lBQ2Y7UUFBRUMsTUFBTTtRQUFrQkMsSUFBSTtRQUFhQyxPQUFPO1FBQVVDLE9BQU87UUFBV0MsTUFBTTtRQUFXQyxRQUFRO0lBQVU7SUFDakg7UUFBRUwsTUFBTTtRQUFRQyxJQUFJO1FBQWFDLE9BQU87UUFBVUMsT0FBTztRQUFVQyxNQUFNO1FBQVVDLFFBQVE7SUFBUztJQUNwRztRQUFFTCxNQUFNO1FBQWVDLElBQUk7UUFBWUMsT0FBTztRQUFXQyxPQUFPO1FBQVlDLE1BQU07UUFBYUMsUUFBUTtJQUFXO0lBQ2xIO1FBQUVMLE1BQU07UUFBWUMsSUFBSTtRQUFhQyxPQUFPO1FBQVVDLE9BQU87UUFBV0MsTUFBTTtRQUFRQyxRQUFRO0lBQVU7SUFDeEc7UUFBRUwsTUFBTTtRQUFtQkMsSUFBSTtRQUFhQyxPQUFPO1FBQVdDLE9BQU87UUFBVUMsTUFBTTtRQUFXQyxRQUFRO0lBQVc7SUFDbkg7UUFBRUwsTUFBTTtRQUFjQyxJQUFJO1FBQVlDLE9BQU87UUFBVUMsT0FBTztRQUFTQyxNQUFNO1FBQVNDLFFBQVE7SUFBVTtJQUN4RztRQUFFTCxNQUFNO1FBQVdDLElBQUk7UUFBYUMsT0FBTztRQUFXQyxPQUFPO1FBQVlDLE1BQU07UUFBT0MsUUFBUTtJQUFTO0lBQ3ZHO1FBQUVMLE1BQU07UUFBV0MsSUFBSTtRQUFZQyxPQUFPO1FBQVVDLE9BQU87UUFBV0MsTUFBTTtRQUFhQyxRQUFRO0lBQVc7SUFDNUc7UUFBRUwsTUFBTTtRQUFhQyxJQUFJO1FBQVlDLE9BQU87UUFBVUMsT0FBTztRQUFVQyxNQUFNO1FBQU9DLFFBQVE7SUFBVTtJQUN0RztRQUFFTCxNQUFNO1FBQWdCQyxJQUFJO1FBQVlDLE9BQU87UUFBU0MsT0FBTztRQUFZQyxNQUFNO1FBQVdDLFFBQVE7SUFBVztJQUMvRztRQUFFTCxNQUFNO1FBQWdCQyxJQUFJO1FBQVlDLE9BQU87UUFBU0MsT0FBTztRQUFZQyxNQUFNO1FBQVdDLFFBQVE7SUFBVztJQUMvRztRQUFFTCxNQUFNO1FBQWdCQyxJQUFJO1FBQVlDLE9BQU87UUFBU0MsT0FBTztRQUFZQyxNQUFNO1FBQVdDLFFBQVE7SUFBVztJQUMvRztRQUFFTCxNQUFNO1FBQWdCQyxJQUFJO1FBQVlDLE9BQU87UUFBU0MsT0FBTztRQUFZQyxNQUFNO1FBQVdDLFFBQVE7SUFBVztJQUMvRztRQUFFTCxNQUFNO1FBQWdCQyxJQUFJO1FBQVlDLE9BQU87UUFBU0MsT0FBTztRQUFZQyxNQUFNO1FBQVdDLFFBQVE7SUFBVztJQUMvRztRQUFFTCxNQUFNO1FBQWdCQyxJQUFJO1FBQVlDLE9BQU87UUFBU0MsT0FBTztRQUFZQyxNQUFNO1FBQVdDLFFBQVE7SUFBVztJQUMvRztRQUFFTCxNQUFNO1FBQWdCQyxJQUFJO1FBQVlDLE9BQU87UUFBU0MsT0FBTztRQUFZQyxNQUFNO1FBQVdDLFFBQVE7SUFBVztJQUMvRztRQUFFTCxNQUFNO1FBQWdCQyxJQUFJO1FBQVlDLE9BQU87UUFBU0MsT0FBTztRQUFZQyxNQUFNO1FBQVdDLFFBQVE7SUFBVztJQUMvRztRQUFFTCxNQUFNO1FBQWdCQyxJQUFJO1FBQVlDLE9BQU87UUFBU0MsT0FBTztRQUFZQyxNQUFNO1FBQVdDLFFBQVE7SUFBVztJQUMvRztRQUFFTCxNQUFNO1FBQWdCQyxJQUFJO1FBQVlDLE9BQU87UUFBU0MsT0FBTztRQUFZQyxNQUFNO1FBQVdDLFFBQVE7SUFBVztJQUMvRztRQUFFTCxNQUFNO1FBQWdCQyxJQUFJO1FBQVlDLE9BQU87UUFBU0MsT0FBTztRQUFZQyxNQUFNO1FBQVdDLFFBQVE7SUFBVztJQUMvRztRQUFFTCxNQUFNO1FBQWdCQyxJQUFJO1FBQVlDLE9BQU87UUFBU0MsT0FBTztRQUFZQyxNQUFNO1FBQVdDLFFBQVE7SUFBVztJQUMvRztRQUFFTCxNQUFNO1FBQWdCQyxJQUFJO1FBQVlDLE9BQU87UUFBU0MsT0FBTztRQUFZQyxNQUFNO1FBQVdDLFFBQVE7SUFBVztJQUMvRztRQUFFTCxNQUFNO1FBQWdCQyxJQUFJO1FBQVlDLE9BQU87UUFBU0MsT0FBTztRQUFZQyxNQUFNO1FBQVdDLFFBQVE7SUFBVztJQUMvRztRQUFFTCxNQUFNO1FBQWdCQyxJQUFJO1FBQVlDLE9BQU87UUFBU0MsT0FBTztRQUFZQyxNQUFNO1FBQVdDLFFBQVE7SUFBVztJQUMvRztRQUFFTCxNQUFNO1FBQWdCQyxJQUFJO1FBQVlDLE9BQU87UUFBU0MsT0FBTztRQUFZQyxNQUFNO1FBQVdDLFFBQVE7SUFBVztJQUMvRztRQUFFTCxNQUFNO1FBQWdCQyxJQUFJO1FBQVlDLE9BQU87UUFBU0MsT0FBTztRQUFZQyxNQUFNO1FBQVdDLFFBQVE7SUFBVztDQUNoSDtBQUVELE1BQU1DLGlCQUFpQixDQUFDRDtJQUN0QixPQUFRQTtRQUNOLEtBQUs7WUFDSCxPQUFPO1FBQ1QsS0FBSztZQUNILE9BQU87UUFDVDtZQUNFLE9BQU87SUFDWDtBQUNGO0FBRWUsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNYSxlQUFlLElBQUksd0JBQXdCO0lBQ2pELE1BQU1DLGFBQWFDLEtBQUtDLElBQUksQ0FBQ2QsU0FBU2UsTUFBTSxHQUFHSjtJQUMvQyxNQUFNLENBQUNLLGFBQWFDLGFBQWEsR0FBR25CLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1vQixvQkFBb0JsQixTQUFTbUIsS0FBSyxDQUN0QyxDQUFDVixjQUFjLEtBQUtFLGNBQ3BCRixjQUFjRTtJQUdoQixNQUFNLEVBQUVTLE1BQU1DLE9BQU8sRUFBRUMsV0FBV0MsY0FBYyxFQUFFLEdBQUd4QixxREFBUUEsQ0FBQztRQUM1RHlCLFVBQVU7WUFBQztTQUFhO1FBQ3hCQyxTQUFTO1lBQ1AsTUFBTSxFQUFFTCxJQUFJLEVBQUUsR0FBRyxNQUFNekIsaURBQVMsQ0FBQyxpREFBaUQ7Z0JBQ2hGZ0MsU0FBUztvQkFDUEMsZUFBZTtnQkFDakI7WUFDRjtZQUVBLE9BQU9SO1FBQ1Q7SUFDRjtJQUVBUyxRQUFRQyxHQUFHLENBQUNUO0lBRVoscUJBQ0UsOERBQUN4QiwyQ0FBUUE7a0JBQ1AsNEVBQUNrQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBR0QsV0FBVTtzQ0FBeUI7Ozs7OztzQ0FDdkMsOERBQUNFOzRCQUNDQyxTQUFTLElBQU1sQixhQUFhOzRCQUM1QmUsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7OzhCQUlMLDhEQUFDdEMsZ0VBQWVBO29CQUFDMEMsTUFBTXBCO29CQUFhcUIsYUFBYSxJQUFNcEIsYUFBYTs7Ozs7OzhCQUVsRSw4REFBQ2M7b0JBQUlDLFdBQVU7Ozs7Ozs4QkFJZiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFDQ0ksVUFBVTdCLGdCQUFnQjs0QkFDMUIwQixTQUFTLElBQU16QixlQUFlRCxjQUFjOzRCQUM1Q3VCLFdBQVU7c0NBQ1g7Ozs7OztzQ0FHRCw4REFBQ0Q7NEJBQUlDLFdBQVU7O2dDQUFVO2dDQUFNdkI7Z0NBQVk7Z0NBQUtHOzs7Ozs7O3NDQUNoRCw4REFBQ3NCOzRCQUNDSSxVQUFVN0IsZ0JBQWdCRzs0QkFDMUJ1QixTQUFTLElBQU16QixlQUFlRCxjQUFjOzRCQUM1Q3VCLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FoRXdCeEI7O1FBVytCVCxpREFBUUE7OztLQVh2Q1MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkZFByb2R1Y3RNb2RhbCwgeyBGb3JtRGF0YSB9IGZyb20gJ0AvY29tcG9uZW50cy9Qcm9kdWN0TW9kYWwnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmNvbnN0IHByb2R1Y3RzID0gW1xyXG4gIHsgbmFtZTogJ0NoZXJyeSBEZWxpZ2h0JywgaWQ6ICcjS1AyODc0MDAnLCBwcmljZTogJyQ5MC41MCcsIHN0b2NrOiAnMzUwIHBjcycsIHR5cGU6ICdEZXNzZXJ0Jywgc3RhdHVzOiAnUGVuZGluZycgfSxcclxuICB7IG5hbWU6ICdLaXdpJywgaWQ6ICcjVEw2NTE1MzUnLCBwcmljZTogJyQxMi4wMCcsIHN0b2NrOiAnNjUwIGtnJywgdHlwZTogJ0ZydWl0cycsIHN0YXR1czogJ0FjdGl2ZScgfSxcclxuICB7IG5hbWU6ICdNYW5nbyBNYWdpYycsIGlkOiAnI0dCNTE1MzUnLCBwcmljZTogJyQxMDAuNTAnLCBzdG9jazogJzEyMDAgcGNzJywgdHlwZTogJ0ljZSBDcmVhbScsIHN0YXR1czogJ0luYWN0aXZlJyB9LFxyXG4gIHsgbmFtZTogJ0pveSBDYXJlJywgaWQ6ICcjRVI2NTE1MzUnLCBwcmljZTogJyQ1OS45OScsIHN0b2NrOiAnNzAwIHBjcycsIHR5cGU6ICdDYXJlJywgc3RhdHVzOiAnT24gU2FsZScgfSxcclxuICB7IG5hbWU6ICdCbHVlYmVycnkgQmxpc3MnLCBpZDogJyNTTzQ4NzQ0MScsIHByaWNlOiAnJDE1MC45MCcsIHN0b2NrOiAnMTAwIGx0JywgdHlwZTogJ0Rlc3NlcnQnLCBzdGF0dXM6ICdCb3VuY2luZycgfSxcclxuICB7IG5hbWU6ICdXYXRlcm1lbG9uJywgaWQ6ICcjVEw0OTAwMycsIHByaWNlOiAnJDEwLjk5Jywgc3RvY2s6ICcyMyBsdCcsIHR5cGU6ICdKdWljZScsIHN0YXR1czogJ1BlbmRpbmcnIH0sXHJcbiAgeyBuYW1lOiAnVHJpbG9neScsIGlkOiAnI0tQNjUxNTM1JywgcHJpY2U6ICckMTMwLjAwJywgc3RvY2s6ICczMDAwIHBjcycsIHR5cGU6ICdPaWwnLCBzdGF0dXM6ICdBY3RpdmUnIH0sXHJcbiAgeyBuYW1lOiAnRHJ5c2tpbicsIGlkOiAnI0dCNDkwMDMnLCBwcmljZTogJyQ0MC43MCcsIHN0b2NrOiAnNDAwIHBjcycsIHR5cGU6ICdJY2UgQ3JlYW0nLCBzdGF0dXM6ICdJbmFjdGl2ZScgfSxcclxuICB7IG5hbWU6ICdPbGl2ZSBPaWwnLCBpZDogJyNTRDQ2OTAzJywgcHJpY2U6ICckMzUuNTAnLCBzdG9jazogJzIwMCBsdCcsIHR5cGU6ICdPaWwnLCBzdGF0dXM6ICdPbiBTYWxlJyB9LFxyXG4gIHsgbmFtZTogJ0NpdHJ1cyBCcnVzdCcsIGlkOiAnI0VSNTg2MTInLCBwcmljZTogJyQ5Ljk5Jywgc3RvY2s6ICcxMjAwIHBjcycsIHR5cGU6ICdGbG93ZXJzJywgc3RhdHVzOiAnQm91bmNpbmcnIH0sXHJcbiAgeyBuYW1lOiAnQ2l0cnVzIEJydXN0JywgaWQ6ICcjRVI1ODYxMicsIHByaWNlOiAnJDkuOTknLCBzdG9jazogJzEyMDAgcGNzJywgdHlwZTogJ0Zsb3dlcnMnLCBzdGF0dXM6ICdCb3VuY2luZycgfSxcclxuICB7IG5hbWU6ICdDaXRydXMgQnJ1c3QnLCBpZDogJyNFUjU4NjEyJywgcHJpY2U6ICckOS45OScsIHN0b2NrOiAnMTIwMCBwY3MnLCB0eXBlOiAnRmxvd2VycycsIHN0YXR1czogJ0JvdW5jaW5nJyB9LFxyXG4gIHsgbmFtZTogJ0NpdHJ1cyBCcnVzdCcsIGlkOiAnI0VSNTg2MTInLCBwcmljZTogJyQ5Ljk5Jywgc3RvY2s6ICcxMjAwIHBjcycsIHR5cGU6ICdGbG93ZXJzJywgc3RhdHVzOiAnQm91bmNpbmcnIH0sXHJcbiAgeyBuYW1lOiAnQ2l0cnVzIEJydXN0JywgaWQ6ICcjRVI1ODYxMicsIHByaWNlOiAnJDkuOTknLCBzdG9jazogJzEyMDAgcGNzJywgdHlwZTogJ0Zsb3dlcnMnLCBzdGF0dXM6ICdCb3VuY2luZycgfSxcclxuICB7IG5hbWU6ICdDaXRydXMgQnJ1c3QnLCBpZDogJyNFUjU4NjEyJywgcHJpY2U6ICckOS45OScsIHN0b2NrOiAnMTIwMCBwY3MnLCB0eXBlOiAnRmxvd2VycycsIHN0YXR1czogJ0JvdW5jaW5nJyB9LFxyXG4gIHsgbmFtZTogJ0NpdHJ1cyBCcnVzdCcsIGlkOiAnI0VSNTg2MTInLCBwcmljZTogJyQ5Ljk5Jywgc3RvY2s6ICcxMjAwIHBjcycsIHR5cGU6ICdGbG93ZXJzJywgc3RhdHVzOiAnQm91bmNpbmcnIH0sXHJcbiAgeyBuYW1lOiAnQ2l0cnVzIEJydXN0JywgaWQ6ICcjRVI1ODYxMicsIHByaWNlOiAnJDkuOTknLCBzdG9jazogJzEyMDAgcGNzJywgdHlwZTogJ0Zsb3dlcnMnLCBzdGF0dXM6ICdCb3VuY2luZycgfSxcclxuICB7IG5hbWU6ICdDaXRydXMgQnJ1c3QnLCBpZDogJyNFUjU4NjEyJywgcHJpY2U6ICckOS45OScsIHN0b2NrOiAnMTIwMCBwY3MnLCB0eXBlOiAnRmxvd2VycycsIHN0YXR1czogJ0JvdW5jaW5nJyB9LFxyXG4gIHsgbmFtZTogJ0NpdHJ1cyBCcnVzdCcsIGlkOiAnI0VSNTg2MTInLCBwcmljZTogJyQ5Ljk5Jywgc3RvY2s6ICcxMjAwIHBjcycsIHR5cGU6ICdGbG93ZXJzJywgc3RhdHVzOiAnQm91bmNpbmcnIH0sXHJcbiAgeyBuYW1lOiAnQ2l0cnVzIEJydXN0JywgaWQ6ICcjRVI1ODYxMicsIHByaWNlOiAnJDkuOTknLCBzdG9jazogJzEyMDAgcGNzJywgdHlwZTogJ0Zsb3dlcnMnLCBzdGF0dXM6ICdCb3VuY2luZycgfSxcclxuICB7IG5hbWU6ICdDaXRydXMgQnJ1c3QnLCBpZDogJyNFUjU4NjEyJywgcHJpY2U6ICckOS45OScsIHN0b2NrOiAnMTIwMCBwY3MnLCB0eXBlOiAnRmxvd2VycycsIHN0YXR1czogJ0JvdW5jaW5nJyB9LFxyXG4gIHsgbmFtZTogJ0NpdHJ1cyBCcnVzdCcsIGlkOiAnI0VSNTg2MTInLCBwcmljZTogJyQ5Ljk5Jywgc3RvY2s6ICcxMjAwIHBjcycsIHR5cGU6ICdGbG93ZXJzJywgc3RhdHVzOiAnQm91bmNpbmcnIH0sXHJcbiAgeyBuYW1lOiAnQ2l0cnVzIEJydXN0JywgaWQ6ICcjRVI1ODYxMicsIHByaWNlOiAnJDkuOTknLCBzdG9jazogJzEyMDAgcGNzJywgdHlwZTogJ0Zsb3dlcnMnLCBzdGF0dXM6ICdCb3VuY2luZycgfSxcclxuICB7IG5hbWU6ICdDaXRydXMgQnJ1c3QnLCBpZDogJyNFUjU4NjEyJywgcHJpY2U6ICckOS45OScsIHN0b2NrOiAnMTIwMCBwY3MnLCB0eXBlOiAnRmxvd2VycycsIHN0YXR1czogJ0JvdW5jaW5nJyB9LFxyXG4gIHsgbmFtZTogJ0NpdHJ1cyBCcnVzdCcsIGlkOiAnI0VSNTg2MTInLCBwcmljZTogJyQ5Ljk5Jywgc3RvY2s6ICcxMjAwIHBjcycsIHR5cGU6ICdGbG93ZXJzJywgc3RhdHVzOiAnQm91bmNpbmcnIH0sXHJcbiAgeyBuYW1lOiAnQ2l0cnVzIEJydXN0JywgaWQ6ICcjRVI1ODYxMicsIHByaWNlOiAnJDkuOTknLCBzdG9jazogJzEyMDAgcGNzJywgdHlwZTogJ0Zsb3dlcnMnLCBzdGF0dXM6ICdCb3VuY2luZycgfSxcclxuXTtcclxuXHJcbmNvbnN0IGdldFN0YXR1c1N0eWxlID0gKHN0YXR1czogc3RyaW5nKSA9PiB7XHJcbiAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgIGNhc2UgJzEnOlxyXG4gICAgICByZXR1cm4gJ2JnLWdyZWVuLTIwMCB0ZXh0LWdyZWVuLTcwMCc7XHJcbiAgICBjYXNlICcyJzpcclxuICAgICAgcmV0dXJuICdiZy1yZWQtMjAwIHRleHQtcmVkLTcwMCc7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IGl0ZW1zUGVyUGFnZSA9IDEwOyAvLyBBanVzdGFkbyBwYXJhIDUgaXRlbnNcclxuICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHByb2R1Y3RzLmxlbmd0aCAvIGl0ZW1zUGVyUGFnZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBkaXNwbGF5ZWRQcm9kdWN0cyA9IHByb2R1Y3RzLnNsaWNlKFxyXG4gICAgKGN1cnJlbnRQYWdlIC0gMSkgKiBpdGVtc1BlclBhZ2UsXHJcbiAgICBjdXJyZW50UGFnZSAqIGl0ZW1zUGVyUGFnZVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YTogY2xpZW50cywgaXNMb2FkaW5nOiBjbGllbnRzTG9hZGluZyB9ID0gdXNlUXVlcnkoe1xyXG4gICAgcXVlcnlLZXk6IFtcImxpc3QtdXNlcnNcIl0sXHJcbiAgICBxdWVyeUZuOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC43OjgwOTEvcmVzdGFwaS9jbGllbnRlcy9saXN0YXInLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0Jhc2ljIFlXUnRhVzQ2SUE9PScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gZGF0YSBhcyBGb3JtRGF0YVtdXHJcbiAgICB9LFxyXG4gIH0pXHJcblxyXG4gIGNvbnNvbGUubG9nKGNsaWVudHMpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IGJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LXNtIGgtZnVsbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTZcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+Q2xpZW50ZXM8L2gxPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGljaW9uYXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8QWRkUHJvZHVjdE1vZGFsIG9wZW49e2lzTW9kYWxPcGVufSBoYW5kbGVDbG9zZT17KCkgPT4gc2V0TW9kYWxPcGVuKGZhbHNlKX0gLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSAxfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSAtIDEpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctZ3JheS0yMDAgcm91bmRlZC1tZCBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+UGFnZSB7Y3VycmVudFBhZ2V9IG9mIHt0b3RhbFBhZ2VzfTwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IHRvdGFsUGFnZXN9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlICsgMSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTIwMCByb3VuZGVkLW1kIGRpc2FibGVkOm9wYWNpdHktNTBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkFkZFByb2R1Y3RNb2RhbCIsImF4aW9zIiwiUmVhY3QiLCJGcmFnbWVudCIsInVzZVN0YXRlIiwidXNlUXVlcnkiLCJwcm9kdWN0cyIsIm5hbWUiLCJpZCIsInByaWNlIiwic3RvY2siLCJ0eXBlIiwic3RhdHVzIiwiZ2V0U3RhdHVzU3R5bGUiLCJIb21lIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsIml0ZW1zUGVyUGFnZSIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsImlzTW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwiZGlzcGxheWVkUHJvZHVjdHMiLCJzbGljZSIsImRhdGEiLCJjbGllbnRzIiwiaXNMb2FkaW5nIiwiY2xpZW50c0xvYWRpbmciLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvcGVuIiwiaGFuZGxlQ2xvc2UiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});