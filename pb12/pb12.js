var current = 1;
var total = 5;
var colors = ["blue", "red", "black", "pink", "yellow"];
var currentColor = 1;

function changeBackground()
{
    if(current == total + 1)
    {
        current = 1;
    }
    document.getElementsByTagName("body")[0].style.background = "url(back" + current + ".png)";
    current++;
}

function changeLinks()
{
    if(currentColor == 5)
    {
        currentColor = 0;
    }
    currentColor++;
    links = document.getElementsByTagName("a");
    for(i = 0; i < links.length; i++)
    {
        links[i].style.color = colors[currentColor-1];
    }
}