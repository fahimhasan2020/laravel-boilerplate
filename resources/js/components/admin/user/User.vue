<template>
    <div>
        <div class="row bg-title">
            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <h4 class="page-title">User</h4>
            </div>
            <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                <ol class="breadcrumb">
                    <li><a href="#">Dashboard</a></li>
                    <li class="active">User list</li>
                </ol>
            </div>
            <!-- /.col-lg-12 -->
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="white-box">
                    <router-link to="/admin/add/user" class="btn btn-outline-primary btn-sm"> <i class="fa fa-plus"></i>&nbsp; Add</router-link>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="white-box">
                    <div v-if="loading">
                        <!--<i class="fa fa-refresh fa-spin fa-2x text-danger" aria-hidden="true"></i>-->
                        <bullet-list-loader>
                        </bullet-list-loader>
                    </div>
                    <div v-if="!loading">
                        <div class="tableFilters">
                            <input class="input form-control float-md-right mb-2" type="text" v-model="tableData.search" placeholder="Search Table"
                                   @input="getProjects()">
                            <div class="control">
                                <div class="select mb-2">
                                    <select class="form-control" v-model="tableData.length" @change="getProjects()">
                                        <option v-for="(records, index) in perPage" :key="index" :value="records">{{records}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <datatable :columns="columns" :sortKey="sortKey" :sortOrders="sortOrders" @sort="sortBy">
                            <tbody>
                            <tr v-for="project in projects" :key="project.id">
                                <td class="text-center">
                                    <div class="checkbox checkbox-info">
                                        <input id="checkbox" type="checkbox">
                                        <label for="checkbox"></label>
                                    </div>
                                </td>
                                <td class="text-center">{{project.first_name}}</td>
                                <td class="text-center">{{project.last_name}}</td>
                                <td class="text-center">{{project.gender}}</td>
                                <td class="text-center">{{project.age}}</td>
                                <td class="text-center">{{project.email}}</td>
                                <td class="text-center">
                                    <button class="btn btn-small btn-warning ml-sm-1"><i class="fa fa-pencil"></i></button>
                                    <button class="btn btn-small btn-danger ml-sm-1" @click="deleteUser(project)"><i class="fa fa-trash"></i></button>
                                    <button class="btn btn-small btn-primary ml-sm-1"><i class="fa fa-database"></i></button>
                                </td>
                            </tr>
                            </tbody>
                        </datatable>
                        <pagination :pagination="pagination"
                                    @prev="getProjects(pagination.prevPageUrl)"
                                    @next="getProjects(pagination.nextPageUrl)">
                        </pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { BulletListLoader } from 'vue-content-loader'
    import Datatable from '../Datatable.vue';
    import Pagination from '../Paginations.vue';
    import swal from 'sweetalert';
    export default {
        components: {
            BulletListLoader,
            datatable: Datatable,
            pagination: Pagination
        },

        mixins: [],

        data () {
            let sortOrders = {};
            let columns = [
                {label: '', name: 'select' },
                {label: 'First name', name: 'first_name' },
                {label: 'Last name', name: 'last_name'},
                {label: 'Gender', name: 'gender'},
                {label: 'Age', name: 'age'},
                {label: 'Email', name: 'email'},
                {label: 'Operations', name: 'operations' }
            ];
            columns.forEach((column) => {
                sortOrders[column.name] = -1;
            });
            return {
                loading:false,
                users:[],
                deleteId:'',
                projects: [],
                columns: columns,
                sortKey: 'first_name',
                sortOrders: sortOrders,
                perPage: ['10', '20', '30', '40', '50', '60'],
                tableData: {
                    draw: 0,
                    length: 10,
                    search: '',
                    column: 0,
                    dir: 'desc',
                },
                pagination: {
                    lastPage: '',
                    currentPage: '',
                    total: '',
                    lastPageUrl: '',
                    nextPageUrl: '',
                    prevPageUrl: '',
                    from: '',
                    to: ''
                },
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
            this.getProjects();
        },

        methods: {
            getProjects(url = '/admin/user/listing') {
                this.tableData.draw++;
                axios.get(url, {params: this.tableData})
                    .then(response => {
                        let data = response.data;
                        if (this.tableData.draw == data.draw) {
                            this.projects = data.data.data;
                            this.configPagination(data.data);
                        }
                    })
                    .catch(errors => {
                        console.log(errors);
                    });
            },
            configPagination(data) {
                this.pagination.lastPage = data.last_page;
                this.pagination.currentPage = data.current_page;
                this.pagination.total = data.total;
                this.pagination.lastPageUrl = data.last_page_url;
                this.pagination.nextPageUrl = data.next_page_url;
                this.pagination.prevPageUrl = data.prev_page_url;
                this.pagination.from = data.from;
                this.pagination.to = data.to;
            },
            sortBy(key) {
                this.sortKey = key;
                this.sortOrders[key] = this.sortOrders[key] * -1;
                this.tableData.column = this.getIndex(this.columns, 'name', key);
                this.tableData.dir = this.sortOrders[key] === 1 ? 'asc' : 'desc';
                this.getProjects();
            },
            getIndex(array, key, value) {
                return array.findIndex(i => i[key] === value)
            },
            deleteUser(deleteId){
                swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this user!",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            axios.delete('/admin/user/listing/'+deleteId.id).then(response =>{
                                let index = this.projects.indexOf(deleteId);
                                this.projects.splice(index, 1);
                                swal("User deleted");
                            }).catch(errors=>{
                                console.log(errors);
                                swal("User wasn't deleted");
                            });
                        } else {
                            swal("User wasn't deleted");
                        }
                    });
            }

        }
    };
</script>
<style lang="scss" scoped>
    .form-control{max-width: 500px}
    .select{max-width: 60px}
</style>