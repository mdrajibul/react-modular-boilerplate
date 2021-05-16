# **React Application Boilerplate**
## **Introduction**
React application boilerplate is a placeholder application. It will consider as the main application. All relevant modules will be installed here. 
## **Getting Started** 
- Clone <https://github.com/mdrajibul/react-modular-boilerplate.git>
- Checkout branch **master** (if not default)
- Copy or download **application-boilerplate folder** to different folder or repo
- Update package name in package.json file
- Run npm install
- Run npm start
- Navigate to browser 
- After done, commit the code in particular repo or branch.
- Make sure don’t do any changes in original boilerplate code
## **Folder Structure**
- **public:** directory to serve public static files and index.htlm file as entry file
- **src:** directory is for the source code of the module. Production build is compiled from here.
- **setup:** directory is for configuration. Profile base configuration you can do here. File format is yml, so any one can update easily. For every environment there should have separate yml file. File format should be profile.**PROFILE\_ENV**.yml. For example production environment file name should be profile.prod.yml. While start or build project you should pass --profile=prod under scripts section in package.json file
- **\_\_mocks\_\_:** directory to write mock data setup for test cases
- \_**\_tests\_\_:** directory is for all test files. File name should be \*.tests.tsx
## **Coding guideline**
- Please follow all coding guideline of module seed
- In this application only some shared component, theming, templating etc are suggesting to write
- Make a common syntax/architecture for routing where you can call all module base routing there
- You can write integration testing in this application 
- To install module package in application please follow below command
  - From npm package repo. As example: npm run @mdrajibul/react-module-boilerplate
  - From local disk : npm run file: PATH/YOUR\_FILE\*.tar.gz
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
To make production build please follow below guildeline

- Run npm run build to produce production build 
- All production files should be store in build folder
- To verify your build package run npm run serve before deploy
- Use any ci/cd tools or manual to build and deploy your project
### **General Guideline**
- Try to write module code as much as clean and qualityful.
- Do practice to write unit test case for all cases to avoid less bugs and regression 
- To prettify code run npm run prettier 
- To verify code syntax run npm run lint:fix
- Please run below command before commit your code. It will help to achieve our code cleanness goal
  - npm run preCommit
