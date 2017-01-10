/*Algorithm fro scheduling courses*/

function format(data) {
  let output  = {};
  for (let i in data) {
    //if (data.hasOwnProperty("course-id")){
      let temp = []
      if (typeof(data[i]["pre-req"]) !== "undefined"){
        temp = data[i]["pre-req"].split(', ');
      }
      output[data[i]["course-id"]] = temp;
    //}
  }
  for (let i in output) {
    let temp = output[i];
    //Adding all pre-requisites to main course list
    for (let j in temp) {
      if (!(temp[j] in output)) {
        output[temp[j]] = [];
      }
    }
  }
  return output;
};

function schedule(data) {
  let courses = format(data);
  let counter = {};
  let answer = [];

  //console.log(courses);

  //Creating a dictionary of weights to pre-requisite courses
  for (let i in courses) {
    //If the course has no pre-requisite courses
    if (courses[i].length === 0) {
      //console.log(courses[i], "empty");
      answer.push(i);
      continue;
    }
    for (let j in courses[i]) {
      if (courses[i][j] in counter){
        counter[courses[i][j]] += 1;
      }
      else {
        counter[courses[i][j]] = 1;
      }
    }
  }
  //console.log(counter);

  //The magic happens here!
  while (Object.keys(counter).length !== 0){
    //Finding max
    let max = Object.keys(counter).reduce(function(a, b){ return counter[a] > counter[b] ? a : b })
    //console.log("max", max);
    if (!(isPresent(max, answer))){
      answer.push(max);
    }

    for (let i in courses) {
      if (isPresent(max, courses[i])) {
        let j = courses[i].indexOf(max);
        courses[i].splice(j, 1);
        if (courses[i].length === 0) {
          answer.push(i);
        }
      }
    }

    delete counter[max];
  }
  //console.log(answer);

  return answer;
};

function isPresent(x, array) {
  for (let i in array){
    if (x === array[i]){
      return true;
    }
  }
  return false;
}

module.exports = schedule;
