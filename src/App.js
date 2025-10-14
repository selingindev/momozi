import './App.css';
import foto from './fotos/momoEeuMURAL5.jpg'
import foto1 from './fotos/momoEeuMural4.jpg'
import f1 from './fotos/f1.jpg'


import Card from './components/card';

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="muralContainer">
          <Card title={"BRANQUICES"} image={foto} description={"Aqui representa todos nosso roles de boy, o famoso coisa de branco, ir na paulista ver cinema, é? Acredito que sim! Assistir Gossip Girl então? KKKKKK O pior que não é tão ruim porque realmente acontece tanta coisa que fica interessante... Mas fazer com você torna bem especial, consigo com isso entender que tenho outros interesses e que gosto de coisas que possivelmente nem daria uma atenção! Obrigado pelas nossas branquices xD <3"}></Card>
          <Card title={"ITAPEVICORE"} image={f1} description={"Nosso rolezin itapeviense raiz, só os role brabo de bike OU a pé indo fazer um pique-nique no parque, quem saber ir no Lopes ver um cinema ou ficar na pista só de marola mesmo! Na real melhor! Pegar um açai delicioso na Angelita no precinho e depois ir na pizza de 13 hahaha. A renda é baixa mas não deixamos de ser felizes, sempre que temos esses momentos é muito prazeroso!!!"}> </Card>
          <Card title={"INHOME"} image={foto1} description={"O bom e velho ficar em casa né! Reza a lenda que somos os especialistas!! Brincadeira, hoje em dia estamos mais ativo, mas até quando fazemos só isso é bom!! Assiste uma série, conversa, joga um uno tomando aquele cantinho podre (bom de mais) de 2L, e claro depois juntos ir fazer aquela comida gotosa para salvar a larica brabab hahaha.  É o momento que podemos ser nos mesmos, sem contar a melhor parte que é ficar apreciando os beijinhos gotosos. Amo estar com você!"}></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
