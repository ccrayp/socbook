import {Link, useLocation} from "react-router-dom";
import {Container, ButtonGroup, Button} from "react-bootstrap";
import ListItem from "@components/ListItem/ListItem.jsx";

export function FriendsList({friends = []}) {
    return (
        <div role="friends">{
            (friends.length === 0 ? (<h1>Список друзей пуст</h1>) : (friends.map((friend) => (
                <ListItem key={friend.id} name={friend.name} photoPath={friend.photoPath} id={friend.id} mode={'friends'} />
            ))))}
        </div>
    )
}

export function RequestsList({requests = []}) {
    return (
        <div role="requests">{
            (requests.length === 0 ? (<h1>Список запросов пуст</h1>) : (requests.map((request) => (
                <ListItem key={request.id} name={request.name} photoPath={request.photoPath} id={request.id} mode={'requests'} />
            ))))}
        </div>
    )
}

export default function Friends() {

    const location = useLocation();

    function renderContent() {

        switch(location.pathname){
            case '/friends': {return (
                <FriendsList key={'friendsList'} friends={JSON.parse(sessionStorage.getItem('friends'))} />
            )}
            case '/friends/requests': {return (
                <RequestsList key={'requestsList'} requests={JSON.parse(sessionStorage.getItem('requests'))} />
            )}
        }
    }

    return (
        <Container className="pt-4">
            <ButtonGroup className="mb-4 w-100">
                <Button as={Link} to={'/friends'} variant={
                    location.pathname === '/friends' ? 'primary' : 'outline-primary'}
                >Друзья</Button>
                <Button as={Link} to={'/friends/requests'} variant={
                    location.pathname === '/friends/requests' ? 'primary' : 'outline-primary'}
                >Заявки</Button>
            </ButtonGroup>
            {renderContent()}
        </Container>
    );
}

