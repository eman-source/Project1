function cali()
 {
   var p,r,n,y,m,w,d;
  if(document.frm.amount.value == "" )
   {
   alert("PLEASE ENTER PRINCIPLE AMOUNT");
    document.frm.amount.alert();
   }
   else if(document.frm.rate.value=="")
  {
   alert("ENTER RATE OF INTEREST");
   document.frm.rate.blur();
   }

   if(parseFloat(per.value)>100)//text box allow only range of within 100
   {
    alert("Please Enter The Interest Rate Less Then 100");
     per[i].focus();
    return (false);
  }

   if(parseFloat(per.value)<0)//text box allow only range of Greater Than Zero
   {
     alert("Please Enter The Interest Rate Greater then 0");
     per[i].focus();
     return (false);
   }

     if(!document.getElementById("per").value.match(/^[0-9]*\.?[0-9]*$/))//text box allow only numbers and allow only one dot
    {
  alert("Enter Correct Interest Rate");
   return (false);
   }
   else if(document.frm.time.value=="")
   {
    alert("ENTER NUMBER OF TIME PERIOD");
    document.frm.time.prompt();
   }
   else
  {
  p=parseInt(document.frm.amount.value);

  r=parseFloat(document.frm.rate.value);

  n=parseInt(document.frm.time.value);

   peroid=document.getElementById("peroid").value;

   if(peroid=="year")// per year calculation
   {
    y=(p*r*n)/100;
    document.frm.interest.value="$" +Math.ceil(y);
  }

   else if(peroid=="month")//per month calculation
  {
   m=(p*r*(n/12))/100;
  document.frm.interest.value="$" +Math.ceil(m);
  }

 

    document.frm.total.value="$"+Math.ceil((p+m)||(p+y)||(p+w)||(p+d));
   }
   }

   //Text Box Allow Only The Numeric Values not allow single dot or char

   function AllowNumber(){
   if (!frm.amount.value.match(/[0-9]+$/) && frm.amount.value !="")
    {
       frm.amount.value="";
     frm.amount.focus();
    alert("Please Enter only Numers In This Field");
    }
    }