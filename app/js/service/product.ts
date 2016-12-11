module SAQS.Services {

    import Models = SAQS.Models;

    var self: any;

    export class Product {
        static $inject = [
            '$q',
            '$http',
            'EventBus'
        ];

        constructor(private $q: ng.IQService,
                    private $http: ng.IHttpService,
                    private EventBus: SAQS.Services.EventBus) {
            self = this;
        }

        public search(searchReq: Models.SearchReq): ng.IPromise<Models.SearchRes<Models.Product>> {
            let deferred = self.$q.defer();

            let queryParams = self.getQueryParams(searchReq.filters);
            let uri = SAQS.Const.API.SEARCH_URI + queryParams;
            self.$http.get(uri)
                .then((result: any) => {
                    deferred.resolve(result.data);
                })
                .catch((error: any) => {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        private getQueryParams(filters: Models.SearchFilter[]): string {
            return filters.reduce((qp: any, filter: Models.SearchFilter) => {
                let category = (filter.category === 'main-search' ? 'q' : filter.category);
                return qp += `&${category}=${filter.value}`;
            }, '');
        }
    }

    angular.module('saqs.services').service('Product', Product);
}
