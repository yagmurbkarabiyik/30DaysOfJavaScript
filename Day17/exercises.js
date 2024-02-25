//Level 1 Exercises
//1
var userInfo = {
    firstName: 'Yagmur',
    lastName: 'Karabıyık',
    age:  22,
    country: 'Turkiye',
    city: 'Ankara'
  };
  
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  var userInfo = JSON.parse(localStorage.getItem('userInfo'));

//Level 2 Exercises
//1
var student = {
    firstName: 'John',
    lastName: 'Doe',
    age:  20,
    skills: ['JavaScript', 'HTML', 'CSS'],
    country: 'USA',
    enrolled: true
  };