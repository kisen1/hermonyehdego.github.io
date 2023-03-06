


var urlMenu= document.getElementById('changeEx');


urlMenu.onchange=function(){


    var useroption = this.option[this.selectedIndex];

    if(useroption.value!="nothing"){
        windom.open(useroption.value)
    }


}