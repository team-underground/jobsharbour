(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Welcome.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Welcome.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/tuis/Card */ "./resources/js/Shared/tuis/Card.vue");
/* harmony import */ var _Shared_tuis_LoadingButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/tuis/LoadingButton */ "./resources/js/Shared/tuis/LoadingButton.vue");
/* harmony import */ var _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/tuis/Heading */ "./resources/js/Shared/tuis/Heading.vue");
/* harmony import */ var _Shared_tuis_Badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/tuis/Badge */ "./resources/js/Shared/tuis/Badge.vue");
/* harmony import */ var _Shared_tuis_LinkTo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/tuis/LinkTo */ "./resources/js/Shared/tuis/LinkTo.vue");
/* harmony import */ var _Shared_tuis_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/tuis/Icon */ "./resources/js/Shared/tuis/Icon.vue");
/* harmony import */ var _Shared_tuis_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Shared/tuis/Avatar */ "./resources/js/Shared/tuis/Avatar.vue");
/* harmony import */ var _Shared_tuis_SearchInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Shared/tuis/SearchInput */ "./resources/js/Shared/tuis/SearchInput.vue");
/* harmony import */ var _Shared_tuis_TextInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Shared/tuis/TextInput */ "./resources/js/Shared/tuis/TextInput.vue");
/* harmony import */ var _Shared_tuis_Alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Shared/tuis/Alert */ "./resources/js/Shared/tuis/Alert.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var toCurrency = function toCurrency(n, curr) {
  var LanguageFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  return Intl.NumberFormat(LanguageFormat, {
    style: "currency",
    currency: curr
  }).format(n);
};












/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    Card: _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_1__["default"],
    LoadingButton: _Shared_tuis_LoadingButton__WEBPACK_IMPORTED_MODULE_2__["default"],
    Heading: _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_3__["default"],
    Badge: _Shared_tuis_Badge__WEBPACK_IMPORTED_MODULE_4__["default"],
    LinkTo: _Shared_tuis_LinkTo__WEBPACK_IMPORTED_MODULE_5__["default"],
    Icon: _Shared_tuis_Icon__WEBPACK_IMPORTED_MODULE_6__["default"],
    Avatar: _Shared_tuis_Avatar__WEBPACK_IMPORTED_MODULE_7__["default"],
    SearchInput: _Shared_tuis_SearchInput__WEBPACK_IMPORTED_MODULE_8__["default"],
    TextInput: _Shared_tuis_TextInput__WEBPACK_IMPORTED_MODULE_9__["default"],
    Alert: _Shared_tuis_Alert__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      name: "",
      email: "",
      isSubscribed: false
    };
  },
  props: ["jobposts", "pages", "errors"],
  methods: {
    subscribe: function subscribe() {
      var _this = this;

      this.$refs.subscribeButton.startLoading();
      this.$inertia.post("/subscriber", {
        name: this.name,
        email: this.email
      }).then(function () {
        _this.$refs.subscribeButton.stopLoading();

        if (Object.keys(_this.$page.errors).length === 0) {
          _this.name = "";
          _this.email = "";
          _this.isSubscribed = true;
        }
      });
    },
    formatCurrency: function formatCurrency(amount) {
      return toCurrency(parseFloat(amount), "INR", "en-us");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/Avatar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/Avatar.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      "default": "normal"
    },
    shape: {
      type: String,
      "default": "circle"
    },
    color: {
      type: String,
      "default": "gray"
    }
  },
  computed: {
    getName: function getName() {
      return this.name.charAt(0);
    },
    classes: function classes() {
      return {
        "w-8 h-8 text-xl": this.size === "small",
        "w-10 h-10 text-2xl": this.size === "normal",
        "w-12 h-12 text-3xl": this.size === "large",
        "w-16 h-16 text-4xl": this.size === "xlarge",
        "rounded-lg": this.shape === "rounded",
        "rounded-full": this.shape === "circle",
        "bg-gray-100 text-gray-600": this.color === "gray",
        "bg-blue-100 text-blue-600": this.color === "blue",
        "bg-orange-100 text-orange-600": this.color === "orange"
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Welcome.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Welcome.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".skew_aa {\n  transform: skew(0deg, -20deg);\n  transform-origin: 0;\n}\n.skew_bb {\n  transform: skew(20deg, -20deg);\n  transform-origin: 0;\n}\n.rotate-10 {\n  transform: rotate(10deg);\n  transform-origin: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Welcome.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Welcome.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Welcome.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e& ***!
  \*****************************************************************************************************************************************************************************************************/
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
  return _c("layout", { attrs: { title: "Home" } }, [
    _c(
      "div",
      {
        staticClass:
          "bg-blue-200 md:bg-white overflow-hidden px-4 relative z-20 pt-5"
      },
      [
        _c("div", { staticClass: "hidden" }, [
          _c("div", {
            staticClass:
              "h-4 w-24 bg-blue-100 absolute left-0 top-0 mt-4 skew_aa"
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "h-8 w-full bg-gray-100 absolute left-0 top-0 mt-10 skew_aa"
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "h-4 w-10 bg-gray-100 absolute left-0 top-0 mt-20 skew_aa"
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "-mb-10 h-16 w-32 bg-blue-200 absolute left-0 bottom-0 skew_aa"
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "mb-4 h-12 w-32 bg-gray-100 absolute left-0 bottom-0 ml-10 skew_aa"
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "-mb-16 h-20 w-32 bg-orange-200 absolute left-0 bottom-0 ml-16 skew_aa"
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "h-10 w-10 bg-blue-400 absolute right-0 top-0 mt-16 mr-6 skew_aa"
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "h-10 w-10 bg-orange-200 absolute right-0 top-0 mt-10 mr-10 skew_aa"
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "mb-32 h-16 w-32 bg-blue-200 absolute right-0 bottom-0 skew_aa"
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "mb-12 h-12 w-48 bg-gray-100 absolute right-0 bottom-0 ml-4 skew_aa"
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "-mb-16 h-20 w-64 bg-orange-200 absolute right-0 bottom-0 ml-6 skew_aa"
          })
        ]),
        _vm._v(" "),
        _c("div", {
          staticClass: "hidden md:block absolute top-0 right-0 mt-6",
          staticStyle: {
            height: "100%",
            width: "45%",
            background: "rgb(238, 248, 244)",
            "border-top-left-radius": "150px"
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "md:flex relative max-w-6xl mx-auto" }, [
          _c("div", { staticClass: "lg:w-3/5 md:flex mx-auto" }, [
            _c(
              "div",
              {
                staticClass: "py-12 md:pt-16 mb:pb-32 text-center md:text-left"
              },
              [
                _c("heading", { staticClass: "mb-1 text-blue-600 text-2xl" }, [
                  _vm._v("Struggling for jobs? in North-East?")
                ]),
                _vm._v(" "),
                _c(
                  "heading",
                  { staticClass: "mb-8", attrs: { size: "display" } },
                  [
                    _c("span", { staticClass: "block" }, [
                      _vm._v("Unveil job opportunities")
                    ]),
                    _vm._v(" in our harbour right now\n\t\t\t\t\t")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mt-4 md:mt-0 w-64 md:w-auto mx-auto" },
                  [
                    _c(
                      "loading-button",
                      {
                        staticClass:
                          "block w-full md:w-auto mx-auto shadow-dropdown",
                        attrs: { tag: "a", to: "/jobs" }
                      },
                      [_vm._v("Explore Jobs")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mt-4 md:inline-block md:ml-4" },
                      [
                        _c(
                          "loading-button",
                          {
                            staticClass:
                              "block w-full md:w-auto shadow-dropdown",
                            attrs: {
                              tag: "a",
                              to: "/categories",
                              variant: "white"
                            }
                          },
                          [_vm._v("Browse Categories")]
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
          _c(
            "div",
            { staticClass: "lg:w-2/5 relative" },
            [
              _c(
                "div",
                {
                  staticClass: "md:hidden rounded-t-full",
                  staticStyle: { background: "rgb(238, 248, 244)" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "mx-auto md:hidden text-center",
                      staticStyle: { width: "200px" }
                    },
                    [
                      _c("lottie-player", {
                        staticStyle: { width: "200px", height: "200px" },
                        attrs: {
                          src: "/lf30_editor_wJXeMM.json",
                          background: "transparent",
                          speed: "1",
                          loop: "",
                          autoplay: ""
                        }
                      })
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c("lottie-player", {
                staticClass: "mx-auto hidden md:block",
                staticStyle: { width: "420px", height: "420px" },
                attrs: {
                  src: "/lf30_editor_wJXeMM.json",
                  background: "transparent",
                  speed: "1",
                  loop: "",
                  autoplay: ""
                }
              })
            ],
            1
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "py-10 px-4" }, [
      _c("div", { staticClass: "max-w-6xl mx-auto" }, [
        _c("div", { staticClass: "md:flex -mx-4" }, [
          _c(
            "div",
            { staticClass: "md:w-2/3 px-4" },
            [
              _c(
                "div",
                { staticClass: "flex items-center mb-4 justify-between" },
                [
                  _c("heading", { attrs: { size: "heading" } }, [
                    _vm._v("Latest Job Posts")
                  ]),
                  _vm._v(" "),
                  _c("link-to", { attrs: { to: "/jobs" } }, [
                    _vm._v("View All")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.jobposts.data, function(post, idx) {
                return _c("card", { key: idx, staticClass: "mb-4 relative" }, [
                  post.job_new === "yes"
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "bg-red-500 text-white uppercase tracking-wide text-xs font-semibold rounded-bl-full absolute top-0 right-0 pl-4 pr-2 py-2"
                        },
                        [_vm._v("New")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex" }, [
                    post.company.company_logo == null
                      ? _c(
                          "div",
                          { staticClass: "mr-5 flex-shrink-0 w-16 h-16" },
                          [
                            _c("avatar", {
                              attrs: {
                                name: post.company.company_name,
                                color: "blue",
                                shape: "rounded",
                                size: "xlarge"
                              }
                            })
                          ],
                          1
                        )
                      : _c(
                          "div",
                          {
                            staticClass:
                              "flex-shrink-0 w-16 h-16 rounded-lg bg-gray-100 border block mr-5"
                          },
                          [
                            _c("img", {
                              staticClass:
                                "object-fit object-center w-full h-full rounded-lg",
                              attrs: {
                                src: post.company.company_logo_path,
                                alt: "company-logo"
                              }
                            })
                          ]
                        ),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-1" }, [
                      _c("div", { staticClass: "flex mb-4" }, [
                        _c(
                          "div",
                          { staticClass: "flex-1" },
                          [
                            _c(
                              "div",
                              { staticClass: "mb-1 pr-3" },
                              [
                                _c(
                                  "heading",
                                  {
                                    staticClass: "inline-block",
                                    attrs: { size: "large" }
                                  },
                                  [_vm._v(_vm._s(post.job_title))]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "heading",
                              {
                                staticClass: "mb-1 font-semibold",
                                attrs: { size: "small" }
                              },
                              [_vm._v(_vm._s(post.company.company_name))]
                            ),
                            _vm._v(" "),
                            _c(
                              "heading",
                              { staticClass: "mb-1", attrs: { size: "small" } },
                              [_vm._v("in " + _vm._s(post.job_category))]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "md:w-48 flex-col justify-between mt-1"
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "md:mb-1 md:flex-1 flex items-center"
                              },
                              [
                                _c("icon", {
                                  staticClass: "mr-2 text-gray-400",
                                  attrs: {
                                    width: 20,
                                    height: 20,
                                    name: "map-pin"
                                  }
                                }),
                                _vm._v(" "),
                                _c("heading", { attrs: { size: "small" } }, [
                                  _vm._v(_vm._s(post.job_location))
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "md:mb-1 md:flex-1 flex items-center"
                              },
                              [
                                _c("icon", {
                                  staticClass: "mr-2 text-gray-400",
                                  attrs: {
                                    name: "wallet",
                                    width: 20,
                                    height: 20
                                  }
                                }),
                                _vm._v(" "),
                                _c("heading", { attrs: { size: "small" } }, [
                                  _vm._v(
                                    "Rs. " + _vm._s(post.job_salary) + "/m"
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "md:mb-1 md:flex-1 flex items-center"
                              },
                              [
                                _c("icon", {
                                  staticClass: "mr-2 text-gray-400",
                                  attrs: {
                                    name: "clock",
                                    width: 20,
                                    height: 20
                                  }
                                }),
                                _vm._v(" "),
                                _c("heading", { attrs: { size: "small" } }, [
                                  _vm._v(_vm._s(post.job_type))
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "flex justify-between" },
                        [
                          _c("heading", { attrs: { size: "small" } }, [
                            _vm._v(_vm._s(post.job_published_at_formatted))
                          ]),
                          _vm._v(" "),
                          _c(
                            "link-to",
                            {
                              staticClass: "text-sm",
                              attrs: { to: "/jobs/" + post.job_slug }
                            },
                            [_vm._v("View Details")]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ])
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-center pt-5 pb-10" },
                [
                  _c("loading-button", { attrs: { tag: "a", to: "/jobs" } }, [
                    _vm._v("See More Jobs")
                  ])
                ],
                1
              )
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "md:w-1/3 px-4" },
            [
              _c(
                "card",
                {
                  staticClass: "mt-12 mb-5 relative px-5 py-5",
                  attrs: { "is-padding": false }
                },
                [
                  _c(
                    "heading",
                    {
                      staticClass:
                        "mb-2 leading-tight text-gray-700 tracking-tight text-xl font-semibold"
                    },
                    [_vm._v("Top Categories")]
                  ),
                  _vm._v(" "),
                  _c("heading", { staticClass: "mb-2" }, [
                    _vm._v("Still struggling to communicate with job seekers?")
                  ]),
                  _vm._v(" "),
                  _c("heading", { staticClass: "mb-5" }, [
                    _vm._v("Your quest is over.")
                  ]),
                  _vm._v(" "),
                  _c(
                    "loading-button",
                    {
                      staticClass:
                        "shadow bg-white hover:shadow-md text-gray-700",
                      attrs: {
                        to: "/register",
                        tag: "a",
                        variant: "secondary",
                        size: "small"
                      }
                    },
                    [_vm._v("Join us now!")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "card",
                {
                  staticClass: "mb-5 relative bg-orange-100 px-5 py-5",
                  attrs: { "is-padding": false }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "p-3 inline-flex justify-center items-center bg-orange-200 text-orange-800 rounded-full mb-3"
                    },
                    [
                      _c("icon", {
                        staticClass: "w-6 h-6",
                        attrs: { name: "briefcase" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "heading",
                    {
                      staticClass:
                        "mb-2 leading-tight text-gray-700 tracking-tight text-xl font-semibold"
                    },
                    [_vm._v("Employers?")]
                  ),
                  _vm._v(" "),
                  _c("heading", { staticClass: "mb-2" }, [
                    _vm._v("Still struggling to communicate with job seekers?")
                  ]),
                  _vm._v(" "),
                  _c("heading", { staticClass: "mb-5" }, [
                    _vm._v("Your quest is over.")
                  ]),
                  _vm._v(" "),
                  _c(
                    "loading-button",
                    {
                      staticClass:
                        "shadow bg-white hover:shadow-md text-gray-700",
                      attrs: {
                        to: "/register",
                        tag: "a",
                        variant: "secondary",
                        size: "small"
                      }
                    },
                    [_vm._v("Join us now!")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "card",
                {
                  staticClass: "mb-5 relative bg-blue-100 px-5 py-5",
                  attrs: { "is-padding": false }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "p-3 inline-flex justify-center items-center bg-blue-200 text-blue-800 rounded-full mb-3"
                    },
                    [
                      _c("icon", {
                        staticClass: "w-6 h-6",
                        attrs: { name: "bulb" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "heading",
                    {
                      staticClass:
                        "mb-2 leading-tight text-gray-700 tracking-tight text-xl font-semibold"
                    },
                    [_vm._v("Advertise with us")]
                  ),
                  _vm._v(" "),
                  _c("heading", { staticClass: "mb-5" }, [
                    _vm._v(
                      "Connect with the largest audience of active, influencial job creators, job seekers and workaholics"
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "loading-button",
                    {
                      staticClass:
                        "shadow bg-white hover:shadow-md text-gray-700",
                      attrs: { variant: "secondary", size: "small" }
                    },
                    [_vm._v("Get in touch")]
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "bg-blue-800 px-4 pt-10 md:pt-16 border-b border-gray-200 relative"
      },
      [
        _c("div", { staticClass: "max-w-3xl mx-auto mb-10" }, [
          _c(
            "h2",
            {
              staticClass:
                "md:text-center mb-4 text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight"
            },
            [_vm._v("Job seekers! sign up for our newsletter")]
          ),
          _vm._v(" "),
          _c(
            "p",
            { staticClass: "md:text-center mb-5 text-blue-300 md:text-lg" },
            [
              _vm._v(
                "Subscribe to our newsletter and get information related to jobs, careers, job resources and many more straight in your inbox. Whether you're looking for full-time, part-time, freelance, or internship opportunities, we've got you covered. No spam, guaranteed."
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "card",
          {
            staticClass:
              "max-w-4xl mx-auto bg-white shadow-md z-20 relative -mb-20"
          },
          [
            _c("div", { staticClass: "md:flex -mx-2" }, [
              _c(
                "div",
                { staticClass: "flex-1 px-2" },
                [
                  _c("text-input", {
                    staticClass: "mb-4 md:mb-0",
                    attrs: {
                      label: "Name",
                      placeholder: "eg. Iron Man",
                      errors: _vm.errors.name
                    },
                    on: {
                      keydown: function($event) {
                        delete _vm.errors.name
                      }
                    },
                    model: {
                      value: _vm.name,
                      callback: function($$v) {
                        _vm.name = $$v
                      },
                      expression: "name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex-1 px-2" },
                [
                  _c("text-input", {
                    staticClass: "mb-4 md:mb-0",
                    attrs: {
                      type: "email",
                      label: "Email",
                      placeholder: "eg. ironman@marvel.comics",
                      errors: _vm.errors.email
                    },
                    on: {
                      keydown: function($event) {
                        delete _vm.errors.email
                      }
                    },
                    model: {
                      value: _vm.email,
                      callback: function($$v) {
                        _vm.email = $$v
                      },
                      expression: "email"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "px-2" },
                [
                  _c("div", { staticClass: "mb-1 hidden md:block" }, [
                    _vm._v(" ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "loading-button",
                    {
                      ref: "subscribeButton",
                      staticClass: "shadow-md w-full md:w-auto md:-mt-1",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.subscribe()
                        }
                      }
                    },
                    [_vm._v("Subscribe Now")]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "md:w-2/3 text-xs mt-4 text-gray-500" }, [
              _vm._v(
                "By subscribing you agree to the Terms of Service and Privacy Policy. You also agree to recieve product related emails from Jobs Harbour, which you can unsubscribe from at any time."
              )
            ]),
            _vm._v(" "),
            _vm.isSubscribed
              ? _c(
                  "alert",
                  { staticClass: "mt-4", attrs: { variant: "success" } },
                  [
                    _c("strong", [_vm._v("Thank You!")]),
                    _vm._v(
                      " Now stay tuned for all the good things in your inbox.\n\t\t\t"
                    )
                  ]
                )
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "hidden md:block" }, [
          _c("div", {
            staticClass: "-mb-10 h-16 w-32 bg-blue-300 absolute left-0 skew_aa",
            staticStyle: { bottom: "55%" }
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "mb-6 h-12 w-48 bg-gray-200 absolute left-0 ml-10 skew_aa",
            staticStyle: { bottom: "55%" }
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "-mb-16 h-20 w-32 bg-orange-200 absolute left-0 ml-16 skew_aa",
            staticStyle: { bottom: "55%" }
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "mb-6 h-16 w-32 bg-blue-300 absolute right-0 skew_aa",
            staticStyle: { bottom: "10%" }
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "mb-6 h-12 w-48 bg-gray-200 absolute right-0 mr-10 skew_aa",
            staticStyle: { bottom: "10%" }
          }),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "-mb-16 h-20 w-32 bg-orange-200 absolute right-0 mr-16 skew_aa",
            staticStyle: { bottom: "10%" }
          })
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "h-24 bg-white" })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/Avatar.vue?vue&type=template&id=76089791&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/Avatar.vue?vue&type=template&id=76089791&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "inline-flex flex-shrink-0 items-center justify-center font-bold shadow-inner",
      class: _vm.classes
    },
    [_vm._v(_vm._s(_vm.getName))]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Welcome.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Welcome.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Welcome_vue_vue_type_template_id_317d1a6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=317d1a6e& */ "./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e&");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Welcome_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Welcome.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Pages/Welcome.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Welcome_vue_vue_type_template_id_317d1a6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Welcome_vue_vue_type_template_id_317d1a6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Welcome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Welcome.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Welcome.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Welcome.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Welcome.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Welcome.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_317d1a6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=template&id=317d1a6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_317d1a6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_317d1a6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/tuis/Avatar.vue":
/*!*********************************************!*\
  !*** ./resources/js/Shared/tuis/Avatar.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Avatar_vue_vue_type_template_id_76089791_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Avatar.vue?vue&type=template&id=76089791&scoped=true& */ "./resources/js/Shared/tuis/Avatar.vue?vue&type=template&id=76089791&scoped=true&");
/* harmony import */ var _Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar.vue?vue&type=script&lang=js& */ "./resources/js/Shared/tuis/Avatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Avatar_vue_vue_type_template_id_76089791_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Avatar_vue_vue_type_template_id_76089791_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "76089791",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/tuis/Avatar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/tuis/Avatar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/tuis/Avatar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Avatar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/Avatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/tuis/Avatar.vue?vue&type=template&id=76089791&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Shared/tuis/Avatar.vue?vue&type=template&id=76089791&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_76089791_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Avatar.vue?vue&type=template&id=76089791&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/Avatar.vue?vue&type=template&id=76089791&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_76089791_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_76089791_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);