(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Privacy.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Privacy.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Shared_tuis_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/tuis/Heading */ "./resources/js/Shared/tuis/Heading.vue");
/* harmony import */ var _Shared_tuis_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/tuis/Icon */ "./resources/js/Shared/tuis/Icon.vue");
/* harmony import */ var _Shared_tuis_LinkTo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/tuis/LinkTo */ "./resources/js/Shared/tuis/LinkTo.vue");
/* harmony import */ var _Shared_tuis_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/tuis/Card */ "./resources/js/Shared/tuis/Card.vue");
/* harmony import */ var _Shared_tuis_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/tuis/List */ "./resources/js/Shared/tuis/List.vue");
/* harmony import */ var _Shared_tuis_LoadingButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/tuis/LoadingButton */ "./resources/js/Shared/tuis/LoadingButton.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    List: _Shared_tuis_List__WEBPACK_IMPORTED_MODULE_5__["default"],
    LoadingButton: _Shared_tuis_LoadingButton__WEBPACK_IMPORTED_MODULE_6__["default"]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Privacy.vue?vue&type=template&id=411677ef&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Privacy.vue?vue&type=template&id=411677ef& ***!
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
  return _c("layout", [
    _c("div", { staticClass: "px-4 py-6 md:py-16 relative" }, [
      _c(
        "div",
        { staticClass: "max-w-5xl mx-auto" },
        [
          _c(
            "heading",
            { staticClass: "mb-10 text-center", attrs: { size: "heading2" } },
            [_vm._v("Privacy policy")]
          ),
          _vm._v(" "),
          _c("heading", { staticClass: "mb-3", attrs: { size: "large" } }, [
            _vm._v("Information Collection")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-2" }, [
            _vm._v(
              'The Privacy Policy provided below is with respect to our use and protection of any personal information/data you provide to us through our website. Sumato Globaltech is the sole owner of the website Jobs Harbour (hereinafter "website"). The Policy is applicable to the website. You may be required to provide personally identifiable information at several different points on our website. By accepting the policy at the time of registration, you expressly approve and consent to our collection, storage, use and disclosure of your personal information as described in this Policy and terms and conditions.'
            )
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-2" }, [
            _vm._v(
              "When you visit/surf our website, certain personal information about you such as your IP Address, etc. may be automatically stored with us. However, if you choose to avail of certain services on our website, you shall be required to provide certain personal information for the registration and/or access to such services/web pages. Such information may include, without limitation, your name, email address, contact address, mobile/telephone number(s), sex, age, occupation, interests, credit card information, billing information, financial information, content, IP address, standard web log information, information about your computer hardware and software and such other information as may be required for your interaction with the services and from which your identity is discernible. We may also collect demographic information that is not unique to you such as code, preferences, favorites, etc. Further, sometimes you may be asked to provide descriptive, cultural, preferential and social & life style information."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "In addition to the above we may indirectly also collect information about you when you use certain third party services available on our website. We may also collect certain information about the use of our website by you, such as the services you access/use or areas you visit."
            )
          ]),
          _vm._v(" "),
          _c("heading", { staticClass: "my-3", attrs: { size: "large" } }, [
            _vm._v("Cookies and Other Tracking Technologies")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-2" }, [
            _vm._v(
              'Some of our Web pages utilize "cookies" and other tracking technologies. A "cookie" is a small text file that may be used, for example, to collect information about Web site activity. Some cookies and other technologies may serve to recall Personal Information previously indicated by a Web user. Most browsers allow you to control cookies, including whether or not to accept them and how to remove them.'
            )
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-2" }, [
            _vm._v(
              "You may set most browsers to notify you if you receive a cookie, or you may choose to block cookies with your browser, but please note that if you choose to erase or block your cookies, you will need to re-enter your original user ID and password to gain access to certain parts of the Web site and App."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Tracking technologies may record information such as Internet domain and host names; Internet protocol (IP) addresses; browser software and operating system types; clickstream patterns; and dates and times that our site is accessed. Our use of cookies and other tracking technologies allows us to improve our Web site and your Web experience. We may also analyze information that does not contain Personal Information for trends and statistics."
            )
          ]),
          _vm._v(" "),
          _c("heading", { staticClass: "my-3", attrs: { size: "large" } }, [
            _vm._v("Use")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-2" }, [
            _vm._v(
              "If you choose to provide us with the above mentioned information, you consent to the use, transfer, processing and storage of the information so provided by you on our servers. The information provided by you shall not be given to third parties (third parties for this purpose do not include our group / holding / subsidiary companies and or our service partners / associates) for marketing purposes and other related activities without your prior consent. Though if you choose to make your profile visible, all information pertaining to your profile will be visible to third parties."
            )
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-2" }, [
            _vm._v("The information provided by you shall be used by us to:")
          ]),
          _vm._v(" "),
          _c("list", {
            attrs: {
              "unordered-list-color": "text-blue-600",
              lists: [
                "Improve our website and enable us to provide you the most user-friendly experience which is safe, smooth and customized",
                "Improve and customize our services, content and other commercial / non-commercial features on the website",
                "Ask you to send feedback on any or all of our services",
                "Send newsletter(s) to you (Provided you subscribe to the same)",
                "Send you service-related announcements on rare occasions when it is necessary to do so",
                "Contact you or send you e-mail or other communications regarding updates on our website, new job opportunities, services and additional/new job postings/openings which may be of your interest",
                "Provide customer support and the services you request",
                "Avoid/check illegal and/or potentially prohibited activities and to enforce Agreements",
                "Comply with any court judgment / decree / order / directive / legal & government authority /applicable law",
                "Investigate potential violations or applicable national & international laws",
                "Investigate deliberate damage to the website/services or its legitimate operation",
                "Detect, prevent, or otherwise address security and/or technical issues",
                " The members of our corporate family and group, affiliates, service providers and third parties under a contract to provide joint services, contents and marketing communications"
              ]
            }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "my-2" }, [
            _vm._v(
              "If you consent to receive information about third party (such as employers, recruiters or others) opportunities, job opportunities or you make your profile visible we may disclose your information to such third parties for sending you communications via e-mail or otherwise to inform about new opportunities and new job postings/openings which may be of your interest. Also we might use your personal information to communicate with you and ascertain if you are interested in third party services."
            )
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-2" }, [
            _vm._v(
              "Your information shall be disclosed to our employees/service providers who provide services to us vis-a-vis our website and the services therein. These employees will have access to the information provided by you in order to perform their functions/services efficiently."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "If you choose to use our referral service to tell a friend about our website or refer a job posting/service, we will ask you for your friend's name and email address. We will automatically send your friend an email inviting him or her to visit the website. However, your friend may contact us to request that he does not require such services/content/email or we remove the information related to him from our database."
            )
          ]),
          _vm._v(" "),
          _c("heading", { staticClass: "my-3", attrs: { size: "large" } }, [
            _vm._v("Resume Information")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-2" }, [
            _vm._v(
              "Based on the profile status selected by you, your resume shall be accessible to potential employers. You can store your resume on our servers and make it searchable by third parties/employers/recruiters. You may only use it for applying online though our website and denying access to others."
            )
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-2" }, [
            _vm._v(
              "If your profile status is visible, your resume is searchable and you make it non-confidential and visible to all and in such a case anyone can have access to your resume. If you keep your profile status anonymous, you opt to keep the resume confidential and then only those will have access to it to which you have applied for a job/opening."
            )
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-2" }, [
            _vm._v(
              "We cannot guarantee that third parties shall gain access to your resume neither we are responsible for the use made of the resume by third parties to who you apply or who have access to our database, while your profile status has been made visible by you. In case of making your profile status visible, we are not responsible for the privacy, secrecy or retention of your resume."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "You may edit, update and remove your resume at any time but parties who have access to our database (while your resume or profile was visible) may have retained a copy of your resume in their own files. We cannot be held responsible for such retention/storage. You should always remember that once you post your resume on our website with your profile visible, anybody will have access to the same and we do not have any control over such access and use of your resume/information by third parties. In case your profile status is anonymous and you apply for a job on our site, the prospective employer will also be able to retain a copy of your Resume and Profile."
            )
          ]),
          _vm._v(" "),
          _c("heading", { staticClass: "my-3", attrs: { size: "large" } }, [
            _vm._v("Changing Your Personal Information")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-2" }, [
            _vm._v(
              "You can access and modify your personal information by signing on to the website. We will not modify the information provided by you. However, we recommend that you update your personal information as soon as such changes are necessitated."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Where you make a public posting, you may not be able to change or remove it nor shall you be able to close your account. Upon your request, we will close your account and remove your personal information from view as soon as reasonably possible, based on your account activity and in accordance with applicable law(s). However, we will retain your personal information from closed accounts to comply with law, Avoid/check illegal and/or potentially prohibited activities and to enforce User Agreements; Comply with any court judgment / decree / order / directive / legal & government authority /applicable law; Investigate potential violations or applicable national & international laws; Investigate deliberate damage to the website/services or its legitimate operation; Detect, prevent, or otherwise address security and/or technical issues; Protect the rights, property or safety of Jobs Harbour and/or its Directors, employees and the general public at large; Respond to Claims of third parties; and take such other actions as may be permitted by law."
            )
          ]),
          _vm._v(" "),
          _c("heading", { staticClass: "my-3", attrs: { size: "large" } }, [
            _vm._v("Account Protection")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Your password is the key to your account. You shall be solely responsible for all the activities happening under your username and you shall be solely responsible for keeping your password secure. Do not disclose your password to anyone. If you share your password or your personal information with others, you shall be solely responsible for all actions taken under your username and you may lose substantial control over your personal information and may be subject to legally binding actions taken on your behalf. Therefore, if your password has been compromised for any reason, you should immediately change your password."
            )
          ]),
          _vm._v(" "),
          _c("heading", { staticClass: "my-3", attrs: { size: "large" } }, [
            _vm._v("Business Transaction")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Jobs Harbour goes through a business transition, such as a merger, acquisition by another company, or sale of all or a portion of its assets, your personally identifiable information will likely be among the assets transferred. Where your information is transferred you will be notified via email/prominent notice on our website for 30 days of any such change in ownership or control of your personal information."
            )
          ]),
          _vm._v(" "),
          _c("heading", { staticClass: "my-3", attrs: { size: "large" } }, [
            _vm._v("Security")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "The security of your personal information is important to us. When you enter your personal information we treat the data as an asset that must be protected and use tools (encryption, passwords, physical security, etc.) to protect your personal information against unauthorized access and disclosure. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure, therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security nor can we guarantee that third parties shall not unlawfully intercept or access transmissions or private communications, and that other users may abuse or misuse your personal information that you provide. Therefore, although we work hard to protect your information, we do not promise, and you should not expect, that your personal information or private communications will always remain private."
            )
          ]),
          _vm._v(" "),
          _c("heading", { staticClass: "my-3", attrs: { size: "large" } }, [
            _vm._v("Links to Other Sites")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-2" }, [
            _vm._v(
              "The website contains links to other sites that are not owned or controlled by Jobs Harbour. Please be aware that we, Jobs Harbour and/or the website, are not responsible for the privacy practices of such other sites."
            )
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-2" }, [
            _vm._v(
              "We encourage you to be aware when you leave our site and to read the privacy statements of each and every Web site that collects personally identifiable information."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "This privacy statement applies only to information collected by the website or to our other related websites provided it appears at the footer of the page therein. It does not apply to third party advertisements which appear on our websites and we suggest you read the privacy statements of such advertisers."
            )
          ]),
          _vm._v(" "),
          _c("heading", { staticClass: "my-3", attrs: { size: "large" } }, [
            _vm._v("Changes in this Privacy Statement")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-2" }, [
            _vm._v(
              "If we decide to change our privacy policy, we will post those changes to this privacy statement and such other places we deem appropriate so that you are updated about the manner we collect information, what information we collect, how we use it and under what circumstances, if any, we disclose it."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "We reserve the right to modify this privacy statement at any time, so please review it frequently at Jobs Harbour."
            )
          ]),
          _vm._v(" "),
          _c("heading", { staticClass: "my-3", attrs: { size: "large" } }, [
            _vm._v("Contact Us")
          ]),
          _vm._v(" "),
          _c(
            "p",
            [
              _vm._v(
                "If you have any questions or suggestions regarding our privacy policy, please contact us at:"
              ),
              _c("link-to", { attrs: { to: "mailto:hello@jobsharbour.com" } }, [
                _vm._v("hello@jobsharbour.com")
              ])
            ],
            1
          )
        ],
        1
      )
    ])
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

/***/ "./resources/js/Pages/Privacy.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Privacy.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Privacy_vue_vue_type_template_id_411677ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Privacy.vue?vue&type=template&id=411677ef& */ "./resources/js/Pages/Privacy.vue?vue&type=template&id=411677ef&");
/* harmony import */ var _Privacy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Privacy.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Privacy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Privacy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Privacy_vue_vue_type_template_id_411677ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Privacy_vue_vue_type_template_id_411677ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Privacy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Privacy.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Privacy.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Privacy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Privacy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Privacy.vue?vue&type=template&id=411677ef&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Privacy.vue?vue&type=template&id=411677ef& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_vue_vue_type_template_id_411677ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Privacy.vue?vue&type=template&id=411677ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Privacy.vue?vue&type=template&id=411677ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_vue_vue_type_template_id_411677ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Privacy_vue_vue_type_template_id_411677ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);