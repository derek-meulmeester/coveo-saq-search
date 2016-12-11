module SAQS.Directives {

    import Templates = SAQS.Const.Templates;
    import Models = SAQS.Models;

    interface Scope extends ng.IScope {}

    angular.module('saqs.directives').directive('searchBar', [
        'EventBus',
        'Filter',
        (EventBus: SAQS.Services.EventBus,
         Filter: SAQS.Services.Filter) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.SEARCH_BAR_TPL,
                link: (scope: Scope, element: ng.IAugmentedJQuery) => {
                    // run an initial blank search
                    EventBus.publish(SAQS.Const.Events.applyFilters);

                    let mainSearchInput = element.find('input');

                    mainSearchInput.bind('keydown', (event: any) => {
                        if (event.which === 13) {
                            let searchTerm = mainSearchInput.val();

                            EventBus.publish(SAQS.Const.Events.addFilter, <Models.ProductFilterOption>{
                                category: 'main-search',
                                key: 'main-search',
                                label: '',
                                bcDisplay: searchTerm,
                                multi: false,
                                value: searchTerm,
                                submitValue: searchTerm
                            });

                            mainSearchInput.val('');
                        }
                    });
                }
            }
        }
    ]);
}
