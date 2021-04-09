
  var no = prompt("After how many people do you want to leave the meeting", "5");
  no=parseInt(no);
  function HasMeetingEnded(){
    
    if(parseInt(document.getElementsByClassName("wnPUne N0PJ8e")[0].textContent)<no)
    {
        console.log("here");
        document.getElementsByClassName("DPvwYc JnDFsc grFr5 FbBiwc")[0].click();
        
    }else{
    setTimeout(HasMeetingEnded,2000);
      
    }
  }



  setTimeout(HasMeetingEnded,2000);