module SAQS.Directives {

    import Templates = SAQS.Const.Templates;
    import Models = SAQS.Models;

    interface Scope extends ng.IScope {
        itemCount: number
        totalItemCount: number
        crumbs: Models.ProductFilterOption[]
        removeCrumb: (crumb: Models.ProductFilterOption) => void
        removeAll: () => void
    }

    angular.module('saqs.directives').directive('breadCrumbs', [
        'EventBus',
        (EventBus: SAQS.Services.EventBus) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.BREADCRUMB_TPL,
                link: (scope: Scope) => {
                    scope.itemCount = 0;
                    scope.totalItemCount = 0;
                    scope.crumbs = [];

                    scope.removeCrumb = (crumb: Models.ProductFilterOption) => {
                        EventBus.publish(SAQS.Const.Events.removeFilter, crumb);
                    };

                    scope.removeAll = () => {
                        let crumbs = angular.copy(scope.crumbs);

                        crumbs.forEach((crumb) => {
                            crumb.skipApply = true;
                            EventBus.publish(SAQS.Const.Events.removeFilter, crumb);
                        });

                        EventBus.publish(SAQS.Const.Events.applyFilters);
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

                    EventBus.subscribe(SAQS.Const.Events.loadProducts, scope, (response: Models.SearchRes<Models.Product>) => {
                        scope.itemCount = response.results.length;
                        scope.totalItemCount = response.totalCount;
                    });
                }
            }
        }
    ]);
}
