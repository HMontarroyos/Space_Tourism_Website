import React from "react";
import * as S from "./styled";

function Header() {
    return (
        <nav>
            <S.LinkRedirect to={"/"}>
                <p>Home</p>
            </S.LinkRedirect>
        </nav>
    );
}

export default Header;
