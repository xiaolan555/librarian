<template>
    <div>
        <div class="container">
            <div class="handle-box">
                <el-row :span="24"  >
                    <el-col :span="5" >
                        <el-input  v-model="title" size="mini">
                            <template slot="prepend">title:</template>
                        </el-input>
                    </el-col>
                </el-row>
            </div>
            <div class="handle-box2">
                <el-row :span="24">
                    <el-col :span="24" >
                        <el-input v-model="content" size="mini" type="textarea"  rows="26" >
                            <template slot="prepend">content:</template>
                        </el-input>
                    </el-col>
                </el-row>
            </div>
             <div class="handle-box3">
                <el-row>
                    <el-button type="primary" size="mini" @click="handleAnnounce()">announce</el-button>
                    <el-button size="mini" @click="handleCancel()">cancel</el-button>   
                </el-row> 
            </div>
        </div>
    </div>    
</template>

<script>
    export default {
        name: "edit_announcement",
        data() {
            return {
                title:"",
                content:"",
            };
        },
        methods: {
            handleAnnounce(){
                this.$confirm('是否发布公告？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                    type: 'success',
                    message: '发布成功!'
                    });
                }).catch(() => {
                    this.$message({
                    type: 'info',
                    message: '已取消发布'
                    });          
                });
            },
            handleCancel(){
                this.$router.replace("/notice_manage")
            },
        }
    }

</script>

<style scoped> 
    .handle-box{
        margin-top: 40px;
        margin-bottom: 10px;  
    }
    .handle-box2{
        width: 1000px;
        height: 400px;
        margin-bottom: 100px;  
    }
    .handle-box3{
        margin-left: 650px;
    }
    
</style>