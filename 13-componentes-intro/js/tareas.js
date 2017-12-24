Vue.component('mis-tareas',{
    template:`<ul><li v-for="tarea in tareas">{{tarea.title}}</li></ul>`,
    props:['tareas']
});