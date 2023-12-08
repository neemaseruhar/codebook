export const filterReducer = (state,action) => {
    const {type,payload} = action;

    switch(type){
        case "PRODUCT_LIST":
            return {productList:payload.products}

        case "SORT_BY":
            return

        case "RATING":
            return 

        case "ONLY_IN_STOCK":
            return

        case "BEST_SELLER":
            return

        case "CLEAR_FILTER":
            return

        default :
            throw new Error ('invalid case ')
    }

}