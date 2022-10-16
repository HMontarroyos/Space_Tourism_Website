import React from "react";
import * as S from "./styled";

function Header() {
    return (
        <nav>
            <S.LinkRedirect to={"/"}>
                <p>00 Home</p>
                <p>01 Destination</p>
                <p>02 Crew</p>
                <p>03 Technology</p>
            </S.LinkRedirect>
        </nav>
    );
}

export default Header;
