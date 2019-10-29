(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ResumeBuilder.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ResumeBuilder.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/tuis/Card */ "./resources/js/Shared/tuis/Card.vue");
/* harmony import */ var _Shared_tuis_LoadingButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/tuis/LoadingButton */ "./resources/js/Shared/tuis/LoadingButton.vue");
/* harmony import */ var _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/tuis/Heading */ "./resources/js/Shared/tuis/Heading.vue");
/* harmony import */ var _Shared_tuis_Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/tuis/Badge */ "./resources/js/Shared/tuis/Badge.vue");
/* harmony import */ var _Shared_tuis_LinkTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/tuis/LinkTo */ "./resources/js/Shared/tuis/LinkTo.vue");
/* harmony import */ var _Shared_tuis_SearchInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/tuis/SearchInput */ "./resources/js/Shared/tuis/SearchInput.vue");
/* harmony import */ var _Shared_tuis_TextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/tuis/TextInput */ "./resources/js/Shared/tuis/TextInput.vue");
/* harmony import */ var _Shared_tuis_SimpleEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Shared/tuis/SimpleEditor */ "./resources/js/Shared/tuis/SimpleEditor.vue");
/* harmony import */ var _Shared_tuis_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Shared/tuis/Icon */ "./resources/js/Shared/tuis/Icon.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Card: _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_0__["default"],
    LoadingButton: _Shared_tuis_LoadingButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    Heading: _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_2__["default"],
    Badge: _Shared_tuis_Badge__WEBPACK_IMPORTED_MODULE_3__["default"],
    LinkTo: _Shared_tuis_LinkTo__WEBPACK_IMPORTED_MODULE_4__["default"],
    Icon: _Shared_tuis_Icon__WEBPACK_IMPORTED_MODULE_8__["default"],
    SearchInput: _Shared_tuis_SearchInput__WEBPACK_IMPORTED_MODULE_5__["default"],
    TextInput: _Shared_tuis_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"],
    SimpleEditor: _Shared_tuis_SimpleEditor__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      resume: {
        name: "Mithicher Baro",
        phone: "7086051060",
        email: "mithnehu@gmail.com",
        address: "59 Ratnapeeth",
        objective: "Challenging position with a creative work environment to enhance expertise in web development and application design",
        experiences: [{
          start: "June, 2014",
          end: "Present",
          title: "Web Developer",
          company: "Sumato Globaltech Tvt. Ltd.",
          description: "Works as a Team Lead"
        }, {
          start: "June, 2014",
          end: "Present",
          title: "Web Developer",
          company: "Sumato Globaltech Tvt. Ltd.",
          description: "Works as a Team Lead"
        }],
        educations: [{
          name: "NEHU",
          title: "B. Tech",
          year: "2018-2012"
        }, {
          name: "Marian School",
          title: "HS",
          year: "2006-2008"
        }],
        skills: "Laravel, Vuejs, MySQL, TailwindCSS, UI/UX Design",
        interests: "Reading, Movies",
        languages: "English, Hindi"
      }
    };
  },
  methods: {
    addExperience: function addExperience() {
      this.resume.experiences.push({
        start: null,
        end: null,
        title: null,
        company: null,
        description: null
      });
    },
    addEducation: function addEducation() {
      this.resume.educations.push({
        name: null,
        title: null,
        year: null
      });
    },
    generateResume: function generateResume() {
      var _this = this;

      this.$refs.resumeGenerateButton.startLoading();
      this.$inertia.post("/resume/generated", {
        resumedata: this.resume
      }).then(function () {
        _this.$refs.resumeGenerateButton.stopLoading();
      })["catch"](function () {
        _this.$refs.resumeGenerateButton.stopLoading();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    value: {
      "default": "",
      type: String
    },
    label: String,
    errors: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    height: {
      type: String,
      "default": "140px"
    }
  },
  data: function data() {
    return {
      editorContent: null,
      editorInstance: null,
      editorOpts: {
        modules: {
          toolbar: [[{
            header: [2, 3, 4, 5, 6, false]
          }], ["bold", "italic", "underline", "strike"], ["blockquote", "code-block"], [{
            list: "ordered"
          }, {
            list: "bullet"
          }, {
            align: []
          }], ["clean"], ["link"]]
        },
        theme: "snow"
      }
    };
  },
  watch: {
    value: function value(newVal) {
      // Only update the content if it's changed from an external source
      // or else it'll act weird when you try to type anything
      if (newVal !== this.editorContent) {
        this.editorInstance.pasteHTML(newVal);
      }
    }
  },
  mounted: function mounted() {
    this.initializeEditor();
  },
  beforeDestroy: function beforeDestroy() {
    // Turn off all listeners set on text-change
    this.editorInstance.off("text-change");
  },
  methods: {
    initializeEditor: function initializeEditor() {
      // Set initial content that's going to be picked up by Quill
      this.$refs.editorNode.innerHTML = this.value; // Create the Quill instance

      this.editorInstance = new quill__WEBPACK_IMPORTED_MODULE_0___default.a(this.$refs.editorNode, this.editorOpts); // Setup handler for whenever things change inside Quill

      this.editorInstance.on("text-change", this.onEditorContentChange); // Save any initial content to this.editorContent

      this.setEditorContent();
    },
    onEditorContentChange: function onEditorContentChange() {
      // Whenever we change anything, update this.editorContent
      this.setEditorContent(); // Then emit its value as input so we have a working v-model
      // This $emit will be catched up in the watch:value
      // that's why we guard against calling pasteHTML
      // calling that function while we are typing is undesirable

      this.$emit("input", this.editorContent);
    },
    setEditorContent: function setEditorContent() {
      this.editorContent = this.editorInstance.getText().trim() ? this.editorInstance.root.innerHTML : "";
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ql-toolbar.ql-snow {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  background-color: #e2e8f0;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.ql-toolbar.ql-snow,\n.ql-container.ql-snow {\n  border: 2px solid #e2e8f0;\n}\n.ql-container,\n.ql-editor {\n  font-size: 1rem;\n  font-family: inherit;\n}\n.simple-editor.error .ql-toolbar.ql-snow,\n.simple-editor.error .ql-container.ql-snow {\n  border-color: #fc8181;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SimpleEditor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ResumeBuilder.vue?vue&type=template&id=1ee21cd5&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ResumeBuilder.vue?vue&type=template&id=1ee21cd5& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    { staticClass: "container py-10 mx-auto" },
    [
      _c(
        "heading",
        { staticClass: "text-center mb-5", attrs: { size: "display" } },
        [
          _vm._v("\n\t\tResume Builder\n\t\t"),
          _c(
            "span",
            {
              staticClass:
                "bg-orange-300 px-2 py-1 uppercase text-xs tracking-wide rounded-full"
            },
            [_vm._v("Beta")]
          )
        ]
      ),
      _vm._v(" "),
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
                    "div",
                    { staticClass: "flex justify-between items-center py-4" },
                    [
                      _c(
                        "loading-button",
                        {
                          staticClass: "bg-white",
                          attrs: {
                            variant: "secondary",
                            "variant-type": "outline"
                          }
                        },
                        [_vm._v("Reset")]
                      ),
                      _vm._v(" "),
                      _c(
                        "loading-button",
                        {
                          ref: "resumeGenerateButton",
                          on: { click: _vm.generateResume }
                        },
                        [_vm._v("Generate")]
                      )
                    ],
                    1
                  )
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _c("heading", { staticClass: "mb-1 font-bold text-gray-700" }, [
            _vm._v("Information")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex pb-4 mb-10 bg-gray-100 p-4 rounded-lg" },
            [
              _c(
                "div",
                { staticClass: "w-2/3" },
                [
                  _c("text-input", {
                    staticClass: "w-1/2",
                    attrs: { placeholder: "Full name" },
                    model: {
                      value: _vm.resume.name,
                      callback: function($$v) {
                        _vm.$set(_vm.resume, "name", $$v)
                      },
                      expression: "resume.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "w-1/3" },
                [
                  _c("text-input", {
                    staticClass: "mb-1",
                    attrs: { placeholder: "Phone" },
                    model: {
                      value: _vm.resume.phone,
                      callback: function($$v) {
                        _vm.$set(_vm.resume, "phone", $$v)
                      },
                      expression: "resume.phone"
                    }
                  }),
                  _vm._v(" "),
                  _c("text-input", {
                    staticClass: "mb-1",
                    attrs: { placeholder: "Email" },
                    model: {
                      value: _vm.resume.email,
                      callback: function($$v) {
                        _vm.$set(_vm.resume, "email", $$v)
                      },
                      expression: "resume.email"
                    }
                  }),
                  _vm._v(" "),
                  _c("text-input", {
                    staticClass: "mb-1",
                    attrs: { placeholder: "Address" },
                    model: {
                      value: _vm.resume.address,
                      callback: function($$v) {
                        _vm.$set(_vm.resume, "address", $$v)
                      },
                      expression: "resume.address"
                    }
                  })
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mb-10" },
            [
              _c("heading", { staticClass: "mb-1 font-bold text-gray-700" }, [
                _vm._v("Objective")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "bg-gray-100 p-4 rounded-lg" },
                [
                  _c("text-input", {
                    staticClass: "bg-white rounded-lg",
                    model: {
                      value: _vm.resume.objective,
                      callback: function($$v) {
                        _vm.$set(_vm.resume, "objective", $$v)
                      },
                      expression: "resume.objective"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "flex -mx-4" }, [
            _c(
              "div",
              { staticClass: "w-1/2 px-4" },
              [
                _c("heading", { staticClass: "mb-1 font-bold text-gray-700" }, [
                  _vm._v("Experiences")
                ]),
                _vm._v(" "),
                _vm._l(_vm.resume.experiences, function(experience) {
                  return [
                    _c(
                      "div",
                      { staticClass: "bg-gray-100 rounded-lg mb-4 p-4" },
                      [
                        _c(
                          "div",
                          { staticClass: "mb-2 flex -mx-4" },
                          [
                            _c("text-input", {
                              staticClass: "px-4",
                              attrs: { label: "Start" },
                              model: {
                                value: experience.start,
                                callback: function($$v) {
                                  _vm.$set(experience, "start", $$v)
                                },
                                expression: "experience.start"
                              }
                            }),
                            _vm._v(" "),
                            _c("text-input", {
                              staticClass: "px-4",
                              attrs: { label: "End" },
                              model: {
                                value: experience.end,
                                callback: function($$v) {
                                  _vm.$set(experience, "end", $$v)
                                },
                                expression: "experience.end"
                              }
                            }),
                            _vm._v(" "),
                            _c("text-input", {
                              staticClass: "px-4",
                              attrs: { label: "Title" },
                              model: {
                                value: experience.title,
                                callback: function($$v) {
                                  _vm.$set(experience, "title", $$v)
                                },
                                expression: "experience.title"
                              }
                            }),
                            _vm._v(" "),
                            _c("text-input", {
                              staticClass: "px-4",
                              attrs: { label: "Company" },
                              model: {
                                value: experience.company,
                                callback: function($$v) {
                                  _vm.$set(experience, "company", $$v)
                                },
                                expression: "experience.company"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("simple-editor", {
                          staticClass: "bg-white rounded-lg",
                          attrs: { label: "Description" },
                          model: {
                            value: experience.description,
                            callback: function($$v) {
                              _vm.$set(experience, "description", $$v)
                            },
                            expression: "experience.description"
                          }
                        })
                      ],
                      1
                    )
                  ]
                }),
                _vm._v(" "),
                _c(
                  "link-to",
                  {
                    staticClass: "mb-10",
                    attrs: { to: "#" },
                    on: { click: _vm.addExperience }
                  },
                  [_vm._v("+ Add Experience")]
                )
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "w-1/2 px-4" },
              [
                _c("heading", { staticClass: "mb-1 font-bold text-gray-700" }, [
                  _vm._v("Education")
                ]),
                _vm._v(" "),
                _vm._l(_vm.resume.educations, function(education) {
                  return [
                    _c(
                      "div",
                      { staticClass: "bg-gray-100 rounded-lg mb-4 p-4" },
                      [
                        _c("text-input", {
                          staticClass: "mb-2",
                          attrs: { label: "College/University Name" },
                          model: {
                            value: education.name,
                            callback: function($$v) {
                              _vm.$set(education, "name", $$v)
                            },
                            expression: "education.name"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "flex -mx-4" },
                          [
                            _c("text-input", {
                              staticClass: "px-4",
                              attrs: { label: "Degree Title" },
                              model: {
                                value: education.title,
                                callback: function($$v) {
                                  _vm.$set(education, "title", $$v)
                                },
                                expression: "education.title"
                              }
                            }),
                            _vm._v(" "),
                            _c("text-input", {
                              staticClass: "px-4",
                              attrs: { label: "Year" },
                              model: {
                                value: education.year,
                                callback: function($$v) {
                                  _vm.$set(education, "year", $$v)
                                },
                                expression: "education.year"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                }),
                _vm._v(" "),
                _c(
                  "link-to",
                  {
                    staticClass: "mb-10",
                    attrs: { to: "#" },
                    on: { click: _vm.addEducation }
                  },
                  [_vm._v("+ Add Education")]
                ),
                _vm._v(" "),
                _c("heading", { staticClass: "mb-1 font-bold text-gray-700" }, [
                  _vm._v("Skills")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "bg-gray-100 p-4 rounded-lg mb-10" },
                  [
                    _c("text-input", {
                      attrs: {
                        placeholder:
                          "eg. Graphic Design, UI/UX Design, Web Design, Copywriting..."
                      },
                      model: {
                        value: _vm.resume.skills,
                        callback: function($$v) {
                          _vm.$set(_vm.resume, "skills", $$v)
                        },
                        expression: "resume.skills"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("heading", { staticClass: "mb-1 font-bold text-gray-700" }, [
                  _vm._v("Interests")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "bg-gray-100 p-4 rounded-lg mb-10" },
                  [
                    _c("text-input", {
                      attrs: {
                        placeholder:
                          "eg. Travelling, Listen Music, Photography..."
                      },
                      model: {
                        value: _vm.resume.interests,
                        callback: function($$v) {
                          _vm.$set(_vm.resume, "interests", $$v)
                        },
                        expression: "resume.interests"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("heading", { staticClass: "mb-1 font-bold text-gray-700" }, [
                  _vm._v("Languages")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "bg-gray-100 p-4 rounded-lg mb-10" },
                  [
                    _c("text-input", {
                      attrs: { placeholder: "eg. English, German, France..." },
                      model: {
                        value: _vm.resume.languages,
                        callback: function($$v) {
                          _vm.$set(_vm.resume, "languages", $$v)
                        },
                        expression: "resume.languages"
                      }
                    })
                  ],
                  1
                )
              ],
              2
            )
          ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=template&id=055e4cf7&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=template&id=055e4cf7& ***!
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
    _vm.label
      ? _c(
          "label",
          { staticClass: "form-label block mb-1 font-semibold text-gray-700" },
          [_vm._v(_vm._s(_vm.label))]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "relative" }, [
      _c(
        "div",
        { staticClass: "simple-editor", class: { error: _vm.errors.length } },
        [
          _c("div", {
            ref: "editorNode",
            staticClass: "editor-node rounded-b-lg"
          })
        ]
      ),
      _vm._v(" "),
      _vm.errors.length
        ? _c("div", { staticClass: "text-red-600 mt-1 text-sm" }, [
            _vm._v(_vm._s(_vm.errors[0]))
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.errors.length
        ? _c(
            "svg",
            {
              staticClass: "absolute text-red-600 fill-current",
              staticStyle: { top: "52px", right: "12px" },
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
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/ResumeBuilder.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/ResumeBuilder.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResumeBuilder_vue_vue_type_template_id_1ee21cd5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResumeBuilder.vue?vue&type=template&id=1ee21cd5& */ "./resources/js/Pages/ResumeBuilder.vue?vue&type=template&id=1ee21cd5&");
/* harmony import */ var _ResumeBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResumeBuilder.vue?vue&type=script&lang=js& */ "./resources/js/Pages/ResumeBuilder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResumeBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResumeBuilder_vue_vue_type_template_id_1ee21cd5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResumeBuilder_vue_vue_type_template_id_1ee21cd5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/ResumeBuilder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/ResumeBuilder.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/ResumeBuilder.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResumeBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ResumeBuilder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ResumeBuilder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResumeBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/ResumeBuilder.vue?vue&type=template&id=1ee21cd5&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/ResumeBuilder.vue?vue&type=template&id=1ee21cd5& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResumeBuilder_vue_vue_type_template_id_1ee21cd5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ResumeBuilder.vue?vue&type=template&id=1ee21cd5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ResumeBuilder.vue?vue&type=template&id=1ee21cd5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResumeBuilder_vue_vue_type_template_id_1ee21cd5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResumeBuilder_vue_vue_type_template_id_1ee21cd5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/tuis/SimpleEditor.vue":
/*!***************************************************!*\
  !*** ./resources/js/Shared/tuis/SimpleEditor.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SimpleEditor_vue_vue_type_template_id_055e4cf7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleEditor.vue?vue&type=template&id=055e4cf7& */ "./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=template&id=055e4cf7&");
/* harmony import */ var _SimpleEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleEditor.vue?vue&type=script&lang=js& */ "./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SimpleEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleEditor.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SimpleEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SimpleEditor_vue_vue_type_template_id_055e4cf7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SimpleEditor_vue_vue_type_template_id_055e4cf7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/tuis/SimpleEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SimpleEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SimpleEditor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=template&id=055e4cf7&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=template&id=055e4cf7& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleEditor_vue_vue_type_template_id_055e4cf7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SimpleEditor.vue?vue&type=template&id=055e4cf7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/SimpleEditor.vue?vue&type=template&id=055e4cf7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleEditor_vue_vue_type_template_id_055e4cf7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleEditor_vue_vue_type_template_id_055e4cf7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);