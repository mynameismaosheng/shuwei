<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
}

.layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}

.layout-nav {
    width: 420px;
    margin: 0 auto;
}

.layout-assistant {
    width: 300px;
    margin: 0 auto;
    height: inherit;
}

.layout-breadcrumb {
    padding: 10px 15px 0;
}

.layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}

.layout-content-main {
    padding: 10px;
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
</style>
<style scoped>
.top,
.bottom {
    text-align: center;
}

.center {
    width: 300px;
    margin: 10px auto;
    overflow: hidden;
}

.center-left {
    float: left;
}

.center-right {
    float: right;
}
</style>
<template>
    <div class="layout" >
        <Menu mode="horizontal" @on-select="menuSelect" theme="dark" active-name="1">
            <div class="layout-nav">
                <Menu-item name="1">
                    <Icon type="ios-navigate"></Icon>
                    导航一
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="ios-keypad"></Icon>
                    导航二
                </Menu-item>
                <Menu-item name="3">
                    <Icon type="ios-analytics"></Icon>
                    导航三
                </Menu-item>
                <Menu-item name="4">
                    <Icon type="ios-paper"></Icon>
                    导航四
                </Menu-item>
            </div>
            <div class="layout-logo">my-logo</div>
        </Menu>
        <Menu mode="horizontal" @on-select="menuSelect" active-name="1">
            <div class="layout-assistant">
                <Menu-item name="1">二级导航</Menu-item>
                <Menu-item name="2">二级导航</Menu-item>
                <Menu-item name="3">二级导航</Menu-item>
            </div>
        </Menu>
        <div class="layout-content">
            <Row>
                <i-col span="5">
                    <Menu active-name="1-1" on-open-change="menuChange" @on-select="menuSelect" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                导航一
                            </template>
                            <Menu-item name="1-1">选项 1</Menu-item>
                            <Menu-item name="1-2">选项 2</Menu-item>
                            <Menu-item name="1-3">选项 3</Menu-item>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                导航二
                            </template>
                            <Menu-item name="2-1">选项 1</Menu-item>
                            <Menu-item name="2-2">选项 2</Menu-item>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                导航三
                            </template>
                            <Menu-item name="3-1">选项 1</Menu-item>
                            <Menu-item name="3-2">选项 2</Menu-item>
                        </Submenu>
                    </Menu>
                </i-col>
                <i-col span="19">
                    <div class="layout-content-main">
                        <div class="top">
                            <Poptip title="提示标题" content="提示内容" placement="top-start">
                                <Button>上左</Button>
                            </Poptip>
                            <Poptip title="提示标题" content="提示内容" placement="top">
                                <Button>上边</Button>
                            </Poptip>
                            <Poptip title="提示标题" content="提示内容" placement="top-end">
                                <Button>上右</Button>
                            </Poptip>
                        </div>
                        <div class="center">
                            <div class="center-left">
                                <Poptip title="提示标题" content="提示内容" placement="left-start">
                                    <Button>左上</Button>
                                </Poptip>
                                <br>
                                <br>
                                <Poptip title="提示标题" content="提示内容" placement="left">
                                    <Button>左边</Button>
                                </Poptip>
                                <br>
                                <br>
                                <Poptip title="提示标题" content="提示内容" placement="left-end">
                                    <Button>左下</Button>
                                </Poptip>
                            </div>
                            <div class="center-right">
                                <Poptip title="提示标题" content="提示内容" placement="right-start">
                                    <Button>右上</Button>
                                </Poptip>
                                <br>
                                <br>
                                <Poptip title="提示标题" content="提示内容" placement="right">
                                    <Button>右边</Button>
                                </Poptip>
                                <br>
                                <br>
                                <Poptip title="提示标题" content="提示内容" placement="right-end">
                                    <Button>右下</Button>
                                </Poptip>
                            </div>
                        </div>
                        <div class="bottom">
                            <Poptip title="提示标题" content="提示内容" placement="bottom-start">
                                <Button>下左</Button>
                            </Poptip>
                            <Poptip title="提示标题" content="提示内容" placement="bottom">
                                <Button>下边</Button>
                            </Poptip>
                            <Poptip title="提示标题" content="提示内容" placement="bottom-end">
                                <Button>下右</Button>
                            </Poptip>
                        </div>
                        <Form :model="formItem" :label-width="80">
                            <Form-item label="输入框">
                                <Input v-model="formItem.input" placeholder="请输入"></Input>
                            </Form-item>
                            <Form-item label="选择器">
                                <Row>
                                    <Col span="11">
                                    <Select v-model="formItem.select" placeholder="请选择">
                                        <Option value="beijing">北京市</Option>
                                        <Option value="shanghai">上海市</Option>
                                        <Option value="shenzhen">深圳市</Option>
                                    </Select>
                                    </Col>
                                </Row>
                            </Form-item>
                            <Form-item label="日期控件">
                                <Row>
                                    <Col span="11">
                                    <Date-picker type="date" placeholder="选择日期" v-model="formItem.date"></Date-picker>
                                    </Col>
                                    <Col span="2" style="text-align: center">-</Col>
                                    <Col span="11">
                                    <Time-picker type="time" placeholder="选择时间" v-model="formItem.time"></Time-picker>
                                    </Col>
                                </Row>
                            </Form-item>
                            <Form-item label="单选框">
                                <Radio-group v-model="formItem.radio">
                                    <Radio label="male">男</Radio>
                                    <Radio label="female">女</Radio>
                                </Radio-group>
                            </Form-item>
                            <Form-item label="多选框">
                                <Checkbox-group v-model="formItem.checkbox">
                                    <Checkbox label="吃饭"></Checkbox>
                                    <Checkbox label="睡觉"></Checkbox>
                                    <Checkbox label="跑步"></Checkbox>
                                    <Checkbox label="看电影"></Checkbox>
                                </Checkbox-group>
                            </Form-item>
                            <Form-item label="开关">
                                <i-switch v-model="formItem.switch" size="large">
                                    <span slot="open">开启</span>
                                    <span slot="close">关闭</span>
                                </i-switch>
                            </Form-item>
                            <Form-item label="滑块">
                                <Slider v-model="formItem.slider" range></Slider>
                            </Form-item>
                            <Form-item label="文本域">
                                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
                            </Form-item>
                            <Form-item>
                                <Button type="primary" @click="submitForm">提交</Button>
                                <Button type="ghost" style="margin-left: 8px">取消</Button>
                            </Form-item>
                        </Form>
                    </div>
                </i-col>
            </Row>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formItem: {
                input: '',
                select: '',
                radio: 'male',
                checkbox: [],
                switch: true,
                date: '',
                time: '',
                slider: [20, 50],
                textarea: ''
            }
        }
    },
    methods: {
        menuSelect(name) {
            this.$Message.info("这个菜单的name:"+name);
        },
        menuChange(arr) {
            this.$Message.info("弹下children"+arr);
        },
        submitForm() {
            this.$Message.info('这是提交的按钮');
        }
    }
}
</script>
