const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const mapFrame = document.getElementById('map-frame');

const links = [
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.5985295781!2d69.11456059007827!3d41.28247993377976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sil!4v1679256380676!5m2!1sen!2sil',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108513.71173388416!2d35.092958351354596!3d31.796292064990045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2sJerusalem!5e0!3m2!1sen!2sil!4v1679256631478!5m2!1sen!2sil" width="600',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54084.94909067659!2d34.75604647579837!3d32.08792483332008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1679256675565!5m2!1sen!2sil',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187673.30869709182!2d23.183862081212208!3d42.695346802282366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofia%2C%20Bulgaria!5e0!3m2!1sen!2sil!4v1679301857553!5m2!1sen!2sil'
]
let index = 0;
mapFrame.src = links[index];
nextBtn.addEventListener('click', e => {
  index++;
  if(index === links.length){
  	index = 0;
  }
  mapFrame.src = links[index];
});

prevBtn.addEventListener('click', e => {
  index--;
  if (index < 0) {
    index = links.length - 1;
  }
  mapFrame.src = links[index];
});