// var ourRequest= new XMLHttpRequest();


// ourRequest.open('GET', 'http://127.0.0.1:5500/pugpractice/aimal.json')

// ourRequest.onload=function(){

//     console.log(ourRequest.responseText)
// };


// ourRequest.send();

$.ajax({
    "url": "http://127.0.0.1:5500/pugpractice/aimal.json", "type": "GET",
    "success": myAjaxSuccessFunction, "error": ajaxFailure
    });
    function myAjaxSuccessFunction(data) {
        console.log(data);
    }
    function ajaxFailure(xhr, status, exception) {
    }

