(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Charts/PageViews.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Charts/PageViews.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_trend_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-trend-chart */ "./node_modules/vue-trend-chart/dist/vue-trend-chart.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    TrendChart: vue_trend_chart__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    total: Object,
    unique: Object
  },
  data: function data() {
    return {
      datasets: [{
        data: Object.values(this.total),
        smooth: true,
        showPoints: true,
        fill: true,
        className: "curve1"
      }, {
        data: Object.values(this.unique),
        smooth: true,
        showPoints: true,
        className: "curve2"
      }],
      grid: {
        verticalLines: true,
        horizontalLines: true
      },
      labels: {
        xLabels: Object.keys(this.total).map(function (value) {
          return moment__WEBPACK_IMPORTED_MODULE_2___default()(value).format("DD, MMM");
        }),
        yLabels: 2,
        yLabelsTextFormatter: function yLabelsTextFormatter(val) {
          return Math.round(val * 100) / 100 + " views";
        }
      },
      tooltipData: null,
      popper: null,
      popperIsActive: false
    };
  },
  methods: {
    initPopper: function initPopper() {
      var chart = document.querySelector(".random-chart");
      var ref = chart.querySelector(".active-line");
      var tooltip = this.$refs.tooltip;
      this.popper = new popper_js__WEBPACK_IMPORTED_MODULE_3__["default"](ref, tooltip, {
        placement: "right",
        modifiers: {
          offset: {
            offset: "0,10"
          },
          preventOverflow: {
            boundariesElement: chart
          }
        }
      });
    },
    onMouseMove: function onMouseMove(params) {
      this.popperIsActive = !!params;
      this.popper.scheduleUpdate();
      this.tooltipData = params || null;
    }
  },
  mounted: function mounted() {
    this.initPopper();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Charts/PageViews.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Charts/PageViews.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box;\n}\nstrong {\n  font-weight: 600;\n}\n.random {\n  width: 100%;\n}\n.random .vtc {\n  height: 250px;\n  font-size: 12px;\n}\n@media (min-width: 699px) {\n.random .vtc {\n    height: 320px;\n}\n}\n.random .labels {\n  stroke: rgba(0, 0, 0, 0.05);\n}\n.random .active-line {\n  stroke: rgba(0, 0, 0, 0.2);\n}\n.random .point {\n  stroke-width: 2;\n  transition: stroke-width 0.2s;\n}\n.random .point.is-active {\n  stroke-width: 5;\n}\n.random .curve1 .stroke {\n  stroke: #fbac91;\n  stroke-width: 2;\n}\n.random .curve1 .fill {\n  fill: #fbac91;\n  opacity: 0.05;\n}\n.random .curve1 .point {\n  fill: #fbac91;\n  stroke: #fbac91;\n}\n.random .curve2 .stroke {\n  stroke: #fbe1b6;\n  stroke-width: 2;\n}\n.random .curve2 .point {\n  fill: #fbe1b6;\n  stroke: #fbe1b6;\n}\n.random .tooltip {\n  border-radius: 10px;\n  padding: 10px;\n  background: #fff;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  pointer-events: none;\n}\n.random .tooltip:not(.is-active) {\n  display: none;\n}\n.random .tooltip-data {\n  display: flex-col;\n}\n.random .tooltip-data-item {\n  display: flex;\n  align-items: center;\n}\n.random .tooltip-data-item:before {\n  content: \"\";\n  display: block;\n  width: 15px;\n  height: 15px;\n  margin-right: 5px;\n  border-radius: 10px;\n}\n.random .tooltip-data-item--1:before {\n  background: #fbac91;\n}\n.random .tooltip-data-item--2:before {\n  background: #fbe1b6;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Charts/PageViews.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Charts/PageViews.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageViews.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Charts/PageViews.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Charts/PageViews.vue?vue&type=template&id=a7b7b224&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Charts/PageViews.vue?vue&type=template&id=a7b7b224& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "app" } }, [
    _c(
      "div",
      { staticClass: "random" },
      [
        _c("trend-chart", {
          staticClass: "random-chart",
          attrs: {
            datasets: _vm.datasets,
            grid: _vm.grid,
            labels: _vm.labels,
            min: 0,
            interactive: true
          },
          on: { mouseMove: _vm.onMouseMove }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            ref: "tooltip",
            staticClass: "tooltip",
            class: { "is-active": _vm.tooltipData },
            attrs: { id: "pop", role: "tooltip" }
          },
          [
            _vm.tooltipData
              ? _c("div", { staticClass: "tooltip-container" }, [
                  _c("strong", [
                    _vm._v(_vm._s(_vm.labels.xLabels[_vm.tooltipData.index]))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "tooltip-data" }, [
                    _c(
                      "div",
                      { staticClass: "tooltip-data-item tooltip-data-item--1" },
                      [
                        _vm._v("Total views: "),
                        _c("strong", [_vm._v(_vm._s(_vm.tooltipData.data[0]))])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "tooltip-data-item tooltip-data-item--2" },
                      [
                        _vm._v("Unique views: "),
                        _c("strong", [_vm._v(_vm._s(_vm.tooltipData.data[1]))])
                      ]
                    )
                  ])
                ])
              : _vm._e()
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Charts/PageViews.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Charts/PageViews.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageViews_vue_vue_type_template_id_a7b7b224___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageViews.vue?vue&type=template&id=a7b7b224& */ "./resources/js/Pages/Charts/PageViews.vue?vue&type=template&id=a7b7b224&");
/* harmony import */ var _PageViews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageViews.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Charts/PageViews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PageViews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageViews.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/Pages/Charts/PageViews.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PageViews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageViews_vue_vue_type_template_id_a7b7b224___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageViews_vue_vue_type_template_id_a7b7b224___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Charts/PageViews.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Charts/PageViews.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Charts/PageViews.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageViews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageViews.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Charts/PageViews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageViews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Charts/PageViews.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Charts/PageViews.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageViews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageViews.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Charts/PageViews.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageViews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageViews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageViews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageViews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageViews_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/Charts/PageViews.vue?vue&type=template&id=a7b7b224&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Charts/PageViews.vue?vue&type=template&id=a7b7b224& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageViews_vue_vue_type_template_id_a7b7b224___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageViews.vue?vue&type=template&id=a7b7b224& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Charts/PageViews.vue?vue&type=template&id=a7b7b224&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageViews_vue_vue_type_template_id_a7b7b224___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageViews_vue_vue_type_template_id_a7b7b224___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);