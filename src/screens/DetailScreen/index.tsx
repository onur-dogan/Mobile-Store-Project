import React from "react";
import { CardDetailComponent } from "../../components/CardDetailComponent";
import { Props } from "./types";

export function DetailScreen({navigation, route} : Props){
    return (
        <CardDetailComponent model={route.params.item}/>
    )
}