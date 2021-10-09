window.onload = function (e)
{
    let state = true;
    let child1 = document.querySelectorAll("#board > div");
   //console.log(child1);
   child1.forEach(function(element)
   {
    element.classList.add("square");
    element.onclick = ()=>
    {
        if (state)
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
    
    }
    element.onmouseover  = () =>
     {
        element.classList.add("hover");
    }
    element.onmouseout  = () => 
    {
        element.classList.remover("hover");
    }
   });
   
   
}

