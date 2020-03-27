Vue.filter('capitalize', (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1)
})

let vm = new Vue({
    el: "#todos",
    data: {
        taches: [
            {"id": 1, "int":1, "todo": "Tâche 1", "done": true },
        ],
        ajout: '',
        delete: true,
        select:true,
        tachedone: false,

    },

    methods: {
        addEll: function () {
            this.taches.push({
                id: this.id++,
                int: 1,
                todo: this.ajout,   
                done: true             
            });
        },
        supEll: function(index) {
            this.taches.splice(index, 1)
            this.delete = !this.delete
          },
        toggle(index) {
            this.taches[index].done = !this.taches[index].done

            // this.$click = false
            // if(this.$click = 0){
                this.tachedone = !this.tachedone 
            //      this.$click++
            //  }
            // return this.$click
                    
        },
        supD: function(){
            this.taches.forEach(() => {
                this.taches.pop()              
            });
        },
        toggleAll: function (index){
            this.taches[index].done = !this.taches[index].done
        }


    },
    computed: {
        total: function(){
            this.$total = 0
            this.taches.forEach((obj, i) => {
                this.$total += obj.int                
            });
            return this.$total
        },

        

        
    }
})