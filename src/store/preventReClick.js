import Vue from 'vue'
 
const preventReClick = Vue.directive('preventReClick', {
    inserted: function (el, binding) {
        el.addEventListener('click', () => {
            if (!el.disabled) {
                el.disabled = true
                setTimeout(() => {
                    el.disabled = false
                }, binding.value || 300)
            }
        })
    }
});
 
export { preventReClick }