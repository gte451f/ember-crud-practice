import ENV from 'crud-practice/config/environment';

export default DS.JSONAPIAdapter.extend({
  namespace: ENV.APP.restNameSpace,
  host: ENV.APP.restDestination
});
