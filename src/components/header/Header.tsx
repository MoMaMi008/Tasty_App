import React, { useState } from "react";
import Logo from "../../assets/tasty-logo.svg";
import { useNavigate } from "react-router-dom";
import "./Header.css"

const Header = () => {
    const [searchInput, setSearchInput] = useState<string>("");

    const navigate = useNavigate();

    function handleClick() {
        navigate(`/search/${searchInput}`);
    }

    return (
        <header>
            <img src={Logo} alt="" />
            <div>
                <h2>Find a recipe, an idea, an inspiration...</h2>
                <input type="text" placeholder="Type something to search..." onInput={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)} />
                <button onClick={handleClick}>Search</button>
            </div>
        </header>
    );
};

export default Header;
