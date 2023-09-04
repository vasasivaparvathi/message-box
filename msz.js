const ip_text=document.getElementById("msz-ip");
function getmsg(){
    document.getElementById("msz-op").innerHTML=ip_text.value;
    ip_text.value="";
}