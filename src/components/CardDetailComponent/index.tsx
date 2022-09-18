import React from "react";
import { Props } from "./types";
import styles from "./style";
import { Image, Text, View } from "react-native";


export function CardDetailComponent({ model }: Props) {
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: "center", textDecorationLine:"underline" }}>
                {model.title}
            </Text>
            <Text style={{ textAlign: "center" }}>
                {model.category}
            </Text>
            <Image style={styles.image} source={{ uri: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jp'}} />
            <Text>
                <Text style={{ fontWeight: "bold", textDecorationLine: "underline" }}>Ratings :</Text>
                {"\n"}Rated by {model.rating.count} users
                {"\n"}<Text style={{ color: +model.rating.rate > 5 ? "blue" : "red" }}>Rate : {model.rating.rate}</Text>
            </Text>
            <Text>
                Description : {`\n${model.description}`}
            </Text>
        </View>
    )
}