module SAQS.Directives {

    import Templates = SAQS.Const.Templates;

    interface Scope extends ng.IScope {
        filters: any
    }

    angular.module('saqs.directives').directive('sideFilter', [
        () => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.SIDE_FILTER_TPL,
                link: (scope: Scope) => {
                        scope.filters = SAQS.Const.Filters.ALL_FILTERS;
                }
            }
        }
    ]);
}
