export interface ISearchResult {
    items: [
        {
            link: string,
            title: string
        }
    ]
    searchInformation: {
        searchTime: string
    }
    spelling?: {
        correctedQuery: string
    }
}