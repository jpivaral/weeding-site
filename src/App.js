import * as React from "react";
import { Admin, Resource } from 'react-admin';
import myDataProvider from './components/restProvider';
import { FamilyList, FamilyEdit, FamilyCreate } from "./components/FamilyHandler";

const App = () => (
      <Admin dataProvider={myDataProvider}>
          <Resource name="families" list={FamilyList} edit={FamilyEdit} create={FamilyCreate} />
      </Admin>
  );

export default App;