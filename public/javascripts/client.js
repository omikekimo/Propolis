// Define the loadContent function
function loadContent(url, targetId) {
    // Make an AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Update the target element with the received content
            document.getElementById(targetId).innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

