Vue.component('elegir-ganador',{
    props:['listado'],
    //solo puede haber un root element por eso lo paso a div.
    //template:'#elegir-ganador-template',
    methods:{
        elegirGanador(){
            let cantidad=this.participantes.length;
            let indice=Math.floor(Math.random()*cantidad);
            this.ganador=this.participantes[indice-1];
        }
    },
    //El modelo retorna un objeto porque asi no comparte modelo, es un ambito propio la funcion
    data(){
        return{
            ganador:false,
            participantes:this.listado
        }
    }
});

new Vue({
    el:'main',
    data:{
        personas:[
            'Juan','Alicia','Pedro','Javier','Marcos'
        ]
    }
});