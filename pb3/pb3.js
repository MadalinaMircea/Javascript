function removeLinks()
{
    links = Array.prototype.slice.call(document.getElementsByTagName("a"));

    links.forEach(element => {
        if(element.href.startsWith("https://scs.ubbcluj.ro"))
        {
            element.parentElement.removeChild(element);
        }
    });
}