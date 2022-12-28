# Clean Code e Clean Architecture.(turma 8)
<p>
Repositório utilizado para armazenar esboços de códigos realizados 
no curso ministrado por Rodrigo Branas.
</p>

#### Setup:
###### Tools:
    node: https://nodejs.org
    nvm: https://github.com/nvm-sh/nvm
#### Steps:
##### Inicializando projeto node: 
    #npm init -y
    Obs: verificar se o arquivo de dependências(package.json) e scripts de execução do TypeScript e Testes foram criados.
##### TypeScript Install: utilizar npm ou yarn.
    Obs: Caso não tenha o yarn
    #npm install --global yarn
##### Testing Dependencies:(npm ou yarn)
    #yarn add typescript jest @types/jest ts-node ts-jest        
    #npm install typescript jest @types/jest ts-node ts-jest   
##### Criar Arquivo tsconfig.json
    #npx tsc --init        
##### Configuração do Jest:
    #npx ts-jest config:init
##### Ajustar tsconfig.json
```javascript            
{
    "compilerOptions": {
    "incremental": true,
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
    },
    "include": [
        "src",
        "test"
    ]
}
````
##### Testando se tudo deu certo.
    Criar pastas:
        /src 
        /test 
    Criar arquivo dentro da pasta test:
        Circle.test.ts

````ecmascript 6
import Circle from "../src/Circle";

test("Should calculate the area of circle", function () {
    const circle = new Circle(2);
    expect(circle.getArea()).toBe(12.566370614359172);
});
````
    Criar arquivo dentro da pasta src:
        Circle.ts
````ecmascript 6
export default class Circle {

   constructor (readonly radius: number) {
   }

    getArea() : number {
        return 2 * Math.PI * this.radius;
    }
}
````
##### Executar:
    #npx jest    
    Obs: se os testes executaramm com sucesso, esta tudo certo.
    #npx jest --coverage 
    Obs: Coverage command file local /coverage/lcov-report/index.html
##### Resultados Esperados:
    * Ter um olhar mais crítico e profissional em relação ao desenvolvimento de software, elevando seu nível de maturidade e buscando sempre 
      criar um ambiente de qualidade;
    * Saber aplicar diversas técnicas de Clean Code e Refactoring com o objetivo de tornar o código mais limpo e comprrensível;
    * Entender como desenvolver utilizando Test-Driven Development;
    * Dominar os princípios da Programação Orientada a Objetos;
    * Saber como estruturar a arquitetura da sua aplicação utilizando Clean Architecture e Domain-Driven Design;
    * Conhecer vários Design Patterns e entender como eles podem ajudar a criar códigos mais desacoplados e manutenível;
    * Aplicar os SOLID principles na prática;
    * Entender aonde faz sentido aplicar EventSourcing e CQRS;
    * Se tornar uma pessoa muiuto mais conffiante no dia a dia de trabalho, 
      discussões técnicas, entrevistas de emprego e em outras situações onde seja 
      necessário discutir sobre arquitetura de software;


    

#####Lista de livros recomendados:

    Clean Code: 
        https://www.amazon.com.br/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1C1LR8F75FMX3&keywords=clean+code&qid=1647211681&sprefix=clean+cod%2Caps%2C267&sr=8-1&ufe=app_do%3Aamzn1.fos.4bddec23-2dcf-4403-8597-e1a02442043d
    Refactoring: 
        https://www.amazon.com.br/Refactoring-Improving-Existing-Addison-Wesley-Signature-ebook/dp/B07LCM8RG2/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1KCBU11B6EJNY&keywords=refactoring&qid=1647211692&sprefix=refactor%2Caps%2C184&sr=8-2&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147
    Working Effectively with Legacy Code:
        https://www.amazon.com.br/Working-Effectively-Legacy-Code-English-ebook/dp/B005OYHF0A/ref=sr_1_1?crid=2XRIRTBT4GUBW&keywords=working+effectively+with+legacy+code&qid=1647211708&sprefix=working+effectively%2Caps%2C181&sr=8-1&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147
    Clean Architecture: 
        https://www.amazon.com.br/Clean-Architecture-Craftsmans-Software-Structure-ebook/dp/B075LRM681/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=26Z21WEYS5FZS&keywords=clean+architecture&qid=1647211718&sprefix=clean+architectu%2Caps%2C182&sr=8-1&ufe=app_do%3Aamzn1.fos.4bddec23-2dcf-4403-8597-e1a02442043d
    Patterns of Enterprise Application Architecture: 
        https://www.amazon.com.br/Patterns-Enterprise-Application-Architecture-Martin/dp/0321127420/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=34NOSXDMJ184T&keywords=patterns+of+enterprise+application+architecture&qid=1647211732&sprefix=patterns+of+enterprise+application+architectu%2Caps%2C183&sr=8-1&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147
    Implementing Domain-Driven Design: 
        https://www.amazon.com.br/Implementing-Domain-Driven-Design-English-Vaughn-ebook/dp/B00BCLEBN8/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1L4M1SEQK6FWC&keywords=implementing+domain-driven+design&qid=1647211746&sprefix=implementing+domain-driven+design%2Caps%2C173&sr=8-1&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147
    Design Patterns: 
        https://www.amazon.com.br/Design-Patterns-Object-Oriented-Addison-Wesley-Professional-ebook/dp/B000SEIBB8/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=31O9IGHNFGE8I&keywords=design+patterns&qid=1647211761&sprefix=design+pattern%2Caps%2C188&sr=8-2&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147
    Patterns, Principles and Practices of Domain-Driven Design: 
        https://www.amazon.com.br/Patterns-Principles-Practices-Domain-Driven-Design/dp/1118714709/ref=sxts_rp_s1_0?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=31O9IGHNFGE8I&cv_ct_cx=design+patterns&keywords=design+patterns&pd_rd_i=1118714709&pd_rd_r=68f35d70-0e11-4052-9b33-72fd368e0e21&pd_rd_w=VBfal&pd_rd_wg=RA5SF&pf_rd_p=2ed3c95d-fb99-4567-8b9a-89b24a300075&pf_rd_r=CD05B2P7AKBDYQRWY8N7&psc=1&qid=1647211771&sprefix=design+pattern%2Caps%2C188&sr=1-1-f0029781-b79b-4b60-9cb0-eeda4dea34d6&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147
    Extreme Programming: 
        https://www.amazon.com.br/Extreme-Programming-Explained-Embrace-English-ebook/dp/B00N1ZN6C0/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2YMSOJ2JPV55O&keywords=extreme+programming&qid=1647211916&sprefix=extreme+programmi%2Caps%2C223&sr=8-1&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147
    Microservices Patterns: 
        https://www.amazon.com.br/Microservice-Patterns-examples-Chris-Richardson/dp/1617294543/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1BCDZ332GNCC3&keywords=microservices+patterns&qid=1647211958&sprefix=microservices+pattern%2Caps%2C182&sr=8-1&ufe=app_do%3Aamzn1.fos.4bddec23-2dcf-4403-8597-e1a02442043d
    xUnit Patterns: 
        https://www.amazon.com.br/Xunit-Test-Patterns-Refactoring-Code/dp/0131495054/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1656968887&sr=8-1
    Domain-Driven Design: 
        https://www.amazon.com.br/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215/


# Aula 1:
    O código-fonte é tão bagunçado que você não sabe nem por onde 
    começar a desenvolver uma nova funcionalidade ou corrigir um defeiro?
##### Priorizar códigos que só uma pessoa saber mexer.
    Disseminar conhecimento respeitando os níveis técnicos.
    fazer pair programming, centralização de conhecimento não é legal.
##### Você tem medo de mexer em uma coisa e etragar outra? tem medo detrabalhar no core domain do projeto ? (se você tem medo não refatora)
    Testabilidade é um fator essencial para pontos complexos e sensíveis ao negócio.
 ![Alt text](src/images/bobs-memes1.jpg?raw=true "Title")
 
##### Existem mais defeitos para corrigir do que novas funcionalidades para implementar.
    Como manter uma pessoa feliz que só corrige defeitos, dívidas acumuladas que não foram pagas(bugs)?
    Temos que ser profissionais e éticos com nosso trabalho, e o fato de não refatorarmos e testarmos afetam 
    resultados que estamos tentando buscar.
    Não podemos aceitar certos comentários de pessoas que não entender nosso trabalho, 
    Você iria dizer para um médico como ele deve operar alguém?]
    Dar opinião de um assunto que não entendo, não devemos aceitar opinião de quem não tem noção
    mas devemos ouvir e explicar que não faz sentido.  
##### Trabalhar sob pressão
    Precisando parar atividades no meio para fazer outra coisa mais 'urgente' 
    e eventualmente até te pedem para fazer hora extra?
    Muitas demandas pode ser bom pois o negócio esta crescendo, mas
    sob pressão podemos tomar decisões erradas, horas extras sim, mas tudo tem limite.
##### Ninguém tem coragem de fazer deploy na sexta-feira:
    Você tem coragem de fazer um deploy a qualquer hora do dia ?
    esse é um bom teste de maturidade. 
    Quando se tem Testabilidade e Resiliência.
    
##### Por quê isso tudo acontece ?
    Forma pelo qual o código foi implementado.
    Temos que nos atentar a indentação, nomes que fazem sentido
    condições de cadeias de IFs, quantidade de linhas.
    Algumas coisas de forma inconsciente diz que o código esta ruim.

    Qualidade de código não é sinonimo de sucesso. (Você pode fracassar comercialmente)
    Mas ter um código ruim, afetam no custo, retenção, manutenção.
    
##### Passamos mais tempo LENDO o código do que ESCREVENDO:
    Ja virou a noite codando por conta de um incidente ?
    as vezes uma linha resolve esse problema, mas porque levamos a noite toda?
    porque o gargalo não esta na digitação e sim (aonde e como), o ponto exato do codigo para resolver.
    
##### Bob: nosso desafio é reduzir ou pelo menos manter o esforço de desenvolvimento constante com o passar do tempo:
    Na 1º semana do projeto passamos bastante tempo codando, mas a medida que o tempo passa
    codamos menos, a produtividade é reduzida, quanto mais antigo o projeto menor a produtividade
    para virar esse jogo é investir em refactoring, testes, modelagem estrategica desacoplando negocios (DDD)
    mas da trabalho sair disso.

##### Existe um paradoxo entre dois valores, COMPORTAMENTO e ESTRUTURA:
    Comportamento = stakeholders, ganham ou economizam dinheiro. 
    
    Se depender do cliente não vamos refatorar ou testar, criar microservices, containers, usar DDD o cliente
    ou o stakeholder não estão interessados, oq importa para ele é escopo e funcionalidades.
    Mas como ela não é da área e não domina as tecnicas, escrever só comportamento a tendência é que 
    a estrutura não vai suportar.
    
    Temos que equilibrar a Estrutura pois é oq mantém o projeto de pé sem colapsar.
    Quando custo x maior receita, rotatividade, produtividade, defeitos. 

##### Pense na estrutura como:
    Métodos, Classes, Módulos, Serviços 
    e a Relação entre cada um deles. 

##### Quanto mais comportamento adicionado, mais estrutura:
    Quanto mais comportamento for adicionado ao software, mais estrutura será necessária para suportá-lo
    de forma eficaz.
    Ex:SOLID, Design Patterns DDD, POO = como trazer ESTRUTURA para o COMPORTAMENTO.

##### Existe uma disputa por comportamento de um lado e estrutura de outro: 
    Sempre vai ter uma força fazendo com que você abra mão de uma melhoria. 
    Não tente explicar para alguém que não é da área a importancia da estrutura
    ela não vai entender, devemos incorporar isso na estimativa.

    Menos produtividade = menos motivação
    Ninguém se sente bem fazendo gambiarra
    Já pediu demissão alguma vez porque não aguentava mais o projeto?

##### Qualidade do código afeta a rotatividade.

    O que motiva uma pessoa? algumas são: 
    * Dinheiro;
    * Ambiente de trabalho;
    * Crescimento profissional;
    Esses 3 fatores equilibrados motivam equipe e refletem nos resultados.
    
    Para quem lidera um time.
    * Esse tipo de problema afeta a empresa inteira.

#### Como funcionam as estimativas onde você trabalha?
    * Esforço X Data Entrega: são coisas diferentes.
    * Somar na estimativa a incerteza com códigos ruins.
      Obs: No decorrer do desenvolvimento podemos encontrar imprevistos. 
      e a Incerteza faz com que a estimativa seja extremamente elástica.
    * Acertar estimativas tem a ver com o nível de controle sobre o ambiente
      estruturas frágeis nos levam a falhas de estimativas.
    
    * Clientes vão reportar cada vez mais problemas =  ambiente mais caótico.
    * Ao longo das releases a produtividade cai, pois perdemos tempo procurando 
      aonde devemos realizar o ajuste.

#### A base para se ter uma empresa sob controle é ter o código sob controle. 
    * Com a concorrência cada vez maior, o comercial começa a vender menos. 
    * O impacto financeiro aparece. 

#### Afinal o que é Clean Code?
    * Qualquer livro que lide com isso tras ideias parecidas. 
    * Clean code é simples e direto: mas isso é dificil de 
      se fazer pois é dificil ser simples e direto;
      (Grandy Booch criador doo UML)
    * A logica deve ser clara e direta para fazer para fazer 
      com que sejam dificeis para os defeitos se esconderem.
      (Bjarne Stroustrup, criador do C++)
    * Clean code sempre se parece com código escrito por alguém que se importa.
      (Michael Feathers) Working Effectively with legacy code.
    * Voce olha o código e cada trecho é exatamente aquilo que você esperava que fosse
      você esta lidando com código de qualidade.
      (Ward Conningham (criador da wiki)) 
    * Qualquer um escreve código que o computador entenda, agora bons programadores 
      escrevem códigos que outros seres humanos conseguem entender.  
      (Martin Fowler)
#### Como medir qualidade de código?
    Medir por, linhas, qtd métodos ?, tamanho dos métodos? complexidade?
    escrever sobre algo que nos importamos.    
    
    Mas é pela quantidade de WTFs por minutos.
    você já xingou o autor do código? se você já fez isso é pq o código esta mal mesmo.
    
#### Acumulo de comportamento sem estrutura.
    Negligencia e acumulo de divida técnica. 
![Alt text](src/images/acumulo_comp_sem_estrut.png?raw=true "Title")

    Imagine trabalhar nesse ambiente.
    Nenhum ambiente fica nesse estado de uma hora para outra. 

    E parecido com a metáfora da janela quebrada.
    Ex: tem um prédio abandonado com algumas janelas e todas intactas
    mas no momento que a primeira janela é quebrada, as outras também começaram a ser vandalizadas.
    
    * Ah mas a pessoa não quer priorizar uma atividade de refactoring!
    Refactoring não é uma atividade e sim uma prática do dia a dia, na forma como você se expressa.
    Essa cozinha não ficou suja do dia para a noite, foram vários dias de negligencia.
    O mesmo acontece com o código.    

    
#### Ponto de não retorno (Refatore antes que seja tarde!). 
    * Chega uma hora que a dívida esta tão alta que o único jeito é jogar tudo fora e refazer.
      e é mais rápido refazer.
    Obs: Muitas vezes, existe um ponto de não retorno, evite chegar lá, poderá ser muito 
         caro e muito arriscado fazer qualquer mudança. 


### Refactoring.
    Alteração feita na estrutura interna do software para torná-lo mais fácil 
    de ser entendido e menos custoso de ser modificado, sem alterar o seu 
    comportamento observável. (Martin Fowler)

    É um investimento, torna o software sustentável e competitivo. 
     
    Ou você refatora ou faz melhorias, fazer as duas ao mesmo tempo não é o ideal.
    Com o tempo a gente vai escrevendo códigos de boa qualidade automaticamente.  

    Ao negligenciar o rendimento da equipe vai cair, 30 min de refactoring hoje é uma economia 
    economiza 30min de cada um e acaba se pagando.
    
    * Refactor com um propósito, evite refatorar apenas por refatorar.
    * Fique atendo as oportunidade. Introduza o refactoring em todas as tarefas. 
      Obs: é um trabalho de formiguinha. 

#### Muitas empresas precisam contrair algumas dívdidas para <br> crescer e escalar sua operação.
    
    Cuidado, com o aumento da dívida técnica, os juros são bem altos. 
    mantenha a dívida sob controle
    
    * Se nos queremos considerar linhas de código, devemos pensar em não em linhas produzidas 
    mas sim quantas linhas você gasta para resolver um problema (Edsger Dijkstra)
    Quando mais objetivo você for, melhor é.
    
    Refactoring não se aplica somente no código.  


![Alt text](src/images/code-design-architecture.png?raw=true "Title")

    Conforme aplicamos técnicas de refactoring, tanto o código vai ficando melhor
    escrito, quanto ele começa a externalizar comportamento que precisa ser colocado 
    em algum lugar.

    Dessign: A extração em métodos e funções quando param em outras classes
    e essas classes precisam se relacionar isso a gente chama de design.
    
    Architecture: Ex: pegar 10 classses e jogar para um microserviço
    para que outros sistemas tenham acesso a info, novos componentes 
    precisam de interação, e essa interação se torna parte da arquitetura.
    Feita de decisões importantes e difíceis de mudar(linguagem, framework, tipo de comunicação, sync, async?).
    
    Código: mera sequência de instruções.  
     
#### Como evitar que o problema aconteça?
    
    * Reconhecer e lidar no dia a dia com os code smells
      tomando ações necessárias.
    * Um Smell é um sintoma que ocorre dentro do código fonte
      e que pode se rum indicador de problema. 
