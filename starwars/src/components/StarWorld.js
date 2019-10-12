import React, {useState} from 'react';
import axios from 'axios';
import { Collapse, Button, CardBody, Card,CardTitle,CardSubtitle,Spinner } from 'reactstrap';

export const StarWorld = (props)=>{

    const world = props.world;
    const [collapse,setCollapes] = useState(false);
    const [planet, setPlanet] = useState({})

    // function stopCalls(){
    //     if(planet === {dummy:"variable"}){
    //         getWorld();
    //     }else{
    //         console.log("Han shot first")
    //     }
    // }

    function toggle(){
        setCollapes(!collapse);
    }
    function getWorld(){
        axios.get(`${world}`)
        .then((res)=>{
            console.log(res.data);
            setPlanet(res.data);
        })
    }

    if(!planet){
        return(
            <div>
                <Spinner color = "primary"/>
            </div>
        );
    }
    
    return(
        <Card>
            <Button color = "primary" onClick={()=>{toggle(); getWorld();}}>Show World</Button>
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