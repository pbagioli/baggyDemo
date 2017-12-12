/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />

module Web {

    export class App {

        private app: ng.IModule;

        public appName: string = 'angularApp';

        constructor() {
            this.app = angular.module(this.appName, [
                'ngAnimate',        // animations
                'ngRoute',          // routing
                'ui.odometer',          // routing
                'ui.bootstrap',    
                'ngSanitize'       // sanitizes html bindings
            ])
                .config([
                    '$compileProvider',
                    ($compileProvider) => {
                        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|sip):/);
                    }
                ]);

            this.defaultRoute('/');
        }

        registerController(controllerName: string, controllerConstructor: Function) {
            this.app.controller(controllerName, controllerConstructor);
        }

        registerService(serviceName: string, serviceConstructor: Function) {
            this.app.service(serviceName, serviceConstructor);
        }

        registerDirective(name: string, directiveFactory: any[]) {
            this.app.directive(name, directiveFactory);
        }

        registerRoute(path: string, controllerName: string, template: string) {
            this.app.config([
                '$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
                    $routeProvider.when(path, {
                        controller: controllerName,
                        templateUrl: template
                    });
                }
            ]);
        }

        registerConstant(name: string, value: any) {
            this.app.constant(name, value);
        }

        defaultRoute(path: string) {
            this.app.config([
                '$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
                    $routeProvider.otherwise({ redirectTo: path });
                }
            ]);
        }

        run(document: Document) {
            angular.bootstrap(document, [this.appName]);
        }

    }
}

var app: Web.App = new Web.App();
