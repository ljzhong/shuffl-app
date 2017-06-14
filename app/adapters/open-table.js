import Ember from 'ember';
import DS from 'ember-data';

const {
  RESTAdapter,
} = DS;

const {
  computed,
  computed: {
    readOnly,
  },
} = Ember;

export default RESTAdapter.extend({
  apiConfig: computed(function () {
    const applicationConfig = this.container.lookupFactory('config:environment');
    return applicationConfig['open-table'] || {};
  }),
  namespace: readOnly('apiConfig.namespace'),
  host: readOnly('apiConfig.host'),
});
