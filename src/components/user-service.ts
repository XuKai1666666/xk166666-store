import { User } from "./user";
export class UserService {
    password1: string = '';
    password2: string = '';
    users: Array<User> = [
        { username: 'admin', password: 'admin', telephone: 13665801524, email: '2684024189@qq.com' },
    ];
    //初始化locastorage
    InitializeLocalStorageUser() {
        if (!window.localStorage.getItem('users')) {
            window.localStorage.users = JSON.stringify(this.users)
        }
    }
    //注册
    Register(username: string, password: string, telephone: number, email: string) {
        // console.log('telephone数据类型')
        // console.log(typeof telephone)
        // console.log('---------')
        // console.log('email：' + this.CheckEmail(email))
        // console.log('telephone：' + this.CheckTelephone(telephone))
        // console.log('username：' + this.CheckUsername(username))
        // console.log('第一次密码：' + this.password1 + '第二次密码：' + this.password2 + this.CheckPassword(this.password1, this.password2))
        if (username != '' && this.password1 != '' && telephone != undefined
            && this.IsUsernameExists(username, this.users) && this.IsTelephoneExists(telephone, this.users) && this.IsEmailExists(email, this.users)
            && this.CheckUsername(username) && this.CheckTelephone(telephone) && this.CheckEmail(email) && this.CheckTwotimePassword(this.password1, this.password2)
            && this.CheckPassword(this.password1)) {
            this.users.push({
                username: username,
                password: password,
                telephone: telephone,
                email: email
            })
            // console.log('用户入组')
            // console.log(this.users)
            // console.log('---------')
            alert('注册成功！！！')
            this.SetlocalStorageUser([{
                username: username,
                password: password,
                telephone: telephone,
                email: email
            },])
        } else {
            alert('请输入正确信息！！！')
        }
    }

    //新增用户对象到localstorage
    SetlocalStorageUser(users: Array<User>) {
        // console.log('数据1：' + window.localStorage.getItem('users'))
        // console.log('数据2：' + eval('(' + window.localStorage.getItem('users') + ')'))
        // console.log('数据3：' + this.users)
        // console.log('数据4：' + users)
        let localUser: Array<User> = eval('(' + window.localStorage.getItem('users') + ')')
        // console.log(localUser)
        // console.log(this.users)
        // console.log(JSON.stringify(users))
        window.localStorage.users = JSON.stringify(localUser.concat(users))
        // window.localStorage.users = JSON.stringify(this.users || users)
        // window.localStorage.users = JSON.stringify(window.localStorage.getItem('users') || users)
    }
    //用户名词是否已存在
    IsUsernameExists(username: string, users: Array<User>) {
        if (users && users.some(item => item.username === username)) {
            return false
        }
        else {
            return true
        }
    }
    //手机号是否存在
    IsTelephoneExists(telephone: number, users: Array<User>) {
        if (users && users.some(item => item.telephone === telephone)) {
            return false
        }
        else {
            return true
        }
    }
    //邮箱是否存在
    IsEmailExists(email: string, users: Array<User>) {
        if (users && email != '' && users.some(item => item.email === email)) {
            return false
        }
        else {
            return true
        }
    }
    //用户名合法验证
    CheckUsername(username: string) {
        var pattern = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
            str = username;
        // console.log(pattern.test(str));
        if (str == '' || pattern.test(str)) {
            return true
        }
        return false
    }
    //手机合法验证
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
    //邮箱合法验证
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
    //注册时密码二次确认
    CheckTwotimePassword(password1: string, password2: string) {
        if (password1 != '' && password2 != '' && password1 == password2) {
            return true
        }
        // alert('两次密码不一样！')
        return false
    }
    //注册时密码是否合规
    CheckPassword(password1: string) {
        var pattern1 = /[0-9]+/
        var pattern2 = /[A-Z]+/
        var pattern3 = /[a-z]+/
        var pattern4 = /[^%&',;=?$\x22]+/
        var str = password1;
        // console.log('telephone：' + telephone + '00000' + pattern.test(str));
        // console.log(pattern.test(str));
        if (str != '' && pattern1.test(str) && pattern2.test(str) && pattern3.test(str) && pattern4.test(str)) {
            return true
        }
        // alert('手机号码不合法！')
        return false
    }
}