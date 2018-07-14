webpackJsonp([5],{

/***/ "../../../../../src/app/bluetooth/bluetooth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bluetooth_component__ = __webpack_require__("../../../../../src/app/bluetooth/bluetooth.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluetoothRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__bluetooth_component__["a" /* BluetoothComponent */],
        data: {
            title: 'Bluetooth'
        }
    }
];
var BluetoothRoutingModule = (function () {
    function BluetoothRoutingModule() {
    }
    BluetoothRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], BluetoothRoutingModule);
    return BluetoothRoutingModule;
}());

//# sourceMappingURL=bluetooth-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/bluetooth/bluetooth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"mb-0\">\n                    <h2>Connect to a device</h2>\n                    \n          </h5>\n        </div>\n        <div class=\"card-block\">\n          <div class=\"bluetooth\">\n            <button type=\"button\" class=\"btn btn-outline-primary  w-100 p-3\" style=\"border-radius: 15px;\" [disabled]=\"!supported\" (click)=\"connect()\"><i class=\"fa fa-bluetooth fa-3x\" style=\"margin: 20px;\" aria-hidden=\"true\"></i>Connect to a bluetooth device</button>\n          </div>\n          <br>\n          <div class=\"serial w-100 p-3\">\n            <button type=\"button\" class=\"btn btn-outline-secondary w-100 p-3\" style=\"border-radius: 15px;\" [disabled]=\"true\" ><i class=\"fa fa-microchip fa-3x\" style=\"margin: 20px;\" aria-hidden=\"true\"></i>Connect to a serial device</button>\n          </div>\n        </div>\n      </div>\n      <!--/.card-->\n\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h5 class=\"mb-0\">\n        <a>\n          <h4 class=\"card-title mb-0\" [innerHTML]=\"title\">Connected Device</h4>\n          <div class=\"small text-muted\"></div>\n        </a>\n      </h5>\n    </div>\n    <div class=\"card-block\">\n\n    </div>\n  </div>\n  <!--/.card-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bluetooth/bluetooth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_controls_component__ = __webpack_require__("../../../../../src/app/shared/controls.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluetoothComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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


var BluetoothComponent = (function () {
    function BluetoothComponent() {
        this.supported = false;
        this.title = "Connect a device Device";
    }
    BluetoothComponent.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.supported) {
                    __WEBPACK_IMPORTED_MODULE_1_app_shared_controls_component__["a" /* ControlsComponent */].Instance.ConnectToBluetooth();
                }
                return [2 /*return*/];
            });
        });
    };
    BluetoothComponent.prototype.ngOnInit = function () {
        if (navigator.bluetooth) {
            this.supported = true;
            console.log('bluetooth supported');
        }
        else {
            this.title = 'Bluetooth is not supported in your browser! Please use Chrome or Chrome for Android';
        }
    };
    BluetoothComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            styles: ["\n  .bluetooth button{\n    color:#40a0fc;\n  }\n  .bluetooth button:hover {\n    color: blue;\n  }\n  .bluetooth button:disabled,\n  .bluetooth button[disabled]{\n    color: grey;\n  }\n  .serial button{\n    color: LightGrey;\n  }\n  .serial button:hover {\n    color: black;\n  }\n  .serial button:disabled,\n  .serial button[disabled]{\n    color: grey;\n  }\n  \n"],
            template: __webpack_require__("../../../../../src/app/bluetooth/bluetooth.component.html")
        })
    ], BluetoothComponent);
    return BluetoothComponent;
}());

//# sourceMappingURL=bluetooth.component.js.map

/***/ }),

/***/ "../../../../../src/app/bluetooth/bluetooth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bluetooth_component__ = __webpack_require__("../../../../../src/app/bluetooth/bluetooth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bluetooth_routing_module__ = __webpack_require__("../../../../../src/app/bluetooth/bluetooth-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothModule", function() { return BluetoothModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BluetoothModule = (function () {
    function BluetoothModule() {
    }
    BluetoothModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__bluetooth_routing_module__["a" /* BluetoothRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__bluetooth_component__["a" /* BluetoothComponent */]]
        })
    ], BluetoothModule);
    return BluetoothModule;
}());

//# sourceMappingURL=bluetooth.module.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map