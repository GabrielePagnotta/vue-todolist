var app = new Vue({
    el: '#root',
    data: {
      
        input:"",

        list:[
            {text:"pizza",fatto:false},
            {text:"pasta",fatto:false},
            {text:"mandolino",fatto:false},
        ],

        didit:[],
      
        
      },

      beforeUpdate(){
        this.list.forEach((element,index)=> {
          if(element.fatto == true){
            this.didit.push(element);
            this.list.splice(index, 1)
          }
        });
      },
      methods:{


        input:function(){
           return this.list.push({text:""})
        },
       
        remove(index){
            return this.list[index].splice(index, 1)
        },
        remove2(index){
          return this.didit[index].splice(index, 1)
      },

        dclass(index){
          
          if( this.list[index].fatto == false ){
            this.list[index].fatto = true
            
          }else{
            this.list[index].fatto = false}
        },

        

        },

      
})


