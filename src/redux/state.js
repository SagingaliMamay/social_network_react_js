//creation state object
// in future I'll have a lot of data like postsData, dialogData, messageData etc...
// to export all this data rigth way I create STATE OBJECT and I put all data into this object

let state= {

postsData : [
    {id:1,post:'You are super React Developer',likes:150},
    {id:2,post:"You are a really good learner",likes:15},
    {id:3,post:'I am quick learner',likes:180},
    {id:4,post:'Bla bla',likes:180},
    {id:5,post:'la la la ',likes:180}
  ],
  dialogsData : [
    {id:1,name:'Dimych'},
    {id:2,name:'Lena'},
    {id:3,name:'Igor'},
    {id:4,name:'Sasha'},
    {id:5,name:'Ivan'}
  ],
  
  messageData : [
    {id:1,message:'Hi!'},
    {id:2,message:'I am a super coder!'},
    {id:3,message:'I am extremly disciplined!'},
    {id:4,message:'I create my life!'},
    {id:5,message:'I am a game changer!'}]
  
}

export default state;