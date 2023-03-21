$(document).ready(
    function () {
        $("#view_button").click(getPicture);
    });
    function getPicture() {
       // const api_key = 'DEMO_KEY';
        const date = $("#date").val();
       // const url = 'https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=' + '${date}';
        fetchData(date);
    };
    
    function fetchData(dateValue) {
        fetch(
            "https://api.nasa.gov/planetary/apod?" +
              new URLSearchParams({
                api_key: "DEMO_KEY",
                date: dateValue,
              })
          )
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                showPicture(data);
            })
            .catch((error) => {
                alert(error.message);
                console.log(error.message);
              });
    }

    function showPicture(data) {
        $("#pic").attr("src", data.url);
        $("#title").text(data.title);
    };
   /* function noPicture(error) {
        alert(error.responseText);
    };*/
