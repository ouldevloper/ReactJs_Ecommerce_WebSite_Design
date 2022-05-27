export const addCart = (product) => {
    return {
        type:"ADD",
        paylaod:product
    };
}

export const delCart = (product) => {
    return {
        type : "DEL",
        payload: product
    };
}