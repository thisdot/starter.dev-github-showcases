import './styles/quasar.scss';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';

//
import { Dialog, Meta, Notify } from 'quasar';

// To be used on app.use(Quasar, { ... })
export default {
  config: {},
  plugins: [Dialog, Meta, Notify],
};
