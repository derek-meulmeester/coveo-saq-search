module SAQS.Services {

    import Models = SAQS.Models;

    var self: any;

    export class Product {
        static $inject = [
            '$q',
            '$http',
            'EventBus',
            'ReqBuilder'
        ];

        constructor(private $q: ng.IQService,
                    private $http: ng.IHttpService,
                    private EventBus: SAQS.Services.EventBus,
                    private ReqBuilder: SAQS.Services.ReqBuilder) {
            self = this;
        }

        public search(searchReq: Models.SearchReq): ng.IPromise<Models.SearchRes<Models.Product>> {
            let deferred = self.$q.defer();

            let uri = self.ReqBuilder.getUri(searchReq);
            let data = self.ReqBuilder.getData(searchReq);
            self.$http.post(uri, data)
                .then((result: any) => {
                    deferred.resolve(result.data);
                })
                .catch((error: any) => {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }

    angular.module('saqs.services').service('Product', Product);
}
