for(let i=1; i<=5; i++)
 {
    const elem=document.getElementById(i+"");
    elem.addEventListener("click",visitLink);
 }


    function visitLink(event){
        const id=event.target.id;
        
        if(id=="1")
        {
            setTimeout(function() { window.open("your instgram link past here") }, 1);
        }


        else if(id=="2")
        {
            setTimeout(function() { window.open("linked in profile") }, 1);
        }

        else if(id=="3")
        {
            setTimeout(function() { window.open("figma link") }, 1);
        }

        else if(id=="4")
        {
            setTimeout(function() { window.open("github link") }, 1);
        }

        else 
        {
            setTimeout(function() { window.open("editorx") }, 1);
        }


          }
          