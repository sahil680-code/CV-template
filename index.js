//  Pictures Change 
  const images = [
    { image1: '/Project3/img/Project_1.png', image2: '/Project3/img/Project_2.png', image3: '/Project3/img/Project_3.png', image4: '/Project3/img/Project_4.png'},
    { image1: '/Project3/img/Flutter_1.jpg', image2: '/Project3/img/Flutter_2.jpg', image3: '/Project3/img/Flutter_3.jpg', image4: '/Project3/img/Flutter_4.jpg'},
    { image1: '/Project3/img/photoshoot_1.jpg', image2: '/Project3/img/photoshoot_2.jpg', image3: '/Project3/img/photoshoot_3.jpg', image4: '/Project3/img/photoshoot_4.jpg'}
  ];
  let currentImagesIndex = 0;

  const image1Element = document.getElementById('image1');
  const image2Element = document.getElementById('image2');
  const image3Element = document.getElementById('image3');
  const image4Element = document.getElementById('image4');
  const changeButton = document.getElementById('changeButton');

  changeButton.addEventListener('click', () => {
    currentImagesIndex = (currentImagesIndex + 1) % images.length;
    const { image1, image2, image3, image4 } = images[currentImagesIndex];
    image1Element.src = image1;
    image2Element.src = image2;
    image3Element.src = image3;
    image4Element.src = image4;
  });



// References
var myIndex = 0;
carousel();
function carousel(){
  var i;
	var x = document.getElementsByClassName("reference_info");
	for (i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
	x[myIndex-1].style.display = "block";
	setTimeout(carousel, 5000);
}


// Toggle Button
const toggleButton = document.querySelector('.burger');
const navbarMenu = document.querySelector('.navlist');

toggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});



// Word File Download
function downloadWordFile() {
  const downloadLink = document.createElement('a');
  downloadLink.href = '/Project3/CV.pdf';
  downloadLink.download = 'CV.pdf';
  downloadLink.click();
}
const button = document.getElementById('downloadFile');
button.addEventListener('click', downloadWordFile);
