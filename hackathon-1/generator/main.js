

document.getElementsByIdName('sad').addEventListener('click', function () {
  //starts to rain maybe michael jordan crying face
  let url = feelingObj['sad'][Math.floor[Math.random() * 2]]

  window.open(url, "_self")
})

document.getElementsByIdName('happy').addEventListener('click', function () {
  //you won the lottery pops up ballons
  let url = feelingObj['happy'][Math.round(Math.random())]
  window.open(url, "_self")
})

document.getElementsByIdName('IdkYouTellMe').addEventListener('click', function () {
  alert('what do I look like a google chrome extension...')
  let url = feelingObj['IdkYouTellMe'][Math.round(Math.random())]
  window.open(url, "_self")
})

document.getElementsByIdName('motivated').addEventListener('click', function () {
  let source = 'images/Suvivor - Eye Of The Tiger.mp3'
  let audio = new Audio();
  audio.src = source;
  audio.autoplay = true;
  let url = feelingObj['motivated'][Math.round(Math.random())]
  window.open(url, "_self")
})

document.getElementsByIdName('annoyed').addEventListener('click', function () {
  document.style.cursor = 'none';
  let count = 3;
  while (count) {
    alert('aRe YoU aNnOyEd YeT?!?!?!')
    count--
  };
  document.style.cursor = 'default';

  let url = feelingObj['annoyed'][Math.round[Math.random() * 2];
  window.open(url, "_self")
})


let feelingObj = {
  'sad': ['https://www.youtube.com/watch?v=IO9d2PpP7tQ', 'https://www.forbes.com/real-time-billionaires/#2995e963d788'],//currently the ASPCA video
  'happy': ['https://www.youtube.com/watch?v=W31EBx0swWk'], //currently a video of vets coming home
  'motivated': ['https://www.youtube.com/watch?v=ZXsQAXx_ao0'], //currently the shialebouf video
  'IdkYouTellMe': ['https://csx.codesmith.io/home'], //currently the CSX homepage
  'annoyed': ['https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://thatsthefinger.com/'], //rickroll video and a middle finger gif
}






//like a want to go to a concert[enter: your favorite band ==> redirects to youtube / theband ]


