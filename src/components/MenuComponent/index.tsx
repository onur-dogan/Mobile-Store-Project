import React from "react";
import { Props } from "./types";
import styles from "./style";
import { Text, TouchableOpacity } from "react-native";


export function MenuComponent({ category, setCategory, color }: Props) {
    return (
        <TouchableOpacity style={styles.container} onPress={setCategory}>
            <Text style={{ color:color ,fontWeight: "bold", fontSize: 20, textAlign: "center" }}>{category.item}</Text>
        </TouchableOpacity>
    )
}