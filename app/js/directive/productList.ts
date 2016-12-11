module SAQS.Directives {

    import Templates = SAQS.Const.Templates;
    import Models = SAQS.Models;

    interface Scope extends ng.IScope {
        products: Models.Product[]
        openProduct: (product: Models.Product) => void
        favoriteProduct: (product: Models.Product, $event: any) => void
    }

    angular.module('saqs.directives').directive('productList', [
        '$window',
        'DB',
        'EventBus',
        ($window: ng.IWindowService,
         DB: SAQS.Services.DB,
         EventBus: SAQS.Services.EventBus) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.PRODUCT_LIST_TPL,
                link: (scope: Scope, element: ng.IAugmentedJQuery) => {
                    scope.products = DB.getProducts();

                    scope.openProduct = (product: Models.Product) => {
                        if (product && product.clickUri) {
                            $window.open(product.clickUri);
                        }
                    };

                    scope.favoriteProduct = (product: Models.Product, $event: any) => {
                        $event.preventDefault();
                        $event.stopPropagation();
                        let itemKey = SAQS.Const.LocalStorage.FAVORITE_PRODUCTS;
                        let favoritesStr = $window.localStorage.getItem(itemKey);
                        let favorites = (favoritesStr) ? JSON.parse(favoritesStr) : {};

                        if (product._favorite === true) {
                            product._favorite = false;
                            delete favorites[product.uniqueId];
                        } else {
                            product._favorite = true;
                            favorites[product.uniqueId] = true;
                        }

                        $window.localStorage.setItem(itemKey, JSON.stringify(favorites));
                    };
                }
            }
        }
    ]);
}
