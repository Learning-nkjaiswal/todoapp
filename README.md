
# todoapp

RN project

## backend
    Code: https://github.com/Learning-nkjaiswal/todo/
    Api Doc: https://documenter.getpostman.com/view/2970023/UVC5Enhj
    End point: http://todo-app-backend.centralindia.cloudapp.azure.com


## install these packages
    npm install @react-navigation/native --save
    npm install react-native-screens 
    npm install react-native-safe-area-context 
    npm install @react-navigation/drawer --save
    npm install @react-navigation/stack --save
    npm install --save @react-native-async-storage/async-storage
    npm install react-native-material-dropdown-v2
    
## Create Directory and Files Needed
    mkdir src
    cd src
    mkdir client
    mkdir components
    mkdir screens
    touch ./client/todo-client.js
    touch ./components/Task.js
    touch ./screens/HomeScreen.js
    touch ./screens/LoginScreen.js
    touch ./screens/TaskDetails.js

### then run "react-native run-android"

### If fail follow these steps:
    cd android
    ./gradlew clean

### build APK
    cd android
    ./gradlew app:assembleRelease
