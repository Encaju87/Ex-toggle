// Exemplo de uso do método toggle em JavaScript

// Seleciona um elemento HTML
const button = document.getElementById('toggleButton');
const box = document.getElementById('box');

// Adiciona um evento de clique ao botão
button.addEventListener('click', () => {
    // Alterna a classe 'active' no elemento 'box'
    box.classList.toggle('active');
});

// CSS para visualizar a mudança
const style = document.createElement('style');
style.innerHTML = `
    #box {
        width: 100px;
        height: 100px;
        background-color: red;
        transition: background-color 0.3s;
    }
    #box.active {
        background-color: green;
    }
`;
document.head.appendChild(style);

// HTML para o exemplo
document.body.innerHTML = `
    <button id="toggleButton">Toggle Box Color</button>
    <div id="box"></div>
`;