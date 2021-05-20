 var i = document.body.childNodes.length - 1;
 while(i){
  console.log(i)
  document.body.removeChild(document.body.childNodes[i]);
  i--
 }



  // function removeAllChildNodes(body) {
  //   while (body.firstChild) {
  //       body.removeChild(body.firstChild);
  //   }
  // }
  // const body = document.querySelector('body');
  // removeAllChildNodes(body);
  
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


/*
figure out why we aren't getting any action after clicking the chrome extension 
load more references for each array, maybe there are 5 links for each
create psuedoclasses where maybe images pop up on their respective buttons after we hover over them
css styling
API get request takes us to random websit



1.still need to get the links to open when the event listeners are called
2. to delete all stuff on page:






then we need to append all of our stuff to the blank page
document.getElementbyId('')
document.append



// var i = document.childNodes.length - 1;
// while (i >= 0) {
//   console.log(document.childNodes[i]);
//   document.removeChild(document.childNodes[i--]);
// }

console.log('hello')
function removeAllChildNodes(body) {
  while (body.firstChild) {
      body.removeChild(body.firstChild);
  }
}
const body = document.querySelector('body');
removeAllChildNodes(body);

document.addEventListener('DOMContentLoaded', () => {

  // function removeAllChildNodes(body) {
  //   while (body.firstChild) {
  //       body.removeChild(body.firstChild);
  //   }
  // }
  // const body = document.querySelector('body');
  // removeAllChildNodes(body);
  
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
  audio.autoplay = true;
  
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







//like a want to go to a concert[enter: your favorite band ==> redirects to youtube / theband ]


  /*
  title.innerText = 'Social Calendar';
  document.querySelector('body').appendChild(title);
  // make AJAX call here....
  let request = new XMLHttpRequest();
  request.open('GET', 'http://slack-server-production.us-west-2.elasticbeanstalk.com/calendar/NY/26', true);
  request.send();
  const parsedData = JSON.parse(this.returnedText);
  return parsedData;
  
});

*/


