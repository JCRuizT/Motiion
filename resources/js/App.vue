<template>

    <div id="app">

        <div class="container" id="Motiion-Container">
        

            <motiion-header :type="0"></motiion-header>

                 <router-view></router-view>

             <motiion-footer></motiion-footer>

        </div>
    </div>
</template>

<script>
import header from "./components/header"
import footer from "./components/footer"

    export default {

        name: "App",
        components: {

            "motiion-header": header,
            "motiion-footer": footer

        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style>

*{

  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body{

  width: 100%;
  height: 100%;

}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height:100vh;
  height: auto;
  background-color: #2c3e50;
}

#Motiion-Container{

	min-height: 500px;
	height: auto;
	background-color: #fff;
	box-shadow: 0px 0px 3px rgb(0,0,0,0.2);
	width: 70% !Important;
    position: relative;
}

textarea {
	resize: none;
}

.flex-between{
    
	display: flex;
    justify-content: space-between;
    width: 100%
	
}

</style>
