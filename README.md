# Course Planner

An application that helps you choose courses in a correct sequence to avoid missing pre-requisite courses. All you need to do is enter the courses you wish to take and the pre-requisites for each of them and let the computer take care of the rest for you.

The project is currently hosted on Heroku. You can try it out at [Course Planner](http://plancourses.herokuapp.com/).

This project was bootstrapped with [`create-react-app`](https://github.com/facebookincubator/create-react-app).

## Run locally

```
$ git clone https://github.com/AparaV/course-planner.git
$ cd course-planner
$ npm install
$ npm start
```

## How does it work?

The math is very simple. If a lot of courses share a pre-requisite course, then that pre-requisite must be a basic course having a high priority. And if a course does not have a pre-requisite, then it must obviously be one of the first courses to be completed.

## Future

- [ ] Adding co-requisites for a more precise (and logical) sequence
- [ ] Feature to classify courses based on semesters (Fall, Spring) for a more fluid experience. This would include course credit restrictions (min and max)
- [ ] Release it as a cross platform desktop app

All new ideas are welcome. So feel free to submit them in the form of an issue.

## Issues

This project is still in its early stages. So issues and bugs are bound to be present. If you come across them, report it  to have it solved as soon as possible.

- [ ] In some cases, the order might comply with the pre-requisites. But, a few courses need to swapped for a more sound sequence. This issue will be solved by adding an option for co-requisite (which is an upcoming feature).

## License

This software is released under AGPLv3. For more details, see [LICENSE](LICENSE)
