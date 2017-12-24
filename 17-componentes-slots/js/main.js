Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: '#alerta-template'
});

// noinspection JSAnnotator
new Vue({
    el: 'main'
});