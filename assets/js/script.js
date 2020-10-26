var startButton = document.querySelector('#sub-btn');

var chance;

function setArr(params) {
    var bstring = document.getElementById('text-area1').value; 
    var astring = document.getElementById('text-area2');
    var string = [];


    bstringFixed = bstring.split("")
    for (let index = 0; index < 5; index++) {
        bstringFixed.shift()
        
    }

    
    for (let index = 0; index < bstringFixed.length; index++) {
        chance = Math.floor(Math.random()*2)
        //console.log(chance)
        if (chance === 0) {
            string.push(bstringFixed[index].toUpperCase());
            
        }else{
            string.push(bstringFixed[index]);
        }


        
    }
    
    //console.log(string)

    astring.value = string.join("")
    
    
}




startButton.addEventListener('click', setArr);