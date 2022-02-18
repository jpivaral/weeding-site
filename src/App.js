import * as React from "react";
import { Admin, Resource } from 'react-admin';
import myDataProvider from './components/restProvider';
import { FamilyList, FamilyEdit, FamilyCreate } from "./components/FamilyHandler";
import { EventList, EventEdit, EventCreate } from "./components/EventHandler";

const App = () => (
      <Admin title={"Weeding system"} dataProvider={myDataProvider}>
          <Resource name="families" list={FamilyList} edit={FamilyEdit} create={FamilyCreate} />
          <Resource name="events" list={EventList} edit={EventEdit} create={EventCreate} />
      </Admin>
  );

export default App;