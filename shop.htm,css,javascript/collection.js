var productContainer = document.getElementById("products")
var search = document.querySelector(".search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(event){
    event.preventDefault()
    var enteredValue = search.value.toUpperCase()

    for(count=0;count<productlist.length;count++)
    {
        var productname = productlist[count].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0)
        {

            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }

})