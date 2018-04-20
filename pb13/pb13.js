var open = false;

function openMenu() {
    if(open)
    {
        document.getElementById("menu").style.visibility = "hidden";
        open = false;
    }    
    else   
    {
        document.getElementById("menu").style.visibility = "visible";
        open = true;
    }    
}

function openSubmenu(nr) {
    elem = document.getElementById("submenu"+nr);
    visib = elem.style.visibility;
    if(visib == "visible")
    {
        elem.style.visibility = "hidden";
    }
    else
    {
        elem.style.visibility = "visible";
    }
}