import { formatMs } from "@material-ui/core";
import React, {useState, useEffect} from "react";
import TinderCard from "react-tinder-card";
import database from './firebase';
import './TinderCards.css'
  

function TinderCards(){

    const [people, setPeople] = useState([]); 

    useEffect( () => {
        // this is where the code runs..

        const unsubscribe =  database.collection('people').onSnapshot(snapshot => (
             setPeople(snapshot.docs.map(doc => doc.data()))
        ))

        return () => {
            unsubscribe();
        };
        // this will run once when the component loads, and never again
    },[] );



    // GOOD ( Push to an array in REACT )
    // setPeople( [...people, 'sonny','qazi'] )

    return (
        <div className="tinderCards__cardContainer" >
           {/* <h1> Tinder cards </h1> */}

            {people.map(person => (
                <TinderCard 
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up','down']}
                >
                    <div 
                        style={{backgroundImage:`url(${person.url})`}}
                        className="card" 
                    >
                        <h3> {person.name} </h3>
                    </div>
                </TinderCard>
            ) )}
        </div>
    );

}

export default TinderCards;

// Always give KEYS in REACT
// Benefits
// Allows react ot efficiently re-render a list
// Makes your app super fast
// Always do this in REACT (Sometimes you might not see the benefit immediately)