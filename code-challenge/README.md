### Tasks
For this task please either use a combination of local state with useState() and redux or just redux. Use useAppDispatch and useAppSelector from src/store/hooks.ts for better type definition instead of import { useDispatch, useSelector } from 'react-redux';
You can find the mockserver responses here src/mock-server.js 
!!!!!!!!!IMPORTANT THIS IS A MOCK SERVER, THEREFOR YOU HAVE TO USE AXIOS (https://www.npmjs.com/package/axios - it's already in the package.json), THE REGULAR FETCH-API WON'T WORK AS WELL AS CALLING THE ENDPOINT IN THE BROWSER DOES NOT WORK AS WELL!!!!! 

1. Fetch the readiness endpoint v1 (http://localhost:3000/api/v1/readiness). While waiting for the response, display the loading spinner (src/components/Loading/Loading.tsx). The response will fail as you can observe in src/mock-server.js starting line 52. Display a small error message to the user.
2. Replace the readiness endpoint V1 with V2 (http://localhost:3000/api/v2/readiness). The request will go through. After that or even better as a parallel request you can then fetch all jokes from the jokes endpoint and resolve the jokes once the readiness check is completed. Save the jokes in a local state or redux state.
3. Display all jokes except of type barista - create a small UI-box for the fields ID, type, question & answer
4. Enable the user to click on one of the jokes in the "jokes"-column (src/features/Jokebox/Jokebox.tsx) in order to move it to the "favourites jokes"-column (src/features/Favourites/Favourites.tsx). 
It should not be displayed in the "jokes"-column anymore. Use Redux! => src/features/Jokebox/Jokebox.slice.ts && src/store
5. Enable the user to click on one of the jokes in the "favourites"-column in order to move it back to the "jokes"-column. It should not be displayed in the "favourite jokes"-column anymore. Use Redux!

## Pre requirements:
- Install node 14 via nvm for e.g.

## How to run the project:
- `npm install`
- `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Components/Features available:
- App
- Loading
- Jokebox
- Favourites

## CSS
 - Vanilla CSS e.g. './file.css'
 - CSS module e.g. './file.module.css'

## API endpoints:
- Get all jokes: (HTTP-GET) http://localhost:3000/api/v1/jokes
- Get readiness status (v1): (HTTP-GET) http://localhost:3000/api/v1/readiness
- Get readiness status (v2): (HTTP-GET) http://localhost:3000/api/v2/readiness

~~~
IMPORTANT NOTE:

We are using a frontend mock server to return the API content. Thus, to check the content/status of ongoing requests open the browser's console instead of the network tab. The content is returned in JSON format and there is no need to send specific headers within the request.
~~~

## Models available under the types folder
### Joke's model:
```
{
  id: string;
  type: string; // 'programming' or 'barista'
  question: string;
  answer: string;
};
```

### Readiness's model:
```
{
  ready: boolean;
}
```