webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo */ "./components/Logo.js");
/* harmony import */ var react_mailchimp_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-mailchimp-form */ "./node_modules/react-mailchimp-form/dist/index.js");
/* harmony import */ var react_mailchimp_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_mailchimp_form__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Sites\\idlehoursco\\frontend\\frontend_V1\\likeminds\\web\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      modifier = _useState[0],
      setModifier = _useState[1];

  var showSignUp = function showSignUp() {
    setModifier('is-visible');
  };

  var hideSignUp = function hideSignUp(_ref) {
    var target = _ref.target;

    if (!target.closest('.js-signup')) {
      setModifier('');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.querySelector('.js-signup input').focus();

    if (modifier === 'is-visible') {
      document.querySelector('.js-layout').addEventListener('click', hideSignUp);
    } else {
      document.querySelector('.js-signup').removeEventListener('click', hideSignUp);
    }
  });
  return __jsx("div", {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "header__info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    classes: "no-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 12
    }
  }), " is a company built around the principles of freetime. The art of doing nothing and the delight of boredom."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    classes: "no-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 12
    }
  }), " calls for ", __jsx("span", {
    className: "animate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 49
    }
  }, "Group Connectivity."), " ", __jsx("button", {
    onClick: showSignUp,
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 102
    }
  }, "Sign Up"), " for announcements."), __jsx("div", {
    className: "header__signup js-signup ".concat(modifier),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "headerSignup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "STAY TUNED"), __jsx(react_mailchimp_form__WEBPACK_IMPORTED_MODULE_2___default.a, {
    action: "https://camp.us19.list-manage.com/subscribe/post?u=358143694606dde15fb491f0b&id=c06b53b3db",
    fields: [{
      name: 'EMAIL',
      placeholder: 'Email Address…',
      type: 'email',
      required: true
    }],
    messages: {
      sending: 'Sending...',
      success: 'We thank you!',
      error: 'An unexpected internal error has occurred.',
      empty: 'Please give us your e-mail address.',
      duplicate: 'Too many subscribe attempts for this email address',
      button: 'Sign Up'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "header__button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://idlehours.substack.com",
    target: "_blank",
    Archive: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, ".")), __jsx("nav", {
    className: "header__socials",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://instagram.com/idlehoursco",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "instagram"), __jsx("a", {
    href: "mailto:info@idlehours.co",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, "email")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.76cf932b1970df238817.hot-update.js.map