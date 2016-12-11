module SAQS.Const.Filters {

    import Models = SAQS.Models;

    export const Sort = {
        ASC: 'fieldAscending',
        DESC: 'fieldDescending'
    };

    export const ON_SPECIAL: Models.ProductFilter = {
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

    export const PRICE: Models.ProductFilter = {
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

    export const CATEGORY: Models.ProductFilter = {
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

    export const REGION: Models.ProductFilter = {
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

    export const COUNTRY: Models.ProductFilter = {
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

    export const ALL_FILTERS: Models.ProductFilter[] = [
        ON_SPECIAL,
        PRICE,
        CATEGORY,
        REGION,
        COUNTRY
    ];
}
