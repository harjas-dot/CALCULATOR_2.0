function assign(i){

  if(i<10){
    document.getElementById("display").value+=i;
    flag=1;
  }
  else if (i==10 & flag==1) {
    document.getElementById("display").value+="+";
    flag=0;
  }
  else if (i==11 & flag==1) {
    document.getElementById("display").value+="-";
    flag=0;
  }
  else if (i==12 & flag==1) {
    document.getElementById("display").value+="/";
    flag=0;
  }
  else if (i==13 & flag==1) {
    document.getElementById("display").value+="*";
    flag=0;
  }
  else if (i==15 & flag==1) {
    document.getElementById("display").value+=".";
    flag=0;
  }
  else if (i==14 ) {
    document.getElementById("display").value=" ";
    flag=0;
  }

}
function result(){
  res=eval(document.getElementById("display").value)
  document.getElementById("display").value=res;
}
