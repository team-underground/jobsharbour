(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ContactUs.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ContactUs.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/tuis/Heading */ "./resources/js/Shared/tuis/Heading.vue");
/* harmony import */ var _Shared_tuis_MailTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/tuis/MailTo */ "./resources/js/Shared/tuis/MailTo.vue");
/* harmony import */ var _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/tuis/Card */ "./resources/js/Shared/tuis/Card.vue");
//
//
//
//
//
//
//
//
//
//
var MailtoUI = __webpack_require__(/*! mailtoui/dist/mailtoui-min.js */ "./node_modules/mailtoui/dist/mailtoui-min.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Heading: _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_0__["default"],
    MailTo: _Shared_tuis_MailTo__WEBPACK_IMPORTED_MODULE_1__["default"],
    Card: _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    MailtoUI.run();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ForEmployers.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ForEmployers.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_toggle_switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-toggle-switch */ "./node_modules/vuejs-toggle-switch/dist/ToggleSwitch.common.js");
/* harmony import */ var vuejs_toggle_switch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuejs_toggle_switch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/tuis/Heading */ "./resources/js/Shared/tuis/Heading.vue");
/* harmony import */ var _Shared_tuis_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/tuis/Icon */ "./resources/js/Shared/tuis/Icon.vue");
/* harmony import */ var _Shared_tuis_LinkTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/tuis/LinkTo */ "./resources/js/Shared/tuis/LinkTo.vue");
/* harmony import */ var _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/tuis/Card */ "./resources/js/Shared/tuis/Card.vue");
/* harmony import */ var _Shared_tuis_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/tuis/List */ "./resources/js/Shared/tuis/List.vue");
/* harmony import */ var _Shared_tuis_LoadingButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Shared/tuis/LoadingButton */ "./resources/js/Shared/tuis/LoadingButton.vue");
/* harmony import */ var _Shared_tuis_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Shared/tuis/Alert */ "./resources/js/Shared/tuis/Alert.vue");
/* harmony import */ var _Pages_ContactUs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Pages/ContactUs */ "./resources/js/Pages/ContactUs.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
    Heading: _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_2__["default"],
    Icon: _Shared_tuis_Icon__WEBPACK_IMPORTED_MODULE_3__["default"],
    LinkTo: _Shared_tuis_LinkTo__WEBPACK_IMPORTED_MODULE_4__["default"],
    Card: _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_5__["default"],
    List: _Shared_tuis_List__WEBPACK_IMPORTED_MODULE_6__["default"],
    ToggleSwitch: vuejs_toggle_switch__WEBPACK_IMPORTED_MODULE_0___default.a,
    LoadingButton: _Shared_tuis_LoadingButton__WEBPACK_IMPORTED_MODULE_7__["default"],
    Alert: _Shared_tuis_Alert__WEBPACK_IMPORTED_MODULE_8__["default"],
    ContactUs: _Pages_ContactUs__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  props: {
    pricing: Object
  },
  data: function data() {
    return {
      plan: "Company",
      myOptions: {
        layout: {
          color: "#666666",
          backgroundColor: "#ffffff",
          selectedColor: "white",
          selectedBackgroundColor: "#29a9c9",
          borderColor: "transparent",
          fontFamily: "Inter",
          fontWeight: "bold",
          fontWeightSelected: "bold",
          squareCorners: false,
          noBorder: true
        },
        size: {
          fontSize: 1,
          height: 3.2,
          padding: 0.7,
          width: 20
        },
        items: {
          delay: 0.4,
          preSelected: "Company",
          disabled: false,
          labels: [{
            name: "Company"
          }, {
            name: "Recruiting Firm"
          }]
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/List.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/List.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "List",
  props: {
    theme: {
      type: String,
      "default": "ul"
    },
    lists: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    unorderedListColor: {
      type: String
    }
  },
  computed: {
    classes: function classes() {
      return [{
        "list-none list-style-ul": this.theme === "ul"
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/MailTo.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/MailTo.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    to: {
      type: String,
      "default": "hello@jobsharbour.com"
    },
    subject: {
      type: String,
      "default": "Subject goes here"
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ForEmployers.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ForEmployers.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toggle-switch {\n  background-color: #ffffff;\n  display: flex;\n  height: 3.8rem !important;\n  padding-left: 6px !important;\n  padding-right: 6px !important;\n  align-items: center;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);\n}\n.toggle-switch,\n.toggle-switch li:first-child label,\n.toggle-switch li:last-child label {\n  border-radius: 1000px !important;\n}\n.skew_aa {\n  transform: skew(0deg, -20deg);\n  transform-origin: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/List.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/List.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .list-style-one::before {\n\tcontent: \"\";\n\twidth: 8px;\n\theight: 8px;\n\tbackground-color: blue;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tborder-radius: 50%;\n} */\n.list-style-ul:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ForEmployers.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ForEmployers.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ForEmployers.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ForEmployers.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/List.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/List.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/List.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ContactUs.vue?vue&type=template&id=5b442885&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ContactUs.vue?vue&type=template&id=5b442885& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "max-w-4xl mx-auto" },
    [
      _c(
        "heading",
        { staticClass: "text-center mt-10" },
        [
          _vm._v("\n\t\tQuestions? Drop us an email at\n\t\t"),
          _c(
            "mail-to",
            {
              attrs: {
                subject: "Find any difficulty?",
                to: "hello@jobsharbour.com"
              }
            },
            [_vm._v("hello@jobsharbour.com")]
          ),
          _vm._v(".\n\t\t"),
          _c("br"),
          _vm._v("We usually get back within 24 hours.\n\t")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ForEmployers.vue?vue&type=template&id=41156cf8&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ForEmployers.vue?vue&type=template&id=41156cf8& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("layout", [
    _c(
      "div",
      {
        staticClass: "bg-blue-200 px-4 py-10 md:py-20 relative overflow-hidden"
      },
      [
        _c(
          "div",
          { staticClass: "max-w-2xl mx-auto text-center relative z-10" },
          [
            _c("heading", { staticClass: "mb-4", attrs: { size: "display" } }, [
              _vm._v("Hello Employers")
            ]),
            _vm._v(" "),
            _c("heading", { staticClass: "mb-1 text-blue-800 md:text-xl" }, [
              _vm._v(
                "Still struggling to communicate with job seekers? Your quest is over. Here we come with the best platform where you can showcase your job lists, communicate with a mass of potential candidates in no time and also pick up the best out of them."
              )
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "hidden md:block" }, [
          _c("div", {
            staticClass:
              "-mb-10 h-16 w-32 bg-blue-300 absolute left-0 bottom-0 skew_aa"
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "mb-6 h-12 w-48 bg-gray-200 absolute left-0 bottom-0 ml-10 skew_aa"
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "-mb-16 h-20 w-32 bg-orange-200 absolute left-0 bottom-0 ml-16 skew_aa"
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "mb-6 h-16 w-32 bg-blue-300 absolute right-0 bottom-0 skew_aa"
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "mb-6 h-12 w-48 bg-gray-200 absolute right-0 bottom-0 mr-10 skew_aa"
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "-mb-16 h-20 w-32 bg-orange-200 absolute right-0 bottom-0 mr-16 skew_aa"
          })
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "py-10 px-4" },
      [
        _c(
          "div",
          { staticClass: "max-w-2xl mx-auto" },
          [
            _c(
              "div",
              { staticClass: "mb-8 text-center" },
              [
                _c(
                  "heading",
                  { staticClass: "mb-4", attrs: { size: "heading2" } },
                  [_vm._v("Simple. Fair Pricing")]
                ),
                _vm._v(" "),
                _c("toggle-switch", {
                  attrs: { options: _vm.myOptions },
                  model: {
                    value: _vm.plan,
                    callback: function($$v) {
                      _vm.plan = $$v
                    },
                    expression: "plan"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _vm.plan === "Company"
              ? _c("alert", { staticClass: "mb-10" }, [
                  _vm._v("\n\t\t\t\tAs\n\t\t\t\t"),
                  _c("strong", [_vm._v("Company")]),
                  _vm._v(
                    " we refer to an individual organization HR/Admin registering in our portal for job posting.\n\t\t\t"
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.plan === "Recruiting Firm"
              ? _c("alert", { staticClass: "mb-10" }, [
                  _vm._v("\n\t\t\t\tAs\n\t\t\t\t"),
                  _c("strong", [_vm._v("Recruiting Firm")]),
                  _vm._v(
                    " we refer to a consultancy HR/Representative registering in our portal for job posting for the concerned company.\n\t\t\t"
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.plan === "Company"
              ? _c("div", { staticClass: "md:flex -mx-4" }, [
                  _c(
                    "div",
                    { staticClass: "md:w-1/2 px-4 flex" },
                    [
                      _c(
                        "card",
                        { staticClass: "mb-8 shadow-md flex-1 relative" },
                        [
                          _c(
                            "heading",
                            {
                              staticClass: "mb-2 text-blue-600 text-center",
                              attrs: { size: "large" }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.pricing["company-basic"].display_name
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "heading",
                            {
                              staticClass: "mb-5 text-center",
                              attrs: { size: "heading" }
                            },
                            [_vm._v("Free Forever")]
                          ),
                          _vm._v(" "),
                          _c("list", {
                            attrs: {
                              lists: [
                                "Add 1 company",
                                "Unlimited job posts",
                                "Email Support",
                                "Analytics",
                                "Basic Promotion"
                              ],
                              unorderedListColor: "text-blue-400"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "mt-5 md:mt-0 relative md:absolute left-0 right-0 block bottom-0 mx-8 mb-6"
                            },
                            [
                              _c(
                                "loading-button",
                                {
                                  staticClass: "w-full",
                                  attrs: { size: "small", rounded: "large" }
                                },
                                [_vm._v("Try for Free, Forever")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "md:w-1/2 px-4 flex" },
                    [
                      _c(
                        "card",
                        { staticClass: "mb-8 shadow-md flex-1" },
                        [
                          _c(
                            "heading",
                            {
                              staticClass: "mb-2 text-orange-600 text-center",
                              attrs: { size: "large" }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.pricing["company-pro"].display_name)
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "heading",
                            {
                              staticClass: "mb-5 text-center",
                              attrs: { size: "heading" }
                            },
                            [
                              _vm._v(
                                "Rs. " +
                                  _vm._s(
                                    _vm.pricing["company-pro"].package_price
                                  ) +
                                  " /month"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("list", {
                            attrs: {
                              lists: [
                                "Add 1 company",
                                "Unlimited job posts",
                                "Email Support",
                                "Analytics",
                                "Advance Promotion",
                                "Ads on Social Sites",
                                "Many more..."
                              ],
                              unorderedListColor: "text-orange-400"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "loading-button",
                            {
                              staticClass: "mt-5 w-full opacity-50",
                              attrs: {
                                variant: "warning",
                                size: "small",
                                rounded: "large"
                              }
                            },
                            [_vm._v("Coming Soon")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.plan === "Recruiting Firm"
              ? _c("div", { staticClass: "md:flex -mx-4" }, [
                  _c(
                    "div",
                    { staticClass: "md:w-1/2 px-4 flex" },
                    [
                      _c(
                        "card",
                        { staticClass: "mb-8 shadow-md flex-1 relative" },
                        [
                          _c(
                            "heading",
                            {
                              staticClass: "mb-2 text-blue-600 text-center",
                              attrs: { size: "large" }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.pricing["consultancy-basic"].display_name
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "heading",
                            {
                              staticClass: "mb-5 text-center",
                              attrs: { size: "heading" }
                            },
                            [_vm._v("Free Forever")]
                          ),
                          _vm._v(" "),
                          _c("list", {
                            attrs: {
                              lists: [
                                "Add 5 company",
                                "Unlimited job posts",
                                "Email Support",
                                "Analytics",
                                "Basic Promotion"
                              ],
                              unorderedListColor: "text-blue-400"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "mt-5 md:mt-0 relative md:absolute left-0 right-0 block bottom-0 mx-8 mb-6"
                            },
                            [
                              _c(
                                "loading-button",
                                {
                                  staticClass: "w-full",
                                  attrs: { size: "small", rounded: "large" }
                                },
                                [_vm._v("Try for Free, Forever")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "md:w-1/2 px-4 flex" },
                    [
                      _c(
                        "card",
                        { staticClass: "mb-8 shadow-md flex-1" },
                        [
                          _c(
                            "heading",
                            {
                              staticClass: "mb-2 text-orange-600 text-center",
                              attrs: { size: "large" }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.pricing["consultancy-pro"].display_name
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "heading",
                            {
                              staticClass: "mb-5 text-center",
                              attrs: { size: "heading" }
                            },
                            [
                              _vm._v(
                                "Rs. " +
                                  _vm._s(
                                    _vm.pricing["consultancy-pro"].package_price
                                  ) +
                                  " /month"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("list", {
                            attrs: {
                              lists: [
                                "Add unlimited company",
                                "Unlimited job posts",
                                "Email Support",
                                "Analytics",
                                "Advance Promotion",
                                "Ads on Social Sites",
                                "Many more..."
                              ],
                              unorderedListColor: "text-orange-400"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "loading-button",
                            {
                              staticClass: "mt-5 w-full opacity-50",
                              attrs: {
                                variant: "warning",
                                size: "small",
                                rounded: "large"
                              }
                            },
                            [_vm._v("Coming Soon")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c("contact-us")
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/List.vue?vue&type=template&id=1af63754&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/List.vue?vue&type=template&id=1af63754& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    _vm.theme,
    { tag: "component" },
    _vm._l(_vm.lists, function(list, listIdx) {
      return _c(
        "li",
        { key: listIdx, staticClass: "flex", class: _vm.classes },
        [
          _vm.theme === "ul"
            ? _c("div", { staticClass: "w-10" }, [
                _c(
                  "svg",
                  {
                    staticClass: "fill-current",
                    class: _vm.unorderedListColor,
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M10.001,16.413l-3.713-3.705 L7.7,11.292l2.299,2.295l5.294-5.294l1.414,1.414L10.001,16.413z"
                      }
                    })
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", {
            staticClass: "flex-1",
            domProps: { innerHTML: _vm._s(list) }
          })
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/MailTo.vue?vue&type=template&id=415b104a&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/MailTo.vue?vue&type=template&id=415b104a& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    {
      staticClass:
        "mailtoui inline-flex text-blue-600 border-b-2 border-blue-200 hover:text-blue-700 hover:border-blue-400",
      attrs: { href: "mailto:" + _vm.to + "?subject=" + (_vm.subject || "") }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/ContactUs.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/ContactUs.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactUs_vue_vue_type_template_id_5b442885___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=template&id=5b442885& */ "./resources/js/Pages/ContactUs.vue?vue&type=template&id=5b442885&");
/* harmony import */ var _ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=script&lang=js& */ "./resources/js/Pages/ContactUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactUs_vue_vue_type_template_id_5b442885___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactUs_vue_vue_type_template_id_5b442885___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/ContactUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/ContactUs.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/ContactUs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ContactUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ContactUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/ContactUs.vue?vue&type=template&id=5b442885&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/ContactUs.vue?vue&type=template&id=5b442885& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_5b442885___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ContactUs.vue?vue&type=template&id=5b442885& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ContactUs.vue?vue&type=template&id=5b442885&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_5b442885___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_5b442885___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/ForEmployers.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/ForEmployers.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForEmployers_vue_vue_type_template_id_41156cf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForEmployers.vue?vue&type=template&id=41156cf8& */ "./resources/js/Pages/ForEmployers.vue?vue&type=template&id=41156cf8&");
/* harmony import */ var _ForEmployers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForEmployers.vue?vue&type=script&lang=js& */ "./resources/js/Pages/ForEmployers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ForEmployers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForEmployers.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Pages/ForEmployers.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ForEmployers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForEmployers_vue_vue_type_template_id_41156cf8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForEmployers_vue_vue_type_template_id_41156cf8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/ForEmployers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/ForEmployers.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/ForEmployers.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForEmployers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ForEmployers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ForEmployers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForEmployers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/ForEmployers.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/ForEmployers.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForEmployers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ForEmployers.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ForEmployers.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForEmployers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForEmployers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForEmployers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForEmployers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForEmployers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/ForEmployers.vue?vue&type=template&id=41156cf8&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/ForEmployers.vue?vue&type=template&id=41156cf8& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForEmployers_vue_vue_type_template_id_41156cf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ForEmployers.vue?vue&type=template&id=41156cf8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ForEmployers.vue?vue&type=template&id=41156cf8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForEmployers_vue_vue_type_template_id_41156cf8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForEmployers_vue_vue_type_template_id_41156cf8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/tuis/List.vue":
/*!*******************************************!*\
  !*** ./resources/js/Shared/tuis/List.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_1af63754___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=1af63754& */ "./resources/js/Shared/tuis/List.vue?vue&type=template&id=1af63754&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/Shared/tuis/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _List_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Shared/tuis/List.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_1af63754___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_1af63754___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/tuis/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/tuis/List.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Shared/tuis/List.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/tuis/List.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/tuis/List.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/List.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Shared/tuis/List.vue?vue&type=template&id=1af63754&":
/*!**************************************************************************!*\
  !*** ./resources/js/Shared/tuis/List.vue?vue&type=template&id=1af63754& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_1af63754___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=1af63754& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/List.vue?vue&type=template&id=1af63754&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_1af63754___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_1af63754___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/tuis/MailTo.vue":
/*!*********************************************!*\
  !*** ./resources/js/Shared/tuis/MailTo.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MailTo_vue_vue_type_template_id_415b104a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MailTo.vue?vue&type=template&id=415b104a& */ "./resources/js/Shared/tuis/MailTo.vue?vue&type=template&id=415b104a&");
/* harmony import */ var _MailTo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MailTo.vue?vue&type=script&lang=js& */ "./resources/js/Shared/tuis/MailTo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MailTo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MailTo_vue_vue_type_template_id_415b104a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MailTo_vue_vue_type_template_id_415b104a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/tuis/MailTo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/tuis/MailTo.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/tuis/MailTo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MailTo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MailTo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/MailTo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MailTo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/tuis/MailTo.vue?vue&type=template&id=415b104a&":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/tuis/MailTo.vue?vue&type=template&id=415b104a& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailTo_vue_vue_type_template_id_415b104a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MailTo.vue?vue&type=template&id=415b104a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/MailTo.vue?vue&type=template&id=415b104a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailTo_vue_vue_type_template_id_415b104a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailTo_vue_vue_type_template_id_415b104a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);