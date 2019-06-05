(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, alertify) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertify.error('You need to signup before enter this page.');
        this.router.navigate(['/signin']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/prevent-unsaved-changes.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/_guards/prevent-unsaved-changes.guard.ts ***!
  \**********************************************************/
/*! exports provided: PreventUnsavedChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventUnsavedChanges", function() { return PreventUnsavedChanges; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PreventUnsavedChanges = /** @class */ (function () {
    function PreventUnsavedChanges() {
    }
    PreventUnsavedChanges.prototype.canDeactivate = function (component) {
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to continue?  Any unsaved changes will be lost');
        }
        return true;
    };
    PreventUnsavedChanges = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PreventUnsavedChanges);
    return PreventUnsavedChanges;
}());



/***/ }),

/***/ "./src/app/_resolvers/edit.resolver.ts":
/*!*********************************************!*\
  !*** ./src/app/_resolvers/edit.resolver.ts ***!
  \*********************************************/
/*! exports provided: NoteEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteEditResolver", function() { return NoteEditResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_note_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/note.service */ "./src/app/_services/note.service.ts");








var NoteEditResolver = /** @class */ (function () {
    function NoteEditResolver(userService, router, alertify, authService) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
    }
    NoteEditResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getNote(route.params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    NoteEditResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_note_service__WEBPACK_IMPORTED_MODULE_7__["NoteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], NoteEditResolver);
    return NoteEditResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/notes.resolver.ts":
/*!**********************************************!*\
  !*** ./src/app/_resolvers/notes.resolver.ts ***!
  \**********************************************/
/*! exports provided: NotesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesResolver", function() { return NotesResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_note_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/note.service */ "./src/app/_services/note.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");








var NotesResolver = /** @class */ (function () {
    function NotesResolver(noteService, router, alertify, authService) {
        this.noteService = noteService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
    }
    NotesResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.noteService.getNotes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    NotesResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_note_service__WEBPACK_IMPORTED_MODULE_3__["NoteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], NotesResolver);
    return NotesResolver;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else {
            }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + 'login', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                _this.decodedToken = _this.jwtHelper.decodeToken(user.token);
            }
        }));
    };
    AuthService.prototype.register = function (model) {
        return this.http.post((this.baseUrl + 'register'), model);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/error.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/_services/error.interceptor.ts ***!
  \************************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (error.status === 401 || error.status === 405) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.statusText);
                }
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    console.error(applicationError);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(applicationError);
                }
                var serverError = error.error.errors;
                var modalStateErrors = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modalStateErrors += serverError[key] + '\n';
                        }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(modalStateErrors || serverError || 'Server Error');
            }
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_services/note.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/note.service.ts ***!
  \*******************************************/
/*! exports provided: NoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteService", function() { return NoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var NoteService = /** @class */ (function () {
    function NoteService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    NoteService.prototype.getNotes = function () {
        return this.http.get(this.baseUrl + 'notes');
    };
    NoteService.prototype.getNote = function (noteId) {
        return this.http.get(this.baseUrl + 'notes/note/' + noteId);
    };
    NoteService.prototype.updateNote = function (noteId, note) {
        return this.http.put(this.baseUrl + 'notes/' + noteId, note);
    };
    NoteService.prototype.addNote = function (note) {
        return this.http.post((this.baseUrl + 'notes/'), note);
    };
    NoteService.prototype.deleteNote = function (noteId) {
        return this.http.delete(this.baseUrl + 'notes/' + noteId);
    };
    NoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NoteService);
    return NoteService;
}());



/***/ }),

/***/ "./src/app/add-button/add-button.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-button/add-button.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addNote{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: dodgerblue;\n    position: fixed;\n    bottom: 0px;\n    right: 0px; \n    margin: 20px;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    background: rgb(45,45,45);\n    cursor: pointer;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWJ1dHRvbi9hZGQtYnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL2FkZC1idXR0b24vYWRkLWJ1dHRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZE5vdGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICByaWdodDogMHB4OyBcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDUsNDUsNDUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/add-button/add-button.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-button/add-button.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"addNote\" [routerLink]=\"['/new']\" >\n  <i class=\"fa fa-plus-circle fa-4x\"></i>\n</div>\n"

/***/ }),

/***/ "./src/app/add-button/add-button.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-button/add-button.component.ts ***!
  \****************************************************/
/*! exports provided: AddButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddButtonComponent", function() { return AddButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddButtonComponent = /** @class */ (function () {
    function AddButtonComponent() {
    }
    AddButtonComponent.prototype.ngOnInit = function () {
    };
    AddButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-button',
            template: __webpack_require__(/*! ./add-button.component.html */ "./src/app/add-button/add-button.component.html"),
            styles: [__webpack_require__(/*! ./add-button.component.css */ "./src/app/add-button/add-button.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddButtonComponent);
    return AddButtonComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_services/error.interceptor */ "./src/app/_services/error.interceptor.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _route_routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./route.routing */ "./src/app/route.routing.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./note-card/note-card.component */ "./src/app/note-card/note-card.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _resolvers_notes_resolver__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_resolvers/notes.resolver */ "./src/app/_resolvers/notes.resolver.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./edit-note/edit-note.component */ "./src/app/edit-note/edit-note.component.ts");
/* harmony import */ var _resolvers_edit_resolver__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_resolvers/edit.resolver */ "./src/app/_resolvers/edit.resolver.ts");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes.guard */ "./src/app/_guards/prevent-unsaved-changes.guard.ts");
/* harmony import */ var _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./color-picker/color-picker.component */ "./src/app/color-picker/color-picker.component.ts");
/* harmony import */ var _add_button_add_button_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./add-button/add-button.component */ "./src/app/add-button/add-button.component.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");




























function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_13__["SigninComponent"],
                _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_17__["NoteCardComponent"],
                _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_24__["ColorPickerComponent"],
                _edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_21__["EditNoteComponent"],
                _add_button_add_button_component__WEBPACK_IMPORTED_MODULE_25__["AddButtonComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_26__["TimeAgoPipe"],
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_27__["SearchBarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(_route_routing__WEBPACK_IMPORTED_MODULE_15__["appRoutes"]),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_18__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:5000'],
                        blacklistedRoutes: ['localhost:5000/api/auth']
                    }
                }),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_20__["BsDropdownModule"].forRoot()
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _services_error_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptorProvider"],
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_11__["AlertifyService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"],
                _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_23__["PreventUnsavedChanges"],
                _resolvers_notes_resolver__WEBPACK_IMPORTED_MODULE_19__["NotesResolver"],
                _resolvers_edit_resolver__WEBPACK_IMPORTED_MODULE_22__["NoteEditResolver"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/color-picker/color-picker.component.css":
/*!*********************************************************!*\
  !*** ./src/app/color-picker/color-picker.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dot-container{\n    display: flex;\n    padding: 5px;\n    justify-content: flex-end;\n    margin-bottom: 10px;\n    border-radius: 3px;\n}\n.dot {\n    height: 35px;\n    width: 35px;\n    background-color: grey;\n    border-radius: 50%;\n    display: inline-block;\n    margin-right: 5px;\n\n  }\n.selectedColor{\n    border: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sb3ItcGlja2VyL2NvbG9yLXBpY2tlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7O0VBRW5CO0FBRUY7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG90LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmRvdCB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcblxuICB9XG5cbi5zZWxlY3RlZENvbG9ye1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/color-picker/color-picker.component.html":
/*!**********************************************************!*\
  !*** ./src/app/color-picker/color-picker.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dot-container\" [style.background-color]=\"selectedColor\">\n    <span *ngFor=\"let color of colors\" (click)=\"changeColor(color)\"\n    [style.background-color]=\"color\"\n    [class.selectedColor]=\"color == selectedColor\" class=\"dot\">\n    </span>\n</div>\n\n"

/***/ }),

/***/ "./src/app/color-picker/color-picker.component.ts":
/*!********************************************************!*\
  !*** ./src/app/color-picker/color-picker.component.ts ***!
  \********************************************************/
/*! exports provided: ColorPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent() {
        this.changeColorEmmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.colors = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].colors;
    }
    ColorPickerComponent.prototype.ngOnInit = function () {
        this.selectedColor = this.noteColor != null ? this.noteColor : this.colors[0];
    };
    ColorPickerComponent.prototype.changeColor = function (color) {
        this.selectedColor = color;
        this.changeColorEmmiter.emit(color);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ColorPickerComponent.prototype, "changeColorEmmiter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ColorPickerComponent.prototype, "noteColor", void 0);
    ColorPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-picker',
            template: __webpack_require__(/*! ./color-picker.component.html */ "./src/app/color-picker/color-picker.component.html"),
            styles: [__webpack_require__(/*! ./color-picker.component.css */ "./src/app/color-picker/color-picker.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorPickerComponent);
    return ColorPickerComponent;
}());



/***/ }),

/***/ "./src/app/edit-note/edit-note.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-note/edit-note.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttons{\n    text-align: right;\n}\n\n.buttons button{\n    margin: 0px;\n}\n\ntextarea, input{\n    resize: none;\n    border: none;\n    color: black\n}\n\nbutton:nth-child(2){\n    margin-right: 10px !important;\n}\n\n.delete{\n    background-color: rgb(161, 43, 43);\n    border-color: rgb(161, 43, 43);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1ub3RlL2VkaXQtbm90ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2VkaXQtbm90ZS9lZGl0LW5vdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25ze1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYnV0dG9ucyBidXR0b257XG4gICAgbWFyZ2luOiAwcHg7XG59XG50ZXh0YXJlYSwgaW5wdXR7XG4gICAgcmVzaXplOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2tcbn1cblxuYnV0dG9uOm50aC1jaGlsZCgyKXtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRlbGV0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCA0MywgNDMpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDE2MSwgNDMsIDQzKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/edit-note/edit-note.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-note/edit-note.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xs-0 col-sm-1 p-0\"></div>\n      <div class=\"col-xs-10 col-sm-10 p-3\">\n        <form #editForm=\"ngForm\" id=\"editForm\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [style.background-color]=\"note.color\" [(ngModel)]=\"note.title\" id=\"title\" name=\"title\" aria-describedby=\"title\" placeholder=\"Title\">\n          </div>\n          <div class=\"form-group\">\n            <textarea type=\"text\" class=\"form-control\" [style.background-color]=\"note.color\" [(ngModel)]=\"note.text\" name=\"text\" id=\"text\" placeholder=\"Put the note content here...\"\n              rows=\"10\"></textarea>\n          </div>\n          <app-color-picker [noteColor]=\"note.color\" (changeColorEmmiter)=\"changeColorNote($event)\"></app-color-picker>\n          <div class=\"buttons\">\n              <button class=\"btn btn-danger float-left delete\" (click)=\"deleteNote()\"><i class=\"fa fa-trash\"></i> Delete</button>\n              <button class=\"btn btn-secondary\" [routerLink]=\"['/home']\"><i class=\"fa fa-long-arrow-left\"></i> Back</button>\n              <button (click)=\"addOrUpdateNote()\" [disabled]=\"!editForm.dirty && !colorHasChanged\" class=\"btn btn-primary\"><i class=\"fa fa-save\"></i> Save</button>\n            </div>\n        </form>\n      </div>\n      <div class=\"col-xs-10 col-sm-1 p-0\"></div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/edit-note/edit-note.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-note/edit-note.component.ts ***!
  \**************************************************/
/*! exports provided: EditNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNoteComponent", function() { return EditNoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_note_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/note.service */ "./src/app/_services/note.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var EditNoteComponent = /** @class */ (function () {
    function EditNoteComponent(route, router, noteService, alertify) {
        this.route = route;
        this.router = router;
        this.noteService = noteService;
        this.alertify = alertify;
        this.newMode = false;
        this.colorHasChanged = false;
        this.defaultColor = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].colors[0];
    }
    EditNoteComponent.prototype.unloadNotification = function ($event) {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    };
    EditNoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            if (data['note'] === undefined) {
                _this.note = { id: 0, title: '', text: '', created: new Date(), color: _this.defaultColor };
                _this.newMode = true;
            }
            else {
                _this.note = data['note'];
            }
        });
    };
    EditNoteComponent.prototype.addOrUpdateNote = function () {
        var _this = this;
        if (this.newMode) {
            this.noteService.addNote(this.note).subscribe(function (next) {
                _this.router.navigate(['/home']);
                _this.alertify.success('Note created successfully');
                _this.editForm.reset(_this.note);
                _this.colorHasChanged = false;
            }, function (error) {
                _this.alertify.error(error);
            });
        }
        else {
            this.noteService.updateNote(this.note.id, this.note).subscribe(function (next) {
                _this.router.navigate(['/home']);
                _this.alertify.success('Note updated successfully');
                _this.editForm.reset(_this.note);
                _this.colorHasChanged = false;
            }, function (error) {
                _this.alertify.error(error);
            });
        }
    };
    EditNoteComponent.prototype.deleteNote = function () {
        var _this = this;
        this.noteService.deleteNote(this.note.id).subscribe(function (next) {
            _this.router.navigate(['/home']);
            _this.alertify.success('Note deleted successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    EditNoteComponent.prototype.changeColorNote = function (newColor) {
        this.note.color = newColor;
        this.colorHasChanged = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], EditNoteComponent.prototype, "editForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], EditNoteComponent.prototype, "unloadNotification", null);
    EditNoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-note',
            template: __webpack_require__(/*! ./edit-note.component.html */ "./src/app/edit-note/edit-note.component.html"),
            styles: [__webpack_require__(/*! ./edit-note.component.css */ "./src/app/edit-note/edit-note.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_note_service__WEBPACK_IMPORTED_MODULE_3__["NoteService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], EditNoteComponent);
    return EditNoteComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 468px){\n    .note-container{\n        display: flex;\n        flex-direction: row;\n        align-items: flex-start;\n        justify-content: flex-start;\n        flex-wrap: wrap;\n        \n        width: 100%;\n    }\n}\n\n.card{\n    flex-basis: 30%;\n    margin: 10px;\n    background-color: transparent;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLDJCQUEyQjtRQUMzQixlQUFlOztRQUVmLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWiw2QkFBNkI7O0FBRWpDIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNDY4cHgpe1xuICAgIC5ub3RlLWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uY2FyZHtcbiAgICBmbGV4LWJhc2lzOiAzMCU7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search-bar (searchedWordEmitter)=\"filter($event)\" ></app-search-bar>\n<div class=\"note-container\">\n        <app-note-card class=\"card\" *ngFor=\"let note of filteredNotes\" [note]=\"note\"></app-note-card>\n</div>\n<app-add-button></app-add-button>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/note.service */ "./src/app/_services/note.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(noteService, alertify, route) {
        this.noteService = noteService;
        this.alertify = alertify;
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.notes = data['notes'];
            _this.filteredNotes = _this.notes;
        });
    };
    HomeComponent.prototype.filter = function (word) {
        this.filteredNotes = this.notes.filter(function (n) {
            return n.title.toLocaleLowerCase().includes(word.toLocaleLowerCase());
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle, .dropdown-item {\n    cursor: pointer;\n}\n\n.navbar-brand{\n\n    margin-right: auto;\n    padding-left: 3px;\n    font-weight: bold;\n    color: dodgerblue !important;\n}\n\n.navbar{\n    background-color: RGB(45,45,45);\n}\n\n.title-user{\n    color: white !important;\n}\n\n.darkmenu{\n    background-color: RGB(73,73,73);\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi10b2dnbGUsIC5kcm9wZG93bi1pdGVtIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXItYnJhbmR7XG5cbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGRvZGdlcmJsdWUgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0IoNDUsNDUsNDUpO1xufVxuXG4udGl0bGUtdXNlcntcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmRhcmttZW51e1xuICAgIGJhY2tncm91bmQtY29sb3I6IFJHQig3Myw3Myw3Myk7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar justify-content-end\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\">TodayNotes</a>\n  <div *ngIf=\"!loggedIn()\" class=\"d-none d-md-block\">\n      <button type=\"button\" [routerLink]=\"['/signin']\"\n      routerLinkActive=\"router-link-active\" \n      class=\"btn btn-primary pr-5 pl-5 mr-2\">Sign in</button>\n    <button type=\"button\" [routerLink]=\"['/register']\"\n    class=\"btn btn-outline-primary p-2\">Create an account</button>\n  </div>\n  <div *ngIf=\"loggedIn()\" class=\"dropdown mr-3\" dropdown>\n    <a dropdownToggle class=\"dropdown-toggle title-user\">\n      Welcome {{this.auth.decodedToken?.unique_name | titlecase}}\n    </a>\n    <div class=\"dropdown-menu mt-3 darkmenu\" *dropdownMenu>\n            <a class=\"dropdown-item\" (click)=\"settings()\">\n                <i class=\"fa fa-user\"></i> Settings</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" (click)=\"logout()\">\n                <i class=\"fa fa-sign-out\"></i> Logout</a>\n    </div>\n  </div>\n\n</nav>\n\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, alertify, router) {
        this.auth = auth;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.loggedIn = function () {
        return this.auth.loggedIn();
    };
    NavbarComponent.prototype.logout = function () {
        this.router.navigate(['/welcome']);
        localStorage.removeItem('token');
        this.alertify.message('logged out');
    };
    NavbarComponent.prototype.settings = function () {
        this.alertify.message('settings is under develop');
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/note-card/note-card.component.css":
/*!***************************************************!*\
  !*** ./src/app/note-card/note-card.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-date{\n    font-size: 13px;\n    color: black;\n    text-align: right;\n}\n\n.card-body{\n    padding-bottom: 0px;\n    border: none;\n    border-radius: 10px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZS1jYXJkL25vdGUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL25vdGUtY2FyZC9ub3RlLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWRhdGV7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNhcmQtYm9keXtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/note-card/note-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/note-card/note-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"card-body\" [style.background-color]=\"note.color\" [routerLink]=\"['/edit/', note.id]\" >\n    <h5 class=\"card-title\">{{note.title}}</h5>\n    <p class=\"card-text\">{{note.text}}</p>\n    <p class=\"card-date\">{{note.created | timeAgo}}</p>\n  </div>\n\n  \n"

/***/ }),

/***/ "./src/app/note-card/note-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/note-card/note-card.component.ts ***!
  \**************************************************/
/*! exports provided: NoteCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteCardComponent", function() { return NoteCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoteCardComponent = /** @class */ (function () {
    function NoteCardComponent() {
    }
    NoteCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NoteCardComponent.prototype, "note", void 0);
    NoteCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-note-card',
            template: __webpack_require__(/*! ./note-card.component.html */ "./src/app/note-card/note-card.component.html"),
            styles: [__webpack_require__(/*! ./note-card.component.css */ "./src/app/note-card/note-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NoteCardComponent);
    return NoteCardComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <div class=\"row justify-content-center\">\n    <div class=\"text-center col-12 col-md-8\">\n      <form #registerForm=\"ngForm\" class=\"col-12\" (ngSubmit)=\"register()\">\n        <h2 class=\"text-center text-primary\">Create a new account</h2>\n        <hr>\n\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" autofocus required name=\"username\" [(ngModel)]=\"model.username\"\n            placeholder=\"Username\">\n        </div>\n\n        <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" required name=\"password\" [(ngModel)]=\"model.password\"\n            placeholder=\"Password\">\n        </div>\n\n        <div class=\"form-group text-center\">\n          <button class=\"btn btn-primary\" type=\"submit\">Register</button>\n          <button class=\"btn btn-secondary ml-2\" type=\"button\" [routerLink]=\"['/welcome']\">Cancel</button>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, alertifyService, router) {
        this.authService = authService;
        this.alertifyService = alertifyService;
        this.router = router;
        this.model = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.authService.register(this.model).subscribe(function () {
            _this.alertifyService.success('registration successful');
            _this.router.navigate(['/welcome']);
        }, function (error) {
            _this.alertifyService.error(error);
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/route.routing.ts":
/*!**********************************!*\
  !*** ./src/app/route.routing.ts ***!
  \**********************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _resolvers_notes_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_resolvers/notes.resolver */ "./src/app/_resolvers/notes.resolver.ts");
/* harmony import */ var _edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-note/edit-note.component */ "./src/app/edit-note/edit-note.component.ts");
/* harmony import */ var _resolvers_edit_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_resolvers/edit.resolver */ "./src/app/_resolvers/edit.resolver.ts");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes.guard */ "./src/app/_guards/prevent-unsaved-changes.guard.ts");









var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], resolve: { notes: _resolvers_notes_resolver__WEBPACK_IMPORTED_MODULE_5__["NotesResolver"] } },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"] },
    { path: 'edit/:id', component: _edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_6__["EditNoteComponent"], canDeactivate: [_guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_8__["PreventUnsavedChanges"]], resolve: { note: _resolvers_edit_resolver__WEBPACK_IMPORTED_MODULE_7__["NoteEditResolver"] } },
    { path: 'new', component: _edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_6__["EditNoteComponent"], canDeactivate: [_guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_8__["PreventUnsavedChanges"]] },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/search-bar/search-bar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-nav{\n    padding: 10px;\n}\n\ninput {\n    width: 100%;\n    border: none;\n    padding: 8px;\n    margin-top: 8px;\n    padding-left: 10px;\n    border-radius: 10px;\n    background-color: RGB(45,45,45);\n    color: gray;\n}\n\ntextarea:focus, input:focus{\n    outline: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtbmF2e1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0IoNDUsNDUsNDUpO1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG50ZXh0YXJlYTpmb2N1cywgaW5wdXQ6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-nav\">\n    <input type=\"text\" [ngModel]=\"searchWord\" (ngModelChange)=\"search($event)\" placeholder=\"Search by title or content...\">\n</div>\n"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.ts ***!
  \****************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
        this.searchedWordEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent.prototype.search = function (newValue) {
        this.searchWord = newValue;
        this.searchedWordEmitter.emit(newValue);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchBarComponent.prototype, "searchedWordEmitter", void 0);
    SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/search-bar/search-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <div class=\"row justify-content-center\">\n    <div class=\"text-center col-12 col-md-8\">\n      <form #loginForm=\"ngForm\" class=\"col-12\" (ngSubmit)=\"login()\">\n        <h2 class=\"text-center text-primary\">Sign in</h2>\n        <hr>\n\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" autofocus placeholder=\"Username\" required [(ngModel)]=\"model.username\"\n            name=\"username\" aria-label=\"Username\">\n        </div>\n\n        <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" required name=\"password\" [(ngModel)]=\"model.password\"\n            placeholder=\"Password\">\n        </div>\n\n        <div class=\"form-group text-center\">\n          <button [disabled]=\"!loginForm.valid\" class=\"btn btn-primary pl-4 pr-4 my-2 my-sm-0\"\n            type=\"submit\">Login</button>\n          <button class=\"btn btn-secondary ml-2\" type=\"button\" [routerLink]=\"['/welcome']\">Cancel</button>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SigninComponent = /** @class */ (function () {
    function SigninComponent(auth, alertify, router) {
        this.auth = auth;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.model).subscribe(function (next) {
            _this.alertify.success('Logged in successfully');
            _this.router.navigate(['/home']);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    SigninComponent.prototype.loggedIn = function () {
        return this.auth.loggedIn();
    };
    SigninComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.alertify.message('logged out');
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-height {\n    height: 100vh;\n    margin:0;\n    margin-top: -60px;\n    padding: 0px;\n}\n.aligner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  \n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtaGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjowO1xuICAgIG1hcmdpbi10b3A6IC02MHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5hbGlnbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIl19 */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height aligner\">\n  <div class=\"row text-center aligner-item\">\n    <div class=\"col-md-4 col-12 mt-5\">\n      <div role=\"main\" aria-labelledby=\"headline subheadline\">\n        <div class=\"interaction-top\">\n          <svg class=\"interaction-logo\" width=\"87px\" height=\"71px\" viewBox=\"0 0 87 71\" version=\"1.1\"\n            xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <defs>\n              <linearGradient x1=\"248.914931%\" y1=\"0%\" x2=\"-27.7723524%\" y2=\"189.710829%\" id=\"linearGradient-1\">\n                <stop stop-color=\"#1C9FFF\" offset=\"0%\"></stop>\n                <stop stop-color=\"#765EE7\" offset=\"100%\"></stop>\n              </linearGradient>\n              <linearGradient x1=\"100%\" y1=\"24.72602%\" x2=\"-41.0744349%\" y2=\"104.890057%\" id=\"linearGradient-2\">\n                <stop stop-color=\"#1C9FFF\" offset=\"0%\"></stop>\n                <stop stop-color=\"#765EE7\" offset=\"100%\"></stop>\n              </linearGradient>\n            </defs>\n            <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n              <g transform=\"translate(-272.000000, -151.000000)\">\n                <g id=\"Page\">\n                  <g id=\"Content\" transform=\"translate(160.000000, 143.000000)\">\n                    <g id=\"Logo\" transform=\"translate(112.000000, 0.000000)\">\n                      <rect id=\"Bounds\" x=\"0\" y=\"0\" width=\"87\" height=\"87\"></rect>\n                      <polygon id=\"square\" fill=\"url(#linearGradient-1)\" opacity=\"0.5\"\n                        points=\"0.2578125 43.5 17.5546875 26.203125 34.8515625 43.5 17.5546875 60.796875\"></polygon>\n                      <polygon id=\"dash\" fill=\"url(#linearGradient-2)\"\n                        points=\"69.4453125 8.90625 17.5546875 60.796875 34.8515625 78.09375 69.4453125 43.5 86.7421875 26.203125\"\n                        class=\"x-hidden-focus\"></polygon>\n                    </g>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </svg>\n          <h1 class=\"mt-3 text-white\">TodayNotes</h1>\n          <p class=\"mt-5 text-white\">Write a note, get stuff done today, every day.</p>\n        </div>\n        <div>\n          <a id=\"actionButton\" class=\"btn btn-primary pr-5 pl-5 mt-5\"\n          [routerLink]=\"['/signin']\">Sign in</a>\n          <p class=\"mt-3\">\n            <a id=\"alternativeButton\" [routerLink]=\"['/register']\">No account? Sign up for free</a>\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-7 d-none d-md-block\">\n      <img src=\"../assets/welcome.jpg\" class=\"img-fluid\" alt=\"\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/home']);
        }
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:5000/api/',
    colors: ['#d4d3d3', '#c5747c', '#9874c5', '#de9f4f', '#6981ff']
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ivanledinich/TodayNotes/TodayNotesSPA/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map