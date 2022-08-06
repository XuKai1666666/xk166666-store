import { User } from "./user";
export class UserService {
    password1: string = '';
    password2: string = '';
    usernameError: string = '';
    users: User[] = [
        { username: 'admin', password: 'admin', telephone: 13665801524, email: '2684024189@qq.com' },
    ];
    //注册
    Register(username: string, password: string, telephone: number, email: string) {
        // console.log('telephone数据类型')
        // console.log(typeof telephone)
        // console.log('---------')
        console.log('email：' + this.CheckEmail(email))
        console.log('telephone：' + this.CheckTelephone(telephone))
        console.log('username：' + this.CheckUsername(username))
        console.log('第一次密码：' + this.password1 + '第二次密码：' + this.password2 + this.CheckPassword(this.password1, this.password2))
        if (username != '' && this.password1 != '' && telephone != undefined
            && this.CheckUsername(username) && this.CheckTelephone(telephone) && this.CheckEmail(email) && this.CheckPassword(this.password1, this.password2)) {
            this.users.push({
                username: username,
                password: password,
                telephone: telephone,
                email: email
            })
            console.log('用户入组')
            console.log(this.users)
            console.log('---------')
            alert('注册成功！！！')
        } else {
            alert('请输入正确信息！！！')
        }

    }

    CheckUsername(username: string) {
        var pattern = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
            str = username;
        // console.log(pattern.test(str));
        if (str == '' || pattern.test(str)) {
            return true
        }
        return false
    }
    CheckTelephone(telephone: number) {
        var pattern = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
        if (telephone == undefined) {
            var str = ''
        } else {
            str = String(telephone);
        }
        // console.log('telephone：' + telephone + '00000' + pattern.test(str));
        // console.log(pattern.test(str));
        if (str == '' || pattern.test(str)) {
            return true
        }
        // alert('手机号码不合法！')
        return false

    }
    CheckEmail(email: string) {
        var pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
            str = email;
        // console.log(pattern.test(str));
        if (str == '' || pattern.test(str)) {
            return true
        }
        // alert('邮箱地址不合法！')
        return false

    }
    CheckPassword(password1: string, password2: string) {
        if (password1 == password2) {
            return true
        }
        // alert('两次密码不一样！')
        return false
    }
}