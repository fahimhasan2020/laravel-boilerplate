<template>
    <form class="form-horizontal form-material" id="loginform" @submit.prevent="login">
        <h3 class="box-title m-b-20">Sign In</h3>
        <div class="form-group ">
            <div class="col-xs-12">
                <input class="form-control" type="text" v-model="loginData.email" required="" placeholder="Username">
            </div>
        </div>
        <div class="form-group">
            <div class="col-xs-12">
                <input class="form-control" type="password" v-model="loginData.password" required="" placeholder="Password">
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-12">
                <div class="checkbox checkbox-primary pull-left p-t-0">
                    <input id="checkbox-signup" type="checkbox">
                    <label for="checkbox-signup"> Remember me </label>
                </div>
                <router-link to="/admin/auth/forget" id="to-recover" class="text-dark pull-right"><i class="fa fa-lock m-r-5"></i> Forgot pwd?</router-link> </div>
        </div>
        <div class="form-group text-center m-t-20">
            <div class="col-xs-12">
                <button class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Log In</button>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                <div class="social">
                </div>
            </div>
        </div>
        <div class="form-group m-b-0">
            <div class="col-sm-12 text-center">
            </div>
        </div>
    </form>
</template>
<script>
    export default {
        components: {},

        mixins: [],

        data () {
            return {
                loginData:{
                    email:'',
                    password:''
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
            login(){
                axios.post('/admin/authentication',this.loginData).then(response => {
                    let token = response.data.token;
                    if(token){
                        localStorage.setItem('token',token);
                    }
                    this.$router.push('/admin/home');
                }).catch(error=>{
                    this.$router.push('/');
                })
            }
        }
    };
</script>