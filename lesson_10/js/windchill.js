function doInputOutput(){
    let temp = 49;
    let speed = 12;

    let result = windChill(temp, speed);
    document.getElementById("chillOutput").innerHTML = result;
} 
function windChill(temp, speed){
    let t = temp;
    let s = speed;
    let chillF;

    if (t > 50 && s < 4.8){
        chillF = "N/A";
        return chillF;
    }
    else{
        chillF = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16);
        return chillF.toFixed(0) + "&#176;F";
    }

}
doInputOutput()
