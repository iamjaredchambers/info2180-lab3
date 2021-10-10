window.onload = function (e)
{
    let state = true;
    let stat = document.getElementById("status");
    let xWinner = 0;
    let oWinner = 0;
    let winningpos = [[0,1,2],[3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], [0,4,8] , [2,4,6]];
    let validWinner;
    let child1 = document.querySelectorAll("#board > div");
   //console.log(child1);
   child1.forEach(function(element)
   {
    element.classList.add("square");
    element.onclick = ()=>
    {
        if (element.innerHTML == "X" || element.innerHTML == "O")
        {
            element.innerHTML = element.innerHTML;
        }
        
        else if (state)
        {
            element.innerHTML = "X";
            element.classList.add("X");
            state = false;
        }
        else if (state == false)
        {
            element.innerHTML = "O";
            element.classList.add("O");
            state = true;
        }
        validWinner = winnerCheck();
        if (validWinner == 1)
        {
            stat.classList.add("you-won");
            stat.innerHTML = "Congratulations, X is the winner!";
            child1.forEach((ele)=>
            {
                ele.onclick = (el) =>{
                    el.preventDefault();
                }
            });
        }
        else if (validWinner == 0)
        {
            stat.classList.add("you-won");
            stat.innerHTML = "Congratulations, O is the winner!"; 
            child1.forEach((ele)=>
            {
                ele.onclick = (el) =>{
                    el.preventDefault();
                }
            });   
        }
        
    
    }
    element.onmouseover  = () =>
     {
        element.classList.add("hover");
    }
    element.onmouseout  = () => 
    {
        element.classList.remove("hover");
    }
   });
   let newbtn = document.getElementsByClassName("btn")[0];
   newbtn.onclick = () =>
   {
       location.reload();
   }
   

  
   
let winnerCheck = () => 
{
    for (let item = 0; winningpos.length; item++)
    {
        winningpos[item].forEach(element => {
            if (child1[element].classList.contains("X"))
            {
                xWinner++;
            }
            else if( child1[element].classList.contains("O"))
            {
                oWinner++;
            }
        }); if (xWinner == 3)
        {
            return 1;
        }else if(oWinner == 3)
        {
            return 1;
        }
        xWinner = 0;
        oWinner = 0;
    if (item < winningpos.length - 1)
    {
        continue;
    }

        return -1;
    }
}




   
}

