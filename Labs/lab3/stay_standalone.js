/* Execute the init function when the window is done loading */

window.onload=init;

function init() {

	/* Retrueve all <a> elemnets from the DOM and put them within an array variable called */
	var a=document.getElementByTagName("a");

	for(var i=0, i<a.length;i++) {
		a[i].onclick=function(){
			window.location=this.getAttribute("href");
			return false;
		}
	}
};
