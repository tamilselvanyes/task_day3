var request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);
request.send();
request.onload = function(){
    var data = JSON.parse(request.response);
    //for loop
    for(let i = 0; i < 5 ; i++){
        console.log(data[i].name);
    }

    //for in loop
    for (let i in data){
      console.log(i, data[i].name)
    }

    //for of loop
    for(const value of data ){
       console.log(value.capital);
    }

    //forEach loop
    data.forEach(iterativefunction);
    function iterativefunction(item){
      console.log(item.area)
    }
}