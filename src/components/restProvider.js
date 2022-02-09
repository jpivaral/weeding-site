import jsonServerProvider from 'ra-data-json-server';
import { FAMILY_API } from '../configuration/servers';
import axios from 'axios';

const dataProvider = jsonServerProvider(FAMILY_API);

const myDataProvider = {
    ...dataProvider,
    getList:  (resource, params) => {
        const url = `${FAMILY_API}/${resource}`;
        return axios.get(url)
        .then(res => {
          const json = res.data;
          return {
            data: json,
            total: Object.keys(json).length
            };

        })
    }
}

export default myDataProvider;

