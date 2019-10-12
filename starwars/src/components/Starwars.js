import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {CardHolder} from "../components/Styled";
import {StarCard} from "../components/StarCard";
import { Spinner, Button } from 'reactstrap';


export default function MakeCharacter(){

 const [dude, setDude] = useState([]);
 const [next,setNext] = useState({})
 const [previous,setPrevious] = useState('https://swapi.co/api/people/')
 const [data,setData] = useState('https://swapi.co/api/people/')

 useEffect(()=>{
     axios.get(`${data}`)
     .then((response)=>{
         setDude(response.data.results);
         console.log("Full response",response);
         setNext(response.data.next);

         if(response.data.previous !== null){
             setPrevious(response.data.previous);
         }

     })
 },[data])

 if(dude.length == 0){
     return(
         <CardHolder>
             <Spinner color = "primary"/>
         </CardHolder>
     )
 }

 return(
        <div>
         <CardHolder>
            <Button color = "primary" onClick = {()=>setData(previous)}>Last</Button>
            <Button color = "primary" onClick = {()=>setData(next)}>Next</Button>
         </CardHolder>
         <CardHolder>
             {dude.map((d,index)=>(
             <StarCard key = {index}  name = {d.name} birth = {d.birth_year} height = {d.height} mass = {d.mass} world = {d.homeworld}/>
                ))}
         </CardHolder>
        </div>
        
         
     
 )

}