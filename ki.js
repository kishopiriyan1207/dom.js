function changeText() {
    var b = document.getElementById("kisho").innerHTML = "love is fack!";
}
function changeBackgroundColor(){
    var x=document.getElementById("kish");
    x.style.backgroundColor="red";
}
function toggleParagraph() {
    var paragraph = document.getElementById("kis");

    // Toggle between showing and hiding the paragraph by changing the display property
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";  // Show the paragraph
    } else {
        paragraph.style.display = "none";   // Hide the paragraph
    }
}

function addListItem() {
    // Use createElement to create a new li element
    var newItem = document.createElement("li");
    
    // Add text content to the new li
    newItem.textContent = "New Item";
    
    // Use getElementById to select the unordered list
    var list = document.getElementById("ki");
    
    // Append the new li to the unordered list
    list.appendChild(newItem);
}
function changeImage(){
    var a=document.getElementById("k").src="NAZRIYA NAZIM.jpeg"
}
function countParagraphs() {
    // Use getElementsByTagName to get all <p> elements
    var paragraphs = document.getElementsByTagName("p");
    
    // Use the length property to count the number of paragraphs
    var count = paragraphs.length;
    
    // Display the count in an alert box
    alert("There are " + count + " paragraphs on the page.");
}
function deletLastiteam(){
    var list = document.getElementById("ki");

    // Check if the list has any items before trying to delete
    if (list.children.length > 0) {
        // Remove the last list item using removeChild
        list.removeChild(list.lastElementChild);
    } else {
        alert("No more items to delete.");
    }
}
