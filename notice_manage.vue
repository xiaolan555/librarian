<template>
    <div>
        <div class="container">
            <div class="handle-box" >
                <el-row :span="24" type="flex" justify="space-around">
                    <el-col :span="5">
                        <el-input v-model="keywords" size="mini">
                            <template slot="prepend">keywords:</template>
                        </el-input>
                    </el-col>
                    <el-col :span="5">
                        <el-input class="el-date-picker" v-model="time" size="mini"  placeholder="请选择日期" suffix-icon="el-icon-date">
                            <template slot="prepend">time:</template>
                        </el-input>
                    </el-col>

                     
                    <template>
                                <div class="block">
                                    <el-date-picker name="time" v-model="value1" type="date"   placeholder="选择日期" size="mini" suffix-icon="el-icon-date"> 
                                        
                                    </el-date-picker>
                                </div>
                            </template>

                    <el-col :span="6">
                        <el-button type="primary" size="mini" @click="handleSearch">search</el-button>
                        <el-button size="mini" @click="handleReset1">reset</el-button>
                    </el-col>
                </el-row>
            </div>
            <div class="box-card" shadow="hover" style="background:white; margin-top: 30px;">
            <el-row :gutter="9" :span="24" type="flex"  justify="start" >
                <el-col :offset="0" :span="1">
                    <el-button icon="el-icon-plus" circle size="mini" type="primary" @click="dialogFormVisible1"></el-button>
                </el-col>
                <el-col :offset="0" :span="1">
                    <el-button type="text" size="medium" @click="dialogFormVisible1">Click To Add Announcement</el-button>
                    

                </el-col>
            </el-row>
            <el-table :data="accountData" border class="table" ref="multipleTable" style="margin-top: 5px;text-align: center" size="mini"
                      header-cell-class-name="table-header" @selection-change="handleSelectionChange">
                <el-table-column prop="number" label="number" align="center"></el-table-column>
                <el-table-column prop="title" label="title"></el-table-column>
                <el-table-column prop="content" label="content"></el-table-column>
                <el-table-column prop="account_number" label="account_number"></el-table-column>
                <el-table-column prop="time" label="time"></el-table-column>
                <el-table-column label="operation" width="160" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" @click="handleEdit(scope.$index,scope.row)" style="font-size: small">Edit</el-button>
                        <el-button type="text" @click="handleDelete(scope.$index,scope.row)" style="font-size: small">Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
                <div class="pagination" style="margin-top: 15px">
                    <el-pagination
                            background
                            layout="total, prev, pager, next, jumper"
                            :current-page="query.pageIndex"
                            :page-size="query.pageSize"
                            :total="pageTotal"
                            @current-change="handlePageChange"
                            @size-change="handleSizeChange">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "notice_manage",
        data(){
            return{
                keywords:"",
                time:"",
                accountData:[
                    {
                        number:'7', title:'notice',
                        content:'librarian', account_number:'11111111',
                        time:'2020-01-01'
                    },{
                        number:'6', title:'notice',
                        content:'librarian', account_number:'11111111',
                        time:'2020-01-01'
                    },{
                        number:'5', title:'notice',
                        content:'librarian', account_number:'11111111',
                        time:'2020-01-01'
                    },{
                        number:'4', title:'notice',
                        content:'librarian', account_number:'11111111',
                        time:'2020-01-01'
                    },{
                        number:'3', title:'notice',
                        content:'librarian', account_number:'11111111',
                        time:'2020-01-01'
                    },{
                        number:'2', title:'notice',
                        content:'librarian', account_number:'11111111',
                        time:'2020-01-01'
                    },{
                        number:'1', title:'notice',
                        content:'librarian', account_number:'11111111',
                        time:'2020-01-01'
                    }
                ],
                multipleSelection:[],
                pageTotal: 50,
                query: {
                    address: '',
                    name: '',
                    pageIndex: 1,
                    pageSize: 10
                },
                
            
            }
        },
        created() {
            this.getData();
        },
        methods:{
            getData(){
                this.$axios.get('http://127.0.0.1:8888/')
                    .then(res=>{
                        console.log(res.data.msg);
                        this.accountData=res.list;
                        this.pageTotal = res.pageTotal || 50;
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleEdit(index,row){
                 console.log(row[index]);
                 this.$router.replace("/edit_announcement");
            },
            handleDelete(index,row){
                console.log(row[index]);
                this.$confirm('确定要删除吗？', '提示', {
                    type: 'warning'
                })
                    .then(() => {
                        this.$message.success('删除成功');
                        this.tableData.splice(index, 1);
                    })
                    .catch(() => {});
            },
            handleSearch(){
                this.$set(this.query, 'pageIndex', 1);
                this.getData();
            },
            handleReset1(){
                this.time="";
                this.keywords="";
            },
            handlePageChange(val) {
                this.$set(this.query, 'pageIndex', val);
                this.getData();
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            dialogFormVisible1(){
                    this.$router.replace("/add_announcement");
            },
        }
    }
</script>

<style scoped>
    .handle-box {
        /*margin-bottom: ;*/
    }
</style>