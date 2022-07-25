import fetch from "node-fetch";

/************
 * end points
 * all the users:
 * 
 */

//http://localhost:3001/empDetails  // This will act as resource URI

//specific useR:
//http://localhost:3001/empDetails/id 

//find by a particular property  (basically filter because it will show all matching properties)
//http://localhost:3001/empDetails?prop=value

//----FETCH----------
console.log(fetch("http://localhost:3001/empDetails")) // this won't work
// because fetch is promise based, we can use .then or async await 


function getAll(){
    fetch("http://localhost:3001/empDetails")
    .then((res)=>{return res.json()})
    .then((res)=>console.log(res))
    .catch((Err)=>console.log(Err))
}
getAll()
// callback -> promise -> then -> async ->fetch

