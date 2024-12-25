let btn=document.querySelector(".btn");
let input =document.querySelector(".result")

btn.addEventListener("click",function(){
    let countryName= input.value
    // console.log(result);

    let api=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(api);
    
    fetch(api)
    .then((iteam)=>{
        iteam.json()
    }).then((data)=>{
        console.log(data)
        // `<div class="flag-box">
        //             <!-- <img src="${data[0].svg}" alt=""> -->
        //             <h2>${data[0].name}</h2>
        //  </div>
        //         `
    })
})