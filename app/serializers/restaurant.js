import OpenTableSerializer from './open-table';

export default OpenTableSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.data = [];

    for (let restaurant of payload.restaurants) {
      let id = restaurant.id;
      delete restaurant.id;
      payload.data.push({
        id,
        type: 'restaurant',
        attributes: restaurant,
      });
    }

    return this._super(...arguments);
  },
});
