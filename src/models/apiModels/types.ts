export interface FakeStoreAPIModel {
    category: string,
    description: string,
    id: number,
    price: number,
    image?: string,
    rating: { count: number, rate: string },
    title: string
}