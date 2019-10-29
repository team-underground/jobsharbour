(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Companies/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Companies/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/tuis/Heading */ "./resources/js/Shared/tuis/Heading.vue");
/* harmony import */ var _Shared_tuis_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/tuis/Icon */ "./resources/js/Shared/tuis/Icon.vue");
/* harmony import */ var _Shared_tuis_LinkTo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/tuis/LinkTo */ "./resources/js/Shared/tuis/LinkTo.vue");
/* harmony import */ var _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/tuis/Card */ "./resources/js/Shared/tuis/Card.vue");
/* harmony import */ var _Shared_tuis_TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/tuis/TextInput */ "./resources/js/Shared/tuis/TextInput.vue");
/* harmony import */ var _Shared_tuis_SelectInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/tuis/SelectInput */ "./resources/js/Shared/tuis/SelectInput.vue");
/* harmony import */ var _Shared_tuis_LoadingButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Shared/tuis/LoadingButton */ "./resources/js/Shared/tuis/LoadingButton.vue");
/* harmony import */ var _Shared_tuis_SimpleEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Shared/tuis/SimpleEditor */ "./resources/js/Shared/tuis/SimpleEditor.vue");
/* harmony import */ var _Shared_tuis_SwitchInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Shared/tuis/SwitchInput */ "./resources/js/Shared/tuis/SwitchInput.vue");
/* harmony import */ var _Shared_tuis_DateInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Shared/tuis/DateInput */ "./resources/js/Shared/tuis/DateInput.vue");
/* harmony import */ var _Shared_tuis_Alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/Shared/tuis/Alert */ "./resources/js/Shared/tuis/Alert.vue");
/* harmony import */ var _Shared_tuis_TextareaInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/Shared/tuis/TextareaInput */ "./resources/js/Shared/tuis/TextareaInput.vue");
/* harmony import */ var _Shared_tuis_FileInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/Shared/tuis/FileInput */ "./resources/js/Shared/tuis/FileInput.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Heading: _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_1__["default"],
    Icon: _Shared_tuis_Icon__WEBPACK_IMPORTED_MODULE_2__["default"],
    LinkTo: _Shared_tuis_LinkTo__WEBPACK_IMPORTED_MODULE_3__["default"],
    Card: _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_4__["default"],
    TextInput: _Shared_tuis_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"],
    SelectInput: _Shared_tuis_SelectInput__WEBPACK_IMPORTED_MODULE_6__["default"],
    SimpleEditor: _Shared_tuis_SimpleEditor__WEBPACK_IMPORTED_MODULE_8__["default"],
    LoadingButton: _Shared_tuis_LoadingButton__WEBPACK_IMPORTED_MODULE_7__["default"],
    SwitchInput: _Shared_tuis_SwitchInput__WEBPACK_IMPORTED_MODULE_9__["default"],
    DateInput: _Shared_tuis_DateInput__WEBPACK_IMPORTED_MODULE_10__["default"],
    Alert: _Shared_tuis_Alert__WEBPACK_IMPORTED_MODULE_11__["default"],
    TextareaInput: _Shared_tuis_TextareaInput__WEBPACK_IMPORTED_MODULE_12__["default"],
    FileInput: _Shared_tuis_FileInput__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  props: ["industries", "errors", "company"],
  data: function data() {
    return {
      form: {
        company_id: null,
        company_photo: null,
        company_name: this.company.company_name,
        company_website: this.company.company_website,
        company_no_of_employees: this.company.company_no_of_employees,
        company_industry: this.getKeyByValue(this.industries, this.company.company_industry),
        company_description: this.company.company_description,
        company_benefits: this.company.company_benefits
      },
      companySize: {
        "0-25": "0-25",
        "25-50": "25-50",
        "50-100": "50-100",
        "100+": "100+"
      }
    };
  },
  methods: {
    getKeyByValue: function getKeyByValue(obj, value) {
      return Object.keys(obj).find(function (key) {
        return obj[key] === value;
      });
    },
    submit: function submit() {
      var _this = this;

      this.$refs.jobSaveButton.startLoading();
      var data = new FormData();
      data.append("company_id", this.form.company_id || "");
      data.append("company_logo", this.form.company_photo || "");
      data.append("company_name", this.form.company_name || "");
      data.append("company_website", this.form.company_website || "");
      data.append("company_no_of_employees", this.form.company_no_of_employees || "");
      data.append("company_industry", this.form.company_industry || "");
      data.append("company_description", this.form.company_description || "");
      data.append("company_benefits", this.form.company_benefits || "");
      data.append("_method", "put");
      this.$inertia.post(this.route("admin.companies.update", this.company.uuid), data).then(function () {
        _this.$refs.jobSaveButton.stopLoading();
      })["catch"](function () {
        _this.$refs.jobSaveButton.stopLoading();
      });
    },
    deleteCompanyLogo: function deleteCompanyLogo(uuid) {
      if (confirm("Are you sure you want to delete this logo?")) {
        this.$inertia["delete"](this.route("admin.companies.deletelogo", uuid));
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Companies/Edit.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Companies/Edit.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vue-file-agent .file-preview-wrapper:before {\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n#profile-pic-demo .drop-help-text {\n  display: none;\n}\n#profile-pic-demo .is-drag-over .drop-help-text {\n  display: block;\n}\n#profile-pic-demo .profile-pic-upload-block {\n  border: 2px dashed transparent;\n  padding: 20px;\n  padding-top: 0;\n}\n#profile-pic-demo .is-drag-over.profile-pic-upload-block {\n  border-color: #aaa;\n}\n#profile-pic-demo .vue-file-agent {\n  width: 180px;\n  float: left;\n  margin: 0 15px 5px 0;\n  border: 0;\n  box-shadow: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Companies/Edit.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Companies/Edit.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Companies/Edit.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Companies/Edit.vue?vue&type=template&id=6081d8c7&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Companies/Edit.vue?vue&type=template&id=6081d8c7& ***!
  \************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "bg-white px-4 pt-6 py-4" }, [
          _c(
            "div",
            { staticClass: "max-w-6xl mx-auto" },
            [
              _c(
                "link-to",
                { staticClass: "mb-2", attrs: { to: "/admin/companies" } },
                [
                  _c("icon", {
                    staticClass: "-ml-2",
                    attrs: { name: "chevron-left" }
                  }),
                  _vm._v("Back to Companies\n\t\t\t\t")
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "md:flex items-center" }, [
                _c(
                  "div",
                  { staticClass: "flex-1" },
                  [
                    _c("heading", { attrs: { size: "heading" } }, [
                      _vm._v("Edit Company Details")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex" },
                  [
                    _c(
                      "loading-button",
                      {
                        ref: "jobSaveButton",
                        attrs: { type: "submit", size: "small" }
                      },
                      [_vm._v("Update Company")]
                    ),
                    _vm._v(" "),
                    _c(
                      "loading-button",
                      {
                        attrs: {
                          type: "button",
                          size: "small",
                          variant: "danger",
                          "variant-type": "outline"
                        }
                      },
                      [_c("icon", { attrs: { name: "trash" } })],
                      1
                    )
                  ],
                  1
                )
              ])
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "py-10" }, [
          _c("div", { staticClass: "max-w-6xl mx-auto" }, [
            _c("div", { staticClass: "md:flex -mx-4" }, [
              _c(
                "div",
                { staticClass: "md:w-1/3 px-4" },
                [
                  _c(
                    "heading",
                    { staticClass: "mb-1", attrs: { size: "large" } },
                    [_vm._v("Company Details")]
                  ),
                  _vm._v(" "),
                  _c("heading", { staticClass: "mb-4" }, [
                    _vm._v(
                      "Basic details of the company helps in gaining job seekers interested in applying."
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
                    [
                      _vm.company.company_logo == null
                        ? _c(
                            "div",
                            { staticClass: "mb-4 h-30" },
                            [
                              _c("file-input", {
                                attrs: {
                                  label: "Company Logo",
                                  errors: _vm.errors["company_logo"]
                                },
                                model: {
                                  value: _vm.form.company_photo,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "company_photo", $$v)
                                  },
                                  expression: "form.company_photo"
                                }
                              })
                            ],
                            1
                          )
                        : _c("div", { staticClass: "mb-4" }, [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "block mb-1 font-semibold text-gray-700"
                              },
                              [_vm._v("Company Logo")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "flex items-center" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "w-24 h-24 items-center justify-center rounded-full inline-flex bg-gray-100 mr-5 text-gray-400 shadow-inner"
                                },
                                [
                                  _c("img", {
                                    staticClass:
                                      "w-24 h-24 object-fit rounded-full border border-gray-100",
                                    attrs: {
                                      src: _vm.company.company_logo_path,
                                      alt: _vm.company.company_name
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "rounded-lg px-5 py-2 bg-red-100 hover:bg-red-200 text-sm font-medium text-red-600",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteCompanyLogo(
                                          _vm.company.uuid
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("Delete")]
                                )
                              ])
                            ])
                          ]),
                      _vm._v(" "),
                      _c("text-input", {
                        staticClass: "mb-4",
                        attrs: {
                          label: "Name",
                          placeholder: "eg. ABC Company",
                          errors: _vm.errors["company_name"]
                        },
                        on: {
                          keydown: function($event) {
                            delete _vm.errors["company_name"]
                          }
                        },
                        model: {
                          value: _vm.form.company_name,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "company_name", $$v)
                          },
                          expression: "form.company_name"
                        }
                      }),
                      _vm._v(" "),
                      _c("text-input", {
                        staticClass: "mb-4",
                        attrs: {
                          label: "Website",
                          placeholder: "eg. http://google.com",
                          errors: _vm.errors["company_website"]
                        },
                        on: {
                          keydown: function($event) {
                            delete _vm.errors["company_website"]
                          }
                        },
                        model: {
                          value: _vm.form.company_website,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "company_website", $$v)
                          },
                          expression: "form.company_website"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex -mx-4" }, [
                        _c(
                          "div",
                          { staticClass: "w-1/2 px-4" },
                          [
                            _c(
                              "select-input",
                              {
                                staticClass: "mb-4",
                                attrs: {
                                  label: "Industry",
                                  options: _vm.industries,
                                  errors: _vm.errors["company_industry"]
                                },
                                on: {
                                  keydown: function($event) {
                                    delete _vm.errors["company_industry"]
                                  }
                                },
                                model: {
                                  value: _vm.form.company_industry,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "company_industry", $$v)
                                  },
                                  expression: "form.company_industry"
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { value: "null", disabled: "" } },
                                  [_vm._v("Select your industry")]
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "w-1/2 px-4" },
                          [
                            _c(
                              "select-input",
                              {
                                staticClass: "mb-4",
                                attrs: {
                                  label: "No. of employees",
                                  options: _vm.companySize,
                                  errors: _vm.errors["company_no_of_employees"]
                                },
                                on: {
                                  keydown: function($event) {
                                    delete _vm.errors["company_no_of_employees"]
                                  }
                                },
                                model: {
                                  value: _vm.form.company_no_of_employees,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.form,
                                      "company_no_of_employees",
                                      $$v
                                    )
                                  },
                                  expression: "form.company_no_of_employees"
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { value: "null", disabled: "" } },
                                  [_vm._v("Select company size")]
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("textarea-input", {
                        staticClass: "mb-4",
                        attrs: {
                          label: "Description",
                          placeholder: "Brief description of the company...",
                          errors: _vm.errors["company_description"]
                        },
                        on: {
                          keydown: function($event) {
                            delete _vm.errors["company_description"]
                          }
                        },
                        model: {
                          value: _vm.form.company_description,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "company_description", $$v)
                          },
                          expression: "form.company_description"
                        }
                      }),
                      _vm._v(" "),
                      _c("text-input", {
                        staticClass: "mb-4",
                        attrs: {
                          label: "Benefits",
                          placeholder:
                            "eg. Laptop, Free Lunch, Flexible holidays...",
                          errors: _vm.errors["company_benefits"]
                        },
                        on: {
                          keydown: function($event) {
                            delete _vm.errors["company_benefits"]
                          }
                        },
                        model: {
                          value: _vm.form.company_benefits,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "company_benefits", $$v)
                          },
                          expression: "form.company_benefits"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Companies/Edit.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Companies/Edit.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_6081d8c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=6081d8c7& */ "./resources/js/Pages/Companies/Edit.vue?vue&type=template&id=6081d8c7&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Companies/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Pages/Companies/Edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_6081d8c7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_6081d8c7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Companies/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Companies/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Companies/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Companies/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Companies/Edit.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Companies/Edit.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Companies/Edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/Companies/Edit.vue?vue&type=template&id=6081d8c7&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Companies/Edit.vue?vue&type=template&id=6081d8c7& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6081d8c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=6081d8c7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Companies/Edit.vue?vue&type=template&id=6081d8c7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6081d8c7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6081d8c7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);