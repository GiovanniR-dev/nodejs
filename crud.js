console.log('HEllo world');

const miniTwitter = {
    usuarios: [
        {
            Username:'omariosouto',
        }
    ],

    posts: [
        {
            Id: 1,  
            owner:'omariosouto',
            content:'Meu primeiro tweet',
        }
    ]
};

function criaPost(dados){
    miniTwitter.posts.push({
        id: miniTwitter.posts.length+1,
        owner: dados.owner,
        content: dados.content
    })
    

    criaPost({owner:'omariosouto', content:'Segundo post'});
    console.log(miniTwitter.posts); [{owner: 'omariosouto'}]
}

function pegaPosts(){
    return miniTwitter.posts;
    console.log(pegaPosts())
}

function uptadePost(id, novoConteudo){
    const postquevaiseratualizado=pegaPosts().find((posts)=>{
        return posts.id == id;
    }
        
    
    
 )
    console.log(postquevaiseratualizado)


}
uptadePost(1,'Novo post')

function apagaPost(id){
    const listadepostatualizado=pegaPosts().filter((postAtual)=>{
        return postAtual.id !== id;
    })
    console.log(listadepostatualizado)
}
apagaPost(2);
