import React from "react";
import * as S from "./styled";
import data from "../../global/data.json";
function Home() {
    console.log("DATA", data);
    return (
        <S.div>
            <S.h2>{data.home[0].title.toUpperCase()}</S.h2>
            <S.h1>{data.home[0].name.toUpperCase()}</S.h1>
            <S.p>{data.home[0].description}</S.p>
        </S.div>
    );
}

export default Home;
