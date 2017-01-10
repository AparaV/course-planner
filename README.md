# Course Planner

An application that helps you choose courses in a correct sequence to avoid missing pre-requisite courses. All you need to do is enter the courses you wish to take and the pre-requisites for each of them and let the computer take care of the rest for you.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## How does it work?

The math is very simple. If a lot of courses share a pre-requisite course, then that pre-requisite must be a basic course having a high priority. And if a course does not have a pre-requisite, then it must obviously be one of the first courses to be completed.

## Future

- [ ] Deploy it on Heroku
- [ ] Feature to classify courses based on semesters (Fall, Spring) for a more fluid experience. This would include course credit restrictions (min and max)
- [ ] Release it as a cross platform desktop app

Any new ideas are welcome. So feel free to submit them in the form of an issue.

## Issues

This project is in its early stages. So issues and bugs are bound to be present. If you come accross them, report it have it solved as soon as possible.

## License

This software is released under AGPLv3. For more details, see [LICENSE](LICENSE)
