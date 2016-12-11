module SAQS {

    import Templates = SAQS.Const.Templates;

    /**
     * Module to contain all SAQ Search Services
     */
    angular.module('saqs.services', []);

    /**
     * Module to contain all SAQ Search Directives
     */
    angular.module('saqs.directives', []);

    /**
     * Main SAQ Search Module
     */
    angular.module('saqs', [
        'ngRoute',
        'saqs.services',
        'saqs.directives'
    ]);

    /**
     * Setup injectable constants for libs
     */
    angular.module('saqs').constant('_', _);

    /**
     * Configure routes
     */
    angular.module('saqs').config([
        '$routeProvider',
        '$compileProvider',
        ($routeProvider: any,
         $compileProvider: ng.ICompileProvider) => {

             $compileProvider.debugInfoEnabled(false);

             $routeProvider.when('/', {
                 templateUrl: Templates.HOME_TPL
             }).otherwise({
                 templateUrl: Templates.NOT_FOUND_TPL
             });
        }
    ]);
}
