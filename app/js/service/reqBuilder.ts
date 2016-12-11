module SAQS.Services {

    import Models = SAQS.Models;

    var self: any;

    export class ReqBuilder {

        constructor() {
            self = this;
        }

        private defaultSearchReqData: Models.SearchReqData = {
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

        public getUri(searchReq: Models.SearchReq): string {
            return `${SAQS.Const.API.SEARCH_URI}?${self.getApiKey()}&errorsAsSuccess=1`;
        }

        public getData(searchReq: Models.SearchReq): Models.SearchReqData {
            let data = angular.extend({}, self.defaultSearchReqData, {
                aq: self.getFilters(searchReq.filters),
                sortField: `@${searchReq.sort.field}`,
                sortCriteria: searchReq.sort.dir
            });

            return data;
        }

        private getApiKey(): string {
            let ACCESS_TOKEN = window.ACCESS_TOKEN || '';
            return `access_token=${ACCESS_TOKEN}`;
        }

        private getFilters(filters: Models.SearchFilter[]): string {
            return filters.reduce((qp: any, filter: Models.SearchFilter) => {
                qp += `(@${filter.category}==${filter.value})`;
                return qp;
            }, '');
        }
    }

    angular.module('saqs.services').service('ReqBuilder', ReqBuilder);
}
