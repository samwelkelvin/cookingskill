function faq() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active_panel");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.style.border = 'none';
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          panel.style.border = '1px solid';
        } 
      });
    }
}

function signin(){

  let valid = true;

  const nameContent = document.getElementById("username");
  const messageContent = document.getElementById("message");

  const name = document.getElementById("username").value;
  const message = document.getElementById("message").value;

  const nameError = document.getElementById("user_error");
  const messageError = document.getElementById("message_error");

  const content = document.getElementById("feedback_content");


  if(name.trim() == ""){
    nameError.innerText = "User name is required";
    nameError.classList.add("error");
    valid = false;
  }else{
    nameError.innerText = "";
    nameError.classList.remove("error")
  }

  if(message.trim() == ""){
    messageError.innerText = "Feedback is required";
    messageError.classList.add("error");
    valid = false;
  }else{
    messageError.innerText = "";
    messageError.classList.remove("error");
  }

  if(valid){
  let  contentHtml = `<button class="accordion"><strong>${name}</strong></button>
    <div class="panel">
        <p> ${message}</p>
    </div>`;


    content.insertAdjacentHTML(
        'beforeend', contentHtml
    );

    nameContent.value = "";
    messageContent.value = "";
  }
}