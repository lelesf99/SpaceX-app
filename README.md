# Spacex-app
Me chamo Vinicius Leles e esse é o meu projeto para o desafio técnico da Callix.

# O desafio

Meu desafio era fazer um aplicativo que consumisse a API de lançamentos da SpaceX, dividi o desafio nas seguintes partes:

-   **Backend**: um servidor que chama as rotas necessárias da API da SpaceX, mapeia para um formato que melhor nos atende e devolva essas informações mapeadas.
    
-   **Frontend**: Um SPA simples em react.js que faz o uso da nossa API e mostra as informações dos lançamentos em cards, 2 que resumem apenas um lançamento (o próximo e o último), e 2 que listam os lançamentos (os próximos e os últimos). Achei o frontend muito cru apenas em uma tela, então resolvi criar uma página que detalha algum lançamento por id, com vídeo se ele já tiver acontecido, ou um contador de tempo, caso ele ainda vá acontecer.
    
-   **Integrações**: Integrar o app com o Google Analytics, com o Google Optimize (e criar um teste a/b).
    
-   **Deploy**: Configurar um nó no Heroku para o backend e criar um site estático no Netlify para o front.[Cliente frontend](https://leles-spacex-app.netlify.app/) e [link da API](https://leles-spacex-app.herokuapp.com/launches). As rotas da api ficaram assim:
	 
	 - last: GET último lançamento
	 - next: GET próximo lançamento
	 - past: GET últimos lançamentos
	 - upcoming: GET próximos lançamentos
	 - launches: GET todos os lançamentos
	 - launch/:id:: GET lançamento por id 

# Como foi feito

 - **Backend**: Utilizei duas bibliotecas para agilizar o processo de criação da API Express.js e Axios (O uso de métodos nativos implica em muito boilerplate, e essas bibliotecas são bastante usadas na comunidade, acho que é OK eu ganhar um tempo nessa decisão). Utilizei uma arquitetura simples, de rotas e controlador, já que estaria trabalhando com apenas 1 entidade.
 - **Frontend**: Utilizei a CLI do create-react-app, com o template de typescript. O frontend tem apenas 2 páginas, 1 tem 2 componentes o card de lançamento e a lista de lançamentos. Carrego as informações da API no componente pai e hidrato os componentes filhos. Uma melhoria que gostaria de fazer é fazer uso do cache, para que o app não precise chamar a todas as rotas toda vez q troca de página.
 - **Integrações**: Confesso que essa parte foi a que mais tomou tempo, as ferramentas de teste e debug do Optimize não são boas, tive que rodar vários experimentos até conseguir entender mais ou menos o que fazia quebrar ou funcionar. Estou com um teste rodando agora e depois coloco o link do relatório quando estiver pronto. Ao final instalei o HotJar, mas não deu tempo de aprender os in & outs da plataforma.
 - **Deploy**: Já tinha utilizado ambas essas plataformas para projetos similares, e eles tem uma boa documentação e comunidade, segui os passos necessários e fiz o deploy do app.

# Conclusão/melhorias

Fiz questão de utilizar TypeScript tanto no React quanto no node, coisa que eu nunca fiz, já que nunca tinha trabalhado com essas ferramentas “profissionalmente”. Gostei bastante do desafio, ele conseguiu me mostrar muitas coisas novas tecnologias que eu não conhecia, como essas do google por exemplo.
De melhoria, queria ter implementado os testes pelo menos no frontend, já que o template que utilizei já vem com isso configurado. Talvez poderia ter utilizado uma estrutura organizacional no backend mais escalável. E queria ter aprendido melhor as ferramentas de analytics e testes do Google e do HotJar.

