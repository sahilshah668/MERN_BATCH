

////





  // const a = {
      //     greet:"hello",
      //     name:'sahil'
      // }

      // function greet(name) {
      //     a.greet = "hola"
      //   //   console.log(a.greet + name)
      //     let btn = "btn"
      //     console.log(`${a.greet} ${name},how are you`)
      // }

      // greet('sahil') 
      // console.log(a)
      // console.log(b)
      // console.log(c)
      // var a = "hello"
      // const b = "hola"
      // let c = "wellness"

      //high order array methods
      //1. forEach

      // let a = [1, 2, 3, 4, 5];
      // let b = a.forEach((num, i) => console.log(num));
      //   let b = a.map(function(num, i) {
      //     return num*2
      //   });

      // console.log(b);
      // const arr = [[
      //   {
      //     id:1,
      //     name:'sahil',
      //     age:22
      //   },
      //   {
      //     id:2,
      //     name:'manish',
      //     age:45
      //   },
      //   {
      //     id:3,
      //     name:'rahul',
      //     age:19
      //   }
      // ]]

      let fil = arr.filter(function(val) {
        return val.age > 20 && val.id === 2
        // console.log(val)
      })
      // console.log(fil)
      //freetutorials.com
      //  let finder = arr.find(function(val) {
      //     return val.age === 45
      //  })
      //  console.log(finder)

      // const arr = [10, 30, 90];
      // const colors = ["red", "black", "yellow"];
      // var sum = 0;
      // for(var i = 0 ;i.length > arr;i++) {
      //   sum += arr
      // // }
      // let red = colors.reduce((colors, val) => {
      //   return colors + val
      // }, ['green']);
      // console.log(red);

      //Destructuring
      // const arr =
      // let greet = arr[0]
      // console.log(greet)

      // const [greet,pronoun] = ['hello', 'i' , 'am']
      // console.log(greet)
      // console.log(pronoun)

      // function arr() {
      //   return ['hello', 'i' , 'am']
      // }
      // const [greet,...all] = arr()

      // console.log(greet)
      // console.log(all)
      // const person = {
      //   id:1,
      //   name:'sahil',
      //   age:22
      // }
      // const {id,name,age} = person
      // console.log(id)
      // console.log(name)
      // console.log(age)
      // let flag = true

      // let flagValue = flag ? console.log('true') : console.log(false)

      //object literals
      // const movieData = [
      //   {
      //     title: "Wolf of Wall Street",
      //     price: 300
      //   },
      //   {
      //     title: "Wake Up Sid",
      //     price: 180
      //   },
      //   {
      //     title: "ff7",
      //     price: 200
      //   }
      // ];
      // function MovieStore(data) {
      //   return {
      //     data,
      //     totalPrice() {
      //       return this.data.reduce((total, movies) => {
      //         return movies.price + total
      //       }, 0);
      //     },
      //     movieDetail(title) {
      //       return this.data.find(data => console.log(data.title === title));
      //     }
      //   };
      // }
      // const MovieCal = MovieStore(movieData);
      // MovieCal.totalPrice();
      // MovieCal.movieDetail("ff7");
      // console.log(MovieCal.totalPrice())

      console.log(array2)