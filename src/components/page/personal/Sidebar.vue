<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo " unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            {{ item.title }}
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>
                        {{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
       
    </div>
</template>

<script>

    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-user',
                        index: 'brief',
                        title: '简介'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'userCenter',
                        title: '用户设置',
                        subs: [
                            {
                                index: 'modifyUser',
                                title: '修改用户'
                            },
                            {
                                index: 'modifyPassword',
                                title: '修改密码'
                            }
                        ]
                    },
                    {
                        icon:'el-icon-upload',
                        index:'room',
                        title:'订单管理'
                    },
                    {
                        icon:'el-icon-minus',
                        index:'order',
                        title:'评价'
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }

</script>

<style scoped>

    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 100px;
        top: 100px;
        bottom:0;
        
    }
    .sidebar > ul {
        height:100%;
    }
    .el-menu{
        background: #fff;
    }
</style>
