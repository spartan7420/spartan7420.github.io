function ajaxpost () {
  let form = document.getElementById("contactform");
  let data = new FormData(form);

  fetch("http://127.0.0.1:8000/sent-message", { method:"POST", body:data })
  .then(res => res.text())
  .then((response) => {
        if (response == 1) { alert("Your message was sent successfully!"); }
        else { alert("An issue has popped up. Please send me an email alternatively."); }
        form.reset();
  });
  
  return false;
}