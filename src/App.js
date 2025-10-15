import './App.css';
import foto from './fotos/momoEeuMURAL5.jpg'
import foto1 from './fotos/momoEeuMural4.jpg'
import f1 from './fotos/f1.jpg'
import centrao from './fotos/centrao.jpeg'
import sorrisoMomo from './fotos/sorrisoMomo.jpg'
import momoziSolo from './fotos/momoziSolo.jpeg'
import balao from './fotos/balao.png'
import balao2 from './fotos/balao2.png'


import Card from './components/card';

function App() {
  return (
    <div className="App">
          <div className='background2'>
        <div className='centralCard'>
          <div className='topSide'>
           <h1> PARABÉNS SOSO!</h1>
          </div>
          <div className='middleSide'>
            <img className="balao" src={balao}/>
            <img className='centralImage' src={momoziSolo} alt="foto" />
             <img className="balao2" src={balao2}/>
          </div>
          <div className='downSide'>
            <h2>CELEBRAMOS HOJE SEUS 19 ANOS!! TE AMO MUITO!!!</h2>
          </div>
        </div>
      </div>
      <div className="background">
        <div className='containerGrid'>
          <div className="muralContainer">
            <Card title={"BRANQUICES"} image={foto} description={"Aqui representa todos nosso roles de boy, o famoso coisa de branco, ir na paulista ver cinema, é? Acredito que sim! Assistir Gossip Girl então? KKKKKK O pior que não é tão ruim porque realmente acontece tanta coisa que fica interessante... Mas fazer com você torna bem especial, consigo com isso entender que tenho outros interesses e que gosto de coisas que possivelmente nem daria uma atenção! Obrigado pelas nossas branquices xD <3"}></Card>
            <Card title={"ITAPEVICORE"} image={f1} description={"Nosso rolezin itapeviense raiz, só os role brabo de bike OU a pé indo fazer um pique-nique no parque, quem saber ir no Lopes ver um cinema ou ficar na pista só de marola mesmo! Na real melhor! Pegar um açai delicioso na Angelita no precinho e depois ir na pizza de 13 hahaha. A renda é baixa mas não deixamos de ser felizes, sempre que temos esses momentos é muito prazeroso!!!"}> </Card>
            <Card title={"INHOME"} image={foto1} description={"O bom e velho ficar em casa né! Reza a lenda que somos os especialistas!! Brincadeira, hoje em dia estamos mais ativo, mas até quando fazemos só isso é bom!! Assiste uma série, conversa, joga um uno tomando aquele cantinho podre (bom de mais) de 2L, e claro depois juntos ir fazer aquela comida gotosa para salvar a larica brabab hahaha.  É o momento que podemos ser nos mesmos, sem contar a melhor parte que é ficar apreciando os beijinhos gotosos. Amo estar com você!"}></Card>
          </div>
          <div className='downMuralContainer'>
            <Card title={"CENTRÃO"} image={centrao} description={"Nossos roles no centro sujo!!! Sempre dando aquela passada no vale pra eu andar um pouquinho enquanto conversamos. Dai vamos para uns reggae, umas balada aleatória na Augusta, ou sei lá, no final a gente sempre acha algo daora para fazer. E isso é muito foda, saber que pude apresentar para você mais esse ambiente e você sem mais nem menos curtiu de primeira! Lembro até hoje nosso primeiro reggae no Peba!! Te amo."}></Card>
            <Card title={"VOCÊ"} image={sorrisoMomo} description={"E aqui por último no meu mural da importância... Você!!! Por tudo! Por todos nossos momentos já citados anteriormentes, o que vamos viver! Por isso quero estar com você independente das situações. Eu te amo muito e quero te desejar meus parabéns pelos 19 anos, já está a real veinha já!!! Tá até pagando uns boleto fudido já! Te admiro muito por você ser quem você é e fico ainda mais feliz sabendo que você está me escolhendo para estar ao seu lado no meio dessa caminha louca. Obrigado amor te amo."}></Card>
          </div>
        </div>
      </div>
  
    </div>
  );
}

export default App;
