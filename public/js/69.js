(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Reset.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Auth/Reset.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/tuis/Heading */ "./resources/js/Shared/tuis/Heading.vue");
/* harmony import */ var _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/tuis/Card */ "./resources/js/Shared/tuis/Card.vue");
/* harmony import */ var _Shared_tuis_LinkTo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/tuis/LinkTo */ "./resources/js/Shared/tuis/LinkTo.vue");
/* harmony import */ var _Shared_tuis_LoadingButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/tuis/LoadingButton */ "./resources/js/Shared/tuis/LoadingButton.vue");
/* harmony import */ var _Shared_tuis_TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/tuis/TextInput */ "./resources/js/Shared/tuis/TextInput.vue");
/* harmony import */ var _Shared_tuis_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/tuis/Icon */ "./resources/js/Shared/tuis/Icon.vue");
/* harmony import */ var _Shared_tuis_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Shared/tuis/Alert */ "./resources/js/Shared/tuis/Alert.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    Card: _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_2__["default"],
    Heading: _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_1__["default"],
    LinkTo: _Shared_tuis_LinkTo__WEBPACK_IMPORTED_MODULE_3__["default"],
    LoadingButton: _Shared_tuis_LoadingButton__WEBPACK_IMPORTED_MODULE_4__["default"],
    TextInput: _Shared_tuis_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"],
    Icon: _Shared_tuis_Icon__WEBPACK_IMPORTED_MODULE_6__["default"],
    Alert: _Shared_tuis_Alert__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: ["errors", "token", "email"],
  data: function data() {
    return {
      form: {
        email: this.email,
        password: null,
        password_confirmation: null,
        token: this.token
      },
      emailSent: false
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.$refs.submitButton.startLoading();
      this.$inertia.post(this.route("password.update"), this.form).then(function () {
        _this.$refs.submitButton.stopLoading();

        if (Object.keys(_this.$page.errors).length === 0) {
          _this.form.email = null;
          _this.form.password = null;
          _this.form.password_confirmation = null;
          _this.emailSent = true;

          _this.$snack.success("Password successfully changed");
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Reset.vue?vue&type=template&id=e476971e&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Auth/Reset.vue?vue&type=template&id=e476971e& ***!
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
  return _c("div", [
    _c(
      "div",
      {
        staticClass:
          "relative px-4 lg:px-6 md:py-16 lg:py-24 bg-gray-100 h-screen flex items-center"
      },
      [
        _c("div", { staticClass: "absolute left-0 right-0 top-0 bg-white" }, [
          _c("div", { staticClass: "container px-4 mx-auto py-6" }, [
            _c("div", { staticClass: "flex items-center justify-between" }, [
              _c(
                "div",
                [
                  _c(
                    "link-to",
                    { attrs: { to: "/" } },
                    [
                      _c("icon", {
                        staticClass: "-ml-1",
                        attrs: { name: "chevron-left" }
                      }),
                      _vm._v("Back to Website\n\t\t\t\t\t\t")
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _vm._v("\n\t\t\t\t\t\tDon't have an account?\n\t\t\t\t\t\t"),
                  _c("link-to", { attrs: { to: "/register" } }, [
                    _vm._v("Create Account")
                  ])
                ],
                1
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "max-w-lg mx-auto w-full" },
          [
            _c(
              "card",
              [
                _c(
                  "heading",
                  {
                    staticClass: "mb-8 text-center",
                    attrs: { size: "heading2" }
                  },
                  [_vm._v("Reset your Password")]
                ),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.submit($event)
                      }
                    }
                  },
                  [
                    _c("text-input", {
                      staticClass: "mb-4",
                      attrs: {
                        "with-icon": "",
                        placeholder: "Email address",
                        errors: _vm.errors["email"]
                      },
                      on: {
                        keydown: function($event) {
                          delete _vm.errors["email"]
                        }
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "icon",
                          fn: function() {
                            return [
                              _c("icon", {
                                staticClass: "mt-3 ml-1 text-gray-400",
                                attrs: { name: "mail" }
                              })
                            ]
                          },
                          proxy: true
                        }
                      ]),
                      model: {
                        value: _vm.form.email,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "email", $$v)
                        },
                        expression: "form.email"
                      }
                    }),
                    _vm._v(" "),
                    _c("text-input", {
                      staticClass: "mb-4",
                      attrs: {
                        type: "password",
                        "with-icon": "",
                        placeholder: "New Password",
                        errors: _vm.errors["password"]
                      },
                      on: {
                        keydown: function($event) {
                          delete _vm.errors["password"]
                        }
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "icon",
                          fn: function() {
                            return [
                              _c("icon", {
                                staticClass: "mt-3 ml-1 text-gray-400",
                                attrs: { name: "lock" }
                              })
                            ]
                          },
                          proxy: true
                        }
                      ]),
                      model: {
                        value: _vm.form.password,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "password", $$v)
                        },
                        expression: "form.password"
                      }
                    }),
                    _vm._v(" "),
                    _c("text-input", {
                      staticClass: "mb-4",
                      attrs: {
                        type: "password",
                        "with-icon": "",
                        placeholder: "Confirm New Password",
                        errors: _vm.errors["password_confirmation"]
                      },
                      on: {
                        keydown: function($event) {
                          delete _vm.errors["password_confirmation"]
                        }
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "icon",
                          fn: function() {
                            return [
                              _c("icon", {
                                staticClass: "mt-3 ml-1 text-gray-400",
                                attrs: { name: "lock" }
                              })
                            ]
                          },
                          proxy: true
                        }
                      ]),
                      model: {
                        value: _vm.form.password_confirmation,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "password_confirmation", $$v)
                        },
                        expression: "form.password_confirmation"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "loading-button",
                      {
                        ref: "submitButton",
                        staticClass: "w-full",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Reset my password")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "heading",
                  { staticClass: "mt-4 text-center" },
                  [
                    _vm._v("\n\t\t\t\t\tQuestions? Email us at\n\t\t\t\t\t"),
                    _c("link-to", { attrs: { to: "/login" } }, [
                      _vm._v("help@mcl.com")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.emailSent
                  ? _c(
                      "alert",
                      { staticClass: "mt-5", attrs: { variant: "success" } },
                      [
                        _vm._v(
                          "Successful password reset. You can now use your new password to log in to your account."
                        )
                      ]
                    )
                  : _vm._e()
              ],
              1
            )
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Auth/Reset.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Auth/Reset.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reset_vue_vue_type_template_id_e476971e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reset.vue?vue&type=template&id=e476971e& */ "./resources/js/Pages/Auth/Reset.vue?vue&type=template&id=e476971e&");
/* harmony import */ var _Reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reset.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Auth/Reset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reset_vue_vue_type_template_id_e476971e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reset_vue_vue_type_template_id_e476971e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/Reset.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/Reset.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Auth/Reset.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reset.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Reset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Auth/Reset.vue?vue&type=template&id=e476971e&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Reset.vue?vue&type=template&id=e476971e& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_template_id_e476971e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reset.vue?vue&type=template&id=e476971e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Reset.vue?vue&type=template&id=e476971e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_template_id_e476971e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_template_id_e476971e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);