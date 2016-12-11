module SAQS.Directives {

    import Templates = SAQS.Const.Templates;
    import Models = SAQS.Models;

    interface Scope extends ng.IScope {
        crumbs: Models.ProductFilterOption[]
        removeCrumb: (crumb: Models.ProductFilterOption) => void
    }

    angular.module('saqs.directives').directive('breadCrumbs', [
        'EventBus',
        (EventBus: SAQS.Services.EventBus) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.BREADCRUMB_TPL,
                link: (scope: Scope) => {
                    scope.crumbs = [];

                    scope.removeCrumb = (crumb: Models.ProductFilterOption) => {
                        EventBus.publish(SAQS.Const.Events.removeFilter, crumb);
                    };

                    EventBus.subscribe(SAQS.Const.Events.addFilter, scope, (option: Models.ProductFilterOption) => {
                        let idx = _.findIndex(scope.crumbs, {key: option.key});

                        if (idx > -1) {
                            scope.crumbs.splice(idx, 1);
                        }

                        if (option.bcDisplay !== false) {
                            scope.crumbs.push(option);
                        }
                    });

                    EventBus.subscribe(SAQS.Const.Events.removeFilter, scope, (option: Models.ProductFilterOption) => {
                        scope.crumbs.splice(_.findIndex(scope.crumbs, {key: option.key}), 1);
                    });
                }
            }
        }
    ]);
}
