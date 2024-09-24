function startCounter(days, hours, minutes, seconds) {
    var days = days;
    var hours = hours;
    var minutes = minutes;
    var seconds = seconds;
  
    function updateCounter() {
      $('#days').text(days);
      $('#hours').text(hours.toString().padStart(2, '0'));
      $('#minutes').text(minutes.toString().padStart(2, '0'));
      $('#seconds').text(seconds.toString().padStart(2, '0'));
  
      if (seconds > 0) {
        seconds--;
      } else {
        seconds = 59;
        if (minutes > 0) {
          minutes--;
        } else {
          minutes = 59;
          if (hours > 0) {
            hours--;
          } else {
            hours = 23;
            if (days > 0) {
              days--;
            } else {
              clearInterval(counterInterval); // Countdown khatam ho gaya
            }
          }
        }
      }
    }
  
    var counterInterval = setInterval(updateCounter, 1000); // Har second update hoga
  }