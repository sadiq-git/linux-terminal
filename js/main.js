// Functions for each action-command.


function help(){
  return "<h2><span style=\"color:#eb926d;\">Help:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>Give me the complete picture</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>Everything you ever wanted to know about Sadiq Karur</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>How to get in touch with Sadiq Karur</td>\
  </tr>\
  <tr>\
    <td>links</td>\
    <td>See what links Sadiq Karur wants you to click on</td>\
  </tr>\
  <tr>\
    <td>skills</td>\
    <td>Get to know how good Sadiq Karur is at stuff</td>\
  </tr>\
   <tr>\
    <td>motto</td>\
    <td>Get to know Sadiq Karur's philosophy</td>\
  </tr>\
  <tr>\
    <td>cv</td>\
    <td>Download Sadiq Karur's CV</td>\
  </tr></table>";
}

function contact(){
  return "<h2><span style=\"color:#cc6666;\">Contact:</span></h2><table>\
  <tr>\
    <td>Email</td>\
    <td><a href=\"mailto:sadiqkarur23@gmail.com\">sadiqkarur23@gmail.com</a></td>\
  </tr>\
  <tr>\
    <td>Telephone</td>\
    <td><a href=\"tel:+91 8121100812\">+91 8121100812</a></td>\
  </tr>\
  <tr>\
    <td>Address</td>\
    <td>Sadiq Karur</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>204 Electronic City</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>560100</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>Bengaluru</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>India</td>\
  </tr></table>";
}

function skills(){
  return "<h2><span style=\"color:#81a2be;\">Skills:</span></h2><table>\
  <tr>\
    <td>Amazon EC2</td>\
    <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>\
  </tr>\
  <tr>\
    <td>React</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 70%</td>\
  </tr>\
  <tr>\
    <td>Node</td>\
    <td>▰▰▰▰▰▰▱▱▱▱ 50%</td>\
  </tr>\
  <tr>\
    <td>Git</td>\
    <td>▰▰▰▰▰▰▰▰▰▱ 90%</td>\
  </tr>\
  <tr>\
    <td>Python</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
  </tr>\
  <tr>\
    <td>Linux</td>\
    <td>▰▰▰▰▰▰▰▰▰▰ 100%</td>\
  </tr></table>";
}

function about(){
  return "<p>Apart from being a Linux SysAdmin, I am a Front-end Web developer who can create web applications based on React.js(+ Redux) & Angular. I am able to create performance oriented websites using well structured HTML along with efficient SAAS and other JS libraries.</p>";
}

function cv(){
  return "<span style=\"color:#58d49f;\"><h2>CV:</h2></span><p>\tDownload from <a href=\"src/cv.png\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</p>";
}

function motto(){
  return "<figure><blockquote><p>The ancient Oracle said that I was the wisest of all the Greeks. It is because I alone, of all the Greeks, know that I know nothing.</p></blockquote><figcaption>—Socrates, <cite>Apology</cite></figcaption></figure>";
}

function links(){
  return "<span style=\"color: #b5bd68;\"><h2>Links:</h2></span><ul>\
  <li><a href=\"https://www.linkedin.com/in/sadiqkarur\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></li>\
  <li><a href=\"https://github.com/sadiqmuhamed\" target=\"_blank\"><i class=\"fab fa-github\"></i> Github</a></li>\
  <li><a href=\"https://twitter.com/SadiqOriginal\" target=\"_blank\"><i class=\"fab fa-twitter\"></i> Twitter</a></li>\
  <li><a href=\"https://www.instagram.com/sadiq_karur\" target=\"_blank\"><i class=\"fab fa-instagram\"></i> Instagram</a></li>\
  </ul>";
}



// Main Function
function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value;

    //Select what info to print according to command
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput=="all") {
      document.getElementById('injected').innerHTML=about() + "\n\n\n" + skills() + "\n\n\n" + links() + "\n\n\n" + contact() + "\n\n\n" + cv();
    }else if (txtInput == "about") {
      document.getElementById('injected').innerHTML=about();
    }else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput == "cv") {
      document.getElementById('injected').innerHTML=cv();
    }else if (txtInput=="skills") {
      document.getElementById('injected').innerHTML=skills();
    }else if (txtInput=="links") {
      document.getElementById('injected').innerHTML=links();
    }else if (txtInput == "legend") {
      var win = window.open("https://www.youtube.com/watch?v=JeyVU4nMWCg", '_blank');
      win.focus();
      document.getElementById('injected').innerHTML=legend();
    }else if (txtInput == "motto") {
      document.getElementById('injected').innerHTML=motto();
    }else{
      document.getElementById('injected').innerHTML = help();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
