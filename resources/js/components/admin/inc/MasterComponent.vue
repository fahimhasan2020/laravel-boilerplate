<template>
    <div id="wrapper">
        <flash-message class="myCustomClass"></flash-message>
        <nprogress-container></nprogress-container>
        <topy></topy>
        <lefty></lefty>
        <div id="page-wrapper">
            <div class="container-fluid">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
                <righty></righty>
            </div>
            <!-- /.container-fluid -->

        </div>
        <footy></footy>
    </div>
</template>

<script>
    import LeftPanel from './SidebarComponent'
    import RightPanel from './StylebarComponent'
    import TopPanel from './TopbarComponent'
    import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
    import Foot from './FooterComponent'
    export default {
        components: {
            footy: Foot,
            righty: RightPanel,
            topy: TopPanel,
            lefty: LeftPanel,
            NprogressContainer
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

            let peity = document.createElement('script');
            peity.setAttribute(
                'src',
                '/css/admin/bootstrap/dist/js/tether.min.js',
            );
            peity.async = true;
            document.body.appendChild(peity);


            let sidenav = document.createElement('script');
            sidenav.setAttribute(
                'src',
                '/css/admin/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.js',
            );
            sidenav.async = true;
            document.body.appendChild(sidenav);


            let slimscroll = document.createElement('script');
            slimscroll.setAttribute(
                'src',
                '/css/admin/js/jquery.slimscroll.js',
            );
            slimscroll.async = true;
            document.body.appendChild(slimscroll);


            let waves = document.createElement('script');
            waves.setAttribute(
                'src',
                '/css/admin/js/waves.js',
            );
            waves.async = true;
            document.body.appendChild(waves);


            let flot = document.createElement('script');
            flot.setAttribute(
                'src',
                '/css/admin/plugins/bower_components/flot/jquery.flot.js',
            );
            flot.async = true;
            document.body.appendChild(flot);


            let flotl = document.createElement('script');
            flotl.setAttribute(
                'src',
                '/css/admin/plugins/bower_components/flot.tooltip/js/jquery.flot.tooltip.min.js',
            );
            flotl.async = true;
            document.body.appendChild(flotl);


            let jvect = document.createElement('script');
            jvect.setAttribute(
                'src',
                '/css/admin/plugins/bower_components/vectormap/jquery-jvectormap-2.0.2.min.js',
            );
            jvect.async = true;
            document.body.appendChild(jvect);

            let jwecta = document.createElement('script');
            jwecta.setAttribute(
                'src',
                '/css/admin/plugins/bower_components/vectormap/jquery-jvectormap-world-mill-en.js',
            );
            jwecta.async = true;
            document.body.appendChild(jwecta);

            let sparkine = document.createElement('script');
            sparkine.setAttribute(
                'src',
                '/css/admin/plugins/bower_components/jquery-sparkline/jquery.sparkline.min.js',
            );
            sparkine.async = true;
            document.body.appendChild(sparkine);

            let easy = document.createElement('script');
            easy.setAttribute(
                'src',
                '/css/admin/plugins/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
            );
            easy.async = true;
            document.body.appendChild(easy);

            let pie = document.createElement('script');
            pie.setAttribute(
                'src',
                '/css/admin/plugins/bower_components/jquery.easy-pie-chart/easy-pie-chart.init.js',
            );
            pie.async = true;
            document.body.appendChild(pie);

            let custom = document.createElement('script');
            custom.setAttribute(
                'src',
                '/css/admin/js/custom.min.js',
            );
            custom.async = true;
            document.body.appendChild(custom);

            let db = document.createElement('script');
            db.setAttribute(
                'src',
                '/css/admin/js/dashboard2.js',
            );
            db.async = true;
            document.body.appendChild(db);

            let swst = document.createElement('script');
            swst.setAttribute(
                'src',
                '/css/admin/plugins/bower_components/styleswitcher/jQuery.style.switcher.js',
            );
            swst.async = true;
            document.body.appendChild(swst);

        },

        methods: {
            //
        }
    };
</script>
<style lang="css" scoped>
    @import "../../../../../public/css/admin/bootstrap/dist/css/bootstrap.min.css";
    @import "../../../../../public/css/admin/plugins/bower_components/bootstrap-extension/css/bootstrap-extension.css";
    @import "../../../../../public/css/admin/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.css";
    @import "../../../../../public/css/admin/plugins/bower_components/vectormap/jquery-jvectormap-2.0.2.css";
    @import "../../../../../public/css/admin/plugins/bower_components/css-chart/css-chart.css";
    @import "../../../../../public/css/admin/css/animate.css";
    @import "../../../../../public/css/admin/css/style.css";
    @import "../../../../../public/css/admin/css/colors/default.css";

    .slide-enter-active {
        animation: slide-in 350ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 350ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-20px);
            opacity: 0;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
    #loading-bar .bar {
        background: #33ba3a;
        height: 4px;
    }

    #loading-bar-spinner .spinner-icon {
        width: 18px;
        height: 18px;
        border: solid 4px transparent;
        border-top-color: #cadd22;
        border-left-color: #cadd22;
        border-radius: 10px;
    }
    .myCustomClass{
        width: 400px !important;
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 5000;
        opacity: 1;
        transition: 2s opacity ease-in-out;
    }
</style>
