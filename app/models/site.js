export default DS.Model.extend({
  title: DS.attr('string'),
  label: DS.attr('string'),
  identifier: DS.attr('string'),
  host: DS.attr('string'),
  defaultLocale: DS.attr(),
  availableLocales: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  hasMany: DS.hasMany('page'),

  randomAvatar: function() {
    var avatars = [
      'avatar_1.jpg',
      'avatar_2.jpg',
      'avatar_3.jpg',
      'avatar_4.jpg',
      'avatar_5.jpg'
    ];
    return '/assets/images/avatars/' + avatars[Math.floor(Math.random() * avatars.length)];
  }.property()

});