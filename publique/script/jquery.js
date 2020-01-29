function submit() {
    let apiUrl = "https://slack.com/api/chat.postMessage";
    let token = creds.token;
    let channel = "#bot";
    let prenom = document.getElementById('prenomSlack').value;
    let msg = document.getElementById('commentSlack').value;
    let mail = document.getElementById('emailSlack').value;
    let user = "yo44prg";

    $.ajax({
        data: {
            "token": token,
            "channel": channel,
            "text": "prenom: " + prenom + "\n" + "mail: " + mail + "\n" + "message: " + msg,
            "as_user": user,
        },
        dataType: 'text',
        type: 'POST',
        url: apiUrl,
        error: function (error) {
            alert("error: " + error);
        },
        success: function (data) {
            console.log("result: " + data)
        }
    });console.log('plop');
}