module SAQS.Services {

    import Models = SAQS.Models;

    var self: any;

    export class Product {
        static $inject = [
            '$window',
            '$q',
            '$http',
            'EventBus',
            'ReqBuilder'
        ];

        constructor(private $window: ng.IWindowService,
                    private $q: ng.IQService,
                    private $http: ng.IHttpService,
                    private EventBus: SAQS.Services.EventBus,
                    private ReqBuilder: SAQS.Services.ReqBuilder) {
            self = this;

            EventBus.subscribe(SAQS.Const.Events.performSearch, self, self.performSearch);
        }

        public search(searchReq: Models.SearchReq): ng.IPromise<Models.SearchRes<Models.Product>> {
            let deferred = self.$q.defer();

            let uri = self.ReqBuilder.getUri(searchReq);
            let data = self.ReqBuilder.getData(searchReq);
            self.$http.post(uri, data)
                .then((result: any) => {
                    self.enrich(result.data);
                    deferred.resolve(result.data);
                })
                .catch((error: any) => {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        public enrich(searchRes: Models.SearchRes<Models.Product>) {
            let favoritesKey = SAQS.Const.LocalStorage.FAVORITE_PRODUCTS;
            let favoritesStr = self.$window.localStorage.getItem(favoritesKey);
            let favorites = (favoritesStr) ? JSON.parse(favoritesStr) : {};

            searchRes.results.forEach((product: Models.Product) => {
                product._favorite = (favorites[product.uniqueId]) ? true : false;
                // use HTTPS urls for the image thumbnails
                product.raw.tpthumbnailuri = product.raw.tpthumbnailuri.replace('http', 'https');
            });
        }
    }

    angular.module('saqs.services').service('Product', Product);
}
