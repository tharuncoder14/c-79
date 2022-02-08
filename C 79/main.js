friends=[];

function submit(){
var name1=document.getElementById("student_1").value;
var name2=document.getElementById("student_2").value;
var name3=document.getElementById("student_3").value;
var name4=document.getElementById("student_4").value;
var name5=document.getElementById("student_5").value;

friends.push(name1);
friends.push(name2);
friends.push(name3);
friends.push(name4);
friends.push(name5);
console.log(friends);

document.getElementById("display-1").innerHTML=friends;
document.getElementById("submit").style.display="none";
document.getElementById("Sort").style.display="inline-block";
}
function Sort(){
   friends.sort() ;
   console.log(friends);
   document.getElementById("display-1").innerHTML=friends;
}