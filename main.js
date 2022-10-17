const { createApp } = Vue

let app = createApp({
    data: function (){
        return {
            greeting : 'Hello Vue 3!',
            isVisible : false,
        }
    },
    methods : {
        change(){
            this.isVisible = !this.isVisible
        },
        greet(){
            console.log(this.greeting)
        },
    }
})

app.component('login-form' , {
    template : `
        <form @submit.prevent="handleSubmit"> 
            <h2>{{title}}</h2>
            <label for="email">Email</label>
            <input type="email" name="email" v-model="email" >
            <label for="password" v-model="password">Mật khẩu</label>
            <input type="password" name="password" >
            <button type="submit">Login</button>
        </form>
    `,
    data(){
        return{
            title : 'Login Form',
            email : '',
            password : '',
        }
    },
    methods :{
        handleSubmit(){
            console.log('submitted'),
            console.log(this.email),
            console.log(this.password)
        }
    }
})

app.mount('#app')

let app4 = createApp({
    data(){
        return{
            count : 0
        }
    }
})

app4.mount('#app-4')

