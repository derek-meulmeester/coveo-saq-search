module SAQS.Services {

    import Models = SAQS.Models;

    var self: any;

    export interface Data {
        filters: {[key:string]: Models.SearchFilter}
        products: Models.Product[]
        sort: Models.SearchSort
        paging: Models.SearchPaging
    }

    export class DB {
        static $inject = [
            '$parse',
            '_',
            'EventBus'
        ];

        constructor(private $parse: ng.IParseService,
                    private _: _.LoDashStatic,
                    private EventBus: SAQS.Services.EventBus) {
            self = this;

            self._db = <Data>{
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

        private addFilter(option: Models.ProductFilterOption) {
            if (option) {
                if (option.multi) {
                    self._db.filters[option.category] = (self._db.filters[option.category] || []);
                    self._db.filters[option.category].push(option);
                } else {
                    self._db.filters[option.category] = option;
                }

                self.EventBus.publish(SAQS.Const.Events.afterAddFilter, option);
                self.EventBus.publish(SAQS.Const.Events.applyFilters);
            }
        }

        private removeFilter(option: Models.ProductFilterOption) {
            let filters = self._db.filters;

            if (filters && filters[option.category]) {
                if (option.multi) {
                    let options = <Models.ProductFilterOption[]>filters[option.category];
                    options.splice(_.findIndex(options, {key: option.key}), 1);

                    // If there are no more options selected remove the category
                    if (options.length === 0) {
                        delete filters[option.category];
                    }
                } else {
                    delete filters[option.category];
                }

                self.EventBus.publish(SAQS.Const.Events.afterRemoveFilter, option);
                self.EventBus.publish(SAQS.Const.Events.applyFilters);
            }

            // TODO: This is not good but currently using SAQS.Const.Filters as the src
            // for the product-filters component. It should use DB instead
            let idx = self._.findIndex(SAQS.Const.Filters.ALL_FILTERS, {category: option.category});
            let _filter = SAQS.Const.Filters.ALL_FILTERS[idx];

            if (_filter) {
                if (option.multi) {
                    idx = self._.findIndex(_filter.options, {key: option.key});

                    if (_filter.options[idx]) {
                        switch (_filter.type) {
                        case 'checkbox':
                            _filter.options[idx].value = false;
                            break;
                        }
                    }
                } else {
                    switch (_filter.type) {
                    case 'checkbox':
                        _filter.options[0].value = false;
                        break;
                    }
                }
            }
        }

        private loadProducts(newProducts: Models.Product[]) {
            let products = self.getProducts();

            // clear the products array and push in the new products
            // but keep the same reference!!
            products.splice(0, products.length);
            products.push.apply(products, newProducts);
        }

        public getFilters() {
            return self.$parse('_db.filters')(self);
        }

        public getProducts() {
            return self.$parse('_db.products')(self);
        }

        public getSorting() {
            return self.$parse('_db.sort')(self);
        }

        public getPaging() {
            return self.$parse('_db.paging')(self);
        }
    }

    angular.module('saqs.services').service('DB', DB);
}
