webpackJsonp([7],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bluetooth/bluetooth.module": [
		"../../../../../src/app/bluetooth/bluetooth.module.ts",
		5
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts",
		4,
		0
	],
	"./loader/loader.module": [
		"../../../../../src/app/loader/loader.module.ts",
		0,
		3
	],
	"./map/map.module": [
		"../../../../../src/app/map/map.module.ts",
		1
	],
	"./threed/threed.module": [
		"../../../../../src/app/threed/threed.module.ts",
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // tslint:disable-next-line
            selector: 'body',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_nav_dropdown_directive__ = __webpack_require__("../../../../../src/app/shared/nav-dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_sidebar_directive__ = __webpack_require__("../../../../../src/app/shared/sidebar.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_aside_directive__ = __webpack_require__("../../../../../src/app/shared/aside.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_breadcrumb_component__ = __webpack_require__("../../../../../src/app/shared/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_controls_component__ = __webpack_require__("../../../../../src/app/shared/controls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layouts_full_layout_component__ = __webpack_require__("../../../../../src/app/layouts/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__layouts_simple_layout_component__ = __webpack_require__("../../../../../src/app/layouts/simple-layout.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// Routing Module

// Layouts


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts__["ChartsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__layouts_full_layout_component__["a" /* FullLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__layouts_simple_layout_component__["a" /* SimpleLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_nav_dropdown_directive__["a" /* NAV_DROPDOWN_DIRECTIVES */],
                __WEBPACK_IMPORTED_MODULE_10__shared_breadcrumb_component__["a" /* BreadcrumbsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shared_controls_component__["a" /* ControlsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_sidebar_directive__["a" /* SIDEBAR_TOGGLE_DIRECTIVES */],
                __WEBPACK_IMPORTED_MODULE_9__shared_aside_directive__["a" /* AsideToggleDirective */],
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* LocationStrategy */],
                    useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* HashLocationStrategy */]
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_full_layout_component__ = __webpack_require__("../../../../../src/app/layouts/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_simple_layout_component__ = __webpack_require__("../../../../../src/app/layouts/simple-layout.component.ts");
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Layouts


var routes = [
    {
        path: '',
        redirectTo: 'loader',
        pathMatch: 'full',
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layouts_full_layout_component__["a" /* FullLayoutComponent */],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'loader',
                loadChildren: './loader/loader.module#LoaderModule'
            },
            {
                path: 'map',
                loadChildren: './map/map.module#MapModule'
            },
            {
                path: '3d',
                loadChildren: './threed/threed.module#ThreeDModule'
            },
            {
                path: 'bluetooth',
                loadChildren: './bluetooth/bluetooth.module#BluetoothModule'
            }
        ]
    },
    {
        path: 'beta',
        component: __WEBPACK_IMPORTED_MODULE_3__layouts_simple_layout_component__["a" /* SimpleLayoutComponent */],
        data: {
            title: 'Beta'
        },
        children: [
            {
                path: '3d',
                loadChildren: './threed/threed.module#ThreeDModule'
            },
            {
                path: 'bluetooth',
                loadChildren: './bluetooth/bluetooth.module#BluetoothModule'
            }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/full-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" appMobileSidebarToggler>&#9776;</button>\n  <a class=\"navbar-brand\" href=\"#\"></a>\n  <ul class=\"nav navbar-nav d-md-down-none\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link navbar-toggler\" href=\"#\" appSidebarToggler>&#9776;</a>\n    </li>\n    <li class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"#\">Dashboard</a>\n    </li>\n  </ul>\n</header>\n\n<div class=\"app-body\">\n  <div class=\"sidebar\">\n    <nav class=\"sidebar-nav\">\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/loader']\"><i class=\"icon-cloud-upload\"></i> Load File </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> Graphs </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/map']\"><i class=\"icon-map\"></i> Map</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/3d']\"><i class=\"icon-globe\"></i> 3D</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/bluetooth']\"><i class=\"fa fa-bluetooth\" aria-hidden=\"true\"> </i> Bluetooth</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n\n  <!-- Main content -->\n  <main class=\"main\">\n\n    <!-- Breadcrumb -->\n    <ol class=\"breadcrumb\">\n      <app-breadcrumbs></app-breadcrumbs>\n      \n      <!-- Breadcrumb Menu-->\n      <li class=\"breadcrumb-menu d-md-down-none\">\n      </li>\n      <li><app-controls></app-controls></li>\n\n    </ol>\n\n\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div><!-- /.conainer-fluid -->\n  </main>\n\n \n</div>\n\n<footer class=\"app-footer\">\n  <span class=\"float-right\">Powered by <a href=\"http://coreui.io\">CoreUI</a></span>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/full-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FullLayoutComponent = (function () {
    function FullLayoutComponent() {
        this.disabled = false;
        this.status = { isopen: false };
    }
    FullLayoutComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    FullLayoutComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    FullLayoutComponent.prototype.ngOnInit = function () { };
    FullLayoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/layouts/full-layout.component.html")
        })
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());

//# sourceMappingURL=full-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/simple-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\n    <button class=\"navbar-toggler d-lg-none\" type=\"button\" appMobileSidebarToggler>&#9776;</button>\n    <a class=\"navbar-brand\" href=\"#\"></a>\n    <ul class=\"nav navbar-nav d-md-down-none\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link navbar-toggler\" href=\"#\" appSidebarToggler>&#9776;</a>\n      </li>\n      <li class=\"nav-item px-3\">\n        <a class=\"nav-link\" href=\"#\">Dashboard</a>\n      </li>\n    </ul>\n  </header>\n  \n  <div class=\"app-body\">\n    <div class=\"sidebar\">\n      <nav class=\"sidebar-nav\">\n        <ul class=\"nav\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/beta/3d']\"><i class=\"icon-globe\"></i> 3D</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/beta/bluetooth']\"><i class=\"fa fa-bluetooth\" aria-hidden=\"true\"> </i> Bluetooth</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  \n    <!-- Main content -->\n    <main class=\"main\">\n  \n      <!-- Breadcrumb -->\n      <ol class=\"breadcrumb\">\n        <app-breadcrumbs></app-breadcrumbs>\n        \n        <!-- Breadcrumb Menu-->\n        <li class=\"breadcrumb-menu d-md-down-none\">\n        </li>\n        <li><app-controls></app-controls></li>\n  \n      </ol>\n  \n  \n      <div class=\"container-fluid\">\n        <router-outlet></router-outlet>\n      </div><!-- /.conainer-fluid -->\n    </main>\n  \n   \n  </div>\n  \n  <footer class=\"app-footer\">\n    <span class=\"float-right\">Powered by <a href=\"http://coreui.io\">CoreUI</a></span>\n  </footer>\n  "

/***/ }),

/***/ "../../../../../src/app/layouts/simple-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_controls_component__ = __webpack_require__("../../../../../src/app/shared/controls.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SimpleLayoutComponent = (function () {
    function SimpleLayoutComponent() {
        this.disabled = false;
        this.status = { isopen: false };
    }
    SimpleLayoutComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    SimpleLayoutComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    SimpleLayoutComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__shared_controls_component__["a" /* ControlsComponent */].Instance.showGraph = false;
    };
    SimpleLayoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/layouts/simple-layout.component.html"),
        })
    ], SimpleLayoutComponent);
    return SimpleLayoutComponent;
}());

//# sourceMappingURL=simple-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/aside.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideToggleDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AsideToggleDirective.prototype, "toggleOpen", null);
    AsideToggleDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAsideMenuToggler]',
        }),
        __metadata("design:paramtypes", [])
    ], AsideToggleDirective);
    return AsideToggleDirective;
}());

//# sourceMappingURL=aside.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/bluetoothHandler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_point__ = __webpack_require__("../../../../../src/app/shared/point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data__ = __webpack_require__("../../../../../src/app/shared/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_controls_component__ = __webpack_require__("../../../../../src/app/shared/controls.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluetoothHandler; });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var BluetoothHandler = (function () {
    function BluetoothHandler() {
        this.deviceName = BluetoothHandler.NO_CONNECTION;
    }
    BluetoothHandler.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options, device, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!navigator.bluetooth) return [3 /*break*/, 4];
                        options = {
                            filters: [
                                { services: [BluetoothHandler.service] }
                            ],
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        console.log('Requesting Bluetooth Device...');
                        console.log('with ' + JSON.stringify(options));
                        return [4 /*yield*/, navigator.bluetooth.requestDevice(options)];
                    case 2:
                        device = _a.sent();
                        console.log('> Name:             ' + device.name);
                        console.log('> Id:               ' + device.id);
                        console.log('> Connected:        ' + device.gatt.connected);
                        this.deviceName = device.name;
                        this.registerToServices(device, BluetoothHandler.service, BluetoothHandler.imuQuaternionCharacteristic, function (event) {
                            try {
                                console.log(event.target.value.getFloat32(0, true));
                                console.log(event.target.value.getFloat32(4, true));
                                console.log(event.target.value.getFloat32(8, true));
                                console.log(event.target.value.getFloat32(12, true));
                                if (!__WEBPACK_IMPORTED_MODULE_2_app_shared_controls_component__["a" /* ControlsComponent */].Instance.getData()) {
                                    __WEBPACK_IMPORTED_MODULE_2_app_shared_controls_component__["a" /* ControlsComponent */].Instance.setData(new __WEBPACK_IMPORTED_MODULE_1__shared_data__["a" /* CalculatedData */]());
                                }
                                _this.data = __WEBPACK_IMPORTED_MODULE_2_app_shared_controls_component__["a" /* ControlsComponent */].Instance.getData();
                                _this.data.boardReference.newQuaternionData = true;
                                //big endian by default
                                var time = BluetoothHandler.step += 0.001;
                                _this.data.boardReference.q0.push(new __WEBPACK_IMPORTED_MODULE_0__shared_point__["a" /* Point */](time, event.target.value.getFloat32(0, true)));
                                _this.data.boardReference.q1.push(new __WEBPACK_IMPORTED_MODULE_0__shared_point__["a" /* Point */](time, event.target.value.getFloat32(4, true)));
                                _this.data.boardReference.q2.push(new __WEBPACK_IMPORTED_MODULE_0__shared_point__["a" /* Point */](time, event.target.value.getFloat32(8, true)));
                                _this.data.boardReference.q3.push(new __WEBPACK_IMPORTED_MODULE_0__shared_point__["a" /* Point */](time, event.target.value.getFloat32(12, true)));
                                __WEBPACK_IMPORTED_MODULE_2_app_shared_controls_component__["a" /* ControlsComponent */].Instance.dataChanged();
                            }
                            catch (error) {
                                console.log(error);
                            }
                        });
                        this.registerToServices(device, BluetoothHandler.service, BluetoothHandler.imuAccelerationCharacteristic, function (event) {
                            try {
                                console.log(event.target.value.getFloat32(0, true));
                                console.log(event.target.value.getFloat32(4, true));
                                console.log(event.target.value.getFloat32(8, true));
                                if (!__WEBPACK_IMPORTED_MODULE_2_app_shared_controls_component__["a" /* ControlsComponent */].Instance.getData()) {
                                    __WEBPACK_IMPORTED_MODULE_2_app_shared_controls_component__["a" /* ControlsComponent */].Instance.setData(new __WEBPACK_IMPORTED_MODULE_1__shared_data__["a" /* CalculatedData */]());
                                }
                                _this.data = __WEBPACK_IMPORTED_MODULE_2_app_shared_controls_component__["a" /* ControlsComponent */].Instance.getData();
                                _this.data.boardReference.newIMUData = true;
                                //big endian by default
                                var time = BluetoothHandler.step += 0.001;
                                _this.data.boardReference.ax.push(new __WEBPACK_IMPORTED_MODULE_0__shared_point__["a" /* Point */](time, event.target.value.getFloat32(0, true)));
                                _this.data.boardReference.ay.push(new __WEBPACK_IMPORTED_MODULE_0__shared_point__["a" /* Point */](time, event.target.value.getFloat32(4, true)));
                                _this.data.boardReference.az.push(new __WEBPACK_IMPORTED_MODULE_0__shared_point__["a" /* Point */](time, event.target.value.getFloat32(8, true)));
                                _this.data.boardReference.rx.push(new __WEBPACK_IMPORTED_MODULE_0__shared_point__["a" /* Point */](time, 0));
                                _this.data.boardReference.ry.push(new __WEBPACK_IMPORTED_MODULE_0__shared_point__["a" /* Point */](time, 0));
                                _this.data.boardReference.rz.push(new __WEBPACK_IMPORTED_MODULE_0__shared_point__["a" /* Point */](time, 0));
                                __WEBPACK_IMPORTED_MODULE_2_app_shared_controls_component__["a" /* ControlsComponent */].Instance.dataChanged();
                            }
                            catch (error) {
                                console.log(error);
                            }
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log('Argh! ' + error_1);
                        this.deviceName = BluetoothHandler.NO_CONNECTION;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BluetoothHandler.prototype.registerToServices = function (device, service, characteristic, handler) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                device.gatt.connect()
                    .then(function (server) {
                    // Getting Service
                    return server.getPrimaryService(service);
                })
                    .then(function (service) {
                    // Getting Characteristic...
                    return service.getCharacteristic(characteristic);
                })
                    .then(function (characteristic) { return characteristic.startNotifications(); })
                    .then(function (characteristic) {
                    characteristic.addEventListener('characteristicvaluechanged', handler);
                })
                    .catch(function (error) { console.log(error); });
                return [2 /*return*/];
            });
        });
    };
    BluetoothHandler.NO_CONNECTION = 'No device connected, click the bluetooth button to connect!';
    //                               00001234-0000-1000-8000-00805f9b34fb
    BluetoothHandler.service = 'd7a7fc0a-b32e-4bda-933f-49cbd9cfe2dc';
    //                                                   00001234-0000-1000-8000-00805f9b34fb
    BluetoothHandler.imuQuaternionCharacteristic = '45ae0807-2233-4026-b264-045a933fa973';
    BluetoothHandler.imuAccelerationCharacteristic = '45ae0807-2233-4026-b264-045a933fa974';
    BluetoothHandler.step = 0.0;
    return BluetoothHandler;
}());

//# sourceMappingURL=bluetoothHandler.js.map

/***/ }),

/***/ "../../../../../src/app/shared/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        _this.breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    }
    BreadcrumbsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumbs',
            template: "\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\n    <li class=\"breadcrumb-item\"\n        *ngIf=\"breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/'||breadcrumb.label.title&&last\"\n        [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n    </li>\n  </ng-template>"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
    var _a, _b;
}());

//# sourceMappingURL=breadcrumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/controls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartjs_plugin_annotation__ = __webpack_require__("../../../../chartjs-plugin-annotation/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartjs_plugin_annotation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chartjs_plugin_annotation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_bluetoothHandler__ = __webpack_require__("../../../../../src/app/shared/bluetoothHandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ControlsComponent = (function () {
    var ControlsComponent = ControlsComponent_1 = function ControlsComponent() {
        this.dataListeners = [];
        this.dataPointListeners = [];
        this.index = 0;
        this.accelerationChartData = this.create3DDataArray();
        this.chartData = this.create3DDataArray();
        this.sliderMin = 0;
        this.sliderMax = 0;
        this.originalLineDraw = __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"].controllers.line.prototype.draw;
        this.bluetoothHandler = new __WEBPACK_IMPORTED_MODULE_4_app_shared_bluetoothHandler__["a" /* BluetoothHandler */]();
        this.showGraph = false;
        this.mainChartOptions = {
            animation: false,
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0.2,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            scales: {
                xAxes: [{
                        display: true,
                        id: "x-axis-1"
                    }],
                yAxes: [{
                        display: false,
                        id: "y-axis-1"
                    }],
            },
            tooltips: { enabled: false },
            annotation: {
                annotations: [
                    {
                        drawTime: "afterDraw",
                        id: "vline",
                        type: "line",
                        mode: "vertical",
                        scaleID: "x-axis-1",
                        value: 0,
                        borderColor: "black",
                        borderWidth: 1
                    }
                ]
            }
        };
        this.brandPrimary = '#20a8d8';
        this.brandSuccess = '#4dbd74';
        this.brandInfo = '#63c2de';
        this.brandWarning = '#f8cb00';
        this.brandDanger = '#f86c6b';
        this.mainChartColours = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandInfo,
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.brandSuccess,
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.brandDanger,
                pointHoverBackgroundColor: '#fff'
            }
        ];
        this.mainChartLegend = false;
        this.mainChartType = 'scatter';
        this.registerDataListener(this);
        this.registerDataPointListener(this);
        if (ControlsComponent_1.Instance == undefined) {
            ControlsComponent_1.Instance = this;
        }
        else {
            throw new Error("Cannot have two instances of the ControlsComponent class.");
        }
    };
    ControlsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerDataListener(this);
        this.registerDataPointListener(this);
        this.data = ControlsComponent_1.Instance.getData();
        this.DataUpdated(this.data);
        var timer = __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].timer(10000, 1);
        timer.subscribe(function (t) {
            if (_this.showGraph) {
                //     for (let i:number = 0; i < this.accelerationChartData.length; i++){
                //       if ( this.chartData[i].data.length < this.accelerationChartData[i].data.length){
                //         while (this.chartData[i].data.length < this.accelerationChartData[i].data.length){
                //           this.chartData[i].data.push(this.accelerationChartData[i].data[this.chartData[i].data.length]);
                //         }
                //       }
                //     }
                //     this.chart.chart.update();
                //     //this.accelerationChartData[0].data.push({x:this.accelerationChartData[0].data.length,y:0});
                //   this.chart.ngOnChanges({
                //     datasets: {
                //         currentValue: this.chartData,
                //         previousValue: null,
                //         firstChange: false,
                //         isFirstChange: () => false
                //     }
                // });    
                _this.chart.chart.update({
                    duration: 0,
                    lazy: true,
                    easing: 'linear'
                });
            }
        });
    };
    ControlsComponent.prototype.drawLine = function (index) {
        var chart = this.chart;
        var canvas = this.chartLayer.nativeElement;
        canvas.width = canvas.clientWidth;
        var ctx = canvas.getContext("2d");
        if (index) {
            // chart.options.annotation.annotations["0"].value = index;
            // chart.chart.update(0);
            var xaxis = chart.chart.scales['x-axis-1'];
            var yaxis = chart.chart.scales['y-axis-1'];
            ctx.clearRect(0, 0, 10000, 10000);
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(xaxis.getPixelForValue(index), yaxis.top);
            ctx.strokeStyle = '#ff0000';
            ctx.lineTo(xaxis.getPixelForValue(index), yaxis.bottom);
            ctx.stroke();
            ctx.restore();
        }
    };
    ControlsComponent.prototype.ConnectToBluetooth = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.bluetoothHandler.connect();
                return [2 /*return*/];
            });
        });
    };
    ControlsComponent.prototype.DataPointUpdated = function (index) {
        this.data = ControlsComponent_1.Instance.getData();
        if (this.data !== undefined && index !== -1 && this.showGraph) {
            try {
                this.drawLine(this.data.boardReference.ax[index].x);
            }
            catch (err) { }
        }
        // this.accelerationChartData = this.accelerationChartData.slice();
    };
    ControlsComponent.prototype.DataUpdated = function (data) {
        this.data = ControlsComponent_1.Instance.getData();
        if (this.data !== undefined && this.showGraph) {
            this.accelerationChartData[0].data = this.data.boardReference.ax;
            this.accelerationChartData[1].data = this.data.boardReference.ay;
            this.accelerationChartData[2].data = this.data.boardReference.az;
            this.sliderMax = this.data.boardReference.ax.length - 1;
            if (this.sliderMax === -1) {
                this.sliderMax = this.data.boardReference.rx.length - 1;
            }
            if (this.sliderMax === -1) {
                this.sliderMax = this.data.boardReference.x.length - 1;
            }
            if (this.sliderMax === -1) {
                this.sliderMax = this.data.boardReference.q0.length - 1;
            }
            this.setIndex(this.sliderMax);
            //this.chart.chart.update();
            // this.drawLine(this.data.boardReference.q0[this.index].x);
            for (var i = 0; i < this.accelerationChartData.length; i++) {
                if (this.chartData[i].data.length < this.accelerationChartData[i].data.length) {
                    while (this.chartData[i].data.length < this.accelerationChartData[i].data.length) {
                        this.chartData[i].data.push(this.accelerationChartData[i].data[this.chartData[i].data.length]);
                    }
                }
            }
            //this.chart.chart.update();
            //this.accelerationChartData[0].data.push({x:this.accelerationChartData[0].data.length,y:0});
        }
    };
    ControlsComponent.prototype.chartClicked = function (e) {
        if (e.active.length > 0) {
            var label = e.active[0]._index;
            console.log("Point: " + label);
            this.index = e.active[0]._index;
            this.DataPointUpdated(this.index);
        }
    };
    ControlsComponent.prototype.getData = function () {
        return this.data;
    };
    ControlsComponent.prototype.setData = function (data) {
        this.data = data;
        this.dataChanged();
    };
    ControlsComponent.prototype.registerDataListener = function (listener) {
        this.dataListeners.push(listener);
    };
    ControlsComponent.prototype.registerDataPointListener = function (listener) {
        this.dataPointListeners.push(listener);
    };
    ControlsComponent.prototype.setIndex = function (index) {
        this.index = index;
        this.dataPointChanged();
    };
    ControlsComponent.prototype.dataChanged = function () {
        var _this = this;
        this.dataListeners.forEach(function (l) { return l.DataUpdated(_this.data); });
    };
    ControlsComponent.prototype.dataPointChanged = function () {
        var _this = this;
        this.dataPointListeners.forEach(function (l) { return l.DataPointUpdated(_this.index); });
    };
    ControlsComponent.prototype.create3DDataArray = function () {
        return [
            {
                data: [],
                label: 'ax (ms^-2)'
            },
            {
                data: [],
                label: 'ay (ms^-2)'
            },
            {
                data: [],
                label: 'az (ms^-2)'
            } //,
            // {
            //   data: [{x:0,y:2},{x:0,y:-2}],
            //   label: 'Marker'
            // }
        ];
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_charts__["BaseChartDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_charts__["BaseChartDirective"]) === "function" && _a || Object)
    ], ControlsComponent.prototype, "chart", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("chartLayer"),
        __metadata("design:type", Object)
    ], ControlsComponent.prototype, "chartLayer", void 0);
    ControlsComponent = ControlsComponent_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-controls',
            template: "\n  <div style=\"height:100px; position: relative;\" [hidden]=\"!showGraph\">\n    <canvas baseChart style=\"position: absolute; left: 0; top: 0; z-index: 0;\" class=\"chart\" [datasets]=\"chartData\" [options]=\"mainChartOptions\" [colors]=\"mainChartColours\" [legend]=\"mainChartLegend\" [chartType]=\"mainChartType\" (chartClick)=\"chartClicked($event)\"></canvas>\n    <canvas #chartLayer height = 100px style=\"height:100px; width:100%; position: absolute; left: 0; top: 0; z-index: 1;\"></canvas>\n  </div>\n  <div class=\"row\" style=\"padding:10px\">\n    <div class=\"col-sm-12 col-lg-12\">\n      <input type=\"range\" (input)=\"setIndex($event.target.value)\"  [min]=\"sliderMin\" [max]=\"sliderMax\" class=\"slider\" id=\"myRange\">\n    </div>\n  </div>\n",
            styles: ["\n/* The slider itself */\n.slider {\n  width: 100%; /* Full-width */\n  height: 30px; /* Specified height */\n  background: #d3d3d3; /* Grey background */\n  outline: none; /* Remove outline */\n  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */\n  -webkit-transition: .2s; /* 0.2 seconds transition on hover */\n  transition: opacity .2s;\n}\n\n.btn {\n  -webkit-appearance: none;  /* Override default CSS styles */\n  appearance: none;\n  height: 30px; /* Specified height */\n  background: #d3d3d3; /* Grey background */\n  outline: none; /* Remove outline */\n  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */\n  -webkit-transition: .2s; /* 0.2 seconds transition on hover */\n  transition: opacity .2s;\n}\n\n/* Mouse-over effects */\n.slider:hover {\n  opacity: 1; /* Fully shown on mouse-over */\n}\n"]
        }),
        __metadata("design:paramtypes", [])
    ], ControlsComponent);
    return ControlsComponent;
    var ControlsComponent_1, _a;
}());

//# sourceMappingURL=controls.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__("../../../../../src/app/shared/point.ts");
/* unused harmony export Data */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatedData; });

var Data = (function () {
    function Data() {
        this.x = [];
        this.y = [];
        this.z = [];
        this.ax = [];
        this.ay = [];
        this.az = [];
        this.rx = [];
        this.ry = [];
        this.rz = [];
        this.q0 = [];
        this.q1 = [];
        this.q2 = [];
        this.q3 = [];
        this.startTime = -1;
        this.newPositionData = false;
        this.newIMUData = false;
        this.newQuaternionData = false;
    }
    Data.prototype.reset = function () {
        this.newPositionData = false;
        this.newIMUData = false;
        this.newQuaternionData = false;
        this.startTime = -1;
    };
    Data.parseLine = function (startTime, outputArray, line, type, channel) {
        if (line[1] == type) {
            outputArray.push(new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]((line[0] - startTime) / 1000.0, line[1 + channel]));
            return true;
        }
        return false;
    };
    Data.prototype.loadData = function (data) {
        for (var i = 0; i < data.length; i++) {
            data[i] = parseFloat(data[i]);
        }
        if (this.startTime == -1) {
            this.startTime = data[0];
        }
        this.newIMUData = Data.parseLine(this.startTime, this.ax, data, 2, 1);
        Data.parseLine(this.startTime, this.ay, data, 2, 2);
        Data.parseLine(this.startTime, this.az, data, 2, 3);
        Data.parseLine(this.startTime, this.rx, data, 2, 4);
        Data.parseLine(this.startTime, this.ry, data, 2, 5);
        Data.parseLine(this.startTime, this.rz, data, 2, 6);
        this.newPositionData = Data.parseLine(this.startTime, this.x, data, 1, 1);
        Data.parseLine(this.startTime, this.y, data, 1, 2);
        Data.parseLine(this.startTime, this.z, data, 1, 3);
        this.newQuaternionData = Data.parseLine(this.startTime, this.q0, data, 3, 1);
        Data.parseLine(this.startTime, this.q1, data, 3, 2);
        Data.parseLine(this.startTime, this.q2, data, 3, 3);
        Data.parseLine(this.startTime, this.q3, data, 3, 4);
    };
    return Data;
}());

var CalculatedData = (function () {
    function CalculatedData() {
        this.boardReference = new Data();
        this.integral = new Data();
        this.worldReference = new Data();
    }
    CalculatedData.prototype.loadData = function (data) {
        this.boardReference.loadData(data);
        if (this.boardReference.newQuaternionData) {
            if (this.boardReference.ax.length > 0 && this.boardReference.rx.length > 0) {
                var xArr = this.boardReference.ax;
                var ax = xArr[xArr.length - 1].y;
                var yArr = this.boardReference.ay;
                var ay = yArr[yArr.length - 1].y;
                var zArr = this.boardReference.az;
                var az = zArr[zArr.length - 1].y;
                var rxArr = this.boardReference.rx;
                var rx = rxArr[rxArr.length - 1].y;
                var ryArr = this.boardReference.ry;
                var ry = ryArr[ryArr.length - 1].y;
                var rzArr = this.boardReference.rz;
                var rz = rzArr[rzArr.length - 1].y;
                var q0Arr = this.boardReference.q0;
                var q0 = q0Arr[q0Arr.length - 1].y;
                var q1Arr = this.boardReference.q1;
                var q1 = q1Arr[q1Arr.length - 1].y;
                var q2Arr = this.boardReference.q2;
                var q2 = q2Arr[q2Arr.length - 1].y;
                var q3Arr = this.boardReference.q3;
                var q3 = q3Arr[q3Arr.length - 1].y;
                var accelerationVector = [ax, ay, az];
                var angularAccelerationVector = [rx, ry, rz];
                var quaternion = [q0, q1, q2, q3];
                this.convertToWorldReference(q0Arr[q0Arr.length - 1].x, accelerationVector, quaternion, [this.worldReference.ax, this.worldReference.ay, this.worldReference.az]);
                this.convertToWorldReference(q0Arr[q0Arr.length - 1].x, angularAccelerationVector, quaternion, [this.worldReference.rx, this.worldReference.ry, this.worldReference.rz]);
                this.worldReference.newIMUData = true;
            }
        }
        else {
            this.worldReference.newIMUData = false;
        }
    };
    CalculatedData.prototype.integrate = function (any) {
        var lastX = any[0].x;
        var lastY = any[0].y;
        var output = [];
        var last = 0;
        any.forEach(function (element) {
            var diff = ((parseFloat(element.y) + lastY) * (parseFloat(element.x) - lastX) / 2.0);
            if (isNaN(diff)) {
                diff = 0;
            }
            output.push({ x: element.x, y: last + diff });
            last = last + diff;
            lastX = parseFloat(element.x);
            lastY = parseFloat(element.y);
        });
        return output;
    };
    CalculatedData.prototype.convertToWorldReference = function (time, vector, quaternion, output) {
        var correctedVector = this.toWorldReference(vector, quaternion);
        output[0].push(new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](time, correctedVector[0]));
        output[1].push(new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](time, correctedVector[1]));
        output[2].push(new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](time, correctedVector[2]));
    };
    CalculatedData.prototype.convertDataToWorldReference = function (data, quaternion) {
        var output = [[], [], []];
        var endIndex = data[0].length;
        if (quaternion[0].length < endIndex) {
            endIndex = quaternion[0].length;
        }
        for (var i = 0; i < endIndex; i++) {
            var vector = [parseFloat(data[0][i].y), parseFloat(data[1][i].y), parseFloat(data[2][i].y)];
            var thisQuaternion = [parseFloat(quaternion[0][i].y), parseFloat(quaternion[1][i].y), parseFloat(quaternion[2][i].y), parseFloat(quaternion[3][i].y)];
            var correctedVector = this.toWorldReference(vector, thisQuaternion);
            output[0].push({ x: data[0][i].x, y: correctedVector[0] });
            output[1].push({ x: data[0][i].x, y: correctedVector[1] });
            output[2].push({ x: data[0][i].x, y: correctedVector[2] });
        }
        return output;
    };
    CalculatedData.prototype.toWorldReference = function (vector, quaternion) {
        var outputVector = [0.0, vector[0], vector[1], vector[2]];
        outputVector = this.hamiltonian(quaternion, outputVector);
        outputVector = this.hamiltonian(outputVector, this.quaternionConjugate(quaternion));
        outputVector = [outputVector[1], outputVector[2], outputVector[3]];
        return outputVector;
    };
    CalculatedData.prototype.quaternionConjugate = function (q) {
        var output = [];
        output.push(q[0]);
        output.push(-q[1]);
        output.push(-q[2]);
        output.push(-q[3]);
        return output;
    };
    CalculatedData.prototype.hamiltonian = function (q, r) {
        var output = [];
        output.push(q[0] * r[0] - q[1] * r[1] - q[2] * r[2] - q[3] * r[3]);
        output.push(q[0] * r[1] + r[0] * q[1] + q[2] * r[3] - q[3] * r[2]);
        output.push(q[0] * r[2] + r[0] * q[2] + q[3] * r[1] - q[1] * r[3]);
        output.push(q[0] * r[3] + r[0] * q[3] + q[1] * r[2] - q[2] * r[1]);
        return output;
    };
    return CalculatedData;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ "../../../../../src/app/shared/nav-dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export NavDropdownDirective */
/* unused harmony export NavDropdownToggleDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NAV_DROPDOWN_DIRECTIVES; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavDropdownDirective = (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    NavDropdownDirective.prototype.toggle = function () {
        this.el.nativeElement.classList.toggle('open');
    };
    NavDropdownDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appNavDropdown]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], NavDropdownDirective);
    return NavDropdownDirective;
    var _a;
}());

/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavDropdownToggleDirective.prototype, "toggleOpen", null);
    NavDropdownToggleDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appNavDropdownToggle]'
        }),
        __metadata("design:paramtypes", [NavDropdownDirective])
    ], NavDropdownToggleDirective);
    return NavDropdownToggleDirective;
}());

var NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
//# sourceMappingURL=nav-dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/point.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());

//# sourceMappingURL=point.js.map

/***/ }),

/***/ "../../../../../src/app/shared/sidebar.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export SidebarToggleDirective */
/* unused harmony export SidebarMinimizeDirective */
/* unused harmony export MobileSidebarToggleDirective */
/* unused harmony export SidebarOffCanvasCloseDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "toggleOpen", null);
    SidebarToggleDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());

var SidebarMinimizeDirective = (function () {
    function SidebarMinimizeDirective() {
    }
    SidebarMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-minimized');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarMinimizeDirective.prototype, "toggleOpen", null);
    SidebarMinimizeDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSidebarMinimizer]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarMinimizeDirective);
    return SidebarMinimizeDirective;
}());

var MobileSidebarToggleDirective = (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appMobileSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());

/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
    SidebarOffCanvasCloseDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSidebarClose]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarOffCanvasCloseDirective);
    return SidebarOffCanvasCloseDirective;
}());

var SIDEBAR_TOGGLE_DIRECTIVES = [
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective
];
//# sourceMappingURL=sidebar.directive.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map