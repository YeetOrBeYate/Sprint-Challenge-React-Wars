import React, {useState} from 'react';
import axios from 'axios';
import { Collapse, Button, CardBody, Card,CardTitle,CardSubtitle,Spinner } from 'reactstrap';

export const StarWorld = (props)=>{

    const world = props.world;
    const [collapse,setCollapes] = useState(false);
    const [planet, setPlanet] = useState('')
    const [called,setCalled] = useState(false);

    const display = props.display;
    const setDisplay = props.function; 
    // display starts at false

    if(!display){
    
    }else{
        
        NavButtonClose();
    }

    function NavButtonClose(){
        

        if(display && collapse){
            
            setCollapes(false);
            setDisplay(false);
            setCalled(false);
            console.log('page reset')
        }  
    }

    function stopCalls(){
        if(called===false){
            getWorld();
            setCalled(true);
            console.log("false CALLED");
        }else{
            console.log("true CALLED");
            
        }

    }
    const toggle = () => {   
        if(!collapse){
            
            setCollapes(true);
            setDisplay(false);
        }else{
            setCollapes(false);
            setDisplay(false);
            setCalled(false);
        }
    };
    function getWorld(){
        axios.get(`${world}`)
        .then((res)=>{
            console.log(res.data);
            setPlanet(res.data);
        })
    }
  
    return(
        <Card>
            <Button color = "primary" onClick={()=>{toggle(); stopCalls();}}>Show World</Button>
            <Collapse isOpen={collapse}>
                <CardBody>
                    <CardTitle className = "text-primary"><big>Name:{planet.name}</big></CardTitle>
                    <CardSubtitle>Climate:{planet.climate}</CardSubtitle>
                    <CardSubtitle>Orbit:{planet.orbital_period}</CardSubtitle>
                    <CardSubtitle>Population:{planet.population}</CardSubtitle>
                </CardBody>
            </Collapse>
        </Card>
    );
}