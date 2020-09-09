/*commonScript.js*/

/*Navigation Description START*/
function setSelectedTab(selected){
  while(document.getElementsByClassName('selectedNav').length>0)
  {
    document.getElementsByClassName("selectedNav")[0].classList.remove('selectedNav');
  }
  if(selected === 'home')
  {
    document.getElementById('mainNav').querySelectorAll("a")[0].className = "selectedNav";
    texttoshow = '<i>'+
    '<b>WELCOME</b><br>'+
    'Thank you for visiting my site...<br>'+
    'Scroll down or use the navigation to browse through my portfolio and learn more about me...'+
    '</i>';
  }
  else if(selected === 'projects')
  {
    document.getElementById('mainNav').querySelectorAll("a")[1].className = "selectedNav";
    // texttoshow = '<i>'+
    // '<b><u>PROJECTS</u></b><br>'+
    // 'I have worked on the following projects : <br>'+
    // '<span><a href="pizzeriaProject.html">•	Pizzeria UX Design</a></span><br>'+
    // '<span><a href="amazonProject.html">•	Amazon Case Study</a></span><br>'+
    // '<span><a href="utProject.html">•	Usability Testing</a></span><br>'+
    // '<span><a href="elderCareProject.html">•	Elder Care System</a></span><br>'+
    // '<span><a href="dataAnalysisProject.html">•	Data Analysis</a></span><br>'+
    // '</i>';
    texttoshow = '<i>'+
    '<b><u>PROJECTS</u></b><br>'+
    'I have worked on the following projects : <br>'+
    '<span><a href="pizzeriaProject.html">•	Pizzeria</a></span><br>'+
    '<span><a href="ninjaFolioProject.html">•	Online Portfolio</a></span><br>'+
    '<span><a href="utProject.html">•	Bentley.edu</a></span><br>'+
    '<span><a href="amazonProject.html">•	Amazon.com</a></span><br>'+
    '<span><a href="elderCareProject.html">• Elder Care System</a></span><br>'+
    '<span><a href="dataAnalysisProject.html">•	Online Banking</a></span><br>'+
    '</i>';
  }
  else if(selected === 'about')
  {
    document.getElementById('mainNav').querySelectorAll("a")[2].className = "selectedNav";
    texttoshow = '<i>'+
    '<b><u>ABOUT</u></b><br>'+
    'Learn more about me here.. <br>'+
    '<ul style="list-style-position:inside;">'+
    '<li><a href="#credoSubDiv">Credo</a></li>'+
    '<li><a href="#skillsSubDiv">Skillsets</a></li>'+
    '<li><a href="#academicSubDiv">Qualifications</a></li>'+
    '<li><a href="#testiSubDiv">Testimonials</a></li></ul>'+
    '</i>';
  }
  else if(selected == 'contact')
  {
    document.getElementById('mainNav').querySelectorAll("a")[3].className = "selectedNav";
    texttoshow = '<i>'+
    '<b><u>CONTACT</u></b><br>'+
    'To reach me, <br>drop an email, <br>message on linkedin, <br>give a call or <br>leave a text'+
    '</i>';
  }
  document.getElementById("navDescription").innerHTML = texttoshow;
}
/*Navigation Description END*/

/*mobile Navigation START*/
var modalMobMenu = document.getElementById("modalMenuDiv");
var btn = document.getElementById("hamburgerBtn");
btn.onclick = function() {
  modalMobMenu.style.display = "block";
}
window.onclick = function(event) {
if (event.target == modalMobMenu) {
  modalMobMenu.style.display = "none";
}
}
// function fixBG(){
//   header.style.position = "fixed";
//   header.style.overflow = "hidden";
//   body.style.position = "fixed";
//   body.style.overflow = "hidden";
// }
function hideMenu(){
  modalMobMenu.style.display = "none";
}
/*mobile Navigation END*/

/*modal : image display START*/
var modal = document.getElementById("modalBox");
var images = document.getElementsByClassName('openOnClick');
var modalImg = document.getElementById("modalImage");
var i;
for (i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    zoomFeature();
    modal.style.display = "block";
    modalImg.style.removeProperty('height');
    modalImg.style.removeProperty('width');
    // modalImg.style.removeProperty('object-fit');
    modalImg.src = this.src;
    modalImg.alt = this.alt;
  }
}
document.getElementsByClassName("close")[0].onclick = function() {
  modal.style.display = "none";
}
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
function zoomFeature(){
  var imgElement = document.getElementById('modalImage');
  function zoomImg(zoomScale) {
    var pre_width = imgElement.clientWidth;
    var pre_height = imgElement.clientHeight;
    imgElement.style.width = (pre_width * zoomScale) + 'px';
    imgElement.style.height = (pre_height * zoomScale) + 'px';
  }

  document.getElementById('zoomout').addEventListener('click', function() { zoomImg(0.5); });
  document.getElementById('zoomin').addEventListener('click', function() { zoomImg(1.5); });
}
// /*modal : image display END*/

// /*Reference letter display START
// Should be placed after modalimage script*/
function openRefLetterModal(src){
  zoomFeature();
  modal.style.display = "block";
  modalImg.style.removeProperty('height');
  modalImg.style.removeProperty('width');
  modalImg.src = "resources/"+src;
  modalImg.alt = "resources/"+src;
}
// /*Reference letter display END*/
