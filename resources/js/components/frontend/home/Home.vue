<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Bizbrainers</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <router-link class="nav-link" to="/admin/auth/login">Admin <span class="sr-only">(current)</span></router-link>
                        </li>
                        <li class="nav-item active">
                            <router-link class="nav-link" to="/admin/home">Admin Home <span class="sr-only">(current)</span></router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    <div class="jumbotron">
        <h1 class="display-4">Biz Brainers Project Boilerplate</h1>
        <p class="lead">Laravel Project Initializing Structure</p>
        <hr class="my-4">
        <p>It contains builtin admin interface with admin framework . This structure builds with laravel-vuejs-(SPA+PWA)+nodejs</p>
        <a class="btn btn-primary btn-lg" href="https://bizbrainers.com" role="button">Learn more</a>
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
                //
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
            //
        }
    };
</script>
