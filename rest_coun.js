//display  all names,regions,subregions,population//

var request = new XMLHttpRequest();
       request.open("get","https://restcountries.com/v3.1/all");
       request.send();
       request.onload=function(){
        var data =JSON.parse(request.response);
        
                console.log(data);
            
       
//Get all the countries from Asia continent region using Filter function//

var asia = data.filter((ele)=> ele.region == "Asia")
console.log(asia);
       
//Get all the countries with a population of less than 2 lakhs using Filter function//
var country =data.filter((ele)=>ele.population <=200000)
console.log(country);
       
       
//Print the following details name, capital, flag using forEach function//
 var allnames=data.forEach((element) => 
    
console.log(`name :${element.name}
 
 Capital : ${element.capital}
 Flag : ${element.flag}
 
 `));
 
 
    
//Print the total population of countries using reduce function//
const Totalpopulation=data.reduce(function (acc, obj) { return acc + obj.population; }, 0
)
console.log(Totalpopulation)

//Print the country which uses US Dollars as currency


const currency = "United States dollar"
money=data.filter((ele)=>(ele.currencies[0].name==currency))
console.log(money)

}

 
       