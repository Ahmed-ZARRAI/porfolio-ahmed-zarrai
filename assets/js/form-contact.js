function sendMail() {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  document.getElementById("submitButton1").innerHTML = `

            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>

    `;
  Email.send({
    Host: "smtp.gmail.com",
    Username: "samychaffai.site@gmail.com",
    Password: "samychaffai@site@1",
    To: "Chaffai.samyav@gmail.com", //To: "Chaffai.samyav@gmail.com",
    From: email,
    Subject: subject,
    Body: message + "<br> <br> <strong> From: " + name + "</strong>",
  }).then((message) => {
    document.getElementById("submitButton1").innerHTML = `Send !`;

    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    document.getElementById("alert").innerHTML = `
        <div class="alert alert-primary" style="padding: -10px; background-color: #00c2ff; color: white;" role="alert">
        
           Message send successfully !!

        </div>

        `;

    setTimeout(() => {
      document.getElementById("alert").innerHTML = ``;
    }, 4000);
  });
}

function sendMail2() {
  let email = document.getElementById("email2").value;
  let name = document.getElementById("name2").value;
  let wlink = document.getElementById("wlink").value;
  let message = document.getElementById("message2").value;

  let images = document.getElementById("images").files;
  let datafiles = [];
  Object.keys(images).map(function (key) {
    var reader = new FileReader();
    reader.readAsBinaryString(images[key]);
    reader.onload = function () {
      var dataUri =
        "data:" + images[key].type + ";base64," + btoa(reader.result);
      let file = {
        name: images[key].name,
        data: dataUri,
      };
      addFiles(file);
    };
  });

  const addFiles = (file) => {
    datafiles.push(file);
    if (datafiles.length == images.length) {
      SendMailWithFiles(datafiles);
    }
  };

  const SendMailWithFiles = (data) => {
    document.getElementById(
      "submitButton2"
    ).innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`;

    Email.send({
      Host: "smtp.gmail.com",
      Username: "samychaffai.site@gmail.com",
      Password: "samychaffai@site@1",
      To: "Casting.samychaffai@gmail.com", //Casting.samychaffai@gmail.com
      From: email,
      Subject: "casting",
      Body:
        message +
        "<br> link of project : " +
        wlink +
        "<div><br> <br> <strong> From: " +
        name +
        "</strong> <br></div>",
      Attachments: [...data],
    })
      .then((message) => {
        document.getElementById("submitButton2").innerHTML = `Send !`;

        document.getElementById("email2").value = "";
        document.getElementById("name2").value = "";
        //document.getElementById("subject2").value = "";
        document.getElementById("message2").value = "";
        document.getElementById("alert2").innerHTML = `
          <div class="alert alert-primary" style="padding: -10px; background-color: #000; color: white;" role="alert">
             Message send successfully !!
          </div>
  
          `;

        setTimeout(() => {
          document.getElementById("alert2").innerHTML = ``;
        }, 4000);
      })
      .catch((error) => {});
  };
}
