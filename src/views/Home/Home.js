import { mapState } from "vuex";

export default {
    name: 'Home',
    computed: {
        ...mapState(['user'])
    },
    created() {
        console.log(this.user)
    }
}