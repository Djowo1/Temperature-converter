const myinput = document.getElementById("myinput");
const myradio = document.getElementById("myradio");
const myradio2 = document.getElementById("myradio2");
const result = document.getElementById("result");

let temp;

function convert(){

    if(myradio.checked){
        temp = Number(myinput.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = (`The Temperature = ${temp.toFixed(1)}`) + `℉`;
    }

    else if(myradio2.checked){
        temp = Number(myinput.value);
        temp = (temp - 32) * (5/9);
        result.textContent = (`The Temperature = ${temp.toFixed(1)}`) + `℃`;
    }

    else{
        result.textContent = `Please select a unit of conversion`;
       }
}






