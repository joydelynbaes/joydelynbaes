function doInputOutput(){
    let temp = parseFloat(document.getElementById("temp").value);
    let speed = parseFloat(document.getElementById("wind").value);

    let result = windChill(temp, speed);
    document.getElementById("outPut").innerHTML = result;
} 
function windChill(temp, speed){
    let t = temp;
    let s = speed;
    let chill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16);
    return chillFac;
}

result = 35.74 + 0.6215 * 45 - 35.75 * Math.pow(4.0, 0.16) + 0.4275 * 45 * Math.pow(4.0, 0.16);
document.getElementById("chillOutput").textContent = Math.round(result);