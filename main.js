name_array=[];

function submit(){
   var display_array=[];
    for (j=1; j<=4; j++)
    {var studentname=document.getElementById("student"+j).value;
    name_array.push(studentname);
    }
    var length=name_array.length;
    for (k=0; k<length; k++)
    {
display_array.push("<h4> Name - "+name_array[k]+"</h4>");
    }
    document.getElementById("display_name_withcomma").innerHTML=display_array;
    var remove_comma=display_array.join(" "); 
    document.getElementById("display_name_withoutcomma").innerHTML=remove_comma;
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}
function sort(){
    name_array.sort();
    var display_sortedarray=[];
    var length=name_array.length;
    for (k=0; k<length; k++)
    {
display_sortedarray.push("<h4> Name - "+name_array[k]+"</h4>");
    }
    var remove_comma=display_sortedarray.join(" "); 
    document.getElementById("display_name_withoutcomma").innerHTML=remove_comma;
}

