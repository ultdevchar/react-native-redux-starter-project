# React Native Redux - Starter Project
This is a starter project for react native with redux state management.\
Sometimes state management can be difficult in the react native projects.\
Redux is used to overcome this difficulty. Also this project helps to you understanding redux environments and start a new project by giving sample scenario.

## Project Purpose & Structure
Main purpose of this project is exemplify usage of basic components (button, switch, text, view etc.), building navigation and state management with redux.\
Scenario of screen access created as a sample problem. In this scenario, until users enable screen access for screen one, two or four, can not navigate to screen. This pipeline managed by redux components(reducer, actions, useSelector, useDispatch etc.)\
\
Project folder and file structure are shown as below.

\
├─ **components**\
├&nbsp;&nbsp;&nbsp;&nbsp;├─ *CustomButton.js* &emsp;&emsp;&emsp;&emsp;&nbsp; # User defined button component which is responsible for navigation and control access to screens... \
├&nbsp;&nbsp;&nbsp;&nbsp;├─ *CustomSwitch.js* &emsp;&emsp;&emsp;&emsp;&nbsp; # User defined switch component which is responsible for changing operation access screens... \
├&nbsp;&nbsp;&nbsp;&nbsp;├─ *Divider.js* &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; # User defined divider UI component... \
├&nbsp;&nbsp;&nbsp;&nbsp;└─ *Title.js* &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; # User defined Header UI component... \
├\
├─ **components**\
├  &nbsp;&nbsp;&nbsp;&nbsp;└─ *Constants.js* &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; # Keep screen navigation title values... \
├\
├─ **redux**\
├&nbsp;&nbsp;&nbsp;&nbsp;└─ **actions**\
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ *ActionScreenAccess.js*  &emsp;&emsp;&emsp; # Keep actions of screen access adding and removing situation... \
├&nbsp;&nbsp;&nbsp;&nbsp;└─ **reducers**\
├&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ *ReducerScreenAccess.js* &emsp;&emsp;&nbsp; # Keep reducer to handle action such as adding screen access & removing screen access.. \
├\
├─ **screens**\
├&nbsp;&nbsp;&nbsp;&nbsp;├─ *ScreenHome.js* &emsp;&emsp;&emsp; # This is initial screen which has components, store, navigation etc. ... \
├&nbsp;&nbsp;&nbsp;&nbsp;├─ *ScreenOne.js* &emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; # This is sample empty screen... \
├&nbsp;&nbsp;&nbsp;&nbsp;├─ *ScreenTwo.js* &emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; # This is sample empty screen... \
├&nbsp;&nbsp;&nbsp;&nbsp;├─ *ScreenThree.js* &emsp;&emsp;&emsp; # This is sample empty screen... \
├\
├ &nbsp; *App.js*\
└─ *index.js*

## Installation & Starting Project

To install libraries:
``` 
cd <project_folder>
npm install
```

To start project:
```
npx react-native start
npx react-native run-android
```
or
```
npx react-native run-ios
```

Please read react native documentation for more information about setup environment and starting project.\
https://reactnative.dev/docs/environment-setup

## Sample Screenshots

![Screenshot 1](/screenshots/screenshot_1.PNG)<br/>
<br/>
![Screenshot 2](/screenshots/screenshot_2.PNG)

