import React, { useState, useEffect } from "react";
import { FlatList, ListRenderItemInfo, Text, TouchableOpacity } from "react-native";
import { CardComponent } from "../../components/CardComponent";
import { MenuComponent } from "../../components/MenuComponent";
import { FakeStoreAPIModel } from "../../models/apiModels/types";
import { Props } from "./types";

export function HomeScreen({navigation }: Props) {

    const [data, setData] = useState([] as FakeStoreAPIModel[])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState({ index: 0, item: "" })
    const [limit, setLimit] = useState(5)
    const [relatedData, setRelatedData] = useState([] as FakeStoreAPIModel[])

    useEffect(() => {
        getData()
    }, [limit])

    useEffect(() => {
        getData()
        getCategories()
    }, [])

    useEffect(() => {
        defineProducts()
    }, [selectedCategory])

    function defineProducts() {
        const definedData = data.filter((e: FakeStoreAPIModel) => e.category == selectedCategory.item).sort((a : any) => a.rating.rate)
        setRelatedData(definedData)
    }

    async function getData() {
        await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
            .then(async (res) => {
                const dataRes: FakeStoreAPIModel[] = await res.json()
                setData(dataRes)
            })
    }

    async function getCategories() {
        await fetch(`https://fakestoreapi.com/products/categories`)
            .then(async (res) => {
                const categoryData = await res.json()
                setSelectedCategory({index:0, item:categoryData[0]})
                setCategories(categoryData)
            })
    }

    const _renderProduct = (item: ListRenderItemInfo<FakeStoreAPIModel>) => {
        return (<CardComponent onClickToNavigation={() => {navigation.navigate("Detail", {item: item.item}) }} model={item.item} />)
    }

    function _renderCategory(category: { index: number, item: string }) {
        return (<MenuComponent 
            setCategory={() => setSelectedCategory(category)} 
            color={category.item == selectedCategory.item ? "green" : "black"} 
            category={category} />)
    }

    return (
        <>
            <FlatList
                data={categories}
                renderItem={_renderCategory}
                ListEmptyComponent={<Text>Kategoriler Yükleniyor..</Text>}
                refreshing={true}
                horizontal={true}
            />
            <FlatList
                data={relatedData}
                renderItem={_renderProduct}
                ListEmptyComponent={<Text>Ürünler Yükleniyor..</Text>}
                onEndReached={() => setLimit(limit => limit * 2)}
                refreshing={true}
            />
        </>
    )
}