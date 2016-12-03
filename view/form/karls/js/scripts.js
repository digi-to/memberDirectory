function go() {
  var fname =  document.getElementById("first_name").value;
  var lname =  document.getElementById("last_name").value;
  var email =  document.getElementById("email").value;
  var desc =  document.getElementById("input_description").value;
  var p1 =  document.getElementById("project1").value;
  var p2 =  document.getElementById("project2").value;
  var p3 =  document.getElementById("project3").value;
  var projects = [p1, p2, p3];

   var post_obj = {
      "fname" :  fname,
      "lname" :  lname,
      "email" :  email,
      "desc" :  desc,
      "projects" : projects
   }
   console.log(post_obj);
   var request = new XMLHttpRequest();
   request.open("post", "/newuser", true);
   request.setRequestHeader("Content-type", "application/json");
   request.send(JSON.stringify(post_obj));
}
