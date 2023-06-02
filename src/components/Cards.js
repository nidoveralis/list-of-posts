import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

import myImg from '../images/333333.jpg';

function Cards({posts}) {
  console.log(posts)

  return (
    <>
        {posts && posts.map( (el) =>(
          <Card key={el.id} style={{ width: '18rem', "margin":"30px auto" }}>
            <Link to="/posts" style={{"color":"#000", "textDecorationLine":"none"}} >
              <Card.Img variant="top" src={myImg} />
            </Link>  
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>{el.body}</Card.Text>
              <Accordion>
                    <Accordion.Header>Комментарии</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
              </Accordion>
            </Card.Body>
          </Card>
        ))}


    </>
    
    
  );
}

export default Cards;