<template>
<div>
    <div>
      <li class="list-group-item" id="not-exists">
        <span>No existen maquinas</span>
      </li>

      <li class="list-group-item flex-between">
        <span>dsdds</span>
        <span>
          <span v-on:click="modalUpdateMachine(e,index)" class="update">
            <i class="far fa-edit text-warning" title="Edit"></i>
          </span>
          <span v-on:click="modalDeleteMachine(e,index)" class="delete">
            <i class="far fa-trash-alt text-danger" title="Delete"></i>
          </span>
        </span>
      </li>
    </div>


    <update-machine></update-machine>
  
  <!--  v-if="machine > 0" v-for="(e,index) in machine" -->
</template>

<script>
import updateMachine from "../components/update-machine";

export default {
  name: "admin-machine",
  components: {
    "update-machine": updateMachine
  }
};
</script>

<style>


.btn-file {
    position: relative;
    overflow: hidden;
	width: 100%;
}
.btn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    background: white;
    cursor: inherit;
    display: block;
	
}

.btn-success{
	
	
	background-color: #25649f !important;
}


#cont-prev-image,#cont-prev-image-update{
	
	
	width: 100%;
    height: 250px;
    border: 1px solid #f1f1f1;
	overflow: hidden;
	display: none;
	margin-bottom: 10px;
}

#prev-image,#prev-image-update{
	
	height: inherit;
	width: inherit;
	
}

.modal{
	display: block;
	visibility: hidden;
}

.showModal{
	
	z-index: 9999;
	transition: 0.5s ease-out;
	background-color: rgba(0,0,0,.4);
	visibility: visible;
	overflow: auto;
	
}

#page-admin{
	
	display: none;
	visibility: none;
	z-index: -99999;
	width: 0px;
	height: 0px;
	overflow: hidden;
	
}

.list-group-item{
	
   display: flex;
   justify-content: space-between;

}

.list-group-item span{
	
	color: #000;
}

.modal-content{
	
	width: 100%;
}
 
#not-Category{
	
	display: flex;
	justify-content: center;
  
}
   
.top{
	
	top: -500px;
}

.update,.delete{
	
	cursor: pointer;
}

.alert-messages {
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    z-index: 99999;
    transition: top 1s;
}


.hidden-modal-message{
    display: none;
}


.message {
    position: relative;
    width: 600px;
    padding: 20px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 0 0 6px 6px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.25);
	width: 70%;
}


.message .message-text {
    display: block;
    margin: 0 20px;
    color: #66757f;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    word-wrap: break-word;
}
</style>

