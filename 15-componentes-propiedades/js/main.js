Vue.component('autor', {
    template: `<div><h2>{{name}}</h2><button @click="cambiarProp">cambiar</button></div>`,
    //como el componente va a utilizar la propiedad se declaran:
    props: ['nombre', 'edad'],
    mounted() {
        //hay proxie, las props son accesibles desde this y son dinamicas
        //el parent se actualiza, se actualiza el componente 
        console.log(this.nombre);
        console.log(typeof this.edad);
    },
    methods: {
        cambiarProp() {
            /*
            Va a avisar, mutar desde un componente.
            El flujo es de parent a children
            */
            //this.nombre = this.nombre.toUpperCase();

            /* Creamos variable dentro del modelo inicializada con
            el valor de la prop*/
            this.name = this.name.toUpperCase();
        }
    },
    data(){
        return {
            name:this.nombre
        }
    }
});

new Vue({
    el: 'main',
    data: {
        autor: 'pepe'
    }
});