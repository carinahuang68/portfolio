let enter = document.getElementById('enter');
let month = document.getElementById('monthInput');
let day = document.getElementById('dayInput');
let out = document.getElementById('output');

const weekdays = [42,43,44,45,48,49,410,411,412,415,416,417,418,419,422,423,424,425,426,429,430,51,52,53,56,57,58,59,510,513,514,515,516,521,522,523,524,527,528,529,530,531,63,64,65,66,67,610,611,612,613,614,617,618,619,620,621,624];
const Saturdays = [46,413,420,427,54,511,518,525,61,68,615,622];
const Sundays = [47,414,421,428,55,512,519,526,62,69,616,623];
const summerBreak = [625,626,627,628,629,630];
const apExams = [56,57,58,59,510,513,514,515,516];

function getRotation(date){
  let i = weekdays.indexOf(date);
  if(i >= 0){
    let rotation = (i%6 == 0 || i%6 == 1)? 3124 : (i%6 == 2 || i%6 == 3)? 1234: 2314;
    let day12 = (i%2 == 0)? 1: 2;
    let message = `Today is <strong>Day ${day12}</strong> and the rotation is <strong><u>${rotation}</u></strong>.`;
    if (date == 425 || date == 530){
      return message + "<br>(Collab Day)"
    } else if (apExams.indexOf(date) >= 0){
      return message + "<br>(Ap Exam)"
    } else if (date == 624){
      return message + "<br>(Last day of formal classes)"
    } else if(date == 621){
      return message + "<br>(National Indigenous Peoples Day)"
    } else if(date == 422){
      return message + "<br><br><font color=\"green\">Earth Day Event: <br>The Garden Gurus Club will be selling things during lunch at the froyer!</font>"  
    } else if(date == 531){
      return message + "<br>(Grad Carnival\uD83C\uDF89!)"
    }else {
      return message;
    }
  } else if (Saturdays.indexOf(date) >= 0){
    if(date == 615){
      return "Grad Commencement \uD83C\uDF93"
    } else {
       return "Today is a Saturday. Enjoy your weekend!";
    }
  } else if (Sundays.indexOf(date) >= 0){
    return "Today is a Sunday. Enjoy your weekend!";
  } else if (summerBreak.indexOf(date) >= 0){
    if (date == 627){
      return "Final report cards are posted today!"
    } else {
      return "No more school. Enjoy your summer break!";
    }
  } else if (date == 41){
    return "Today is the last day of Spring Break.<br>Happy Easter Monday! <br><br> What did the Easter bunny say to the April Fools' prankster?<br> \"You may be good at fooling others, but I'm egg-ceptional at hiding Easter Eggs!\" <br><br>I hope you enjoy this egg-cellent joke! <br>Happy April Fools Day! ";
  } else if (date == 517){
    return "Today is a Pro-D Day, but poor AP physics students have to take their AP exams :(";
  } else if (date == 520){
    return "Today is Victoria Day! Hope you enjoy the long weekend!";
  } else{
    return "<font color=\"red\">Please enter a valid date.</font>";
  }
}

function generateText(){
  let date = parseInt(month.value + day.value);
  out.innerHTML = getRotation(date);
}
enter.addEventListener('click',generateText);