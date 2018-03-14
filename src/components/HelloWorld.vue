<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->

    <table>
      <tbody>
        <tr v-for="people in peopleList">
          <tr>{{people.sex}}</tr>
          <tr>{{people.name}}</tr>
          <tr>{{people.marry}}</tr>
          <tr>{{people.year}}</tr>
          <tr>{{people.money}}</tr>
          <tr>{{people.city}}</tr>
        </tr>
      </tbody>

    </table>

    <button @click="load">加载</button>

  </div>

</template>

<script>
  import ShopCar from './ShopCar';
  import NumCount from './NumCount';


  

  export default {

    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',

      }
    },
    components:{
      ShopCar,
      NumCount
    },
    methods:{
      load(){
        console.log(this)
        this.$store.dispatch({
          type:"refrshPeople"
        })
      }
    },
    computed:{
      peopleList(){
        return this.$store.state.peopleList
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>