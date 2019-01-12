<template>
<div>
    <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 class="page-title">User Form</h4>
        </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <ol class="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li class="active">User Form</li>
            </ol>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <form @submit.prevent="userAdd">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="first-name">First Name</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-user"></i></div>
                                    <input type="text" class="form-control" id="first-name" v-model="userData.first_name" placeholder="First Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="last-name">Last Name</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-user"></i></div>
                                    <input type="text" class="form-control" v-model="userData.last_name" id="last-name" placeholder="Last Name">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-email"></i></div>
                                    <input type="email" class="form-control" v-model="userData.email" id="email" placeholder="Email">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="role">Role</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-anchor"></i></div>
                                    <select class="form-control" id="role" v-model="userData.role">
                                        <option selected>Select One ..........</option>
                                        <option v-for="role in roles" :key="role.id" :value="role.slug">{{role.name}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="password">Password</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-paragraph"></i></div>
                                    <input type="password" class="form-control" v-model="userData.password" id="password" placeholder="**********">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="confirm-password">Confirm Password</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-paragraph"></i></div>
                                    <input type="password" class="form-control" v-model="userData.confirm_password" id="confirm-password" placeholder="**********">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="gender">Gender</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-location-pin"></i></div>
                                    <select class="form-control" id="gender" v-model="userData.gender">
                                        <option selected>Select One ..........</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="age">Age</label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-brush-alt"></i></div>
                                    <input type="number" class="form-control" v-model="userData.age" id="age" placeholder="----">
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="checkbox checkbox-primary">
                                <input type="checkbox" id="permission">
                                <label for="permission">Notify user after account creation</label>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-primary"><i class="fa fa-send"></i>&nbsp;Create user</button>
                            <button type="reset" class="btn btn-warning"><i class="fa fa-tree"></i>&nbsp;Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        components: {},

        mixins: [],

        data () {
            return {
                userData:{
                    first_name:'',
                    last_name:'',
                    email:'',
                    password:'',
                    confirm_password:'',
                    gender:'',
                    age:''
                },
                roles:[],
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
            userAdd(){
                axios.post('/admin/user/adding',this.userData).then(response => {
                    var audio = new Audio();
                    audio.src = 'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3';
                    audio.play();
                    this.flash('User added', 'info', {
                        timeout: 3000,
                    });
                   this.userData.first_name = '';
                    this.userData.last_name = '';
                    this.userData.email = '';
                    this.userData.password = '';
                    this.userData.age = '';
                    this.userData.gender = '';
                    this.userData.role = '';
                }).catch(error=>{
                    var audio = new Audio();
                    audio.src = 'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3';
                    audio.play();
                    this.flash('User adding failed', 'danger', {
                        timeout: 3000,
                    });
                })
            },
            read() {
                this.loading = true ;//the loading begin
                window.axios.get('/admin/get/roles').then(({ data }) => {
                    this.loading = false;
                    this.roles = data;
                }).catch(error => {
                    this.loading = false;
                    alert("Failed loading resource");
                })
            },
            }
    };
</script>
