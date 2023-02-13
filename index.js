const  prompt  =  require ( 'prompt-sync' )
const  css  =  prompt ( )

const  comando  =  ( entrada )  =>  {
    deixe  a saída  =  [ ]
    while  ( input  !=  'sair' )  {
        saída . empurre ( entrada ) ;
        input  =  css ( "Digite a Proprieade Quer Salvar ou Digite Sair(Para finalizar a aplicação): " )
    }
    let  reacao  =  output . classificar ( ) . juntar ( "\n" )
    console . log ( reacao )
}
comando ( )