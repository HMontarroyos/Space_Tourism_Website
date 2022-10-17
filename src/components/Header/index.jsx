import React from "react";
import * as S from "./styled";

function Header() {
    return (
        <nav>
            <S.LinkRedirect to={"/"}>
                <ul>
                    <li>00 Home</li>
                    <li>01 Destination</li>
                    <li>02 Crew</li>
                    <li>03 Technology</li>
                </ul>
            </S.LinkRedirect>
        </nav>
    );
}

export default Header;
