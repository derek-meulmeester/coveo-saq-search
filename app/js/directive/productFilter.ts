module SAQS.Directives {

    import Templates = SAQS.Const.Templates;
    import Models = SAQS.Models;

    interface Scope extends ng.IScope {
        filter: Models.SearchFilter
        onChange: (option: Models.ProductFilterOption, filter: Models.ProductFilter) => void
    }

    angular.module('saqs.directives').directive('productFilter', [
        '_',
        'DB',
        'EventBus',
        (_: _.LoDashStatic,
         DB: SAQS.Services.DB,
         EventBus: SAQS.Services.EventBus) => {
            return {
                restrict: 'E',
                scope: {
                    filter: '='
                },
                templateUrl: Templates.PRODUCT_FILTER_TPL,
                link: (scope: Scope) => {

                    scope.onChange = (option: Models.ProductFilterOption, filter: Models.ProductFilter) => {
                        switch (filter.type) {
                        case 'checkbox':
                            // If there are any options which are selected then add this filter
                            // otherwise it should be removed
                            let event = option.value === true ?
                                SAQS.Const.Events.addFilter : SAQS.Const.Events.removeFilter;

                            // If this is not a multi filter then we need to remove any other selections made
                            if (option.multi === false) {
                                filter.options.forEach((_option: Models.ProductFilterOption) => {
                                    if (_option.key !== option.key && _option.value === true) {
                                        _option.skipApply = true;
                                        _option.value = false;
                                        EventBus.publish(SAQS.Const.Events.removeFilter, _option);
                                    }
                                });
                            }

                            EventBus.publish(event, option);
                            break;
                        }
                    };
                }
            }
        }
    ]);
}
