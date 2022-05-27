let input1 = document.getElementById('firstInput');
let input2 = document.getElementById('secondInput');

input1.addEventListener('input',updateValue);
input2.addEventListener('input',updateValue);

function updateValue(){
    let currentId = this.id;
    let otherId;
    
    if(currentId=='firstInput')
       otherId = 'secondInput';
    else
       otherId = 'firstInput';

    document.getElementById(otherId).value = parseFloat(this.value) + 4;
}