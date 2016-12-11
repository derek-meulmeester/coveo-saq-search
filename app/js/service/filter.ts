module SAQS.Services {

    import Models = SAQS.Models;

    var self: any;

    export class Filter {
        static $inject = [
            'EventBus',
            'DB',
            'Product'
        ];

        constructor(private EventBus: SAQS.Services.EventBus,
                    private DB: SAQS.Services.DB,
                    private Product: SAQS.Services.Product) {
            self = this;

            EventBus.subscribe(SAQS.Const.Events.applyFilters, self, self.applyFilters);
        }

        public applyFilters() {
            let filters = self.DB.getFilters();
            let searchFilters: Models.SearchFilter[] = Object.keys(filters).map((key: string) => {
                return filters[key];
            });
            let searchReq: Models.SearchReq = {
                filters: searchFilters
            };

            self.Product.search(searchReq)
                .then((searchRes: Models.SearchRes<Models.Product>) => {
                    self.EventBus.publish(SAQS.Const.Events.loadProducts, searchRes.results)
                })
                .catch((error: any) => {
                    alert('Error searching for products');
                });
        }
    }

    angular.module('saqs.services').service('Filter', Filter);
}
