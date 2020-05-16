import { mapActions } from 'vuex'

export default {
    name: 'login',

    data() {
        return {
            username: '',
            password: ''
        }
    },

    methods: {
        ...mapActions(['loginUser']),
        async login() {
            try {
                await this.loginUser({
                    username: this.username,
                    password: this.password
                })
                this.$router.push({name: 'Home'})

            } catch(error) {
                alert('Error login')
                console.log('Error login', error)
            }
        }
    }
}