function submitToAPI(e) {
    e.preventDefault();

    // Insert your public API Gateway Endpoint url below
    var URL = GetAPIendpoint();

         var Namere = /[A-Za-z]{1}[A-Za-z]/;
         if (!Namere.test($("#name-input").val())) {
                      alert ("Name can not be less than 2 char");
             return;
         }
         var mobilere = /[0-9]{10}/;
         if (!mobilere.test($("#phone-input").val())) {
             alert ("Please enter valid mobile number");
             return;
         }
         if ($("#email-input").val()=="") {
             alert ("Please enter your email address");
             return;
         }

         var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
         if (!reeamil.test($("#email-input").val())) {
             alert ("Please enter valid email address");
             return;
         }

    var name = $("#name-input").val();
    var phone = $("#phone-input").val();
    var email = $("#email-input").val();
    var desc = $("#description-input").val();
    var id = "id" + (Date.now()).toString();

    var data = {
      "operation": "create",
      "payload": {
        "Item": {
          "id": id,
          "name": name,
          "phone": phone,
          "email": email,
          "message": desc
        }
      }
    }
    /*
    var data = {
       name : name,
       phone : phone,
       email : email,
       desc : desc
     };
     */

     /*
     alert("button works with" +
            "\nname: " + name +
            "\nnumber: " + phone.toString() +
            "\nemail: " + email +
            "\desc: " + desc);
     */

      fetch(URL, {
        method: 'POST',
        mode: "no-cors",
        //crossDomain: "true",
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
      })
      .then(data => {
        console.log('Payload:', data)
        // rest of the code
      })
      // Include response if you set it up in API Gateway
      /*.then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })*/
      .then(data => {
        // clear form and show a success message
        alert('Successful');
        document.getElementById('contact-form').reset();
        location.reload();
      })
      .catch(error => {
        // show an error message
        console.log(error);
        alert('Unsuccessful');
      });
            

    /* Request can also be sent as $.ajax()
    $.ajax({
      type: "POST",
      url : URL,
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      
      success: function () {
        // clear form and show a success message
        alert("Successfull");
        document.getElementById("contact-form").reset();
    location.reload();
      },
      error: function () {
        // show an error message
        alert("UnSuccessfull");
      }});
      */
  }