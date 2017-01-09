/*Algorithm fro scheduling courses*/

function schedule(data) {
  let output = [];
  let prereq = []
  for (let i in data) {
    output.push(data[i]["course-id"]);
  }
  for (let i in data) {
    let temp = data[i]["pre-req"].split(',');
     prereq = prereq.concat(temp);
  }
  output.push("Pre-requisites");
  output = output.concat(prereq);
  return output;
};

module.exports = schedule;
