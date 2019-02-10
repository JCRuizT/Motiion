<template>
<div>

<div id="Motiion-Slider" class="carousel slide" data-ride="carousel">
	
	<ol class="carousel-indicators">
		<li data-target="#Motiion-Slider" data-slide-to="0" class="active"></li>
		<li data-target="#Motiion-Slider" data-slide-to="1"></li>
		<li data-target="#Motiion-Slider" data-slide-to="2"></li>
	</ol>
					
					
	<div class="carousel-inner" id="slider">

		<div class="carousel-item">
			<img class="d-block w-100" src="https://lagunatools.com/wp-content/uploads/2015/11/laguna-iq-cnc-black.jpg" alt="Second slide">
		</div>
	
		<div class="carousel-item">
			<img class="d-block w-100" src="https://cdn.20m.es/img2/recortes/2018/09/06/775347-600-338.jpg" alt="Third slide">
		</div>

        <div class="carousel-item active">
			<img class="d-block w-100" src="http://img.directindustry.es/images_di/photo-g/61434-5271877.jpg" alt="Third slide">
		</div>
				
	</div>
						
	<span class="carousel-control-prev" v-on:click="plusSlides(-1)">
		<span class="carousel-control-prev-icon"></span>
		<span class="sr-only">Previous</span>
	</span>
						
	<span class="carousel-control-next" v-on:click="plusSlides(1)">
		<span class="carousel-control-next-icon"></span>
		<span class="sr-only">Next</span>
	</span>
</div>

<div class="row" style="margin-top: 10px; margin-bottom: 40px">

    <card-machine 
        class="col-md-4" 
        description="fkjsfkkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjsdfsdsdkjdskjdsfkjjdfskj" 
        src="https://pbs.twimg.com/media/Dxrg3OwX0AIip3v.jpg">
    </card-machine>

    <card-machine 
        class="col-md-4"   
        description="fkjsfkkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjsdfsdsdkjdskjdsfkjjdfskj" 
        src="https://pbs.twimg.com/media/Dxrg3OwX0AIip3v.jpg">
    </card-machine>

    <card-machine 
        class="col-md-4"   
        description="fkjsfkkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjsdfsdsdkjdskjdsfkjjdfskj" 
        src="https://pbs.twimg.com/media/Dxrg3OwX0AIip3v.jpg">
    </card-machine>

	<div class="col-md-12">
		<router-link to="/catalogue" class="btn btn-light" href="/category" id="Motiion-More-Button">
		
			ver mas >>
		</router-link>
	</div>
    
</div>
	
</div>



</template>

<script>

import card from "../components/card-machine";

export default{

    name: "motiion-home",
    data(){

        return {

            slideIndex: 1

        }

    },

    methods: {

        showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("carousel-item");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {this.slideIndex = 1} 
            if (n < 1) {this.slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {

                slides[i].style.display = "none"; 
                slides[i].style.transform = "rotate(0deg)";

            }
            for (i = 0; i < dots.length; i++) {
                //dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[this.slideIndex-1].style.display = "block";
            slides[this.slideIndex-1].style.transform = "rotate(360deg)";
            //dots[this.slideIndex-1].className += " active";
        },

        plusSlides(n){
            this.showSlides(this.slideIndex += n);
        },

        currentSlide(n) {
            this.showSlides(this.slideIndex = n);
        }


    },
    components: {
        "card-machine": card
    },

    mounted(){

    }

}

</script>


<style>

.carousel-control-prev,.carousel-control-next{
	
    background-color: rgba(0,0,0,0.2);
    cursor: pointer;
}

#Motiion-Slider{
	
	height: 300px;
	overflow: hidden;
	margin-top: 20px;
    border: 1px solid rgb(0,0,0,0.2);
	width: 100%;
}

.carousel-inner,.carousel-item, .carousel-item img{
	
	
	height: inherit;
}

#Motiion-More-Button{
	
	margin-top: 5px;
	width: inherit;
	border:1px solid rgba(0,0,0,0.3);
}



</style>