window.onload = function () {
  /** On load document */

  var carLists = [{
      title: "NISSAN QASHQAI S 2017",
      cost: 20548000,
      link: 'img/products/auto.png'
    },
    {
      title: "TCe 90 Energy Intens S&S eco2",
      cost: 13000000,
      link: 'img/products/auto1.png'
    },
    {
      title: "Land Rover Range",
      cost: 12490000,
      link: 'img/products/auto2.png'
    },
    {
      title: "Renault Captur",
      cost: 1509000,
      link: 'img/products/auto3.png'
    }
  ];

  Vue.filter('ariary', function (value) {
    var v = parseFloat(value);
    if (isNaN(v)) return value;
    return new Intl.NumberFormat('de-DE', {
      style: "currency",
      currency: 'MGA'
    }).format(v);
  });

  Vue.component('pagination', {
    template: '#template-pagination'
  });

  new Vue({
    el: '#app-publisher',
    data: {
      itemI: _.sortBy(carLists, 'title'),
      itemII: _.sortBy(carLists, 'cost'),
      itemIII: _.sortBy(carLists, 'link'),
    },
    mounted: function () {
      jQuery('.special.cards').find('.image').dimmer({
        on: 'hover'
      });
    }
  });

  new Vue({
    el: "#app-benefit",
    data: {
      benefits: [{
          title: "Voiture légère",
          cost: 2000000,
          link: "img/benefits/01.jpg"
        },
        {
          title: "SPRINTER",
          cost: 10000000,
          link: "img/benefits/02.jpg"
        },
        {
          title: "Camion poids louds",
          cost: 20000000,
          link: "img/benefits/03.jpg"
        }
      ]
    }
  });

moment.locale("fr");
var Lists = [{
  title: "NISSAN QASHQAI S 2017",
  cost: 20548000,
  countPic: 7,
  dateadd: moment().startOf('day').fromNow(),
  link: 'img/products/auto.png'
},
{
  title: "TCe 90 Energy Intens S&S eco2",
  cost: 13000000,
  countPic: 2,
  dateadd: moment().startOf('hour').fromNow(),
  link: 'img/products/auto1.png'
},
{
  title: "Land Rover Range",
  cost: 12490000,
  countPic: 4,
  dateadd: moment().subtract(3, 'days').calendar(),
  link: 'img/products/auto2.png'
},
{
  title: "Renault Captur",
  cost: 1509000,
  countPic: 1,
  dateadd: moment().subtract(6, 'days').calendar(),
  link: 'img/products/auto3.png'
}
];


new Vue({
  el: "#app-lists",
  data: {
    sorting: "",
    adverts: Lists
  },
  mounted: function() {
    jQuery( '.ui.dropdown' ).dropdown();
  },
  methods: {
    sortBy: function() {
      this.adverts = _.sortBy(this.adverts, this.sorting);
    }
  }
});

}