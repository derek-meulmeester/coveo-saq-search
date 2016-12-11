var SAQS;
(function (SAQS) {
    var Const;
    (function (Const) {
        var API;
        (function (API) {
            API.BASE_URL = 'https://cloudplatform.coveo.com';
            API.SEARCH_URI = API.BASE_URL + '/rest/search';
        })(API = Const.API || (Const.API = {}));
    })(Const = SAQS.Const || (SAQS.Const = {}));
})(SAQS || (SAQS = {}));

var SAQS;
(function (SAQS) {
    var Const;
    (function (Const) {
        var Events;
        (function (Events) {
            Events.addFilter = 'filter.add';
            Events.afterAddFilter = 'filter.add.after';
            Events.removeFilter = 'filter.remove';
            Events.afterRemoveFilter = 'filter.remove.after';
            Events.applyFilters = 'filter.apply';
            Events.afterApplyFilters = 'filter.apply.after';
            Events.loadProducts = 'product.load';
            Events.performSearch = 'search.load';
        })(Events = Const.Events || (Const.Events = {}));
    })(Const = SAQS.Const || (SAQS.Const = {}));
})(SAQS || (SAQS = {}));

var SAQS;
(function (SAQS) {
    var Const;
    (function (Const) {
        var Filters;
        (function (Filters) {
            Filters.Sort = {
                ASC: 'fieldAscending',
                DESC: 'fieldDescending'
            };
            Filters.ON_SPECIAL = {
                title: 'On Special',
                type: 'checkbox',
                category: 'tpenspecial',
                options: [{
                        category: 'tpenspecial',
                        key: 'on-special',
                        label: 'Only',
                        bcDisplay: 'On Special',
                        value: false,
                        submitValue: true,
                        multi: false
                    }]
            };
            // TODO: Add Price Filter
            // export const PRICE: Models.ProductFilter = {
            //     title: 'Price Range',
            //     type: 'range',
            //     category: 'tpprice',
            //     options: [{
            //         category: 'tpprice',
            //         key: 'price-range',
            //         label: '',
            //         submitValue: true,
            //         multi: false,
            //         value: {
            //             min: 0,
            //             max: 1000
            //         }
            //     }]
            // };
            Filters.CATEGORY = {
                title: 'Category',
                type: 'checkbox',
                category: 'tpcategorie',
                options: [{
                        category: 'tpcategorie',
                        key: 'type_red-wine',
                        label: 'Red Wine',
                        value: false,
                        submitValue: '"Vin rouge"',
                        multi: true
                    }, {
                        category: 'tpcategorie',
                        key: 'type_white-wine',
                        label: 'White Wine',
                        submitValue: '"Vin blanc"',
                        value: false,
                        multi: true
                    }, {
                        category: 'tpcategorie',
                        key: 'type_rose',
                        label: 'Rosé',
                        submitValue: '"Vin rosé"',
                        value: false,
                        multi: true
                    }, {
                        category: 'tpcategorie',
                        key: 'type_porto',
                        label: 'Porto',
                        submitValue: 'Porto',
                        value: false,
                        multi: true
                    }, {
                        category: 'tpcategorie',
                        key: 'type_whisky',
                        label: 'Whisky',
                        submitValue: 'Whisky',
                        value: false,
                        multi: true
                    }, {
                        category: 'tpcategorie',
                        key: 'type_dry-gin',
                        label: 'Dry Gin',
                        submitValue: '"Dry gin"',
                        value: false,
                        multi: true
                    }]
            };
            Filters.REGION = {
                title: 'Region',
                type: 'checkbox',
                category: 'tpregion',
                options: [{
                        category: 'tpregion',
                        key: 'region_california',
                        label: 'California',
                        value: false,
                        submitValue: 'californie',
                        multi: true
                    }, {
                        category: 'tpregion',
                        key: 'region_toscane',
                        label: 'Toscane',
                        value: false,
                        submitValue: 'toscane',
                        multi: true
                    }, {
                        category: 'tpregion',
                        key: 'region_bourgogne',
                        label: 'Bourgogne',
                        value: false,
                        submitValue: 'Bourgogne',
                        multi: true
                    }, {
                        category: 'tpregion',
                        key: 'region_bordeaux',
                        label: 'Bordeaux',
                        value: false,
                        submitValue: 'Bordeaux',
                        multi: true
                    }, {
                        category: 'tpregion',
                        key: 'region_quebec',
                        label: 'Québec',
                        value: false,
                        submitValue: '"Québec"',
                        multi: true
                    }, {
                        category: 'tpregion',
                        key: 'region_vallee-du-rhone',
                        label: 'Vallée du Rhône',
                        value: false,
                        submitValue: '"Vallée du Rhône"',
                        multi: true
                    }]
            };
            Filters.COUNTRY = {
                title: 'Country',
                type: 'checkbox',
                category: 'tppays',
                options: [{
                        category: 'tppays',
                        key: 'country_france',
                        label: 'France',
                        value: false,
                        submitValue: 'france',
                        multi: true
                    }, {
                        category: 'tppays',
                        key: 'country_us',
                        label: 'U.S.',
                        value: false,
                        submitValue: 'etats-unis',
                        multi: true
                    }, {
                        category: 'tppays',
                        key: 'country_italy',
                        label: 'Italy',
                        value: false,
                        submitValue: 'italie',
                        multi: true
                    }, {
                        category: 'tppays',
                        key: 'country_canada',
                        label: 'Canada',
                        value: false,
                        submitValue: 'Canada',
                        multi: true
                    }, {
                        category: 'tppays',
                        key: 'country_spain',
                        label: 'Spain',
                        value: false,
                        submitValue: 'Espagne',
                        multi: true
                    }, {
                        category: 'tppays',
                        key: 'country_portugal',
                        label: 'Portugal',
                        value: false,
                        submitValue: 'Portugal',
                        multi: true
                    }]
            };
            Filters.ALL_FILTERS = [
                Filters.ON_SPECIAL,
                //PRICE,
                Filters.CATEGORY,
                Filters.REGION,
                Filters.COUNTRY
            ];
        })(Filters = Const.Filters || (Const.Filters = {}));
    })(Const = SAQS.Const || (SAQS.Const = {}));
})(SAQS || (SAQS = {}));

var SAQS;
(function (SAQS) {
    var Const;
    (function (Const) {
        var LocalStorage;
        (function (LocalStorage) {
            LocalStorage.FAVORITE_PRODUCTS = 'saqs.products.favorites';
        })(LocalStorage = Const.LocalStorage || (Const.LocalStorage = {}));
    })(Const = SAQS.Const || (SAQS.Const = {}));
})(SAQS || (SAQS = {}));

var SAQS;
(function (SAQS) {
    var Const;
    (function (Const) {
        var Paging;
        (function (Paging) {
            Paging.DEFAULT_LIMIT = 12;
        })(Paging = Const.Paging || (Const.Paging = {}));
    })(Const = SAQS.Const || (SAQS.Const = {}));
})(SAQS || (SAQS = {}));

var SAQS;
(function (SAQS) {
    var Const;
    (function (Const) {
        var Templates;
        (function (Templates) {
            var BASE = '/coveo-saq-search/templates/';
            Templates.HOME_TPL = BASE + 'home.html';
            Templates.NOT_FOUND_TPL = BASE + 'not-found.html';
            Templates.SEARCH_BAR_TPL = BASE + 'directives/search-bar.html';
            Templates.SIDE_FILTER_TPL = BASE + 'directives/side-filter.html';
            Templates.PRODUCT_FILTER_TPL = BASE + 'directives/product-filter.html';
            Templates.PRODUCT_LIST_TPL = BASE + 'directives/product-list.html';
            Templates.BREADCRUMB_TPL = BASE + 'directives/breadcrumbs.html';
            Templates.PAGING_TPL = BASE + 'directives/paging.html';
        })(Templates = Const.Templates || (Const.Templates = {}));
    })(Const = SAQS.Const || (SAQS.Const = {}));
})(SAQS || (SAQS = {}));

var SAQS;
(function (SAQS) {
    var Templates = SAQS.Const.Templates;
    /**
     * Module to contain all SAQ Search Services
     */
    angular.module('saqs.services', []);
    /**
     * Module to contain all SAQ Search Directives
     */
    angular.module('saqs.directives', []);
    /**
     * Main SAQ Search Module
     */
    angular.module('saqs', [
        'ngRoute',
        'saqs.services',
        'saqs.directives'
    ]);
    /**
     * Setup injectable constants for libs
     */
    angular.module('saqs').constant('_', _);
    /**
     * Configure routes
     */
    angular.module('saqs').config([
        '$routeProvider',
        '$compileProvider',
        function ($routeProvider, $compileProvider) {
            $compileProvider.debugInfoEnabled(false);
            $routeProvider.when('/', {
                templateUrl: Templates.HOME_TPL
            }).otherwise({
                templateUrl: Templates.NOT_FOUND_TPL
            });
        }
    ]);
})(SAQS || (SAQS = {}));

var SAQS;
(function (SAQS) {
    var Directives;
    (function (Directives) {
        var Templates = SAQS.Const.Templates;
        angular.module('saqs.directives').directive('breadCrumbs', [
            'EventBus',
            function (EventBus) {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: Templates.BREADCRUMB_TPL,
                    link: function (scope) {
                        scope.itemCount = 0;
                        scope.totalItemCount = 0;
                        scope.crumbs = [];
                        scope.removeCrumb = function (crumb) {
                            EventBus.publish(SAQS.Const.Events.removeFilter, crumb);
                        };
                        scope.removeAll = function () {
                            var crumbs = angular.copy(scope.crumbs);
                            crumbs.forEach(function (crumb) {
                                crumb.skipApply = true;
                                EventBus.publish(SAQS.Const.Events.removeFilter, crumb);
                            });
                            EventBus.publish(SAQS.Const.Events.applyFilters);
                        };
                        EventBus.subscribe(SAQS.Const.Events.addFilter, scope, function (option) {
                            var idx = _.findIndex(scope.crumbs, { key: option.key });
                            if (idx > -1) {
                                scope.crumbs.splice(idx, 1);
                            }
                            if (option.bcDisplay !== false) {
                                scope.crumbs.push(option);
                            }
                        });
                        EventBus.subscribe(SAQS.Const.Events.removeFilter, scope, function (option) {
                            scope.crumbs.splice(_.findIndex(scope.crumbs, { key: option.key }), 1);
                        });
                        EventBus.subscribe(SAQS.Const.Events.loadProducts, scope, function (response) {
                            scope.itemCount = response.results.length;
                            scope.totalItemCount = response.totalCount;
                        });
                    }
                };
            }
        ]);
    })(Directives = SAQS.Directives || (SAQS.Directives = {}));
})(SAQS || (SAQS = {}));

var SAQS;
(function (SAQS) {
    var Directives;
    (function (Directives) {
        var Templates = SAQS.Const.Templates;
        angular.module('saqs.directives').directive('paging', [
            'EventBus',
            'DB',
            function (EventBus, DB) {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: Templates.PAGING_TPL,
                    link: function (scope) {
                        scope.curPage = 1;
                        scope.totalPages = 1;
                        scope.first = function () {
                            var paging = DB.getPaging();
                            DB.setPaging({
                                limit: paging.limit,
                                offset: 0
                            });
                            EventBus.publish(SAQS.Const.Events.performSearch);
                            scope.curPage = 1;
                        };
                        scope.prev = function () {
                            var paging = DB.getPaging();
                            var newOffset = (paging.offset - paging.limit);
                            DB.setPaging({
                                limit: paging.limit,
                                offset: newOffset < 0 ? 0 : newOffset
                            });
                            EventBus.publish(SAQS.Const.Events.performSearch);
                            if (scope.curPage > 1) {
                                scope.curPage -= 1;
                            }
                        };
                        scope.next = function () {
                            var paging = DB.getPaging();
                            var newOffset = (paging.offset + paging.limit);
                            DB.setPaging({
                                limit: paging.limit,
                                offset: newOffset > scope.totalPages ? scope.totalPages : newOffset
                            });
                            EventBus.publish(SAQS.Const.Events.performSearch);
                            if (scope.curPage < scope.totalPages) {
                                scope.curPage += 1;
                            }
                        };
                        // TODO: for some reason the API won't let me have an offset greater
                        // then 990 - would need to look into why
                        scope.last = function () {
                            var paging = DB.getPaging();
                            DB.setPaging({
                                limit: paging.limit,
                                offset: 990
                            });
                            EventBus.publish(SAQS.Const.Events.performSearch);
                            scope.curPage = scope.totalPages - 1;
                        };
                        EventBus.subscribe(SAQS.Const.Events.loadProducts, scope, function (response) {
                            var paging = DB.getPaging();
                            scope.totalPages = Math.ceil(response.totalCount / paging.limit);
                            if (response.results.length === 0) {
                                scope.curPage = 0;
                            }
                            else {
                                scope.curPage = (Math.floor(paging.offset / paging.limit) + 1);
                            }
                        });
                        EventBus.subscribe(SAQS.Const.Events.applyFilters, scope, function () {
                            var paging = DB.getPaging();
                            DB.setPaging({
                                limit: paging.limit,
                                offset: 0
                            });
                            scope.curPage = 1;
                        });
                    }
                };
            }
        ]);
    })(Directives = SAQS.Directives || (SAQS.Directives = {}));
})(SAQS || (SAQS = {}));

var SAQS;
(function (SAQS) {
    var Directives;
    (function (Directives) {
        var Templates = SAQS.Const.Templates;
        angular.module('saqs.directives').directive('productFilter', [
            '_',
            'DB',
            'EventBus',
            function (_, DB, EventBus) {
                return {
                    restrict: 'E',
                    scope: {
                        filter: '='
                    },
                    templateUrl: Templates.PRODUCT_FILTER_TPL,
                    link: function (scope) {
                        scope.onChange = function (option, filter) {
                            switch (filter.type) {
                                case 'checkbox':
                                    // If there are any options which are selected then add this filter
                                    // otherwise it should be removed
                                    var event_1 = option.value === true ?
                                        SAQS.Const.Events.addFilter : SAQS.Const.Events.removeFilter;
                                    EventBus.publish(event_1, option);
                                    break;
                            }
                        };
                    }
                };
            }
        ]);
    })(Directives = SAQS.Directives || (SAQS.Directives = {}));
})(SAQS || (SAQS = {}));

var SAQS;
(function (SAQS) {
    var Directives;
    (function (Directives) {
        var Templates = SAQS.Const.Templates;
        angular.module('saqs.directives').directive('productList', [
            '$window',
            'DB',
            function ($window, DB) {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: Templates.PRODUCT_LIST_TPL,
                    link: function (scope) {
                        scope.products = DB.getProducts();
                        scope.openProduct = function (product) {
                            if (product && product.clickUri) {
                                $window.open(product.clickUri);
                            }
                        };
                        scope.favoriteProduct = function (product, $event) {
                            $event.preventDefault();
                            $event.stopPropagation();
                            var itemKey = SAQS.Const.LocalStorage.FAVORITE_PRODUCTS;
                            var favoritesStr = $window.localStorage.getItem(itemKey);
                            var favorites = (favoritesStr) ? JSON.parse(favoritesStr) : {};
                            if (product._favorite === true) {
                                product._favorite = false;
                                delete favorites[product.uniqueId];
                            }
                            else {
                                product._favorite = true;
                                favorites[product.uniqueId] = true;
                            }
                            $window.localStorage.setItem(itemKey, JSON.stringify(favorites));
                        };
                    }
                };
            }
        ]);
    })(Directives = SAQS.Directives || (SAQS.Directives = {}));
})(SAQS || (SAQS = {}));

var SAQS;
(function (SAQS) {
    var Directives;
    (function (Directives) {
        var Templates = SAQS.Const.Templates;
        angular.module('saqs.directives').directive('searchBar', [
            'EventBus',
            'Filter',
            function (EventBus, Filter) {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: Templates.SEARCH_BAR_TPL,
                    link: function (scope, element) {
                        // run an initial blank search
                        EventBus.publish(SAQS.Const.Events.applyFilters);
                        var mainSearchInput = element.find('input');
                        mainSearchInput.bind('keydown', function (event) {
                            if (event.which === 13) {
                                var searchTerm = mainSearchInput.val();
                                EventBus.publish(SAQS.Const.Events.addFilter, {
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
                };
            }
        ]);
    })(Directives = SAQS.Directives || (SAQS.Directives = {}));
})(SAQS || (SAQS = {}));

var SAQS;
(function (SAQS) {
    var Directives;
    (function (Directives) {
        var Templates = SAQS.Const.Templates;
        angular.module('saqs.directives').directive('sideFilter', [
            function () {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: Templates.SIDE_FILTER_TPL,
                    link: function (scope) {
                        scope.filters = SAQS.Const.Filters.ALL_FILTERS;
                    }
                };
            }
        ]);
    })(Directives = SAQS.Directives || (SAQS.Directives = {}));
})(SAQS || (SAQS = {}));

var SAQS;
(function (SAQS) {
    var Services;
    (function (Services) {
        var self;
        var DB = (function () {
            function DB($parse, _, EventBus) {
                this.$parse = $parse;
                this._ = _;
                this.EventBus = EventBus;
                self = this;
                self._db = {
                    filters: {},
                    products: [],
                    sort: {
                        field: 'tpmillesime',
                        dir: SAQS.Const.Filters.Sort.DESC
                    },
                    paging: {
                        offset: 0,
                        limit: SAQS.Const.Paging.DEFAULT_LIMIT
                    }
                };
                EventBus.subscribe(SAQS.Const.Events.addFilter, self, self.addFilter);
                EventBus.subscribe(SAQS.Const.Events.removeFilter, self, self.removeFilter);
                EventBus.subscribe(SAQS.Const.Events.loadProducts, self, self.loadProducts);
            }
            DB.prototype.addFilter = function (option) {
                if (option) {
                    if (option.multi) {
                        self._db.filters[option.category] = (self._db.filters[option.category] || []);
                        self._db.filters[option.category].push(option);
                    }
                    else {
                        self._db.filters[option.category] = option;
                    }
                    self.EventBus.publish(SAQS.Const.Events.afterAddFilter, option);
                    self.EventBus.publish(SAQS.Const.Events.applyFilters);
                }
            };
            DB.prototype.removeFilter = function (option) {
                var filters = self._db.filters;
                if (filters && filters[option.category]) {
                    if (option.multi) {
                        var options = filters[option.category];
                        options.splice(_.findIndex(options, { key: option.key }), 1);
                        // If there are no more options selected remove the category
                        if (options.length === 0) {
                            delete filters[option.category];
                        }
                    }
                    else {
                        delete filters[option.category];
                    }
                    self.EventBus.publish(SAQS.Const.Events.afterRemoveFilter, option);
                    if (option.skipApply !== true) {
                        self.EventBus.publish(SAQS.Const.Events.applyFilters);
                    }
                }
                // TODO: This is not good but currently using SAQS.Const.Filters as the src
                // for the product-filters component. It should use DB instead
                var idx = self._.findIndex(SAQS.Const.Filters.ALL_FILTERS, { category: option.category });
                var _filter = SAQS.Const.Filters.ALL_FILTERS[idx];
                if (_filter) {
                    if (option.multi) {
                        idx = self._.findIndex(_filter.options, { key: option.key });
                        if (_filter.options[idx]) {
                            switch (_filter.type) {
                                case 'checkbox':
                                    _filter.options[idx].value = false;
                                    break;
                            }
                        }
                    }
                    else {
                        switch (_filter.type) {
                            case 'checkbox':
                                _filter.options[0].value = false;
                                break;
                        }
                    }
                }
            };
            DB.prototype.loadProducts = function (response) {
                var newProducts = response.results;
                var products = self.getProducts();
                // clear the products array and push in the new products
                // but keep the same reference!!
                products.splice(0, products.length);
                products.push.apply(products, newProducts);
            };
            DB.prototype.getFilters = function () {
                return self.$parse('_db.filters')(self);
            };
            DB.prototype.getProducts = function () {
                return self.$parse('_db.products')(self);
            };
            DB.prototype.getSorting = function () {
                return self.$parse('_db.sort')(self);
            };
            DB.prototype.getPaging = function () {
                return self.$parse('_db.paging')(self);
            };
            DB.prototype.setPaging = function (paging) {
                self._db.paging = paging;
            };
            return DB;
        }());
        DB.$inject = [
            '$parse',
            '_',
            'EventBus'
        ];
        Services.DB = DB;
        angular.module('saqs.services').service('DB', DB);
    })(Services = SAQS.Services || (SAQS.Services = {}));
})(SAQS || (SAQS = {}));

var SAQS;
(function (SAQS) {
    var Services;
    (function (Services) {
        var self;
        /**
         * This is a very simple EventBus Implementation for
         * subscribe/publish capabilities
         */
        var EventBus = (function () {
            function EventBus() {
                self = this;
                self._topics = {};
                self._subUid = -1;
            }
            EventBus.prototype.subscribe = function (topic, scope, handler, priority) {
                if (!self._topics[topic]) {
                    self._topics[topic] = [];
                }
                var token = (++self._subUid).toString();
                self._topics[topic].push({
                    token: token,
                    handler: handler,
                    scope: scope,
                    priority: priority || 10000
                });
                return token;
            };
            EventBus.prototype.publish = function (topic, args) {
                if (!self._topics[topic]) {
                    return false;
                }
                var subscribers = self._topics[topic];
                var len = subscribers ? subscribers.length : 0;
                if (len > 0) {
                    subscribers.sort(function (a, b) {
                        return a.priority - b.priority;
                    }).forEach(function (subscriber) {
                        if (angular.isFunction(subscriber.handler)) {
                            subscriber.handler.call(subscriber.scope, args);
                        }
                    });
                }
                return true;
            };
            EventBus.prototype.unsubscribe = function (token) {
                for (var topic in self._topics) {
                    if (self._topics[topic]) {
                        for (var i = 0, j = self._topics[topic].length; i < j; i++) {
                            if (self._topics[topic][i].token === token) {
                                self._topics[topic].splice(i, 1);
                                return true;
                            }
                        }
                    }
                }
                return false;
            };
            return EventBus;
        }());
        Services.EventBus = EventBus;
        angular.module('saqs.services').service('EventBus', EventBus);
    })(Services = SAQS.Services || (SAQS.Services = {}));
})(SAQS || (SAQS = {}));

var SAQS;
(function (SAQS) {
    var Services;
    (function (Services) {
        var self;
        var Filter = (function () {
            function Filter($rootScope, EventBus, DB, Product) {
                this.$rootScope = $rootScope;
                this.EventBus = EventBus;
                this.DB = DB;
                this.Product = Product;
                self = this;
                EventBus.subscribe(SAQS.Const.Events.applyFilters, self, self.applyFilters);
                EventBus.subscribe(SAQS.Const.Events.performSearch, self, self.performSearch);
            }
            Filter.prototype.buildSearchReq = function () {
                var filters = self.DB.getFilters();
                var searchFilters = Object.keys(filters).map(function (key) {
                    return filters[key];
                });
                return {
                    filters: searchFilters,
                    sort: self.DB.getSorting(),
                    paging: self.DB.getPaging()
                };
            };
            Filter.prototype.performSearch = function () {
                self.$rootScope.loading = true;
                self.Product.search(self.buildSearchReq())
                    .then(function (searchRes) {
                    self.EventBus.publish(SAQS.Const.Events.loadProducts, searchRes);
                    self.$rootScope.loading = false;
                })["catch"](function (error) {
                    alert('Error searching for products');
                    self.$rootScope.loading = false;
                });
            };
            Filter.prototype.applyFilters = function () {
                self.performSearch();
            };
            return Filter;
        }());
        Filter.$inject = [
            '$rootScope',
            'EventBus',
            'DB',
            'Product'
        ];
        Services.Filter = Filter;
        angular.module('saqs.services').service('Filter', Filter);
    })(Services = SAQS.Services || (SAQS.Services = {}));
})(SAQS || (SAQS = {}));

var SAQS;
(function (SAQS) {
    var Services;
    (function (Services) {
        var self;
        var Product = (function () {
            function Product($window, $q, $http, EventBus, ReqBuilder) {
                this.$window = $window;
                this.$q = $q;
                this.$http = $http;
                this.EventBus = EventBus;
                this.ReqBuilder = ReqBuilder;
                self = this;
                EventBus.subscribe(SAQS.Const.Events.performSearch, self, self.performSearch);
            }
            Product.prototype.search = function (searchReq) {
                var deferred = self.$q.defer();
                var uri = self.ReqBuilder.getUri(searchReq);
                var data = self.ReqBuilder.getData(searchReq);
                self.$http.post(uri, data)
                    .then(function (result) {
                    self.enrich(result.data);
                    deferred.resolve(result.data);
                })["catch"](function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            Product.prototype.enrich = function (searchRes) {
                var favoritesKey = SAQS.Const.LocalStorage.FAVORITE_PRODUCTS;
                var favoritesStr = self.$window.localStorage.getItem(favoritesKey);
                var favorites = (favoritesStr) ? JSON.parse(favoritesStr) : {};
                searchRes.results.forEach(function (product) {
                    product._favorite = (favorites[product.uniqueId]) ? true : false;
                });
            };
            return Product;
        }());
        Product.$inject = [
            '$window',
            '$q',
            '$http',
            'EventBus',
            'ReqBuilder'
        ];
        Services.Product = Product;
        angular.module('saqs.services').service('Product', Product);
    })(Services = SAQS.Services || (SAQS.Services = {}));
})(SAQS || (SAQS = {}));

var SAQS;
(function (SAQS) {
    var Services;
    (function (Services) {
        var self;
        var ReqBuilder = (function () {
            function ReqBuilder(_) {
                this._ = _;
                this.defaultSearchReqData = {
                    aq: '',
                    searchHub: 'default',
                    language: 'en',
                    pipeline: 'default',
                    firstResult: 0,
                    numberOfResults: SAQS.Const.Paging.DEFAULT_LIMIT,
                    excerptLength: 200,
                    filterField: null,
                    enableDidYouMean: true,
                    sortCriteria: 'fieldDescending',
                    sortField: '@tpmillesime',
                    queryFunctions: [],
                    rankingFunctions: [],
                    retrieveFirstSentences: true,
                    timezone: 'America/New_York',
                    enableDuplicateFiltering: false,
                    enableCollaborativeRating: false
                };
                self = this;
            }
            ReqBuilder.prototype.getUri = function (searchReq) {
                return SAQS.Const.API.SEARCH_URI + "?" + self.getApiKey();
            };
            ReqBuilder.prototype.getData = function (searchReq) {
                var data = angular.extend({}, self.defaultSearchReqData, {
                    aq: self.getFilters(searchReq.filters),
                    q: self.getMainSearch(searchReq.filters),
                    sortField: "@" + searchReq.sort.field,
                    sortCriteria: searchReq.sort.dir,
                    firstResult: searchReq.paging.offset,
                    numberOfResults: searchReq.paging.limit
                });
                return data;
            };
            ReqBuilder.prototype.getApiKey = function () {
                var ACCESS_TOKEN = window.ACCESS_TOKEN || '';
                return "access_token=" + ACCESS_TOKEN;
            };
            ReqBuilder.prototype.getMainSearch = function (filters) {
                return (self._.find(filters, { key: 'main-search' }) || {}).submitValue;
            };
            ReqBuilder.prototype.getFilters = function (filters) {
                var _formattedFilters = {};
                filters.forEach(function (filterCategory) {
                    if (angular.isArray(filterCategory) && filterCategory.length > 0) {
                        _formattedFilters[filterCategory[0].category] = filterCategory;
                    }
                    else {
                        _formattedFilters[filterCategory.category] = filterCategory;
                    }
                });
                var _categories = Object.keys(_formattedFilters);
                return _categories.reduce(function (qp, category) {
                    if (category !== 'main-search') {
                        var filter_1 = _formattedFilters[category];
                        if (angular.isArray(filter_1) && filter_1.length > 0) {
                            if (filter_1.length > 1) {
                                qp += "(@" + category + "==(";
                                filter_1.forEach(function (option, i) {
                                    qp += option.submitValue;
                                    qp += (i < (filter_1.length - 1)) ? ',' : '';
                                });
                                qp += '))';
                            }
                            else {
                                qp += "(@" + category + "==" + filter_1[0].submitValue + ")";
                            }
                        }
                        else {
                            qp += "(@" + category + "==" + filter_1.submitValue + ")";
                        }
                    }
                    return qp;
                }, '');
            };
            return ReqBuilder;
        }());
        ReqBuilder.$inject = [
            '_'
        ];
        Services.ReqBuilder = ReqBuilder;
        angular.module('saqs.services').service('ReqBuilder', ReqBuilder);
    })(Services = SAQS.Services || (SAQS.Services = {}));
})(SAQS || (SAQS = {}));
