<template>
<div>
    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">Role Add</h4>
        </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li class="active">Role Add</li>
            </ol>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Role Adding Form</h3>
                <p class="text-muted m-b-30 font-13"> Select the permissions you want to assign  with this role</p>

                <hr>
                <div class="row">
                    <div class="col-sm-12 col-xs-12">
                        <form @submit.prevent="addRole">
                            <div class="form-group">
                                <label for="name">Role Name</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-user"></i></div>
                                    <input type="text" class="form-control" v-model="roleData.name" id="name" placeholder="name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="name">Role Slug</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-settings"></i></div>
                                    <input type="text" class="form-control" v-model="roleData.slug" id="slug" placeholder="slug">
                                </div>
                            </div>
                            <!--<div class="form-group">-->
                                <!--<label for="name">Permissions</label>-->
                                <!--<div v-if="loading">-->
                                    <!--<bullet-list-loader>-->
                                    <!--</bullet-list-loader>-->
                                <!--</div>-->
                                <!--<div v-if="!loading">-->
                                    <!--<div class="row" v-for="permission in permissions" :key="permission.id">-->
                                        <!--<div class="col-md-6">-->
                                            <!--<div class="checkbox checkbox-success">-->
                                                <!--<input id="checkbox" type="checkbox">-->
                                                <!--<label for="checkbox"> {{ permission.name }} </label>-->
                                            <!--</div>-->
                                        <!--</div>-->
                                        <!--<div class="col-md-6">-->
                                            <!--<div v-if="permission.resource === 'resource'">-->
                                                <!--<div class="checkbox checkbox-success">-->
                                                    <!--<input type="checkbox" id="permission">-->
                                                    <!--<label for="permission">Add</label>-->

                                                <!--</div>-->
                                                <!--<div class="checkbox checkbox-success">-->
                                                    <!--<input type="checkbox" id="user-edit">-->
                                                    <!--<label for="permission">Edit</label>-->

                                                <!--</div>-->
                                                <!--<div class="checkbox checkbox-success">-->
                                                    <!--<input type="checkbox" id="user-view">-->
                                                    <!--<label for="permission">View</label>-->

                                                <!--</div>-->
                                                <!--<div class="checkbox checkbox-success">-->
                                                    <!--<input type="checkbox" id="user-delete">-->
                                                    <!--<label for="permission">Delete</label>-->

                                                <!--</div>-->
                                                <!--<div class="checkbox checkbox-success">-->
                                                    <!--<input type="checkbox" id="user-hold">-->
                                                    <!--<label for="permission">Hold</label>-->
                                                <!--</div>-->
                                            <!--</div>-->

                                        <!--</div>-->
                                    <!--</div>-->
                                <!--</div>-->

                            <!--</div>-->
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
    import { BulletListLoader } from 'vue-content-loader'
    export default {
        components: {
            BulletListLoader
        },

        mixins: [],

        data () {
            return {
                roleData:{
                    name:'',
                    slug:''
                },
                permissions: [],
                loading: true,
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
            this.read();
        },

        methods: {
            read() {
                this.loading = true ;//the loading begin
                window.axios.get('/admin/get/permissions').then(({ data }) => {
                    this.loading = false;
                    this.permissions = data;
                }).catch(error => {
                    this.loading = false;
                    alert("Failed loading resource");
                })
            },
            addRole(){
                axios.post('/admin/roles',this.roleData).then(response => {
                    var audio = new Audio();
                    audio.src = 'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3';
                    audio.play();
                    this.flash('Role added', 'info', {
                        timeout: 3000,
                    });
                }).catch(error=>{
                    var audio = new Audio();
                    audio.src = 'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3';
                    audio.play();
                    this.flash('Role adding failed', 'danger', {
                        timeout: 3000,
                    });
                })
            },
        }
    };
</script>
