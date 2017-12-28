
window.onload = function() {
  /** On load document */
  var appPublisher = new Vue({
    el: '#app-publisher',
    data: {
      itemI: [
        { title: "NISSAN QASHQAI S 2017", cost: 20548, link: 'img/products/auto.png' },
        { title: "TCe 90 Energy Intens S&S eco2", cost: 13000, link: 'img/products/auto1.png' },
        { title: "Land Rover Range", cost: 12490, link: 'img/products/auto2.png' },
        { title: "Renault Captur", cost: 15090, link: 'img/products/auto3.png' }
      ],
      itemII: [
        { title: "TCe 90 Energy Intens S&S eco2", cost: 13000, link: 'img/products/auto1.png' },
        { title: "NISSAN QASHQAI S 2017", cost: 20548, link: 'img/products/auto.png' },
        { title: "Renault Captur", cost: 15090, link: 'img/products/auto3.png' },
        { title: "Land Rover Range", cost: 12490, link: 'img/products/auto2.png' }
      ],
      itemIII: [
        { title: "Renault Captur", cost: 15090, link: 'img/products/auto3.png' },
        { title: "NISSAN QASHQAI S 2017", cost: 20548, link: 'img/products/auto.png' },
        { title: "Land Rover Range", cost: 12490, link: 'img/products/auto2.png' }
      ],
    },
    mounted: function() {
      jQuery('.special.cards').find('.image').dimmer({ on: 'hover' });
    }
  });

  var appBenefit = new Vue({
    el: "#app-benefit",
    data: {
      benefits: [
        { title: "Voiture légère", cost: 2000000, link: "img/benefits/01.jpg" },
        { title: "SPRINTER", cost: 10000000, link: "img/benefits/02.jpg" },
        { title: "Camion poids louds", cost: 20000000, link: "img/benefits/03.jpg" }
      ]
    }
  })

}
