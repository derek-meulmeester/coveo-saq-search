module SAQS.Directives {

    import Templates = SAQS.Const.Templates;
    import Models = SAQS.Models;

    interface Scope extends ng.IScope {
        products: Models.Product[]
        openProduct: (product: Models.Product) => void
    }

    angular.module('saqs.directives').directive('productList', [
        '$window',
        'DB',
        ($window: ng.IWindowService,
         DB: SAQS.Services.DB) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.PRODUCT_LIST_TPL,
                link: (scope: Scope) => {
                    scope.products = DB.getProducts();

                    scope.openProduct = (product: Models.Product) => {
                        if (product && product.clickUri) {
                            $window.open(product.clickUri);
                        }
                    }
                }
            }
        }
    ]);
}
