import {ref} from '@vue/composition-api'
function couterIncrement(value){
    const counter = ref(value);
    function add() {
        counter.value++;
    }
    return{counter,add}
}
export default {couterIncrement}