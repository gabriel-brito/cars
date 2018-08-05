# CVC - Front-End Test

Test to join CVC development team =)
You can see the test result [here](https://mr-bebop.github.io/cvc/)!

## Browser Support

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | 
--- | --- | --- | --- |
42+ ✔ | 53+ ✔ | 29+ ✔ | 10.1+ ✔ |

## I've been using patterns to make a clean code structure:

* I used my [boilerplate](https://github.com/gabriel-brito/bebop-boilerplate) to make this project.

* An adaptation of BEM (Block, Element, Modifier)

* Stylus Pre-Processor 

* Gulp with Babel

* Babel (to add ECMAScript6 support to older browsers :D)

* A simple TDD with Chai and Mocha to test Fetch Method.

## What's on this project:

* HTML

* CSS

* Vanilla JavaScript

## Dependencies
This project depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the provided API. For environments that don't support fetch, I provided a  [polyfill](https://github.com/bitinn/node-fetch) to Node.

## How it works
##### It's simple! Follow the instructions bellow:
First of all, you need to clone this repo with:

```sh
$ git clone https://github.com/gabriel-brito/cars.git
```
You need to have gulp and gulp-cli on your machine, so:

```
npm install gulp gulp-cli -g
```

And then you install a local server and the dependencies inside the project with:

```
cd cars

npm i
```

Then you just need to run:

```
npm run gulp
```

Now you can access by your browser with your own location!

Ex: localhost:8080

Simple, not?

## Notes

1° - I had problem with GitHub Pages on my GitHub profile, so I did a new user to host the test. -> [https://mr-bebop.github.io/cvc/](https://mr-bebop.github.io/cvc/)

2° - I don't have an photoshop editor. So I did everything by eye. If some spacements or colors are 'different', you can point this =)

3° Every file is deeply equal in both repositories: [Cars](https://github.com/gabriel-brito/cars) and [mr-bebop.github.io](https://github.com/mr-bebop/mr-bebop.github.io)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.