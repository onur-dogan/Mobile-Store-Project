import React from "react";
import { Props } from "./types";
import styles from "./style";
import { Image, Text, TouchableOpacity, View } from "react-native";


export function CardComponent({ model, onClickToNavigation }: Props) {
    return (
        <TouchableOpacity style={styles.container} onPress={onClickToNavigation}>
            <Text style={{ textAlign: "center", textDecorationLine:"underline", fontWeight:"bold" }}>
                {model.title}
            </Text>
            <Image style={styles.image} source={{ uri: model.image}} />
            <Text>
                Category: {model.category}
            </Text>
            <Text>
                <Text style={{ fontWeight: "bold", textDecorationLine: "underline" }}>Ratings :</Text>
                {"\n"}Rated by {model.rating.count} users
                {"\n"}<Text style={{ color: +model.rating.rate > 5 ? "blue" : "red" }}>Rate : {model.rating.rate}</Text>
            </Text>
        </TouchableOpacity>
    )
}