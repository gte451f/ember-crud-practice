import ActiveModelAdapter from 'active-model-adapter';
import ENV from 'crud-practice/config/environment';

export default ActiveModelAdapter.extend({
  namespace: ENV.APP.restNameSpace,
  host: ENV.APP.restDestination
});
