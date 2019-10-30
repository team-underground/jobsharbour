(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Jobs/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Jobs/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/tuis/Heading */ "./resources/js/Shared/tuis/Heading.vue");
/* harmony import */ var _Shared_tuis_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/tuis/Icon */ "./resources/js/Shared/tuis/Icon.vue");
/* harmony import */ var _Shared_tuis_LinkTo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/tuis/LinkTo */ "./resources/js/Shared/tuis/LinkTo.vue");
/* harmony import */ var _Shared_tuis_MailTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/tuis/MailTo */ "./resources/js/Shared/tuis/MailTo.vue");
/* harmony import */ var _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/tuis/Card */ "./resources/js/Shared/tuis/Card.vue");
/* harmony import */ var _Shared_tuis_TextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/tuis/TextInput */ "./resources/js/Shared/tuis/TextInput.vue");
/* harmony import */ var _Shared_tuis_SelectInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Shared/tuis/SelectInput */ "./resources/js/Shared/tuis/SelectInput.vue");
/* harmony import */ var _Shared_tuis_LoadingButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Shared/tuis/LoadingButton */ "./resources/js/Shared/tuis/LoadingButton.vue");
/* harmony import */ var _Shared_tuis_SimpleEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Shared/tuis/SimpleEditor */ "./resources/js/Shared/tuis/SimpleEditor.vue");
/* harmony import */ var _Shared_tuis_SwitchInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Shared/tuis/SwitchInput */ "./resources/js/Shared/tuis/SwitchInput.vue");
/* harmony import */ var _Shared_tuis_DateInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/Shared/tuis/DateInput */ "./resources/js/Shared/tuis/DateInput.vue");
/* harmony import */ var _Shared_tuis_Alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/Shared/tuis/Alert */ "./resources/js/Shared/tuis/Alert.vue");
/* harmony import */ var _Shared_tuis_TextareaInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/Shared/tuis/TextareaInput */ "./resources/js/Shared/tuis/TextareaInput.vue");
/* harmony import */ var _Shared_tuis_FileInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/Shared/tuis/FileInput */ "./resources/js/Shared/tuis/FileInput.vue");
/* harmony import */ var _Shared_tuis_TagsInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/Shared/tuis/TagsInput */ "./resources/js/Shared/tuis/TagsInput.vue");
/* harmony import */ var _Shared_tuis_Badge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/Shared/tuis/Badge */ "./resources/js/Shared/tuis/Badge.vue");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    Heading: _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_1__["default"],
    Icon: _Shared_tuis_Icon__WEBPACK_IMPORTED_MODULE_2__["default"],
    LinkTo: _Shared_tuis_LinkTo__WEBPACK_IMPORTED_MODULE_3__["default"],
    Card: _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_5__["default"],
    TextInput: _Shared_tuis_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"],
    SelectInput: _Shared_tuis_SelectInput__WEBPACK_IMPORTED_MODULE_7__["default"],
    SimpleEditor: _Shared_tuis_SimpleEditor__WEBPACK_IMPORTED_MODULE_9__["default"],
    LoadingButton: _Shared_tuis_LoadingButton__WEBPACK_IMPORTED_MODULE_8__["default"],
    SwitchInput: _Shared_tuis_SwitchInput__WEBPACK_IMPORTED_MODULE_10__["default"],
    DateInput: _Shared_tuis_DateInput__WEBPACK_IMPORTED_MODULE_11__["default"],
    Alert: _Shared_tuis_Alert__WEBPACK_IMPORTED_MODULE_12__["default"],
    TextareaInput: _Shared_tuis_TextareaInput__WEBPACK_IMPORTED_MODULE_13__["default"],
    FileInput: _Shared_tuis_FileInput__WEBPACK_IMPORTED_MODULE_14__["default"],
    TagsInput: _Shared_tuis_TagsInput__WEBPACK_IMPORTED_MODULE_15__["default"],
    Badge: _Shared_tuis_Badge__WEBPACK_IMPORTED_MODULE_16__["default"],
    MailTo: _Shared_tuis_MailTo__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: ["jobtypes", "categories", "industries", "errors", "post", "companies", "can", "experiencelevels"],
  mounted: function mounted() {
    MailtoUI.run();
  },
  data: function data() {
    return {
      job: {
        company_id: this.post.company_id,
        job_title: this.post.job_title,
        job_location: this.post.job_location,
        job_category: this.getKeyByValue(this.categories, this.post.job_category),
        job_experience_level: this.getKeyByValue(this.experiencelevels, this.post.job_experience_level),
        job_type: this.getKeyByValue(this.jobtypes, this.post.job_type),
        job_salary: this.post.job_salary,
        job_skills: this.post.job_skills,
        job_email: this.post.job_email,
        job_description: this.post.job_description,
        job_starting_date: this.post.job_starting_date,
        job_closing_date: this.post.job_closing_date,
        seo_title: this.post.seo_title,
        meta_description: this.post.meta_description,
        meta_keywords: this.post.meta_keywords
      },
      salaries: {
        "10k-15k": "10k-15k",
        "15k-20k": "15k-20k",
        "20k-40k": "20k-40k",
        "40k+": "40k+"
      }
    };
  },
  methods: {
    getKeyByValue: function getKeyByValue(obj, value) {
      return Object.keys(obj).find(function (key) {
        return obj[key] == value;
      });
    },
    submit: function submit() {
      var _this = this;

      var data = {};

      if (!this.can["update-job-seo"]) {
        var _this$job = this.job,
            meta_keywords = _this$job.meta_keywords,
            seo_title = _this$job.seo_title,
            meta_description = _this$job.meta_description,
            updatedJobPost = _objectWithoutProperties(_this$job, ["meta_keywords", "seo_title", "meta_description"]);

        data = updatedJobPost;
      } else {
        data = this.job;
      }

      this.$refs.jobSaveButton.startLoading();
      data._method = "put";
      this.$inertia.post(this.route("admin.jobs.update", this.post.uuid), data).then(function () {
        _this.$refs.jobSaveButton.stopLoading(); // if (Object.keys(this.$page.errors).length === 0) {
        // 	// this.form.photo = null;
        // 	// this.form.password = null;
        // }

      })["catch"](function () {
        _this.$refs.jobSaveButton.stopLoading();
      });
    },
    publishJob: function publishJob() {
      var _this2 = this;

      this.$refs.jobPublishButton.startLoading();
      this.$inertia.post(this.route("admin.jobs.publish", this.post.uuid), {
        _method: "post"
      }).then(function () {
        _this2.$refs.jobPublishButton.stopLoading();
      })["catch"](function () {
        _this2.$refs.jobSaveButton.stopLoading();
      });
    },
    deleteCompanyLogo: function deleteCompanyLogo(uuid) {
      if (confirm("Are you sure you want to delete this logo?")) {
        this.$inertia["delete"](this.route("admin.companies.deletelogo", uuid));
      }
    } // getDate(date) {
    // 	const date = new Date(date);
    // 	const day = date.getDate();
    // 	const month = date.getMonth() + 1;
    // 	const year = date.getFullYear();
    // 	return `${day}/${month}/${year}`;
    // }

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/TagsInput.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/TagsInput.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    id: {
      type: String,
      "default": function _default() {
        return "text-input-".concat(this._uid);
      }
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    value: Array,
    label: String
  },
  data: function data() {
    return {
      newTag: ""
    };
  },
  methods: {
    addTag: function addTag() {
      if (this.newTag.trim().length === 0 || this.value.includes(this.newTag.trim())) {
        return;
      }

      this.$emit("input", [].concat(_toConsumableArray(this.value), [this.newTag.trim()]));
      this.newTag = "";
    },
    removeTag: function removeTag(tag) {
      this.$emit("input", this.value.filter(function (t) {
        return t !== tag;
      }));
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Jobs/Edit.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Jobs/Edit.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vue-file-agent .file-preview-wrapper:before {\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n#profile-pic-demo .drop-help-text {\n  display: none;\n}\n#profile-pic-demo .is-drag-over .drop-help-text {\n  display: block;\n}\n#profile-pic-demo .profile-pic-upload-block {\n  border: 2px dashed transparent;\n  padding: 20px;\n  padding-top: 0;\n}\n#profile-pic-demo .is-drag-over.profile-pic-upload-block {\n  border-color: #aaa;\n}\n#profile-pic-demo .vue-file-agent {\n  width: 180px;\n  float: left;\n  margin: 0 15px 5px 0;\n  border: 0;\n  box-shadow: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/TagsInput.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/TagsInput.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tags-input {\n  display: flex;\n  flex-wrap: wrap;\n  background-color: #fff;\n  border-width: 2px;\n  border-radius: 0.625rem;\n  padding-left: 0.5rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.25rem;\n}\n.tags-input-tag {\n  display: inline-flex;\n  line-height: 1;\n  align-items: center;\n  font-size: 0.875rem;\n  background-color: #e5f4f8;\n  color: #2598b5;\n  border-radius: 0.625rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 0.25rem 0.35rem;\n  margin-right: 0.5rem;\n  margin-bottom: 0.25rem;\n}\n.tags-input-tag:last-of-type {\n  margin-right: 0;\n}\n.tags-input-remove {\n  color: #2598b5;\n  font-size: 1.125rem;\n  line-height: 1;\n}\n.tags-input-remove:first-child {\n  margin-right: 0.25rem;\n}\n.tags-input-remove:last-child {\n  margin-left: 0.25rem;\n}\n.tags-input-remove:focus {\n  outline: 0;\n}\n.tags-input-text {\n  flex: 1;\n  outline: 0;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  margin-left: 0.5rem;\n  margin-bottom: 0.25rem;\n  min-width: 10rem;\n}\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Jobs/Edit.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Jobs/Edit.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Jobs/Edit.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/TagsInput.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/TagsInput.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TagsInput.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/TagsInput.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Jobs/Edit.vue?vue&type=template&id=b83c392c&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Jobs/Edit.vue?vue&type=template&id=b83c392c& ***!
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
                { staticClass: "mb-2", attrs: { to: "/admin/jobs" } },
                [
                  _c("icon", {
                    staticClass: "-ml-2",
                    attrs: { name: "chevron-left" }
                  }),
                  _vm._v("Back to Jobs\n\t\t\t\t")
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "md:flex items-center" }, [
                _c(
                  "div",
                  { staticClass: "flex-1" },
                  [
                    _c(
                      "heading",
                      {
                        staticClass: "inline-flex",
                        attrs: { size: "heading" }
                      },
                      [_vm._v("Edit Job Posts Details")]
                    ),
                    _vm._v(" "),
                    _vm.post.job_status === "Published"
                      ? _c(
                          "badge",
                          {
                            staticClass: "ml-3",
                            attrs: { variant: "success" }
                          },
                          [_vm._v(_vm._s(_vm.post.job_status))]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.post.job_status === "Moderation"
                      ? _c("badge", { attrs: { variant: "warning" } }, [
                          _vm._v(_vm._s(_vm.post.job_status))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex" },
                  [
                    _vm.can["publish-job"]
                      ? _c(
                          "loading-button",
                          {
                            ref: "jobPublishButton",
                            attrs: {
                              type: "button",
                              size: "small",
                              variant: "success"
                            },
                            on: { click: _vm.publishJob }
                          },
                          [_vm._v("Publish Post")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "loading-button",
                      {
                        ref: "jobSaveButton",
                        attrs: { type: "submit", size: "small" }
                      },
                      [_vm._v("Update Post")]
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
          _c("div", { staticClass: "max-w-6xl mx-auto px-4" }, [
            _c("div", { staticClass: "md:flex mb-10 -mx-4" }, [
              _c(
                "div",
                { staticClass: "md:w-1/3 mb-3 px-4 md:px-0" },
                [
                  _c(
                    "heading",
                    { staticClass: "mb-1", attrs: { size: "large" } },
                    [_vm._v("Job Details")]
                  ),
                  _vm._v(" "),
                  _c("heading", { staticClass: "mb-4" }, [
                    _vm._v(
                      "Introduce job seekers to the role by describing responsibilities, skills and technologies..."
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
                      _c("text-input", {
                        staticClass: "mb-4",
                        attrs: { label: "Job ID", readonly: "", disabled: "" },
                        model: {
                          value: _vm.post.job_id,
                          callback: function($$v) {
                            _vm.$set(_vm.post, "job_id", $$v)
                          },
                          expression: "post.job_id"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "select-input",
                        {
                          staticClass: "mb-4",
                          attrs: {
                            label: "Select Company",
                            options: _vm.companies,
                            "select-value": "value",
                            errors: _vm.errors["company_id"]
                          },
                          on: {
                            keydown: function($event) {
                              delete _vm.errors["company_id"]
                            }
                          },
                          model: {
                            value: _vm.job.company_id,
                            callback: function($$v) {
                              _vm.$set(_vm.job, "company_id", $$v)
                            },
                            expression: "job.company_id"
                          }
                        },
                        [
                          _c(
                            "option",
                            { attrs: { value: "null", disabled: "" } },
                            [_vm._v("Select company")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("text-input", {
                        staticClass: "mb-4",
                        attrs: {
                          label: "Title",
                          placeholder: "eg. Senior Web Developer",
                          errors: _vm.errors["job_title"]
                        },
                        on: {
                          keydown: function($event) {
                            delete _vm.errors["job_title"]
                          }
                        },
                        model: {
                          value: _vm.job.job_title,
                          callback: function($$v) {
                            _vm.$set(_vm.job, "job_title", $$v)
                          },
                          expression: "job.job_title"
                        }
                      }),
                      _vm._v(" "),
                      _c("text-input", {
                        staticClass: "mb-4",
                        attrs: {
                          label: "Location",
                          placeholder: "City or Town/Place name",
                          errors: _vm.errors["job_location"]
                        },
                        on: {
                          keydown: function($event) {
                            delete _vm.errors["job_location"]
                          }
                        },
                        model: {
                          value: _vm.job.job_location,
                          callback: function($$v) {
                            _vm.$set(_vm.job, "job_location", $$v)
                          },
                          expression: "job.job_location"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex flex-wrap -mx-4" }, [
                        _c(
                          "div",
                          { staticClass: "w-1/2 px-4" },
                          [
                            _c(
                              "select-input",
                              {
                                staticClass: "mb-4",
                                attrs: {
                                  label: "Type",
                                  options: _vm.jobtypes,
                                  errors: _vm.errors["job_type"]
                                },
                                on: {
                                  keydown: function($event) {
                                    delete _vm.errors["job_type"]
                                  }
                                },
                                model: {
                                  value: _vm.job.job_type,
                                  callback: function($$v) {
                                    _vm.$set(_vm.job, "job_type", $$v)
                                  },
                                  expression: "job.job_type"
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { value: "null", disabled: "" } },
                                  [_vm._v("Select job type")]
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
                                  label: "Salary (monthly)",
                                  options: _vm.salaries,
                                  errors: _vm.errors["job_salary"]
                                },
                                on: {
                                  keydown: function($event) {
                                    delete _vm.errors["job_salary"]
                                  }
                                },
                                model: {
                                  value: _vm.job.job_salary,
                                  callback: function($$v) {
                                    _vm.$set(_vm.job, "job_salary", $$v)
                                  },
                                  expression: "job.job_salary"
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { value: "null", disabled: "" } },
                                  [_vm._v("Select salary")]
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
                                  label: "Category",
                                  options: _vm.categories,
                                  errors: _vm.errors["job_category"]
                                },
                                on: {
                                  keydown: function($event) {
                                    delete _vm.errors["job_category"]
                                  }
                                },
                                model: {
                                  value: _vm.job.job_category,
                                  callback: function($$v) {
                                    _vm.$set(_vm.job, "job_category", $$v)
                                  },
                                  expression: "job.job_category"
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { value: "null", disabled: "" } },
                                  [_vm._v("Select job category")]
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
                                  label: "Experience Level",
                                  options: _vm.experiencelevels,
                                  errors: _vm.errors["job_experience_level"]
                                },
                                on: {
                                  keydown: function($event) {
                                    delete _vm.errors["job_experience_level"]
                                  }
                                },
                                model: {
                                  value: _vm.job.job_experience_level,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.job,
                                      "job_experience_level",
                                      $$v
                                    )
                                  },
                                  expression: "job.job_experience_level"
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { value: "null", disabled: "" } },
                                  [_vm._v("Select experience level")]
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("text-input", {
                        staticClass: "mb-4",
                        attrs: {
                          type: "email",
                          label: "Email for candidate",
                          placeholder:
                            "Email address where job seekers send their resume...",
                          errors: _vm.errors["job_email"]
                        },
                        on: {
                          keydown: function($event) {
                            delete _vm.errors["job_email"]
                          }
                        },
                        model: {
                          value: _vm.job.job_email,
                          callback: function($$v) {
                            _vm.$set(_vm.job, "job_email", $$v)
                          },
                          expression: "job.job_email"
                        }
                      }),
                      _vm._v(" "),
                      _c("tags-input", {
                        staticClass: "mb-4",
                        attrs: { label: "Skills" },
                        model: {
                          value: _vm.job.job_skills,
                          callback: function($$v) {
                            _vm.$set(_vm.job, "job_skills", $$v)
                          },
                          expression: "job.job_skills"
                        }
                      }),
                      _vm._v(" "),
                      _c("simple-editor", {
                        staticClass: "mb-4",
                        attrs: {
                          label: "Description",
                          errors: _vm.errors["job_description"]
                        },
                        on: {
                          keydown: function($event) {
                            delete _vm.errors["job_description"]
                          }
                        },
                        model: {
                          value: _vm.job.job_description,
                          callback: function($$v) {
                            _vm.$set(_vm.job, "job_description", $$v)
                          },
                          expression: "job.job_description"
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
            _c("div", { staticClass: "md:flex mb-10 -mx-4" }, [
              _c(
                "div",
                { staticClass: "md:w-1/3 px-4" },
                [
                  _c(
                    "heading",
                    { staticClass: "mb-1", attrs: { size: "large" } },
                    [_vm._v("Job Post Dates")]
                  ),
                  _vm._v(" "),
                  _c("heading", { staticClass: "mb-4" }, [
                    _vm._v(
                      "The date when the job post will start appear in the site & closed for applying."
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
                  _c("card", [
                    _c("div", { staticClass: "flex flex-wrap -mx-4" }, [
                      _c(
                        "div",
                        { staticClass: "w-1/2 px-4" },
                        [
                          _c("date-input", {
                            staticClass: "w-48 mb-4",
                            attrs: {
                              label: "Job Opening Date",
                              placeholder: "Select date",
                              readonly: ""
                            },
                            model: {
                              value: _vm.job.job_starting_date,
                              callback: function($$v) {
                                _vm.$set(_vm.job, "job_starting_date", $$v)
                              },
                              expression: "job.job_starting_date"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "w-1/2 px-4" },
                        [
                          _c("date-input", {
                            staticClass: "w-48",
                            attrs: {
                              label: "Job Closing Date",
                              placeholder: "Select date",
                              readonly: ""
                            },
                            model: {
                              value: _vm.job.job_closing_date,
                              callback: function($$v) {
                                _vm.$set(_vm.job, "job_closing_date", $$v)
                              },
                              expression: "job.job_closing_date"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "md:flex -mx-4" }, [
              _c(
                "div",
                { staticClass: "md:w-1/3 px-4" },
                [
                  _c(
                    "heading",
                    { staticClass: "mb-1", attrs: { size: "large" } },
                    [_vm._v("SEO Content")]
                  ),
                  _vm._v(" "),
                  _c("heading", { staticClass: "mb-4" }, [
                    _vm._v("Write great content optimized for SEO")
                  ]),
                  _vm._v(" "),
                  !_vm.can["update-job-seo"]
                    ? _c(
                        "alert",
                        { staticClass: "my-6", attrs: { "with-icon": false } },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\tYou can not update your seo content when the jobpost is published. For further information contact our\n\t\t\t\t\t\t\t"
                          ),
                          _c("mail-to", [_vm._v("support team")]),
                          _vm._v(".\n\t\t\t\t\t\t")
                        ],
                        1
                      )
                    : _vm._e()
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
                      _c("textarea-input", {
                        staticClass: "mb-4",
                        attrs: {
                          label: "Meta Description",
                          placeholder:
                            "eg. Ability to write code – HTML & CSS (SCSS flavor of SASS preferred when writing CSS)Proficient in Photoshop, Illustrator, bonus points for familiarity with Sketch (Sketch is our preferred concepting)Cross-browser and platform testing as standard practiceExperience using Invision a plusExperience in video production a plus or, at a minimum, a willingness to learn",
                          readonly: !_vm.can["update-job-seo"]
                        },
                        model: {
                          value: _vm.job.meta_description,
                          callback: function($$v) {
                            _vm.$set(_vm.job, "meta_description", $$v)
                          },
                          expression: "job.meta_description"
                        }
                      }),
                      _vm._v(" "),
                      _c("tags-input", {
                        staticClass: "mb-4",
                        attrs: {
                          label: "Meta Keywords",
                          disabled: !_vm.can["update-job-seo"]
                        },
                        model: {
                          value: _vm.job.meta_keywords,
                          callback: function($$v) {
                            _vm.$set(_vm.job, "meta_keywords", $$v)
                          },
                          expression: "job.meta_keywords"
                        }
                      }),
                      _vm._v(" "),
                      _c("text-input", {
                        staticClass: "mb-4",
                        attrs: {
                          label: "SEO Title",
                          placeholder: "eg. Senior web developer in guwahati",
                          readonly: !_vm.can["update-job-seo"]
                        },
                        model: {
                          value: _vm.job.seo_title,
                          callback: function($$v) {
                            _vm.$set(_vm.job, "seo_title", $$v)
                          },
                          expression: "job.seo_title"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/TagsInput.vue?vue&type=template&id=68a9a129&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/tuis/TagsInput.vue?vue&type=template&id=68a9a129& ***!
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
  return _c("div", [
    _vm.label
      ? _c(
          "label",
          {
            staticClass: "form-label block mb-1 font-semibold text-gray-700",
            attrs: { for: _vm.id }
          },
          [_vm._v(_vm._s(_vm.label))]
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "tags-input" },
      [
        _vm._l(_vm.value, function(tag, idx) {
          return _c("span", { key: idx, staticClass: "tags-input-tag" }, [
            _c("span", [_vm._v(_vm._s(tag))]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "tags-input-remove",
                attrs: { type: "button", disabled: _vm.disabled },
                on: {
                  click: function($event) {
                    return _vm.removeTag(tag)
                  }
                }
              },
              [_vm._v("×")]
            )
          ])
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newTag,
              expression: "newTag"
            }
          ],
          staticClass: "tags-input-text",
          attrs: { placeholder: "Add tag...", readonly: _vm.disabled },
          domProps: { value: _vm.newTag },
          on: {
            keydown: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              $event.preventDefault()
              return _vm.addTag($event)
            },
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.newTag = $event.target.value
            }
          }
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Jobs/Edit.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Jobs/Edit.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_b83c392c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=b83c392c& */ "./resources/js/Pages/Jobs/Edit.vue?vue&type=template&id=b83c392c&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Jobs/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Pages/Jobs/Edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_b83c392c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_b83c392c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Jobs/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Jobs/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Jobs/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Jobs/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Jobs/Edit.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Jobs/Edit.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Jobs/Edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/Jobs/Edit.vue?vue&type=template&id=b83c392c&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Jobs/Edit.vue?vue&type=template&id=b83c392c& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_b83c392c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=b83c392c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Jobs/Edit.vue?vue&type=template&id=b83c392c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_b83c392c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_b83c392c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/Shared/tuis/TagsInput.vue":
/*!************************************************!*\
  !*** ./resources/js/Shared/tuis/TagsInput.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TagsInput_vue_vue_type_template_id_68a9a129___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagsInput.vue?vue&type=template&id=68a9a129& */ "./resources/js/Shared/tuis/TagsInput.vue?vue&type=template&id=68a9a129&");
/* harmony import */ var _TagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagsInput.vue?vue&type=script&lang=js& */ "./resources/js/Shared/tuis/TagsInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TagsInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TagsInput.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Shared/tuis/TagsInput.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TagsInput_vue_vue_type_template_id_68a9a129___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TagsInput_vue_vue_type_template_id_68a9a129___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/tuis/TagsInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/tuis/TagsInput.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Shared/tuis/TagsInput.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TagsInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/TagsInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/tuis/TagsInput.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Shared/tuis/TagsInput.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TagsInput.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/TagsInput.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Shared/tuis/TagsInput.vue?vue&type=template&id=68a9a129&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Shared/tuis/TagsInput.vue?vue&type=template&id=68a9a129& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_template_id_68a9a129___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TagsInput.vue?vue&type=template&id=68a9a129& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/tuis/TagsInput.vue?vue&type=template&id=68a9a129&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_template_id_68a9a129___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsInput_vue_vue_type_template_id_68a9a129___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);