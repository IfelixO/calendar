# AGENDA ELETRÔNICA - DESAFIO TÉCNICO VAGGON

Como 2° fase do processo seletivo para a vaga de **Desenvolvedor**, o desafio técnico de projetar uma agenda eletrônica foi concluído.

Segue abaixo algumas informações sobre o mesmo e um guia de como configurar no _localhost_.

## CONFIGURAÇÃO LOCALHOST

As pastas _"/Client/node_modules/"_ e _"/Server/node_modules/"_ contêm todas as depêndencias necessárias* para o pleno funcionamento do projeto.

Porém, pode ser necessária a alteração das informações de usuário e senha da conexão que será utilizada no arquivo: _"/Server/index.js.10"_.
~~~
    const db = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "password",
        database: "calendar",
    })
~~~
> As propriedades _user_ e _password_ estão definidas como padrão, caso a conexão a ser utilizada possua diferentes dados, faz-se necessário a alteração, caso não, desconsidere.

O código SQL a ser executado na ferramenta de preferência para a criação das tabelas necessárias se encontra em _"/DataBase/MySQL_query_calendar.txt"_.

Importando o banco de dados na ferramenta MySQL de preferência e com a configuração da conexão correta, basta iniciar a aplicação **React** utilizando o comando **_npm run dev_** através de um terminal na pasta _"/Client/"_, iniciar o **Node** utilizando o comando **_npm run server_** através do terminal na pasta _"/Server/"_ , e acessar a porta _5173_ do _localhost_ no navegador de preferência.

#### *Dependências

* "Client/package.json.12":
~~~
    "axios": "^0.27.2",
    "formik": "^2.2.9",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
~~~
* "Server/package.json.13":
~~~
    "bcrypt": "^5.0.1",
    "body-parser": "^1.20.0",
    "cors": "^2.8.5",
    "express": "^4.18.1",
    "mysql2": "^2.3.3",
    "nodemon": "^2.0.19"
~~~

### Nota
É importante salientar que a agenda em questão é uma agenda semanal e o sistema não permitirá a adição de atividades que não esteja entre as datas: 21/08/2022 e 27/08/2022.
