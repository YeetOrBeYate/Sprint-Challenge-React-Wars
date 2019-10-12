import React,{useState} from 'react';
import {Cardy} from "../components/Styled";
import { Collapse, Button, CardBody, Card,CardTitle,CardSubtitle } from 'reactstrap';
import {StarWorld} from '../components/StarWorld';
export const StarCard = (props)=> {
     
   const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);
      return (
        <Cardy>
         <Card>
            <CardTitle className = "text-primary"><big>{props.name}</big></CardTitle>
            <Button color="primary" onClick={()=>{toggle(); console.log("yeeet")}}  style={{ marginBottom: '1rem' }}>Characteristics</Button>
            <Collapse isOpen={collapse}>
               <CardBody>
                  <CardSubtitle>Birth Year: {props.birth} </CardSubtitle>
                  <CardSubtitle>Height: {props.height} </CardSubtitle>
                  <CardSubtitle>Mass: {props.mass} </CardSubtitle>
                  <StarWorld world = {props.world}/>
               </CardBody>
            </Collapse>
         </Card>
        </Cardy>
      );
    
  }



  
