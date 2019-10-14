import React,{useState} from 'react';
import {Cardy} from "../components/Styled";
import { Collapse, Button, CardBody, Card,CardTitle,CardSubtitle } from 'reactstrap';
import {StarWorld} from '../components/StarWorld';
export const StarCard = (props)=> {
     
const [collapse, setCollapse] = useState(false);


const display = props.display;
const setDisplay = props.function; 
// display starts at false

    if(!display){
    
    }else{
        
        NavButtonClose();
    }

    function NavButtonClose(){
        

        if(display && collapse){
            
            setCollapse(false);
            setDisplay(false);
             
        }  
    }

   const toggle = () =>{
      setCollapse(!collapse);
      setDisplay(false);
   }

      return (
        <Cardy>
         <Card className = 'shadowClass'>
            <CardTitle className = "text-primary"><big>{props.name}</big></CardTitle>
            <Button color="primary" onClick={()=>{toggle();}}  style={{ marginBottom: '1rem' }}>Characteristics</Button>
            <Collapse isOpen={collapse}>
               <CardBody>
                  <CardSubtitle>Birth Year: {props.birth} </CardSubtitle>
                  <CardSubtitle>Height: {props.height} </CardSubtitle>
                  <CardSubtitle>Mass: {props.mass} </CardSubtitle>
                  <StarWorld display = {props.display} world = {props.world} function = {props.function}/>
               </CardBody>
            </Collapse>
         </Card>
        </Cardy>
      );
    
  }



  
