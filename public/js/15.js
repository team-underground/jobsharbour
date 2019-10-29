(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Settings.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout.vue */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Shared_tuis_Heading_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/tuis/Heading.vue */ "./resources/js/Shared/tuis/Heading.vue");
/* harmony import */ var _Shared_tuis_Card_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/tuis/Card.vue */ "./resources/js/Shared/tuis/Card.vue");
/* harmony import */ var _Shared_tuis_ListGroup_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/tuis/ListGroup.vue */ "./resources/js/Shared/tuis/ListGroup.vue");
/* harmony import */ var _Shared_tuis_SwitchInput_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/tuis/SwitchInput.vue */ "./resources/js/Shared/tuis/SwitchInput.vue");
/* harmony import */ var _Shared_tuis_TextInput_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/tuis/TextInput.vue */ "./resources/js/Shared/tuis/TextInput.vue");
/* harmony import */ var _Shared_tuis_LoadingButton_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/tuis/LoadingButton.vue */ "./resources/js/Shared/tuis/LoadingButton.vue");
/* harmony import */ var _Shared_tuis_LinkTo_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Shared/tuis/LinkTo.vue */ "./resources/js/Shared/tuis/LinkTo.vue");
/* harmony import */ var _Shared_tuis_Icon_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Shared/tuis/Icon.vue */ "./resources/js/Shared/tuis/Icon.vue");
/* harmony import */ var _Shared_tuis_Alert_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Shared/tuis/Alert.vue */ "./resources/js/Shared/tuis/Alert.vue");
/* harmony import */ var _Shared_tuis_FlashMessage_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Shared/tuis/FlashMessage.vue */ "./resources/js/Shared/tuis/FlashMessage.vue");
var _components$props$dat;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//











/* harmony default export */ __webpack_exports__["default"] = (_components$props$dat = {
  components: {
    Layout: _Shared_Layout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Heading: _Shared_tuis_Heading_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Card: _Shared_tuis_Card_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ListGroup: _Shared_tuis_ListGroup_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SwitchInput: _Shared_tuis_SwitchInput_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    TextInput: _Shared_tuis_TextInput_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    LoadingButton: _Shared_tuis_LoadingButton_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    LinkTo: _Shared_tuis_LinkTo_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    Icon: _Shared_tuis_Icon_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Alert: _Shared_tuis_Alert_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    FlashMessage: _Shared_tuis_FlashMessage_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  props: ["errors"],
  data: function data() {
    return {
      notification: true,
      user: {
        name: this.$page.auth.user.name,
        email: this.$page.auth.user.email
      },
      resetform: {
        current_password: "",
        password: "",
        password_confirmation: ""
      }
    };
  }
}, _defineProperty(_components$props$dat, "props", ["errors"]), _defineProperty(_components$props$dat, "methods", {
  changePassword: function changePassword() {
    var _this = this;

    this.$refs.changePasswordButton.startLoading();
    this.$inertia.post(this.route("settings.changePassword"), this.resetform).then(function (res) {
      if (Object.keys(_this.$page.errors).length === 0) {
        _this.resetform = {};
      }

      _this.$refs.changePasswordButton.stopLoading();
    })["catch"](function () {});
  },
  updateProfile: function updateProfile() {
    var _this2 = this;

    this.$refs.updateProfileButton.startLoading();
    this.$inertia.post(this.route("settings.updateProfile"), this.user).then(function (res) {
      _this2.$refs.updateProfileButton.stopLoading();
    })["catch"](function () {});
  }
}), _components$props$dat);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/FlashMessage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/FlashMessage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      show: true
    };
  },
  watch: {
    "$page.flash": {
      handler: function handler() {
        this.show = true;
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/ListGroup.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/ListGroup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    action: {
      type: Boolean,
      "default": true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SwitchInput",
  model: {
    prop: "isEnabled",
    event: "toggle"
  },
  props: {
    isEnabled: {
      type: Boolean,
      "default": true
    },
    color: {
      type: String,
      required: false,
      "default": "#4D4D4D"
    }
  },
  methods: {
    toggle: function toggle() {
      this.$emit("toggle", !this.isEnabled);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/ListGroup.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/ListGroup.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group li:last-child {\n  border-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".switch-button-control {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.switch-button-control .switch-button {\n  height: 1.6em;\n  width: calc(1.6em * 2);\n  /* border: 2px solid #ddd; */\n  /* box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.33); */\n  border-radius: 1.6em;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  background: #ddd;\n  box-sizing: border-box;\n}\n.switch-button-control .switch-button .button {\n  height: 1.6em;\n  width: 1.6em;\n  border: 2px solid #ddd;\n  border-radius: 1.6em;\n  background-color: #fff;\n  transition: all 0.3s ease-in-out;\n  box-sizing: border-box;\n}\n.switch-button-control .switch-button.enabled {\n  background-color: var(--color);\n  box-shadow: none;\n}\n.switch-button-control .switch-button.enabled .button {\n  background: white;\n  border: 2px solid var(--color);\n  transform: translateX(calc(calc(1.6em - (2 * 2px)) + (2 * 2px)));\n}\n.switch-button-control .switch-button-label {\n  margin-left: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/ListGroup.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/ListGroup.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListGroup.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/ListGroup.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchInput.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings.vue?vue&type=template&id=29b1b94c&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Settings.vue?vue&type=template&id=29b1b94c& ***!
  \******************************************************************************************************************************************************************************************************/
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
      { staticClass: "bg-white px-4 pt-6 pb-4 relative shadow-sm z-20" },
      [
        _c(
          "div",
          { staticClass: "max-w-6xl mx-auto" },
          [
            _c(
              "link-to",
              { staticClass: "mb-4", attrs: { to: "/dashboard" } },
              [
                _c("icon", {
                  staticClass: "-ml-2",
                  attrs: { name: "chevron-left" }
                }),
                _vm._v("Back to Dashboard\n\t\t\t")
              ],
              1
            ),
            _vm._v(" "),
            _c("heading", { attrs: { size: "heading" } }, [_vm._v("Settings")])
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "px-4 lg:px-6 py-5 md:py-10 bg-gray-100" }, [
      _c(
        "div",
        { staticClass: "max-w-6xl mx-auto" },
        [
          _c("flash-message", { staticClass: "mb-8" }),
          _vm._v(" "),
          _c("div", { staticClass: "md:flex md:flex-wrap mb-10 -mx-4" }, [
            _c(
              "div",
              { staticClass: "md:w-1/3 px-4" },
              [
                _c(
                  "heading",
                  { staticClass: "mb-1", attrs: { size: "large" } },
                  [_vm._v("Personal Details")]
                ),
                _vm._v(" "),
                _c("heading", { staticClass: "mb-4" }, [
                  _vm._v("Edit your name, date of birth and so on.")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "md:w-2/3 px-4" },
              [
                _c(
                  "card",
                  {
                    attrs: { "with-footer": "" },
                    scopedSlots: _vm._u([
                      {
                        key: "footer",
                        fn: function() {
                          return [
                            _c(
                              "loading-button",
                              {
                                ref: "updateProfileButton",
                                on: { click: _vm.updateProfile }
                              },
                              [_vm._v("Update Profile")]
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
                  },
                  [
                    _c("text-input", {
                      staticClass: "mb-4",
                      attrs: { label: "Name", errors: _vm.errors.name },
                      on: {
                        keydown: function($event) {
                          delete _vm.errors.name
                        }
                      },
                      model: {
                        value: _vm.user.name,
                        callback: function($$v) {
                          _vm.$set(_vm.user, "name", $$v)
                        },
                        expression: "user.name"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-2" },
                      [
                        _c("text-input", {
                          attrs: {
                            label: "Email",
                            disabled: "",
                            bordered: false
                          },
                          model: {
                            value: _vm.user.email,
                            callback: function($$v) {
                              _vm.$set(_vm.user, "email", $$v)
                            },
                            expression: "user.email"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "p",
                          { staticClass: "text-sm mb-0 mt-2" },
                          [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\tPlease\n\t\t\t\t\t\t\t\t"
                            ),
                            _c("link-to", { attrs: { to: "#" } }, [
                              _vm._v("contact admin")
                            ]),
                            _vm._v(
                              " to change/update\n\t\t\t\t\t\t\t\tyour email address\n\t\t\t\t\t\t\t"
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "md:flex md:flex-wrap mb-10 -mx-4" }, [
            _c(
              "div",
              { staticClass: "md:w-1/3 px-4" },
              [
                _c(
                  "heading",
                  { staticClass: "mb-1", attrs: { size: "large" } },
                  [_vm._v("Change Password")]
                ),
                _vm._v(" "),
                _c("heading", { staticClass: "mb-4" }, [
                  _vm._v(
                    "\n\t\t\t\t\t\tUpdate your password here. We recommend that you set a strong\n\t\t\t\t\t\tpassword that is atleast 8 characters long and includes a mix of\n\t\t\t\t\t\tletters, numbers and symbols.\n\t\t\t\t\t"
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "md:w-2/3 px-4" },
              [
                _c(
                  "card",
                  {
                    attrs: { "with-footer": "" },
                    scopedSlots: _vm._u([
                      {
                        key: "footer",
                        fn: function() {
                          return [
                            _c(
                              "loading-button",
                              {
                                ref: "changePasswordButton",
                                attrs: { type: "button" },
                                on: { click: _vm.changePassword }
                              },
                              [_vm._v("Update Password")]
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
                  },
                  [
                    _c("text-input", {
                      staticClass: "mb-4",
                      attrs: {
                        label: "Current Password",
                        errors: _vm.errors.current_password
                      },
                      model: {
                        value: _vm.resetform.current_password,
                        callback: function($$v) {
                          _vm.$set(_vm.resetform, "current_password", $$v)
                        },
                        expression: "resetform.current_password"
                      }
                    }),
                    _vm._v(" "),
                    _c("text-input", {
                      staticClass: "mb-4",
                      attrs: {
                        label: "New Password",
                        errors: _vm.errors.password
                      },
                      model: {
                        value: _vm.resetform.password,
                        callback: function($$v) {
                          _vm.$set(_vm.resetform, "password", $$v)
                        },
                        expression: "resetform.password"
                      }
                    }),
                    _vm._v(" "),
                    _c("text-input", {
                      attrs: {
                        label: "Confirm New Password",
                        errors: _vm.errors.password_confirmation
                      },
                      model: {
                        value: _vm.resetform.password_confirmation,
                        callback: function($$v) {
                          _vm.$set(_vm.resetform, "password_confirmation", $$v)
                        },
                        expression: "resetform.password_confirmation"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "md:flex md:flex-wrap mb-10 -mx-4" }, [
            _c(
              "div",
              { staticClass: "md:w-1/3 px-4" },
              [
                _c(
                  "heading",
                  { staticClass: "mb-1", attrs: { size: "large" } },
                  [_vm._v("Notifications")]
                ),
                _vm._v(" "),
                _c("heading", { staticClass: "mb-4" }, [
                  _vm._v(
                    "\n\t\t\t\t\t\tControl the newsletter subscription and email\n\t\t\t\t\t\tnotifications\n\t\t\t\t\t"
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "md:w-2/3 px-4" },
              [
                _c(
                  "card",
                  {
                    attrs: { "is-padding": false, "with-footer": "" },
                    scopedSlots: _vm._u([
                      {
                        key: "footer",
                        fn: function() {
                          return [
                            _c("loading-button", [_vm._v("Save Settings")])
                          ]
                        },
                        proxy: true
                      }
                    ])
                  },
                  [
                    _c(
                      "list-group",
                      [
                        _c(
                          "div",
                          {
                            staticClass: "pr-10",
                            attrs: { slot: "listbody" },
                            slot: "listbody"
                          },
                          [
                            _c(
                              "heading",
                              { staticClass: "mb-1", attrs: { size: "large" } },
                              [_vm._v("Email Notifications")]
                            ),
                            _vm._v(" "),
                            _c("heading", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit, amet consectetur adipisicing elit.\n\t\t\t\t\t\t\t\t\tNulla dolorem odit voluptas, saepe a earum.\n\t\t\t\t\t\t\t\t"
                              )
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "template",
                          { slot: "listaction" },
                          [
                            _c("switch-input", {
                              attrs: { color: "#1abc9c" },
                              model: {
                                value: _vm.notification,
                                callback: function($$v) {
                                  _vm.notification = $$v
                                },
                                expression: "notification"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "list-group",
                      { staticClass: "border-t" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "pr-10",
                            attrs: { slot: "listbody" },
                            slot: "listbody"
                          },
                          [
                            _c(
                              "heading",
                              { staticClass: "mb-1", attrs: { size: "large" } },
                              [_vm._v("Text/SMS Notifications")]
                            ),
                            _vm._v(" "),
                            _c("heading", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit, amet consectetur adipisicing elit.\n\t\t\t\t\t\t\t\t\tNulla dolorem odit voluptas, saepe a earum.\n\t\t\t\t\t\t\t\t"
                              )
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "template",
                          { slot: "listaction" },
                          [
                            _c("switch-input", {
                              attrs: { color: "#1abc9c" },
                              model: {
                                value: _vm.notification,
                                callback: function($$v) {
                                  _vm.notification = $$v
                                },
                                expression: "notification"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "list-group",
                      { staticClass: "border-t" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "pr-10",
                            attrs: { slot: "listbody" },
                            slot: "listbody"
                          },
                          [
                            _c(
                              "heading",
                              { staticClass: "mb-1", attrs: { size: "large" } },
                              [_vm._v("Slack Notifications")]
                            ),
                            _vm._v(" "),
                            _c("heading", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit, amet consectetur adipisicing elit.\n\t\t\t\t\t\t\t\t\tNulla dolorem odit voluptas, saepe a earum.\n\t\t\t\t\t\t\t\t"
                              )
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "template",
                          { slot: "listaction" },
                          [
                            _c("switch-input", {
                              attrs: { color: "#1abc9c" },
                              model: {
                                value: _vm.notification,
                                callback: function($$v) {
                                  _vm.notification = $$v
                                },
                                expression: "notification"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      2
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/FlashMessage.vue?vue&type=template&id=0bfc992f&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/FlashMessage.vue?vue&type=template&id=0bfc992f& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.$page.flash.success && _vm.show
      ? _c(
          "div",
          {
            staticClass:
              "mb-8 flex items-center justify-between bg-green-400 rounded-lg"
          },
          [
            _c("div", { staticClass: "flex items-center" }, [
              _c(
                "svg",
                {
                  staticClass:
                    "ml-4 mr-2 flex-no-shrink w-8 h-8 text-white fill-current",
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
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "py-4 text-white text-sm font-medium" },
                [_vm._v(_vm._s(_vm.$page.flash.success))]
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "group mr-2 p-2",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.show = false
                  }
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "block w-8 h-8 text-gray-100 fill-current",
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
                          "M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"
                      }
                    })
                  ]
                )
              ]
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.$page.errors).length > 0 && _vm.show
      ? _c(
          "div",
          {
            staticClass:
              "mb-8 flex items-center justify-between bg-red-400 rounded-lg"
          },
          [
            _c("div", { staticClass: "flex items-center" }, [
              _c(
                "svg",
                {
                  staticClass:
                    "ml-4 mr-2 flex-no-shrink w-8 h-8 text-white fill-current",
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
                        "M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "py-4 text-white text-sm font-medium" },
                [
                  Object.keys(_vm.$page.errors).length === 1
                    ? _c("span", [_vm._v("There is one form error.")])
                    : _c("span", [
                        _vm._v(
                          "There are " +
                            _vm._s(Object.keys(_vm.$page.errors).length) +
                            " form errors."
                        )
                      ])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "group mr-2 p-2",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.show = false
                  }
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "block w-8 h-8 text-gray-100 fill-current",
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
                          "M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"
                      }
                    })
                  ]
                )
              ]
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/ListGroup.vue?vue&type=template&id=62fda679&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/ListGroup.vue?vue&type=template&id=62fda679& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    { staticClass: "flex px-8 py-4" },
    [
      _vm._t("listbody"),
      _vm._v(" "),
      _vm.action
        ? _c(
            "div",
            { staticClass: "w-20 text-center flex items-start justify-center" },
            [_vm._t("listaction")],
            2
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=template&id=75f0f46e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=template&id=75f0f46e& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "switch-button-control" }, [
    _c(
      "div",
      {
        staticClass: "switch-button",
        class: { enabled: _vm.isEnabled },
        style: { "--color": _vm.color },
        on: { click: _vm.toggle }
      },
      [_c("div", { staticClass: "button" })]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "switch-button-label" }, [_vm._t("default")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/Pages/Settings.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/Settings.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_29b1b94c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=29b1b94c& */ "./resources/js/Pages/Settings.vue?vue&type=template&id=29b1b94c&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_29b1b94c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_29b1b94c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Settings.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Settings.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Settings.vue?vue&type=template&id=29b1b94c&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Settings.vue?vue&type=template&id=29b1b94c& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_29b1b94c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=29b1b94c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Settings.vue?vue&type=template&id=29b1b94c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_29b1b94c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_29b1b94c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/tuis/FlashMessage.vue":
/*!***************************************************!*\
  !*** ./resources/js/Shared/tuis/FlashMessage.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlashMessage_vue_vue_type_template_id_0bfc992f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlashMessage.vue?vue&type=template&id=0bfc992f& */ "./resources/js/Shared/tuis/FlashMessage.vue?vue&type=template&id=0bfc992f&");
/* harmony import */ var _FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlashMessage.vue?vue&type=script&lang=js& */ "./resources/js/Shared/tuis/FlashMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlashMessage_vue_vue_type_template_id_0bfc992f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FlashMessage_vue_vue_type_template_id_0bfc992f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/tuis/FlashMessage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/tuis/FlashMessage.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/tuis/FlashMessage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlashMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/FlashMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/tuis/FlashMessage.vue?vue&type=template&id=0bfc992f&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Shared/tuis/FlashMessage.vue?vue&type=template&id=0bfc992f& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_template_id_0bfc992f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlashMessage.vue?vue&type=template&id=0bfc992f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/FlashMessage.vue?vue&type=template&id=0bfc992f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_template_id_0bfc992f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashMessage_vue_vue_type_template_id_0bfc992f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/tuis/ListGroup.vue":
/*!************************************************!*\
  !*** ./resources/js/Shared/tuis/ListGroup.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListGroup_vue_vue_type_template_id_62fda679___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListGroup.vue?vue&type=template&id=62fda679& */ "./resources/js/Shared/tuis/ListGroup.vue?vue&type=template&id=62fda679&");
/* harmony import */ var _ListGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListGroup.vue?vue&type=script&lang=js& */ "./resources/js/Shared/tuis/ListGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListGroup.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Shared/tuis/ListGroup.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListGroup_vue_vue_type_template_id_62fda679___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListGroup_vue_vue_type_template_id_62fda679___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/tuis/ListGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/tuis/ListGroup.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Shared/tuis/ListGroup.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/ListGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/tuis/ListGroup.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Shared/tuis/ListGroup.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListGroup.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/ListGroup.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Shared/tuis/ListGroup.vue?vue&type=template&id=62fda679&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Shared/tuis/ListGroup.vue?vue&type=template&id=62fda679& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_template_id_62fda679___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListGroup.vue?vue&type=template&id=62fda679& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/ListGroup.vue?vue&type=template&id=62fda679&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_template_id_62fda679___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListGroup_vue_vue_type_template_id_62fda679___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/tuis/SwitchInput.vue":
/*!**************************************************!*\
  !*** ./resources/js/Shared/tuis/SwitchInput.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwitchInput_vue_vue_type_template_id_75f0f46e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=template&id=75f0f46e& */ "./resources/js/Shared/tuis/SwitchInput.vue?vue&type=template&id=75f0f46e&");
/* harmony import */ var _SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=script&lang=js& */ "./resources/js/Shared/tuis/SwitchInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SwitchInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Shared/tuis/SwitchInput.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwitchInput_vue_vue_type_template_id_75f0f46e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SwitchInput_vue_vue_type_template_id_75f0f46e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/tuis/SwitchInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/tuis/SwitchInput.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Shared/tuis/SwitchInput.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/tuis/SwitchInput.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Shared/tuis/SwitchInput.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchInput.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Shared/tuis/SwitchInput.vue?vue&type=template&id=75f0f46e&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Shared/tuis/SwitchInput.vue?vue&type=template&id=75f0f46e& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_template_id_75f0f46e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchInput.vue?vue&type=template&id=75f0f46e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SwitchInput.vue?vue&type=template&id=75f0f46e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_template_id_75f0f46e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_template_id_75f0f46e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);