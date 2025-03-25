import {useLocation} from 'react-router-dom';
import {Container} from "react-bootstrap";

export default function Organization() {

    const location = useLocation();

    const pages = [
        {pathname:"/manufacturers", description:"Производители"},
        {pathname:"/public_organizations", description:"Общественные организации"},
        {pathname:"/organizations", description:"Организации"},
        {pathname:"/specialists", description:"Специалисты"}
    ]

    function findDescr(path) {
        return (pages.find(page => page.pathname === path)).description
    }

    return (
        <Container>
            <h1 role='organization'>{findDescr(location.pathname)}</h1>
        </Container>
    )
}