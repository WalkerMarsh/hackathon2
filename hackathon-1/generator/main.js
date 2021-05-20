 var i = document.body.childNodes.length - 1;
 while(i != -1){
  document.body.removeChild(document.body.childNodes[i]);
  i--
 }
 
 document.addEventListener('DOMContentLoaded', () => {
  console.log('hello')
  const sad = document.createElement('button');
  const happy = document.createElement('button');
  const idkYouTellMe = document.createElement('button');
  const motivated = document.createElement('button');
  const annoyed = document.createElement('button');

  sad.setAttribute('id','sad');
  happy.setAttribute('id','happy');
  idkYouTellMe.setAttribute('id','IdkYouTellMe');
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


document.getElementById('sad').addEventListener('click', function () {
  console.log('hello');
  // starts to rain maybe michael jordan crying face
  let url = feelingObj['sad'][getRandomInt()]
  document.getElementById('sad').setAttribute('href', url)
  window.open(url, "_self")
})

document.getElementById('happy').addEventListener('click', function () {
  //you won the lottery pops up ballons
  let url = feelingObj['happy'][getRandomInt()]
  window.open(url, "_self")
})

document.getElementById('IdkYouTellMe').addEventListener('click', function () {
  alert('what do I look like a google chrome extension...')
  let url = feelingObj['IdkYouTellMe'][getRandomInt()]
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
});


