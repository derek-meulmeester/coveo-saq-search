module SAQS.Services {

    import Models = SAQS.Models;

    var self: any;

    export class Filter {
        static $inject = [
            '$rootScope',
            'EventBus',
            'DB',
            'Product'
        ];

        constructor(private $rootScope: ng.IScope,
                    private EventBus: SAQS.Services.EventBus,
                    private DB: SAQS.Services.DB,
                    private Product: SAQS.Services.Product) {
            self = this;

            EventBus.subscribe(SAQS.Const.Events.applyFilters, self, self.applyFilters);
            EventBus.subscribe(SAQS.Const.Events.performSearch, self, self.performSearch);
        }

        private buildSearchReq(): Models.SearchReq {
            let filters = self.DB.getFilters();
            let searchFilters: Models.SearchFilter[] = Object.keys(filters).map((key: string) => {
                return filters[key];
            });

            return <Models.SearchReq>{
                filters: searchFilters,
                sort: self.DB.getSorting(),
                paging: self.DB.getPaging()
            };
        }

        private performSearch() {
            self.$rootScope.loading = true;
            self.Product.search(self.buildSearchReq())
                .then((searchRes: Models.SearchRes<Models.Product>) => {
                    self.EventBus.publish(SAQS.Const.Events.loadProducts, searchRes);
                    self.$rootScope.loading = false;
                })
                .catch((error: any) => {
                    alert('Error searching for products');
                    self.$rootScope.loading = false;
                });
        }

        public applyFilters() {
            self.performSearch();
        }
    }

    angular.module('saqs.services').service('Filter', Filter);
}
