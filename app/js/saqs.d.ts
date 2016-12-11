interface Window {
    ACCESS_TOKEN: string
}

declare namespace SAQS {

    export module Models {

        export interface SearchReqData {
            aq: string
            searchHub: string
            language: string
            pipeline: string
            firstResult: number
            numberOfResults: number
            excerptLength: number
            filterField: string
            enableDidYouMean: boolean
            sortCriteria: string
            sortField: string
            queryFunctions: any[]
            rankingFunctions: any[]
            retrieveFirstSentences: boolean
            timezone: string
            enableDuplicateFiltering: boolean
            enableCollaborativeRating: boolean
        }

        export interface SearchReq {
            filters: SearchFilter[]
            sort: SearchSort
            paging: SearchPaging
        }

        export interface SearchSort {
            field: string
            dir: string
        }

        export interface SearchPaging {
            offset: number
            limit: number
        }

        export interface SearchRes<T> {
            results: T[]
            apiVersion: number
            duration: number
            groupByResults: Object[]
            indexDuration: number
            phrasesToHighlight: Object
            pipeline: string
            queryCorrections: Object[]
            requestDuration: number
            searchUid: string
            termsToHighlight: Object
            totalCount: number
            totalCountFiltered: number
            triggers: Object[]
        }

        export interface SearchFilter {
            key: string
            category: string
            value: string|number|boolean
            applyOnAdd: boolean
            breadCrumbDisplay: boolean
        }

        export interface ProductFilter {
            title: string
            type: string
            category: string
            options: ProductFilterOption[]
        }

        export interface ProductFilterOption {
            category: string
            key: string
            label: string
            bcDisplay?: string|boolean
            multi: boolean
            value: any
        }

        export interface Product {
            ClickUri: string
            clickUri: string
            FirstSentences: any
            firstSentences: any
            firstSentencesHighlights: Object[]
            PrintableUri: string
            printableUri: string
            printableUriHighlights: Object[]
            Excerpt: string
            excerpt: string
            excerptHighlights: Object[]
            Title: string
            title: string
            titleHighlights: Object[]
            UniqueId: string
            uniqueId: string
            Uri: string
            uri: string
            childResults: Object[]
            totalNumberOfChildResults: number
            flags: string
            hasHtmlVersion: boolean
            hasMobileHtmlVersion: boolean
            isRecommendation: boolean
            isTopResult: boolean
            parentResult: any
            percentScore: number
            rankingInfo: any
            rating: number
            raw: ProductDetails
            score: number
            summary: any
            summaryHighlights: Object[]
        }

        export interface ProductDetails {
            sysclickableuri: string
            syscollection: string
            sysconcepts: string
            sysdate: number
            sysdocumenttype: string
            sysfiletype: string
            sysfolders: string
            sysindexeddate: number
            syslanguage: string
            sysprintableuri: string
            sysrowid: number
            syssite: string
            syssize: number
            syssource: string
            syssourcetype: string
            systitle: string
            systopparent: string
            systopparentid: number
            sysuri: string
            sysurihash: string
            tpaccordsnommenu: string
            tpaccordstumbnailuriraw: string
            tpbouchon: string
            tpcategorie: string
            tpcategorieraw: string
            tpcepagenomsplitgroup: string
            tpcepagesplitgroup: string
            tpcodecup: string
            tpcodesaq: string
            tpcontenant: string
            tpcouleur: string
            tpcoveoconnectorhasbinarydata: string
            tpdisponibilite: string
            tpformat: string
            tpmillesime: string
            tpmillesimedeguste: string
            tpnomdebouteille: string
            tpnotededegustation: string
            tpobservationsgustativesacidite: string
            tpobservationsgustativescorps: string
            tpobservationsgustativestexture: string
            tpobservationsgustavivesfamillesaromessplitgroup: string
            tpobservationsolfactivesaromessplitgroup: string
            tppagebody: string
            tppagetitle: string
            tppastilledegout: string
            tppastilledegoutsplitgroup: string
            tppays: string
            tppotentieldegarde: string
            tpprixbande: string
            tpprixnormal: string
            tpprixnum: number
            tpproducteur: string
            tpregion: string
            tptemperaturedeservice: string
            tpthumbnailuri: string
            urihash: string
        }
    }
}
