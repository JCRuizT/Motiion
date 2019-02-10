<template>

<div>
	
	<div class="card">
		<div class="card-body">
            <img class="card-img-top" :src="src">
			<p class="card-text">{{description}}</p>
		</div>
	</div>
	
</div>


</template>


<script>
export default {
    name: "card-machine",
    props:{

        description: String,
        src: String
    }
}
</script>
