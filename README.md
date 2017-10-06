## Description
This application allows anyone to search for a Github username, view some information about said user, and view a list of that user's followers. Github limits the number of follower returned in each calls, so there is a button that will load the next page of followers until no more remain.

## Getting started
After you clone the repo, follow the steps below to get the project running on your machine.

If you don't have yarn installed, you can do so with Homebrew or MacPorts.
```
# Homebrew
brew install yarn

# MacPorts
sudo port install yarn
```

Navigate to the root project directory and run ```yarn``` to install all the necessary packages.

Once the package installation is complete you can run ```yarn start``` to run the project, and you can run ```yarn test``` to run the test suite.

That's it!

If you have questions, please feel free to contact me. My information and a link to the hosted application are located towards the end of this README.

## Technical Choices
### Application
- [Create React App](https://github.com/facebookincubator/create-react-app): I chose Create React App because it's a great way to get a simple project off the ground fast. It’s perfect for a project like this or a hackathon. It includes everything you need to getting running quickly without having to spend lots of time upfront on configuration.
- [Styled Components](https://www.styled-components.com/): I chose this library because it's great for creating reusable components. It allows you to write actual CSS, and keep it within each component.
- [Axios](https://github.com/axios/axios): I chose Axios for this project because it provides consistent response and error handling, and it supports the Promise API. I'm used it to create a very thin wrapper around the Github API in this project.
- [Yarn](https://yarnpkg.com/en/): I chose to use Yarn because I prefer it over npm. I like how fast it is, how it can work offline, how it uses a single lock file for determinism, and how its commands are concise.

### Testing
I'm still fairly new to testing and test frameworks in JavaScript. I chose the tools listed below because they are widely used and have good documentation. There could definitely be better test coverage in this project, but I tried to provide some examples of different tests since my time is limited.

- [Jest](https://facebook.github.io/jest/): Jest comes with Create React App out of the box. I'm not using it for snapshot testing because I'm still learning about it, but I used it to make assertions. The assertion syntax is similar to that of Mocha, just with less dots.
- [Enzyme](https://github.com/airbnb/enzyme/): I chose Enzyme because it provides a nice way to shallow render or mount components for testing. It is very full featured, and it has lots of documentation. It works well with Jest and many other testing frameworks.
- [Sinon](http://sinonjs.org/): I chose Sinon as a tool for easy stubbing, mocking, and spying. It works with any JavaScript testing framework.

## Given more time...
I would definitely like to dive deeper into learning more about unit and integration testing tools and best practices. I made a few attempts at mocking API calls (with [nock](https://github.com/node-nock/nock)) and making assertions about state changes, but the state changing asynchronously was giving me inconsistent results. I'll be exploring that more on my own. :)

I think it would be cool to add authentication so that I could add features like following a user or viewing and starring repos without leaving the page. 

I would also like to add some nice animations to the some of the components, like having the followers fade into view as they load.

## Links
- Professional Profile: https://www.linkedin.com/in/adam-loftin
- Hosted application: https://al-github-search.herokuapp.com/
- Other code I'm proud of: Most of that lies in private repos ;)

## Contact Info
Feel free to email me at loftin.adam@gmail.com.
