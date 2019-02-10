<template>
<div class="container form-up">
    <div class="row">
        <div class="col-md-12">
            <div class="card bg-faded">
                <form class="form-inline" method="post" action="/user/sendmail" id="form-contact">
					<div>
						<div class="form-group Motiion-Block-Input">
                            <span class="col-md-1 offset-md-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input v-validate="'required|alpha'" name="name" type="text" placeholder="Nombre o Compañia" class="form-control width-inherit">
                                <span v-if="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>

                           </div>
                        </div>

                        <div class="form-group Motiion-Block-Input">
                            <span class="col-md-1 offset-md-2 text-center"><i class="fa fa-address-book	light"></i></span>
                            <div class="col-md-8">

                                <input v-validate="'required|email'" name="email" type="email" placeholder="Correo Electronico" class="form-control width-inherit">
                                <span v-if="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
 
                            </div>
                        </div>

                        <div class="form-group Motiion-Block-Input">
                            <span class="col-md-1 offset-md-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                            <div class="col-md-8">
                                <input class="form-control width-inherit" v-validate="'numeric'" data-vv-as="field" name="phone" type="number"  placeholder="Telefono">
                                <span v-if="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>

                            </div>
                        </div>

                        <div class="form-group Motiion-Block-Input">
                            <span class="col-md-1 offset-md-2 text-center"><i class="fa fa-envelope"></i></span>
                            <div class="col-md-8">
                                <textarea class="form-control width-inherit" v-validate="'required'" name="message" placeholder="Mensaje" rows="7"></textarea>
                                 <span v-if="errors.has('message')" class="help is-danger">{{ errors.first('message') }}</span>
                            </div>
                        </div>

                        <div class="form-group Motiion-Block-Input">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-primary btn-lg submit">Enviar</button>
                            </div>
                        </div>
						
						<div id="response-sms"></div>
	
					</div>
					
                </form>
				
            </div>
        </div>
    </div>
</div>

</template>

<script>

export default{

    name: "motiion-contact",
    components: {

    }

}

</script>

<style>
.Motiion-Block-Input{
	
	margin-top: 10px;
	margin-bottom: 10px;
}

.form-up{
	
	margin-top: 10px;
	margin-bottom: 10px;
	padding: 10px;
}

.form-inline div{
	
	width: 100%;
	padding: 5px;
}

.width-inherit{
	
	width: inherit !Important;
}
</style>
