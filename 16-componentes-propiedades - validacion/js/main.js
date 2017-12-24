Vue.component('candidato', {
    //props: ['nombre', 'correoe','imagen'],
    props:{
        nombre:{
            type:[String,Array],
            require:true
        },
        correoe:{
            type:String,
            default:'bitoman@gmail.com'
        },
        imagen:String,
        //valores por defecto en propiedades compuestas hay que retornar funcion
        direccion:{
            type:Object,
            default(){
                return {
                    ciudad:'Oviedo'
                }
            }
        }
    },
    //template:'#candidato-template'
    template:'#candidato-template'
});

// noinspection JSAnnotator
new Vue({
    el: 'main',
    mounted (){
        this.obtenerCandidatos();
    },
    data: {
        candidatos: []
    },
    methods:{
        obtenerCandidatos(){
            axios.get('https://randomuser.me/api/?results=100')
            .then((response)=>{
                this.candidatos=response.data.results;
            });
        }
    }
});