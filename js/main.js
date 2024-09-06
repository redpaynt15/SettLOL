$(document).ready(function() {
    $('#audiotema').hide();
});
$('#icon').click(function() {
    
    $('#icon').hide();
    $('#audiotema').show();
});
document.addEventListener('DOMContentLoaded', function() {

    const image = document.getElementById('settImage');
    const audio = document.getElementById('settAudio');
    

    image.addEventListener('click', function() {
      audio.play();
    });
  });