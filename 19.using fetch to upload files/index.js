


//fetch using a Request and a Headers objects
// uploading an image along with other POST data
//using jsonplaceholder for the data

const url = 'https://postman-echo.com/post';

document.addEventListener('DOMContentLoaded', init);

function init(){
    document.getElementById('btnSubmit').addEventListener('click', upload);
    //when the button is clicked then only run the uplpoad method
}

function upload(ev){
    ev.preventDefault();    //stop the form submitting

    //create any headers we want
    let h = new Headers();
    h.append('Accept', 'application/json'); //what we expect back
    //bundle the files and data we want to send to the server
  
    let fd = new FormData()
    
    fd.append("user_id", document.getElementById("user_id").value)//the value inputed by user is stored in .value
    let myFile = document.getElementById('avatar_img').files[0];
     //the file uploaded are stored .files[] array. If only one file than files[0]
    fd.append("avatar", myFile, "avatar.png") //name of the file is 3rd parameter

    //create req object
    let req = new Request(url, {
        method: 'POST',
        headers: h,
        mode: 'no-cors',
        body: fd
    });

    fetch(req)
        .then( (response)=>{
            document.getElementById('output').textContent = "Response received from server";
        })
        .catch( (err) =>{
            console.log('ERROR:', err.message);
        });
}

//after uploading the file we find that post file is received from the server. checked in Networks -> Headers 