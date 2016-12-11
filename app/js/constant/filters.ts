module SAQS.Const.Filters {

    import Models = SAQS.Models;

    export const Sort = {
        ASC: 'fieldAscending',
        DESC: 'fieldDescending'
    };

    export const ON_SPECIAL: Models.ProductFilter = {
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

    export const CATEGORY: Models.ProductFilter = {
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

    export const REGION: Models.ProductFilter = {
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

    export const COUNTRY: Models.ProductFilter = {
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

    export const ALL_FILTERS: Models.ProductFilter[] = [
        ON_SPECIAL,
        //PRICE,
        CATEGORY,
        REGION,
        COUNTRY
    ];
}
