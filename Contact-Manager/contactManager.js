let contactCard = document.querySelector('.contact-container');

fetch("http://localhost:3001/empDetails").then((res)=>{return res.json()})  //fetching data from backend
.then((res)=>{console.log(res); printUI(res)})  // passing data to printer function
.catch((err)=>console.log(err))



//createElement method 
function printUI(data){
let rawData = '';
data.map((obj)=>{
    rawData+= `<div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <p>${obj.id}</p>
        <h3>${obj.fname}</h3>
        <p> ${obj.email}</p>
        <button> Delete </button>
        <button> Edit </button>
      </div>
    </div>
  </div>`
})
contactCard.innerHTML=rawData;
// console.log(rawData);
}