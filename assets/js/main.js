const response = document.querySelector('#response');
const btnQuestion = document.querySelector('#question');

btnQuestion.addEventListener('click', function(e){
  e.preventDefault();
  const option1 = document.querySelector('#firstOption').value;
  const option2 = document. querySelector('#secondOption').value;
  const options = [option1, option2];

  // random number from options lenght 
  const allOptions = options.length;
  const randomNumber = Math.floor(Math.random() * allOptions);

  const chosenOption = '<p>' + options[randomNumber] + '</p>' 

  response.innerHTML = chosenOption
  
})
