let allTasks = localStorage.getItem("taskME");
if (allTasks === null) {
    allTasks = "";
}

function addTask() {
    if (typeof (Storage) !== undefined) {
        let holdTask = document.getElementById("task").value;
        allTasks = holdTask + " \n" + allTasks;

        document.getElementById("taskList").value = allTasks;
        document.getElementById("task").value = "";
        localStorage.setItem("taskME", allTasks);
    }
    else {
        document.getElementById("taskList").innerHTML = "Sorry";
    }
}
function clearTask() {
    document.getElementById("taskList").value = "";
    document.getElementById("task").value = "";
    allTasks = "";


    localStorage.removeItem("taskME");
}
window.onload = function () {
    document.getElementById("taskList").value = allTasks;
};