## PGA Applicant Test - Leaderboard - Mike Sheridan

This application displays a simple, generic golf leaderboard, letting its users display, add, remove, and edit players.

## Installation

Clone the repo, navigate to the main directory and run:

> npm install

Then type the following to start the project:

> npm start

## Dependencies

* create-react-app - used to bootstrap
* material UI - used for styling UI elements - Form and Table.
* fontawesome - included script reference for delete and edit icon fonts
* 

## Requirements

x Application must be written in React.

The application must support the following main features:

Have a form so users can:
x add
x edit players. 

The form must include the following three fields: 
x firstName:String, 
x lastName:String, 
- score:Integer[0,100]

Display the leaderboard in a tabular format 
x sorted by score, and lastName in ASCENDING order. Therefore, if two players have the same score, the sorting will fall back to lastName
- The names displayed on the leaderboard should be combined into one field when displaying as such: lastName, firstName
x Have the ability to remove players by clicking a Delete button in the leaderboard.

Bugs:
- reranking when editing the score.  Ranks before you are done editing.
- need to focus on First Name after submission

Enhancement:
- Add place ranking next to names

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
