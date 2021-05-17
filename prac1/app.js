const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "this is title",
      author: "this is author",
      age: 56,
      x: 0,
      y: 0,
      fruits: [
        {
          name: "Apple",
          price: "$ 5",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcRfIW5tggAic_wBYqqZstYQzyvi407PIDA&usqp=CAU",
          isFav: true,
        },
        {
          name: "Banana",
          price: "$ 10",
          image:
            "https://media.istockphoto.com/photos/banana-picture-id1184345169?k=6&m=1184345169&s=612x612&w=0&h=I159iiNId_-XwGsoZlpi9WyeACv8kpg-EmyB5X2oo30=",
          isFav: false,
        },
        {
          name: "Orange",
          price: "$ 20",
          image:
            "https://steamuserimages-a.akamaihd.net/ugc/178288930008098759/267EF3DFF0883EBABAEDFF88E2ADF3E44F31FC53/",
          isFav: true,
        },
      ],
      url: "https://www.google.com",
    };
  },
  methods: {
    changeTitle(titleName) {
      this.title = titleName;
    },
    toggleHideBookName() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e) {
      console.log(e, e.type, e.target);
    },
    mouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFruitFav(fruit) {
      fruit.isFav = !fruit.isFav;
    },
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((fruit) => fruit.isFav);
    },
  },
});

app.mount("#app");
