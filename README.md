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
