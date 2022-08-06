<template >
    <div class="container">
        <div class="components-input-demo-presuffix">
            <h1 style="text-align:center;">XK1666666-STORE</h1>
            <a-divider style="height: 2px; background-color: #7cb305" />
            <a-input v-model:value=username placeholder="input username">
                <template #prefix>
                    <user-outlined type="user" />
                </template>
                <template #suffix>
                    <a-tooltip title="不能含有特殊字符，不得超过18位">
                        <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
                    </a-tooltip>
                </template>
            </a-input>
            <br v-if="userservice.CheckUsername(username)" />
            <br v-if="userservice.CheckUsername(username)" />
            <a-alert v-if="userservice.CheckUsername(username) === false" message="用户名不能含有特殊字符，不得超过18位!" type="error"
                show-icon />
            <a-input v-model:value=telephone placeholder="input telephone">
                <template #prefix>
                    <phone-outlined type="phone" />
                </template>
            </a-input>
            <br v-if="userservice.CheckTelephone(telephone)" />
            <br v-if="userservice.CheckTelephone(telephone)" />
            <a-alert v-if="userservice.CheckTelephone(telephone) === false" message="手机号码不合法！" type="error" show-icon />
            <a-input v-model:value=email placeholder="input e-mail">
                <template #prefix>
                    <mail-outlined type="email" />
                </template>
            </a-input>
            <br v-if="userservice.CheckEmail(email)" />
            <br v-if="userservice.CheckEmail(email)" />
            <a-alert v-if="userservice.CheckEmail(email) === false" message="邮箱地址不合法！" type="error" show-icon />
            <a-input-password v-model:value=password1 placeholder="input password">
                <template #prefix>
                    <lock-outlined type="lock" />
                </template>
            </a-input-password>
            <br v-if="password2 == '' || userservice.CheckPassword(password1, password2)" />
            <br v-if="password2 == '' || userservice.CheckPassword(password1, password2)" />
            <a-alert v-if="password2 != '' && userservice.CheckPassword(password1, password2) === false"
                message="两次密码不一样！" type="error" show-icon />
            <a-input-password v-model:value=password2 placeholder="confirm password again">
                <template #prefix>
                    <lock-outlined type="lock" />
                </template>
            </a-input-password>
            <br/>
            <br/>
            <button style="width: 100%; color: #7cb305;" @click="setUser(username, password1, telephone, email)"><strong>注册</strong></button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { UserOutlined, InfoCircleOutlined, LockOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import { UserService } from '../components/user-service';
const username = ref<string>('');
const password1 = ref<string>('');
const password2 = ref<string>('');
const telephone = ref<number>();
const email = ref<string>('');

let userservice: UserService = new UserService();
const uE = ref<string>(userservice.usernameError)
function setUser(username: string, password: string, telephone: number, email: string) {
    userservice.password1 = password1.value;
    userservice.password2 = password2.value;
    userservice.Register(username, password, parseInt(telephone), email)
    // console.log(userservice)
}
</script>
<style>
.container {
    width: 600px;
    height: 500px;
    background-color: rgb(244, 244, 244);
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
}

.components-input-demo-presuffix {
    width: 400px;
    left: 50%;
    top: 50%;
    position: relative;
    transform: translate(-50%, -50%);
}
</style>