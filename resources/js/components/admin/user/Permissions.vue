<template>
    <div>
        <div class="row bg-title">
            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <h4 class="page-title">Permission List</h4>
            </div>
            <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                <ol class="breadcrumb">
                    <li><a href="#">Dashboard</a></li>
                    <li class="active">Permission list</li>
                </ol>
            </div>
            <!-- /.col-lg-12 -->
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="white-box">
                    <router-link to="/admin/add/permissions" class="btn btn-outline-success btn-small"><i class="fa fa-plus"></i>&nbsp; Add New Permission</router-link>
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
                                <td class="text-center">{{project.name}}</td>
                                <td class="text-center">{{project.resource}}</td>
                                <td class="text-center">
                                    <button class="btn btn-small btn-warning ml-sm-1"><i class="fa fa-pencil"></i></button>
                                    <button class="btn btn-small btn-danger ml-sm-1"><i class="fa fa-trash"></i></button>
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
                {label: 'Name', name: 'name' },
                {label: 'Type', name: 'type'},
                {label: 'Operations', name: 'operations' }
            ];
            columns.forEach((column) => {
                sortOrders[column.name] = -1;
            });
            return {
                permissions: [],
                select: [],
                allSelected: false,
                userIds: [],
                loading: false,
                projects:[],
                columns: columns,
                sortKey: 'name',
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

        },

        mounted () {
            this.getProjects();
        },

        created () {
            //
        },

        methods: {
    getProjects(url = '/admin/permission') {
        this.tableData.draw++;
        this.loading = true;
        axios.get(url, {params: this.tableData})
            .then(response => {
                this.loading = false;
                let data = response.data;
                console.log(response);
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
            selectAll() {
                this.userIds = [];

                if (! this.allSelected) {
                    for (permission in this.permissions) {
                        this.userIds.push(permission.id);
                    }
                }
            },
            select() {
                this.allSelected = false;
            }
        }
    };
</script>
<style lang="scss" scoped>
    .form-control{max-width: 500px}
    .select{max-width: 60px}
</style>
