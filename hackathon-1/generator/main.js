 var i = document.body.childNodes.length - 1;
 while(i){
  document.body.removeChild(document.body.childNodes[i]);
  i--
 }
 
  const sad = document.createElement('button');
  const happy = document.createElement('button');
  const idkYouTellMe = document.createElement('button');
  const motivated = document.createElement('button');
  const annoyed = document.createElement('button');

  sad.setAttribute('id','sad');
  happy.setAttribute('id','happy');
  idkYouTellMe.setAttribute('id','idkYouTellMe');
  motivated.setAttribute('id','motivated');
  annoyed.setAttribute('id','annoyed');

  sad.innerHTML= 'SAD';
  happy.innerHTML = 'HAPPY';
  idkYouTellMe.innerHTML = 'IDK YOU TELL ME!';
  motivated.innerHTML= 'MOTIVATED';
  annoyed.innerHTML = 'ANNOYED';

  document.querySelector('body').appendChild(sad);
  document.querySelector('body').appendChild(happy);
  document.querySelector('body').appendChild(idkYouTellMe);
  document.querySelector('body').appendChild(motivated);
  document.querySelector('body').appendChild(annoyed);
  

let feelingObj = {
  sad: [ 'https://www.youtube.com/watch?v=IO9d2PpP7tQ', 'https://www.forbes.com/real-time-billionaires/#2995e963d788'],
  happy: ['https://www.youtube.com/watch?v=W31EBx0swWk'], //currently a video of vets coming home
  motivated: ['https://www.youtube.com/watch?v=ZXsQAXx_ao0','https://www.youtube.com/watch?v=S-LO6dctBms'],
  idkYouTellMe: ['https://csx.codesmith.io/home'], //currently the CSX homepage
  annoyed: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://thatsthefinger.com/'] //rickroll video and a middle finger gif
}

function getRandomInt(max) {
return Math.floor(Math.random() * max);
}
console.log('1')

document.getElementById('sad').addEventListener('click', function () {
  console.log('hello');
  // starts to rain maybe michael jordan crying face
  let url = feelingObj['sad'][0]
  window.open(url, "_self")
})


document.getElementById('happy').addEventListener('click', function () {
  //you won the lottery pops up ballons
  let url = feelingObj['happy'][0]
  window.open(url, "_self")
})

document.getElementById('idkYouTellMe').addEventListener('click', function () {
  //alert('what do I look like a google chrome extension...')
  let url = feelingObj['idkYouTellMe'][0]
  console.log(url)
  window.open(url, "_self")
})

document.getElementById('motivated').addEventListener('click', function () {
  /*let source = 'images/Suvivor - Eye Of The Tiger.mp3'
  let audio = new Audio();
  audio.src = source;
  audio.autoplay = true;*/
  
  let url = feelingObj['motivated'][getRandomInt(2)]
  window.open(url, "_self")
})

document.getElementById('annoyed').addEventListener('click', function () {
  document.body.style.cursor = 'none';
  let count = 1000;
  while (count) {
    alert('aRe YoU aNnOyEd YeT?!?!?!')
    count--
  };
  document.style.cursor = 'default';
})


/*
figure out why we aren't getting any action after clicking the chrome extension 
load more references for each array, maybe there are 5 links for each
create psuedoclasses where maybe images pop up on their respective buttons after we hover over them
css styling
API get request takes us to random websit



1.still need to get the links to open when the event listeners are called
2. to delete all stuff on page:






document.addEventListener('DOMContentLoaded', () => {}




*/


