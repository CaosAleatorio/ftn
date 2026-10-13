# Publicar na Hostinger

Este projeto usa React + Vite e gera um site estático. O fluxo principal é
ligar o repositório GitHub à Hostinger para compilar e publicar automaticamente.

## Escolher o plano

Antes de contratar, confirma que o plano inclui **Node.js Web Apps** e
publicação pelo GitHub. A documentação da Hostinger indica suporte em planos
Business (também referido como Business/Unlimited) e Cloud.

O Node.js é usado para compilar o projeto. O resultado deste site é estático.

## Publicar pelo GitHub

1. Envia para o repositório as alterações de preparação: `package.json`,
   `package-lock.json`, `public/.htaccess` e este guia.
2. No hPanel, abre **Websites / Sites → Create Website / Add Website →
   Web App / Deploy Web App**.
3. Escolhe **Import Git Repository**, liga a tua conta GitHub e autoriza
   o acesso ao repositório do site.
4. Seleciona o repositório e o ramo que queres publicar. O ramo atual deste
   projeto é `main`.
5. Confirma as definições de compilação:

   | Definição | Valor deste projeto |
   | --- | --- |
   | Framework | Vite / React |
   | Pasta do projeto | Raiz do repositório (`.`) |
   | Node.js | 22.x, versão 22.12.0 ou superior |
   | Instalação, se o painel pedir um comando | `npm ci` |
   | Comando de compilação | `npm run build` |
   | Pasta de saída | `dist` |

   O campo `engines.node` no `package.json` indica a versão de Node.js para
   a deteção automática da Hostinger.
6. Clica em **Deploy** e verifica os logs da compilação e o endereço publicado.
7. Abre `/about` e `/volunteers` diretamente e atualiza essas páginas para
   confirmar a navegação. O ficheiro `public/.htaccess` é copiado para o build
   e contém as regras para as páginas React em servidores compatíveis.

A ligação de uma **Web App** executa o build. A integração **Advanced → Git**
dos sites PHP/HTML publica os ficheiros do repositório; este projeto precisa
de compilar o código React antes de o servir.

Mantém a publicação automática ativa: os próximos pushes para o ramo ligado
à Hostinger irão desencadear novas compilações e publicações.

## Preparar os ficheiros

Para verificar a compilação localmente, na pasta do projeto executa:

```sh
npm ci
npm run build
```

Se as dependências já estiverem instaladas e não tiverem mudado, basta executar
`npm run build`.

O Vite gera os ficheiros de publicação em `dist/`. O ficheiro
`public/.htaccess` é copiado automaticamente para `dist/.htaccess`: permite
abrir e atualizar endereços como `/about`, `/projects` e `/volunteers`.

## Alternativa: publicar os ficheiros compilados

Se optares pela publicação manual, podes criar um ZIP do conteúdo de `dist/`,
incluindo `.htaccess`, e enviá-lo ao Gestor de Ficheiros:

1. Em **Websites / Sites**, adiciona um site do tipo **Custom PHP/HTML** ao
   plano e associa o domínio ou começa com um domínio temporário.
2. Abre o **Gestor de Ficheiros / File Manager** desse site e entra em
   `public_html`.
3. Envia o ZIP e extrai-o. Se o gestor extrair para uma subpasta,
   move os ficheiros dessa subpasta para `public_html`, incluindo `.htaccess`.
   Se já existirem ficheiros de outro site, guarda uma cópia antes de os
   substituir.
4. Confirma esta estrutura:

   ```text
   public_html/
     .htaccess
     index.html
     assets/
     img/
     ...
   ```

5. Retira o ZIP de `public_html` depois de confirmar a extração.
6. Abre o endereço disponibilizado pela Hostinger. Testa a página inicial,
   imagens e links. Abre `/about` e `/volunteers` diretamente e atualiza a
   página para verificar as regras de navegação.

O `index.html` deve estar diretamente em `public_html`. Publica o conteúdo
de `dist/`; o código em `src/` e as dependências em `node_modules/` ficam no
ambiente de desenvolvimento.

## Ligar o domínio que aponta para o Vercel

Depois de verificar o site na Hostinger:

1. No hPanel, usa a opção de ligar o domínio e consulta os valores de DNS
   indicados para esse site.
2. No fornecedor que gere o DNS do domínio, substitui os registos do site
   que apontam para o Vercel pelos valores indicados pela Hostinger, incluindo
   o domínio principal e `www`. Usa os valores reais do painel.
3. Se pretendes manter o fornecedor atual de DNS e email, escolhe a ligação
   por registos DNS e mantém os registos de email. Se mudares os nameservers,
   verifica também os registos MX, SPF, DKIM e DMARC necessários para o email.
4. Confirma o certificado SSL e o acesso por HTTPS no hPanel.
5. Mantém o site no Vercel durante a transição. O DNS pode demorar até
   24 horas a propagar; verifica o domínio na Hostinger antes de desativar
   a publicação anterior.

## Atualizações e validação

Com a ligação ao GitHub, envia as alterações para o ramo configurado e
acompanha a nova publicação no hPanel. Na alternativa manual, executa
`npm run build` e publica o conteúdo atualizado de `dist/`, incluindo
`.htaccess`. O novo `index.html` e os ficheiros em `assets/` devem pertencer
à mesma compilação.

O formulário em `src/pages/Contact.jsx` atualmente apenas escreve os dados
na consola do navegador e limpa os campos. Para receber mensagens por email,
é necessário ligar esse formulário a um serviço de envio ou a um backend.

## Referências

- [Publicar uma Web App pelo GitHub](https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/)
- [Planos Business/Unlimited e Cloud](https://www.hostinger.com/support/10771345-hostinger-ai-builder-agentic-mode-how-to-export-code/)
- [Deteção e seleção da versão de Node.js](https://www.hostinger.com/support/how-to-select-the-node-js-version-for-your-application/)
- [Publicar ficheiros na Hostinger](https://www.hostinger.com/support/how-to-upload-a-website-from-backups/)
- [Usar .htaccess na Hostinger](https://www.hostinger.com/support/1583307-how-to-create-an-htaccess-file-at-hostinger/)
- [Ligar um domínio à Hostinger](https://www.hostinger.com/support/1863967-how-to-point-a-domain-to-hostinger/)
- [Compilar um site estático com Vite](https://vite.dev/guide/static-deploy.html)
