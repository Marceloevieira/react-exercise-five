import Link from "next/link";
import styledComponents from "styled-components";
import { Header } from "./Header";
import { Main } from "./Main";
import { Nav } from "./Nav";
import { NavItem } from "./NavItem";
import { NavLink } from "./NavLink";

export const Layout = {}

Layout.Context = styledComponents.div`


`;

Layout.Header = () => {

    return (
        <Header>
            <h1>Aplicação Server-side (Next.js) - Movies</h1>
            <nav>
                <Nav>
                    <NavItem>
                        <Link href={'/'} ><NavLink color='black'>Home</NavLink></Link>
                    </NavItem>
                    <NavItem>
                        <Link href={'/movies'} ><NavLink color='black'>movies</NavLink></Link>
                    </NavItem>
                    <NavItem>
                        <Link href={'/favorites'} ><NavLink color='black'>favorites</NavLink></Link>
                    </NavItem>
                </Nav>
            </nav>
        </Header>
    );
};

Layout.Main = ({ children }) => {

    return (<Main>
        {children}
    </Main>)
}