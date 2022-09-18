export interface ProductModel {
    title : string,
    price : number,
    image ?: string,
    description : string
}

export const ProductList : ProductModel[] = [
    {
        description : "Açıklama",
        price : 10,
        title: "Klavye"
    },
    {
        description : "Mouse selam2",
        price : 5,
        title: "Mouse"
    }
]