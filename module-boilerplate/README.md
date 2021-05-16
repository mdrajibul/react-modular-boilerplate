# **React Module Boilerplate**
## **Introduction**
React module boilerplate is a basic modular structure of a react module. The main objective to write an application in a modular way and make it maintainable, separate of common responsibilities, extensible and reusable. This module can run as an individual and plug into another application or module as well.
## **Getting Started** 
- Clone <https://github.com/mdrajibul/react-modular-boilerplate.git>
- Checkout branch **master** (if not default)
- Copy or download **module-boilerplate** folder to different folder or repo
- Update package name in package.json file
- Run npm install
- Run npm start
- Navigate to browser 
- After done, commit the code in particular repo or branch.
- Make sure don’t do any changes in original boilerplate code
## **Folder Structure**
- **dev:** directory is for local development. Webpack dev server is serving from here.
- **src:** directory is for the source code of the module. Production build is compiled from here.
- **setup:** directory is for configuration. Profile base configuration you can do here. File format is yml, so any one can update easily. For every environment there should have separate yml file. File format should be profile.**PROFILE\_ENV**.yml. For example production environment file name should be profile.prod.yml. While start or build project you should pass --profile=prod under scripts section in package.json file
- **webpack**: directory for environment specific webpack config. Please don't change here unless you have new plugin or module to add
- **\_\_mocks\_\_:** directory to write mock data setup for test cases
- \_**\_tests\_\_:** directory is for all test files. File name should be \*.tests.tsx
## **Coding guideline**
### **Components**
Components are the building blocks of any React app and a typical React app will have many of these. Read below guideline to write component

- Place component file under src/components folder
- Create a new folder base on feature name and create components file in that folder
- If your folder name and main component is same then name the file as index.tsx. other component name should be camel case with Component suffix. Example: homeComponent.tsx
- Request to write component name as PascalCase and Component as suffix. Example: HomeComponent
- File extension should be .tsx as we are using jsx syntax here
- Its highly recommended to write functional component . Use hooks where necessary. <https://reactjs.org/docs/hooks-intro.html>
- Your component should be small, self explanatory and single responsible. 
- Don’t write multiple component in same file. Its violet the single responsibility principle. 
- Please separate your business logic under src/service folder and call in components
- Write custom hooks for share functionalities and behaviors. Write your custom hooks under src/hooks folder. <https://reactjs.org/docs/hooks-custom.html>
- If hooks not solve common functionality sharing concept then write HOC component. <https://reactjs.org/docs/higher-order-components.html>
- Don’t write any css or style related code in component file. User separate file for styled component to make it clean and reusable 
### **Services**
To handle your business logic and asynchronous functionalities, I am suggesting to use service layer. To write a service keep in mind the below guidelines

- Place service file under src/services folder to maintain readability and consistency. 
- Create a new folder base on feature name if more files needed for a feature development. Now, create service file in that or root folder
- File name should be camelCase with Service suffix. Example: testService.ts
- All kind of asynchronous functionality like api call, handle business logic after receive response should request to do in this layer
- Don’t do any state management related task here.
- Each function of class should be single responsible. That means just get input (if have), fetch data, do few business logic and finally return process data.
- Make separate small function if your logic grow up. 
### **Utils**
To handle your common utility functionalities, I am suggesting to use utils layer. To write a util keep in mind the below guidelines

- Place service file under src/utils folder to maintain readability and consistency. 
- Create a new folder base on common functionalities if more files needed. Now, create util file in that or root folder
- File name should be camelCase with Util suffix. Example: testUtil.ts
- All kind of common functionality like routing, formatter, text, cache etc. should be written here
- Don’t do any state management, components related task here.
- Each function of class should be single responsible. That means only single outcome should be there
### **Typings**
As we are using typescript language, so all kind of abstraction, typing should be written here. Make a separate file for common interfaces. Multiple interfaces in single file should be allowed. 
### **Hooks**
To write custom hooks we should use hooks folder. To write a hooks keep in mind the below guidelines

- Place hook file under src/hooks folder to maintain readability and consistency. 
- Create a new folder base on common functionalities if more files needed. Now, create hook file in that or root folder
- File name should be camelCase with Hook suffix. Example: testHook.tsx
- File extension should be .tsx as we might use jsx syntax here 
- Why we will use custom hooks
  - The main reason for which you should be using Custom hooks is to maintain the concept of DRY(Don’t Repeat Yourself) in your React apps.
  - Custom hooks provide a simple alternative to Higher Order Component and Render props.
  - Custom hook also provides fewer keystrokes.
- Hooks cannot be nested inside loops, conditions or other nested functions. It should be called on top-level
- Hooks can be called only in Functional component. We can’t call hooks from regular JavaScript functions.
- For more info please visit [Building Your Own Hooks – React (reactjs.org)](https://reactjs.org/docs/hooks-custom.html)
### **Contexts**
To share data between parent-child or vice versa, we should use contexts. Instead to more props in component tree we should use context. To write a contexts keep in mind the below guidelines

- Place context file under src/contexts folder to maintain readability and consistency. 
- Create a new folder base on common functionalities if more files needed. Now, create context file in that or root folder
- File name should be camelCase with Context suffix. Example: testContext.ts
- Low-frequency updates like locale, theme changes, user authentication, etc. the React Context is perfectly fine to use.
- For more complex state which has high-frequency updates, the React Context won't be a good solution. Use redux instead that if its really need.
- For more info please visit [Context – React (reactjs.org)](https://reactjs.org/docs/context.html)
### **Exceptions**
To write custom exception or error boundaries, we should use exceptions folder. Suggesting to write some error boundaries class to wrap up error boundaries to log or report error when something wrong or troubleshoot purpose.
### **Assets**
To keep all assets files like css, image, font use this folder. 
## **constants.ts** 
Module specific global constant should be declare here.
### **config.ts**
All kind of external configuration or profile related configs we will declare here
### **router.ts**
Module specific routing table declaration will be specify here. To use separate file is helpful when we call module specific routing form main application. So, when any routing come we should declare here.
### **routes.ts**
This file is used to declare constant of routes. Its will be helpful to maintain and while do refactor. Please use getPreparedRoute function when you redirect or navigate to route. 
### **Styled component** 
For styling pages or component suggest to use Styled Component as primary styling library. Please read below guideline 

- Utilizing power of template literate and css, style component is great innovation for react development. We can use style in JavaScript file and call as tag base structure in render function 
- Most common syntax like composition, mixin etc we can achieve here as well but different way
- For global style please use src/styled folder to store
- For common style, you can use style.css under src/assets/css. Use css3 variable where necessary. 
- For component specific style please write separate file and place same folder of component. The file name should be style.ts if only one file but if more files then give meaningful name 
- Try to avoid scss, stylus or less unless if actually needed. For example if you write new application or module, try to use style-component but for existing project maintainable work or don't want to repeat yourself again to write new style then only use scss/less. Make your you have to add sass webpack loader in that case. Please visit [sass-loader | webpack](https://webpack.js.org/loaders/sass-loader/)
- For more info and syntax please visit [styled-components (styled-components.com)](https://styled-components.com/)
### **Testing** 
Write unit test cases for each component, utils service separately. Please follow below guidelines

- Jest and react testing libraries are the base testing library we used in our module and application
- Please visit [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for more information and syntax 
- All unit testing files must write under \_\_test\_\_ folder. Please maintain folder structure. 
- File name should be must as NAME.test.tsx
- Do practice to write describe and test block with proper description. 
- Try to write test cases for all possible positive and negative test case
- Try to mock all async functionalities. Please visit [Mock Functions · Jest (jestjs.io)](https://jestjs.io/docs/en/mock-functions.html)
- For all external function write mock function and call with proper return values 
- To run unit test cases use below command
  - npm run test
  - npm run test:coverage - for test coverage 
  - npm run test:watch - to watch test cases
### **Production**
To make reusable library or module please follow below guideline

- Run npm run build to produce production build 
- All production files should be store in dist folder
- For local publish please run **npm pack.** It will product \*.tar.gz file. File name should be base on name of package which is declared in package.json file. After done packaging please copy that file in your main application/ other module/ or suitable place. Then run below command to install in your application or any other module 
  - npm run file: PATH/YOUR\_FILE\*.tar.gz
- To publish nodeJs or private repository please follow their guideline and run npm publish command 
- If you want to publish in git then follow below process
  - Run npm run build and npm pack
  - Create a new branch in your repo
  - Upload pack file and extract or upload extracted file contents directly
  - To install module package in application please follow below command
    - From npm package repo. As example: npm run @mdrajibul/react-module-boilerplate
    - From local disk : npm run file: PATH/YOUR\_FILE\*.tar.gz
### **General Guideline**
- Try to write module code as much as clean and qualityful.
- Please add index.ts file in all folder to avoid sub-module import. Export all subordinate files in that file. As a summary there should be a main index.ts file in root folder which will be call from main application/module
- Typescript and webpack path/alias is used. So try to avoid relative path while import. Use absolute path with alias. Please look any component file and see the import syntax. 
- Do practice to write unit test case for all cases to avoid less bugs and regression 
- To prettify code run npm run prettier 
- To verify code syntax run npm run lint:fix
- Please run below command before commit your code. It will help to achieve our code cleanness goal
  - npm run preCommit
