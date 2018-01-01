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
  
  Vue.component('psummary', {
    props: ['product'],
    template: '#template-summary',
    methods: {
      routeLinkOrder: function(product_id) {
        /** redirect in order page  */
        console.log(product_id);
      }
    },
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
  var adverts = [{
    id: 1,
    title: "Mercedes ml 270 cdi",
    cost: 27500000,
    countPic: 7,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit orci porta quam scelerisque " +
    "elementum. Donec orci nisi, pulvinar vitae mollis eu, finibus quis justo. Orci varius natoque penatibus et magnis dis" + 
    "parturient montes, nascetur ridiculus mus. Sed vitae tortor vel diam lobortis dignissim. Maecenas varius ante sit amet "+ 
    "ex ornare congue. Fusce ac lorem hendrerit, egestas tortor quis, venenatis felis. Ut vitae ipsum et nisl tristique tempor.",
    dateadd: moment().startOf('day').fromNow(),
    link: 'img/products/auto.png',
    gallery: [

    ],
    attributes : {
      Mark: "Mercedes",
      Model: "Classe M",
      modelYear: "2002",
      Mileage: "213000",
      Fuel: "Diesel",
      GearBox: "Automatique"
    }
  },
  {
    id: 2,
    title: "TCe 90 Energy Intens S&S eco2",
    cost: 13000000,
    countPic: 2,
    dateadd: moment().startOf('hour').fromNow(),
    link: 'img/products/auto1.png'
  },
  {
    id: 3,
    title: "Land Rover Range",
    cost: 12490000,
    countPic: 4,
    dateadd: moment().subtract(3, 'days').calendar(),
    link: 'img/products/auto2.png'
  },
  {
    id: 4,
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
      adverts
    },
    mounted: function() {
      jQuery( '.ui.dropdown' ).dropdown();
    },
    methods: {
      sortBy: function() {
        this.adverts = _.sortBy(this.adverts, this.sorting);
      },
      routeLinkProduct: function(id) {
        var link = "products.html?_id=";
        window.location.href = link + id;
      }
    }
  });
  var router = ( ! _.isUndefined(window.VueRouter)) ? new VueRouter({
    mode: 'history',
    routes: []
  }) : false;
  
  if (router)
    var vProduct = new Vue({
      router,
      data: {
        product: {},
        access: false
      },
      el: "#app-product",
      beforeCreate: function() {
        jQuery('.segment')
          .dimmer({
            closable: false
          })
          .dimmer('show');
      },
      mounted: function() {
        var prt = this.$route.query._id;
        var product_id = parseInt( prt );
        if (isNaN( product_id )) return;
        this.product = _.findWhere(adverts, {id: product_id});
        window.setTimeout(() => {
          this.access = true;
          jQuery('.segment').dimmer('hide');
        }, 400);
        
      }
    });

  //vProduct.onLoad();

}