import DS from 'ember-data';
const {
  Model,
  attr,
} = DS;

export default Model.extend({
  "name": attr('string'),
  "address": attr('string'),
  "city": attr('string'),
  "state": attr('string'),
  "area": attr('string'),
  "postalCode": attr('string'),
  "country": attr('string'),
  "phone": attr('string'),
  "lat": attr('number'),
  "lng": attr('number'),
  "price": attr('number'),
  "reserveUrl": attr('string'),
  "mobileReserveUrl": attr('string'),
  "imageUrl": attr('string')
});
