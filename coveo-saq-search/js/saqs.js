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
                category: 'tpspecial',
                options: [{
                        category: 'tpspecial',
                        key: 'on-special',
                        label: 'Only',
                        bcDisplay: 'On Special',
                        value: false,
                        multi: false
                    }]
            };
            Filters.PRICE = {
                title: 'Price Range',
                type: 'range',
                category: 'tpprice',
                options: [{
                        category: 'tpprice',
                        key: 'price-range',
                        label: '',
                        multi: false,
                        value: {
                            min: 0,
                            max: 1000
                        }
                    }]
            };
            Filters.CATEGORY = {
                title: 'Category',
                type: 'checkbox',
                category: 'tptype',
                options: [{
                        category: 'tptype',
                        key: 'type_red-wine',
                        label: 'Red Wine',
                        value: false,
                        multi: true
                    }, {
                        category: 'tptype',
                        key: 'type_white-wine',
                        label: 'White Wine',
                        value: false,
                        multi: true
                    }, {
                        category: 'tptype',
                        key: 'type_whisky',
                        label: 'Whisky',
                        value: false,
                        multi: true
                    }, {
                        category: 'tptype',
                        key: 'type_bourbon',
                        label: 'Bourbon',
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
                        multi: true
                    }, {
                        category: 'tpregion',
                        key: 'region_toscane',
                        label: 'Toscane',
                        value: false,
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
                        multi: true
                    }, {
                        category: 'tppays',
                        key: 'country_us',
                        label: 'U.S.',
                        value: false,
                        multi: true
                    }, {
                        category: 'tppays',
                        key: 'country_italy',
                        label: 'Italy',
                        value: false,
                        multi: true
                    }]
            };
            Filters.ALL_FILTERS = [
                Filters.ON_SPECIAL,
                Filters.PRICE,
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
                        scope.crumbs = [];
                        scope.removeCrumb = function (crumb) {
                            EventBus.publish(SAQS.Const.Events.removeFilter, crumb);
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
                                    value: searchTerm
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
                        limit: 10
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
                    self.EventBus.publish(SAQS.Const.Events.applyFilters);
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
            DB.prototype.loadProducts = function (newProducts) {
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
            function Filter(EventBus, DB, Product) {
                this.EventBus = EventBus;
                this.DB = DB;
                this.Product = Product;
                self = this;
                EventBus.subscribe(SAQS.Const.Events.applyFilters, self, self.applyFilters);
            }
            Filter.prototype.applyFilters = function () {
                var filters = self.DB.getFilters();
                var searchFilters = Object.keys(filters).map(function (key) {
                    return filters[key];
                });
                var searchReq = {
                    filters: searchFilters,
                    sort: self.DB.getSorting(),
                    paging: self.DB.getPaging()
                };
                self.Product.search(searchReq)
                    .then(function (searchRes) {
                    self.EventBus.publish(SAQS.Const.Events.loadProducts, searchRes.results);
                })["catch"](function (error) {
                    alert('Error searching for products');
                });
            };
            return Filter;
        }());
        Filter.$inject = [
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
            function Product($q, $http, EventBus, ReqBuilder) {
                this.$q = $q;
                this.$http = $http;
                this.EventBus = EventBus;
                this.ReqBuilder = ReqBuilder;
                self = this;
            }
            Product.prototype.search = function (searchReq) {
                var deferred = self.$q.defer();
                var uri = self.ReqBuilder.getUri(searchReq);
                var data = self.ReqBuilder.getData(searchReq);
                self.$http.post(uri, data)
                    .then(function (result) {
                    deferred.resolve(result.data);
                })["catch"](function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            return Product;
        }());
        Product.$inject = [
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
            function ReqBuilder() {
                this.defaultSearchReqData = {
                    aq: '',
                    searchHub: 'default',
                    language: 'en',
                    pipeline: 'default',
                    firstResult: 0,
                    numberOfResults: 10,
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
                return SAQS.Const.API.SEARCH_URI + "?" + self.getApiKey() + "&errorsAsSuccess=1";
            };
            ReqBuilder.prototype.getData = function (searchReq) {
                var data = angular.extend({}, self.defaultSearchReqData, {
                    aq: self.getFilters(searchReq.filters),
                    sortField: "@" + searchReq.sort.field,
                    sortCriteria: searchReq.sort.dir
                });
                return data;
            };
            ReqBuilder.prototype.getApiKey = function () {
                var ACCESS_TOKEN = window.ACCESS_TOKEN || '';
                return "access_token=" + ACCESS_TOKEN;
            };
            ReqBuilder.prototype.getFilters = function (filters) {
                return filters.reduce(function (qp, filter) {
                    qp += "(@" + filter.category + "==" + filter.value + ")";
                    return qp;
                }, '');
            };
            return ReqBuilder;
        }());
        Services.ReqBuilder = ReqBuilder;
        angular.module('saqs.services').service('ReqBuilder', ReqBuilder);
    })(Services = SAQS.Services || (SAQS.Services = {}));
})(SAQS || (SAQS = {}));
