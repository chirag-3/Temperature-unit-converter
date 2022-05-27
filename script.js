let input1 = document.getElementById('firstInput');
let input2 = document.getElementById('secondInput');

console.log(typeof input1.value);
console.log(input1.value);

input1.addEventListener('input',updateValue1);
input2.addEventListener('input',updateValue1);

function updateValue1(){
    let currentId = this.id;
    let otherId;
    let currentElement,otherElement;
    if(currentId=='firstInput')
       otherId = 'secondInput';
    else
       otherId = 'firstInput';
    
    currentElement = document.getElementById(currentId);
    otherElement = document.getElementById(otherId);

    let originalValue = parseFloat(currentElement.value);
    let inKelvin;

    if(currentElement.nextElementSibling.value=='Kelvin')
      inKelvin = originalValue;
    else if(currentElement.nextElementSibling.value=="Farenhite")
    {
       inKelvin = (originalValue-32)*5/9+273.15;
    }
    else if(currentElement.nextElementSibling.value=="Celsius")
    {
        inKelvin = originalValue + 273.15;
    }
    else if(currentElement.nextElementSibling.value=="Rankine")
    {
        inKelvin = originalValue/1.8;
    }
    else if(currentElement.nextElementSibling.value=="Reaumur")
    {
        inKelvin = originalValue*1.25+273.15;
    }


    if(otherElement.nextElementSibling.value=='Kelvin')
    {
         otherElement.value = inKelvin;
    }
    else if(otherElement.nextElementSibling.value=='Farenhite')
    {
        otherElement.value = (inKelvin - 273.15) * 9/5 + 32;

    }
    else if(otherElement.nextElementSibling.value=='Celsius')
    {
        otherElement.value = inKelvin - 273.15;
    }
    else if(otherElement.nextElementSibling.value=='Rankine')
    {
        otherElement.value = inKelvin*1.8;
    }
    else if(otherElement.nextElementSibling.value=='Reaumur')
    {
        otherElement.value = (inKelvin - 273.15)/1.25;
    }

}

let s1 = document.getElementById("first");
let s2 = document.getElementById("second");

s1.addEventListener("change",updateValue2);
s2.addEventListener("change",updateValue2);

 function updateValue2(){
    let currentId = this.previousElementSibling.id;
    console.log(currentId);
    let otherId;
    let currentElement,otherElement;
    if(document.getElementById(currentId).value!='')
    {
        if(currentId=='firstInput')
        otherId = 'secondInput';
        else
        otherId = 'firstInput';
        
        currentElement = document.getElementById(currentId);
        otherElement = document.getElementById(otherId);

        let originalValue = parseFloat(currentElement.value);
        let inKelvin;

        if(currentElement.nextElementSibling.value=='Kelvin')
        inKelvin = originalValue;
        else if(currentElement.nextElementSibling.value=="Farenhite")
        {
        inKelvin = (originalValue-32)*5/9+273.15;
        }
        else if(currentElement.nextElementSibling.value=="Celsius")
        {
            inKelvin = originalValue + 273.15;
        }
        else if(currentElement.nextElementSibling.value=="Rankine")
        {
            inKelvin = originalValue/1.8;
        }
        else if(currentElement.nextElementSibling.value=="Reaumur")
        {
            inKelvin = originalValue*1.25+273.15;
        }


        if(otherElement.nextElementSibling.value=='Kelvin')
        {
            otherElement.value = inKelvin;
        }
        else if(otherElement.nextElementSibling.value=='Farenhite')
        {
            otherElement.value = (inKelvin - 273.15) * 9/5 + 32;

        }
        else if(otherElement.nextElementSibling.value=='Celsius')
        {
            otherElement.value = inKelvin - 273.15;
        }
        else if(otherElement.nextElementSibling.value=='Rankine')
        {
            otherElement.value = inKelvin*1.8;
        }
        else if(otherElement.nextElementSibling.value=='Reaumur')
        {
            otherElement.value = (inKelvin - 273.15)/1.25;
        }
   }
 }