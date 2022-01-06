import { Jokebox, Favourites } from '../../features';
import styles from './App.module.css';
import { Loading } from '../Loading/Loading';
import axios from 'axios';
import { useState, useEffect } from 'react';


export function Readiness() {
  const [loading, setLaoading]= useState(true)

  const endPointv1 = () => {
  axios.get("http://localhost:3000/api/v1/readiness")
      .then((response) => {
        setLaoading(true)
      //   const notReady = response.data.errors.errors.message;
       console.log(response.data)
      // return notReady;
      })
      .catch((err)=>console.log(err))
    ;
  }

  

  useEffect(()=> {
    endPointv1();
  }, [])

}


const endPointv1 = () => {
  axios.get("http://localhost:3000/api/v1/readiness")
      .then((response) => {
      const notReady = response.data.errors.errors.message;
       console.log(response.data)
      return notReady;
      })
      .catch((err)=>console.log(err))
    ;
  }






const endPointv2 = () => {
  axios.get("http://localhost:3000/api/v2/readiness")
      .then((response) => {
        const Ready = response;
      console.log(Ready)
      return Ready;
      })
      .catch((err)=>console.log(err))
    ;
}






export function getAllJokes() {
  axios.get("http://localhost:3000/api/v1/jokes")
      .then((response) => {
        const jokesArray = (response.data)
        let myJokes = jokesArray.filter((myJokes:any) => {
          if(myJokes.type!=='barista') {
          console.log(myJokes)
          //return myJokes
          //console.log(myJokes)
          }
          return myJokes
          //console.log(myJokes)  
        });
        

      
        
        // const jokes=jokesArray.filter(jokesArray.type!=="barista")
        // console.log(jokes)
        
        // const filteredJokes = jokesArray.filter(function(joke) {
	      // return joke.type !== “barista”;
        // });
        
        //const filteredJokes = jokesArray.filter(joke => joke.type!=="barista")
        //console.log(filteredJokes)
        //return filteredJokes
        })
        
      
      .catch((err)=>console.log(err));
      
}



endPointv1();
endPointv2();
getAllJokes();




// export default function Readiness() {
//   //const [loading, setLoading]= useState(false);
//     axios.get("http://localhost:3000/api/v1/readiness")
//       .then((response) => {
//         const notReady = response.data.errors.message;
//       console.log(notReady)
//       return notReady;
//       })
//       .catch((err)=>console.log(err))
//     ;
    
// }
  
// Readiness();


export const App: React.FC = () => (
  <>
  <div className={styles.root}>
    <div className={styles.content}>
      <div className={styles.jokeboxWrapper}>
        <h3 className={styles.contentHeader}>Jokes</h3>
        <Jokebox />
          {/* <Loading /> */}
         
      </div>
      <div className={styles.favouritesWrapper}>
        <h3 className={styles.contentHeader}>Favourites Jokes</h3>
        <Favourites />
      </div>
    </div>
  </div>
        
  </>
        
);
