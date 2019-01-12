<template>
<div>
    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Permission Add</h4>
        </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li class="active">Permission Add</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Permission Adding Form</h3>
                <p class="text-muted m-b-30 font-13"> Define single permission or entire model crude operations </p>

                <hr>
                <div class="row">
                    <div class="col-sm-12 col-xs-12">
                        <form @submit.prevent="addPermission">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-user"></i></div>
                                    <input type="text" class="form-control" v-model="permissionData.name" id="name" placeholder="name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="type">Permission Type</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-email"></i></div>
                                    <select class="form-control"id="type" v-model="permissionData.resource">
                                        <option value="resource">Resource</option>
                                        <option value="single">Single</option>
                                    </select>
                                </div>
                                <span class="help-block"> Select permission type </span>
                            </div>
                            <button type="submit" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                            <button type="reset" class="btn btn-inverse waves-effect waves-light">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        components: {
        },

        mixins: [],

        data () {
            return {
                permissionData:{
                    name:'',
                    resource:''
                }
            }
        },

        props: {
            //
        },

        computed: {
            //
        },

        created () {
            //
        },

        mounted () {
            //
        },

        methods: {
            addPermission(){
                axios.post('/admin/permission',this.permissionData).then(response => {
                    var audio = new Audio();
                    audio.src = 'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3';
                    audio.play();
                    this.flash('Permission added', 'info', {
                        timeout: 3000,
                    });
                }).catch(error=>{
                    var audio = new Audio();
                    audio.src = 'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3';
                    audio.play();
                    this.flash('Permission adding fialed', 'danger', {
                        timeout: 3000,
                    });
                })
            }
        }
    };
</script>
