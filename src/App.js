import './App.css';
//ListGuesser react-admin
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { FeedbackList, FeedbackCreate, FeedbackEdit } from './feedbacks';
import { UserCreate, UserEdit, UserList } from './users';
window.baseURL = 'http://localhost/meusprodutosonline';
const dataProvider = jsonServerProvider(window.baseURL);
//const dataProvider = jsonServerProvider('http://nuzap.com.br');
//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
function App() {
  return (
    <Admin dataProvider={dataProvider}>
      {/* <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} /> */}

      {<Resource name='feedbacks' list={FeedbackList} create={FeedbackCreate} edit={FeedbackEdit} />}
    </Admin>
  );
}

export default App;
