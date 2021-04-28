const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const startBtn = document.getElementById('startBtn');

const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);

startBtn.addEventListener('click', () => {
  webcam.start()
    .then(result => {
      console.log("webcam started");
    })
    .catch(err => {
      console.log(err);
    });

  document.getElementById('startSnapshot').classList.remove('hidden');
  document.getElementById('startSnapshot').addEventListener('click', () => {
    const picture = webcam.snap();
    document.querySelector('#download-photo').href = picture;
  });
});