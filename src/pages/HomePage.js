import React,{Fragment} from "react";
import HomeRout from "../routing/HomeRout";
import ActiveLink from "../components/ActiveLink";
import "./HomePage.css";




export default function HomePage(){
    return(
        <Fragment>
            <header>
                <nav>
                    <ActiveLink href="/home">Home</ActiveLink>
                    <ActiveLink href="/about">About Us</ActiveLink>
                    <ActiveLink href="/faq">FAQ</ActiveLink>
                </nav>
            </header>
            <main>
                <HomeRout />
            </main>
        </Fragment>
    )
}