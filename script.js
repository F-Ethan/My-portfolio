let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    console.log(myObj)
    for(i=0; i<myObj.length; i++){
        var list = document.createElement("li");
        var link = document.createElement("a");
        var name = document.createTextNode(myObj[i].name);
        link.href = myObj[i].html_url;
        list.appendChild(name);
        link.appendChild(list);
        console.log(list);

        document.getElementById("projects").appendChild(link);
    }
  }
};
newRequest.open("GET", "https://api.github.com/users/f-ethan/repos", true);
newRequest.send();






$(document).ready(function(){
    $(".icon").hover(function(){
        $(this).css("width", "25");
    }, function(){
        $(this).css("width", "20");
    });
});

