<template>
  <footer id="Motiion-Footer-Container">

    	<div id="Motiion-Icon">

    		<div>
    		<span class="M-Icon M-Facebook float-left M-30"></span>
    		<span class="M-Icon M-Twitter float-left M-30"></span>
    		<span class="M-Icon M-Youtube float-left M-30"></span>
    		<span class="M-Icon M-Instagram float-left M-30"></span>

    		</div>


    	</div>

    	<div id="Motiion-Copyright">
    		<span>Motiion Copyright all right reserved</span>
    	</div>

    </footer>
</template>

<script>
export default{

    name: "motiion-footer",

}
</script>


<style scoped>
#Motiion-Footer-Container{
	
	background-color: #fff;
	height: 150px;
	position: static;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
	margin: 0px auto;
}




.M-Icon{
	
	background-size: cover;
	background-repeat: no-repeat;
	width: 40px;
	display: block;
	height: 40px;
	margin-left: 10px;
	margin-right: 10px;
	cursor: pointer;
}


#Motiion-Icon{
	
	
	background-color: #fff;
	width: 100%;
    height: 100px;
	border-top: 2px solid #f1f1f1;
	
}

#Motiion-Icon div{
	
	width: 240px;
    height: 50px;
    top: 50%;
    margin: 0px auto;
}

.M-Facebook{
	
	background-image:url(/image/facebook.png);
	
}

.M-Twitter{
	
	background-image:url(/image/twitter.png);
	
}


.M-Youtube{
	
	background-image:url(/image/youtube.png);
	
}

.M-Instagram{
	
	background-image:url(/image/instagram.png);
	
}

.M-30{
	
	position: relative;
    top: 30px;
}

#Motiion-Copyright{
	
	background-color: #000;
	min-height: 50px;
	height: auto;
	text-align: center;
	padding: 10px;
    position: absolute;
    left: 0px;
    right: 0px
}

#Motiion-Copyright span{
	
	color: #fff;
	font-weight: bold;
	font-size: 18px;
	text-transform: capitalize;
	font-style: italic;
}


</style>
