// Placing your script in this function will wait until the document has finished loading before initialising any JS.

$(document).ready(function () {
    // .css updates using inline styles
    $("h2").addClass("underline"); // Underlines all <h2> elements
    $("ul").addClass("border"); // Add a border to all UL elements   
});