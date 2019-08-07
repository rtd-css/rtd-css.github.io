(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/user/components/demos/base-demo/base-demo.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/components/demos/base-demo/base-demo.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe #sourceIframe></iframe>\n<iframe #mobileIframe></iframe>\n<iframe #tabletIframe></iframe>\n<iframe #desktopIframe></iframe>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/containers/home-container/home-container.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/containers/home-container/home-container.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-base-demo></app-base-demo>\n"

/***/ }),

/***/ "./src/app/user/components/demos/base-demo/base-demo.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/user/components/demos/base-demo/base-demo.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iframe {\n  margin-bottom: 20px;\n  width: 100%;\n  height: 160px;\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvUHJvamVjdHMvcnRkLWNzcy1zaXRlL3NyYy9hcHAvdXNlci9jb21wb25lbnRzL2RlbW9zL2Jhc2UtZGVtby9iYXNlLWRlbW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL2NvbXBvbmVudHMvZGVtb3MvYmFzZS1kZW1vL2Jhc2UtZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlmcmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/user/components/demos/base-demo/base-demo.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/user/components/demos/base-demo/base-demo.component.ts ***!
  \************************************************************************/
/*! exports provided: BaseDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDemoComponent", function() { return BaseDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _logic_query_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../logic/query-params */ "./src/app/user/logic/query-params.ts");



let BaseDemoComponent = class BaseDemoComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const timestamp = (new Date()).getTime().toString();
        const iframeHtmlUrl = '/assets/demos/main-demo/index.html';
        const iframeCssUrl = '/assets/demos/main-demo/styles.css';
        const iframeRtdCssUrl = '/assets/demos/main-demo/styles.rtd.css';
        this.sourceIframe.nativeElement.src =
            this.createIframeUrl(timestamp, iframeHtmlUrl, 'Source CSS', iframeCssUrl);
        this.mobileIframe.nativeElement.src =
            this.createIframeUrl(timestamp, iframeHtmlUrl, 'RTD-CSS: Mobile', iframeRtdCssUrl, 'rtd-mobile');
        this.tabletIframe.nativeElement.src =
            this.createIframeUrl(timestamp, iframeHtmlUrl, 'RTD-CSS: Tablet', iframeRtdCssUrl, 'rtd-tablet');
        this.desktopIframe.nativeElement.src =
            this.createIframeUrl(timestamp, iframeHtmlUrl, 'RTD-CSS: Desktop', iframeRtdCssUrl, 'rtd-desktop');
    }
    createIframeUrl(timestamp, pageUrl, title, cssUrl, deviceClass = null) {
        const parts = [pageUrl];
        const queryParams = new _logic_query_params__WEBPACK_IMPORTED_MODULE_2__["QueryParams"]();
        queryParams.timestamp = timestamp;
        if (title) {
            queryParams.title = title;
        }
        if (cssUrl) {
            queryParams.cssUrl = `${cssUrl}?timestamp=${timestamp}`;
        }
        if (deviceClass) {
            queryParams.deviceClass = deviceClass;
        }
        parts.push('?', _logic_query_params__WEBPACK_IMPORTED_MODULE_2__["QueryParams"].stringify(queryParams));
        return parts.join('');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sourceIframe', null)
], BaseDemoComponent.prototype, "sourceIframe", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mobileIframe', null)
], BaseDemoComponent.prototype, "mobileIframe", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabletIframe', null)
], BaseDemoComponent.prototype, "tabletIframe", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('desktopIframe', null)
], BaseDemoComponent.prototype, "desktopIframe", void 0);
BaseDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-base-demo',
        template: __webpack_require__(/*! raw-loader!./base-demo.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/components/demos/base-demo/base-demo.component.html"),
        styles: [__webpack_require__(/*! ./base-demo.component.scss */ "./src/app/user/components/demos/base-demo/base-demo.component.scss")]
    })
], BaseDemoComponent);



/***/ }),

/***/ "./src/app/user/containers/home-container/home-container.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/user/containers/home-container/home-container.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29udGFpbmVycy9ob21lLWNvbnRhaW5lci9ob21lLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/containers/home-container/home-container.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/user/containers/home-container/home-container.component.ts ***!
  \****************************************************************************/
/*! exports provided: HomeContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContainerComponent", function() { return HomeContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeContainerComponent = class HomeContainerComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-container',
        template: __webpack_require__(/*! raw-loader!./home-container.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/containers/home-container/home-container.component.html"),
        styles: [__webpack_require__(/*! ./home-container.component.scss */ "./src/app/user/containers/home-container/home-container.component.scss")]
    })
], HomeContainerComponent);



/***/ }),

/***/ "./src/app/user/logic/query-params.ts":
/*!********************************************!*\
  !*** ./src/app/user/logic/query-params.ts ***!
  \********************************************/
/*! exports provided: QueryParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryParams", function() { return QueryParams; });
class QueryParams {
    static stringify(queryParams) {
        if (!queryParams) {
            throw new Error('{queryParams} required');
        }
        const parts = [];
        let firstParam = true;
        for (const key in queryParams) {
            if (!queryParams.hasOwnProperty(key)) {
                continue;
            }
            if (firstParam) {
                firstParam = false;
            }
            else {
                parts.push('&');
            }
            parts.push(encodeURIComponent(key));
            const value = queryParams[key];
            if (value) {
                parts.push('=', encodeURIComponent(value));
            }
        }
        return parts.join('');
    }
}


/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _containers_home_container_home_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/home-container/home-container.component */ "./src/app/user/containers/home-container/home-container.component.ts");




const routes = [
    {
        path: '',
        component: _containers_home_container_home_container_component__WEBPACK_IMPORTED_MODULE_3__["HomeContainerComponent"],
    },
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _containers_home_container_home_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/home-container/home-container.component */ "./src/app/user/containers/home-container/home-container.component.ts");
/* harmony import */ var _components_demos_base_demo_base_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/demos/base-demo/base-demo.component */ "./src/app/user/components/demos/base-demo/base-demo.component.ts");






let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _containers_home_container_home_container_component__WEBPACK_IMPORTED_MODULE_4__["HomeContainerComponent"],
            _components_demos_base_demo_base_demo_component__WEBPACK_IMPORTED_MODULE_5__["BaseDemoComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"]
        ]
    })
], UserModule);



/***/ })

}]);
//# sourceMappingURL=user-user-module-es2015.js.map