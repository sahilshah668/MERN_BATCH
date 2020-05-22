

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
      // const arr = [
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
      // ]

      // let fil = arr.filter(function(val) {
      //   return val.age > 20 && val.id === 2
      //   // console.log(val)
      // })
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

      // console.log(array2)


      //

      // <script>
      // // let greet = 'welcome to the mern stack'

      // // // function greeting(name,age) {
      // //   // greet = 'welcome to the programming world'
      // //   let fullGreet =
      // //   console.log(fullGreet);
      // // }

      // const greeting = (name,age) => console.log(`${greet} ${name} whose age is ${age}`)
      // greeting('sahil',22);

      // const math = (a,b=5) => console.log(a+b)

      // math(6,)

      // function math (a,b=5) {
      //   console.log(a + b)
      // }

      // math(7,9)

      // const a = {
      //   greet:'hello'
      // }
      // let b  = 'hello world'

      // function greet(name) {
      // a  = "hola"
      // let arr = ['1','2','3']
      //   let c = arr.length

      // let string = 'array arr is having' + "  " + c + "  "  + 'elements'
      // console.log(string)
      //     console.log(`hello ${name}`)
      // }

      // const greet = (name) => console.log(`hello ${name}`)

      // function personalInfo (name,age,hobby="none") {
      //   console.log(`name:${name}`)
      //   console.log(`age:${age}`)
      //   console.log(`hobby${hobby}`)

      // }

      // function math () {
      //   // add()
      //   // sub()
      // }

      // function math (...rest) {
      //   add(...rest)
      //   sub(...rest)
      // }

      // function add(a,b) {
      //   console.log(a + b )
      // }

      // function sub(a,b) {
      //   console.log(a - b)
      // }
      // math(4,5,8)
      // // personalInfo('sahil',22,'programming')

      // let arr1 = ['1','2','3']
      // let arr2 = ['4','5','6']
      // let arr3 = [...arr1,...arr2,'7','8']
      // console.log(arr3)

      //Destructuring

      // let arr1 = ['1','2','3','4','5']
      // const [one,two] = arr1
      // console.log(one)
      // console.log(two)
      // console.log(all)
      // function arr() {
      //   return ['hello', 'i' , 'am','programmer']
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
      // // let data = {}
      // let flagValue = flag ? console.log('true') : console.log(false)

      //   //object literals
      // const movieData = [
      //   {
      //     title: "Wolf of Wall Street",
      //     price: 300,
      //   },
      //   {
      //     title: "Wake Up Sid",
      //     price: 180,
      //   },
      //   {
      //     title: "ff7",
      //     price: 200,
      //   },
      // ];

      // function MovieStore(data) {
      //   return {
      //     data,
      //     totalPrice() {
      //       return this.data.reduce((total, movies) => {
      //         return movies.price + total;
      //       }, 0);
      //     },
      //     movieDetail(title) {
      //       return this.data.find((data) => console.log(data.title === title));
      //     },
      //   };
      // }
      // const MovieCal = MovieStore(movieData);
      // MovieCal.totalPrice();
      // console.log(MovieCal.movieDetail("ff7"))
      // console.log(MovieCal.totalPrice())

      //classess

      // class hello {
      //   constructor(name,age) {
      //     this.name = name;
      //     this.age = age
      //   }

      //   greet() {
      //     console.log(`i am ${this.name}, my age is ${this.age} `);
      //   }

      //   welcome () {
      //     console.log(`welcome to mern stack ${this.name}`)
      //   }
      // }

      // let h = new hello("sahil shah",22);

      // h.greet();
      // h.welcome()

      // class animals {
      //   constructor (name,breed,legs,color) {
      //     this.name = name
      //     this.breed = breed
      //     this.legs = legs
      //     this.color = color
      //   }

      //   getAnimalsDetails() {
      //     console.log(` ${this.name} ${this.breed} ${this.legs} ${this.color}`)
      //   }

      // }

      // let ani = new animals("tiger", "white tiger", "4", "white");

      // ani.getAnimalsDetails();

      // console.log(a)
      // console.log(b)
      // console.log(c)
      // var a = "hello"
      // const b = "hola"
      // let c = "wellness"

      //high order array methods
      //1. forEach

      // {
      //   recordType: 'affiltate'

      // }

      // {
      //   recordType: 'affiltate'
      // }

      // {
      //   recordType: 'staff'
      // }

      // {
      //   recordType: 'staff'
      // }

      // {
      //   recordType: 'staff'
      // }

      // {
      //   recordType: 'staff'
      // }

      // let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      //foreach

      // a.forEach((value,i) => {
      //   // console.log(value)
      //   console.log(i)
      // })

      //map

      // let b = a.map((num, i) => {
      //   return num - 1
      // });

      // console.log(b);

      //filter
      // let person = [
      //   {
      //     id: 1,
      //     name: "sahil",
      //   },
      //   {
      //     id: 2,
      //     name: "sumit",
      //   },
      //   {
      //     id: 3,
      //     name: "john",
      //   },
      // ](
      //   //   let fil = person.filter(val => {
      //     return val.name === 'sahil'
      //   })

      //  console.log(fil)

      //Find

      // function Finder (id) {
      //   let finder = person.find(val =>  val.id === id  )
      //   finder ? console.log(finder) : console.log('not avail');
      // }

      // Finder(3)

      //every and some

      // let Cars = [
      //   {
      //     brand:'bmw',
      //     maxSpeed:200
      //   },
      //   {
      //     brand:'Mercedes',
      //     maxSpeed:350
      //   },
      //   {
      //     brand:'Ferrari',
      //     maxSpeed:420
      //   },
      //   {
      //     brand:'Mustang',
      //     maxSpeed:450
      //   },
      //   {
      //     brand:'Lambo',
      //     maxSpeed:450
      //   }
      // ]

      // function maxSpeed () {
      //   let everyOf = Cars.every(val => val.maxSpeed < 300)
      //   console.log(everyOf)
      //   everyOf ? console.log('all cars maxspeed is less then 3oo') : console.log('not all cars maxspeed is less then 300')
      // }
      // function maxSpeed1 () {
      //   let someOf = Cars.some(val => val.maxSpeed < 300)
      //   console.log(someOf)
      //   someOf ? console.log('some cars maxspeed is less then 3oo') : console.log('not all cars maxspeed is less then 300')
      // }
      // maxSpeed1()

      //Reduce

      // let numbers = [1, 2, 3, 4, 5];

      // let reducer = numbers.reduce((val,num,i) => {
      //   console.log(i)
      //   return val + num
      // },0)

      // let reducer = numbers.reduce((initial,num) => {
      //   return initial + num
      // },1)

      // let reducer = numbers.reduce((initial, num) => {
      //   return num > 2 ? initial + num : num;
      // }, 5);

      // console.log(reducer);

      // "i am a programmer"
      // );
      // ("i am a ********");
      // ("hello i am programmer");
      // ("***** i am *********");

      // flag = false;
      // function* Team() {
      //   yield "python";
      //   yield "java";
      //   yield "MERN";
      // }

      // const gen = Team();
      // let first
      // let second
      // if (flag) {
      //   first = gen.next().value;
      // } else {
      //   second = gen.next().value;
      // }

      // // console.log(first)
      // console.log(second)
      //    let projectTeam = {
      //    projectManger:'john',
      //    seniorBackendDeveloper:'kelsey',
      //    juniorBackendDeveloper:'jordan',
      //    senoirFontendDeveloper:'sahil',
      //    juniorFrontEndDeveloper:'kiran'
      //  }
      // function* codingHub(team) {

      //   yield team.juniorFrontEndDeveloper
      //   yield team.juniorBackendDeveloper
      // }

      // let junior = []
      // for(let teamMember of codingHub(projectTeam)) {
      //     junior.push({junior:teamMember})
      //   }

      // console.log(junior)
    //   function* gen() {
    //     let ask1 = yield "2 + 2 = ?";

    //     alert(ask1); // 4

    //     let ask2 = yield "3 * 3 = ?";

    //     alert(ask2); // 9
    //   }

    //   let generator = gen();

    //   alert(generator.next().value); // "2 + 2 = ?"

    //   alert(generator.next(4).value); // "3 * 3 = ?"

    //   alert(generator.next(9).done); // true

    //   let add  = () => {
    //     return a + b
    //   }

    //   function* math(item) {

    //     yield add(item)


    //   } 

    //   const gem = math(item)

    //   let one = gem.next().value

    // </script>