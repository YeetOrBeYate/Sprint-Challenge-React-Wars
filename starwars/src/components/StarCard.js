import React,{useState} from 'react';
import {Cardy} from "../components/Styled";
import { Collapse, Button, CardBody, Card,CardTitle,CardSubtitle } from 'reactstrap';
export const StarCard = (props)=> {
     
   const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);
      return (
        <Cardy key = {props.key}>
         <Card>
            <CardTitle>{props.name}</CardTitle>
            <Button color="primary" onClick={()=>toggle()} style={{ marginBottom: '1rem' }}>Chractristics</Button>
            <Collapse isOpen={collapse}>
               <CardBody>
                  <CardSubtitle>Birth Year: {props.birth} </CardSubtitle>
                  <CardSubtitle>Height: {props.height} </CardSubtitle>
                  <CardSubtitle>Mass: {props.mass} </CardSubtitle>
               </CardBody>
            </Collapse>
         </Card>
        </Cardy>
      );
    
  }



  
