import { useEffect, useState } from "react";
import { doGetFetch } from "./api/get";
import Heading from "Components/Heading";
import Nav from "Components/Navigation";
import ListElem from "Components/ListComp";

const My = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        doGetFetch("/api/get").then(v => setData(JSON.parse(JSON.parse(v))))
    }, [])

    console.log(data);

    return <>
        <Nav/>
        <Heading tags = {'h1'} text = "Список анкет"/>
        <ListElem array = { data }/>
    </>
}

export default My;