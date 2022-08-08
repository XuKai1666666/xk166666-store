<template>
    <div class="container">

        <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish"
            @finishFailed="onFinishFailed">
            <h1 style="text-align:center;">XK1666666-STORE</h1>
            <a-divider style="height: 2px; background-color: #7cb305" />
            <a-form-item label="Username" name="username"
                :rules="[{ required: true, message: 'Please input your username!' }]">
                <a-input v-model:value="formState.username">
                    <template #prefix>
                        <UserOutlined class="site-form-item-icon" />
                    </template>
                </a-input>
            </a-form-item>

            <a-form-item label="Password" name="password"
                :rules="[{ required: true, message: 'Please input your password!' }]">
                <a-input-password v-model:value="formState.password">
                    <template #prefix>
                        <LockOutlined class="site-form-item-icon" />
                    </template>
                </a-input-password>
            </a-form-item>

            <div class="login-form-wrap">
                <a-form-item name="remember" no-style>
                    <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                </a-form-item>
                <a class="login-form-forgot" href="">Forgot password</a>
            </div>

            <a-form-item>
                <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
                    Log in
                </a-button>
                Or
                <router-link to="/register">register now!</router-link>
            </a-form-item>
        </a-form>
    </div>
</template>
<script setup lang="ts">
import { reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
// import { UserService } from '../components/user-service';
// let userservice: UserService = new UserService();
let localStorageUser = eval('(' + localStorage.getItem("users") + ')');
console.log(localStorageUser)
interface FormState {
    username: string;
    password: string;
    remember: boolean;
}
const formState = reactive<FormState>({
    username: '',
    password: '',
    remember: true,
});
const onFinish = (values: any) => {
    if (localStorageUser.some(item => item.username === formState.username)) {
        let usernameindex = localStorageUser.findIndex(item => item.username === formState.username)

        if (localStorageUser[usernameindex].password === formState.password) {
            console.log('Success:', values)
            alert('登录成功！！！')
        }
        else {
            alert('密码错误')
        }
    } else {
        alert('用户不存在！！！')
    }
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
    return !(formState.username && formState.password);
});
</script>
<style scoped>
.container {
    width: 600px;
    height: 500px;
    background-color: rgb(244, 244, 244);
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
}

.login-form {
    width: 400px;
    left: 50%;
    top: 50%;
    position: relative;
    transform: translate(-50%, -50%);
}

.login-form-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.login-form-forgot {
    margin-bottom: 24px;
}

.login-form-button {
    width: 100%;
}
</style>