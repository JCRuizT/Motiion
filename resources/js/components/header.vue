<template>
<header id="Motiion-Header-Principal">

      <div id="Motiion-Logotype-Container">
        <img src="/image/motiion.png" id="Motiion-Logotype"/>
      </div>

      <nav class="navbar navbar-expand-sm navbar-light" id="Motiion-Nav">

        <ul class="navbar-nav" v-if="type==1">

          <li class="nav-item active">
            <a id="link-machine" data-spa-url="/getComponentAHome" data-spa-title="Motiion - Maquinas" v-on:click.prevent="changeMenu('link-machine')" class="nav-link" href="/dashboard/machine">Maquinas</a>
          </li>

          <li class="nav-item">
            <a id="link-category" data-spa-url="/getComponentACategory" data-spa-title="Motiion - Categorias"  v-on:click.prevent="changeMenu('link-category')" class="nav-link" href="/dashboard/category">Categorias</a>
          </li>

          <li class="nav-item">
            <a id="link-inbox" data-url="" data-spa-title="Motiion - Bandeja de entrada" v-on:click.prevent="changeMenu('link-inbox')" class="nav-link" href="/dashboard/inbox">Bandeja de entrada</a>
          </li>


        </ul>

        <ul class="navbar-nav" v-else-if="type==0">

            <li class="nav-item active">
              <router-link to="/home" id="link-home" class="nav-link">Inicio</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/catalogue" id="link-category" class="nav-link">Catalogo</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/about" id="link-about" class="nav-link">Quienes Somos</router-link>
            </li>
            
            <li class="nav-item">
              <router-link to="/contact" id="link-contact" class="nav-link">Contacto</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/blog" id="link-contact" class="nav-link">Blog</router-link>
            </li>

      </ul>

  </nav>

</header>
</template>


<script>

export default{

  name: "motiion-header",
  props: {

    type: Number
  }

}
</script>

<style scoped>

#Motiion-Header-Principal{

	min-height: 100px;
	height: auto;
	position: relative;
	top: 10px;
	background-color: #f1f1f1;

}

#Motiion-Nav{

	height: 40px !Important;
	background: linear-gradient(#fff, rgba(0,0,0,0.1));

}

#Motiion-Logotype-Container{
  margin-bottom: 20px !important;
	height: 80px;
	position: relative;
	top: 10px !important;
  left: 10px;
	overflow: hidden;
	width: 300px;
}

#Motiion-Logotype{

	width: inherit;
	height: inherit;
}

.nav-link{

	color: #000 !Important;
	margin-left: 40px;
	margin-right: 40px;
	/*border: 1px solid rgba(0,0,0,.08);*/
	font-family: 'Oswald', sans-serif;
	border-right: 1px solid rgba(0,0,0,.08);
	border-left: 1px solid rgba(0,0,0,.08);

}

.router-link-active{

    color:#25649f !important;
    transition: 0.3s ease;
    
}
</style>