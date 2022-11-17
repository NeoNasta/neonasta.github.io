var costs = {
	  clases: {basePrice: 250, maxClass: 12},
    meses: {basePrice: 3500, maxClass: 12}
};
  
  function clasesCalculate()
  {
    var clases = document.getElementById('clases').value;
    var clasexprice = costs.clases.basePrice * clases;
    document.getElementById('clasexprice').innerHTML = "$" + clasexprice;
  }

  function mesesCalculate()
  {
    var meses = document.getElementById('meses').value;
    var mesesprice = costs.meses.basePrice * meses;
    document.getElementById('mesesprice').innerHTML = "$" + mesesprice;
  }

  function scroll()
  {
    window.addEventListener("scroll", function(){
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0)
    })
  }