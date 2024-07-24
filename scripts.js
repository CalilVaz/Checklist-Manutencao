// ==============================================================================================

const btnGenerate = document.querySelector("#generate-pdf");

function App() {
  const body = document.querySelector("body");
  const contentPDF = document.getElementById("content");
  var bandeira = document.getElementById("selectBandeira");
  var regional = document.getElementById("selectRegional");
  var nomeTecnico = document.getElementById("nameTecnico");
  var filial = document.getElementById("filial");
  var data = document.getElementById("date");
  var gestor = document.getElementById("manager");
  var anotacoes = document.getElementById("anotacoes");
  const main = document.getElementById("main");
  let allFilled = true;
  body.classList.add("cssBodyPDF");
  // Pegando os valores dos campos

  // Array para armazenar informações dos itens
  var itens = [];

  // Iterar sobre cada cardItem
  var cardItems = document.querySelectorAll(".cardItem");
  cardItems.forEach(function (cardItem) {
    var select = cardItem.querySelector("select.item");
    var input = cardItem.querySelector('input[type="text"]');

    // Resetar a classe inválida para evitar duplicação
    select.classList.remove("invalid");
    input.classList.remove("invalid");

    // Adicionar informações do item ao array
    itens.push({
      numero: cardItem.textContent.trim().split("-")[0] + " - ", // número do item
      status: select.value,
      observacoes: input.value,
    });

    // Verificar se o <select> foi selecionado
    if (select.value === "") {
      allFilled = false;
      select.classList.add("invalid"); // Adiciona a classe inválida
    }

    // Adiciona evento para remover a classe 'invalid' quando o campo for preenchido
    select.addEventListener("change", function () {
      if (select.value !== "") {
        select.classList.remove("invalid");
      }
    });
  });

  // Adicionar a mesma lógica de validação para os campos obrigatórios
  var camposObrigatorios = [
    bandeira,
    regional,
    nomeTecnico,
    filial,
    data,
    gestor,
  ];
  camposObrigatorios.forEach(function (campo) {
    campo.classList.remove("invalid"); // Resetar a classe inválida para evitar duplicação

    // Adiciona evento para remover a classe 'invalid' quando o campo for preenchido
    campo.addEventListener("change", function () {
      if (campo.value !== "") {
        campo.classList.remove("invalid");
      }
    });

    campo.addEventListener("input", function () {
      if (campo.value !== "") {
        campo.classList.remove("invalid");
      }
    });

    // Verificar se o campo está vazio
    if (campo.value === "") {
      allFilled = false;
      campo.classList.add("invalid"); // Adiciona a classe inválida
    }
  });

  // Exibir notificação se houver campos não preenchidos
  if (!allFilled) {
    Toastify({
      text: "Preencha todos os campos obrigatórios",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "red",
      },
    }).showToast();
    return;
  } else {
    // Código para enviar as informações, se necessário
    console.log("Informações preenchidas corretamente.");
  }

  main.innerHTML = ``;

  main.innerHTML = `

            <div id="content">
        <table>
        <div id="headerPDF">
        <div class="textPDF">
            DEPARTAMENTO DE MANUTENÇÃO
        </div>

        <div class="textPDF">
            CHECKLIST DIÁRIO - TÉCNICO DE MANUTENÇÃO
        </div>
        <tr>
        <div>
        <p>BANDEIRA: ${bandeira.value}</p>
        <p>FILIAL: ${filial.value}</p>
        </div>
        </tr>

        <tr>
        <div>
        <p>REGIONAL: ${regional.value}</p>
        <p>DATA: ${data.value}</p>
        </div>
        </tr>

        <tr>
        <div>
        <p>TÉCNICO: ${nomeTecnico.value}</p>
        <p>GESTOR: ${gestor.value}</p>
        </div>
        </tr>

        <div class="textPDF">
          STATUS: "C" CONFORME - "NC" NÃO CONFORME - "NA" NÃO SE APLICA 
        </div>

        </div>
        
    <thead>
    <tr>
        <th>SETOR</th>
        <th>STATUS</th>
        <th>OBSERVAÇÕES</th>
    </tr>
    </thead>

    <tbody>
      <tr>
            <td class="setor">${itens[0].numero}</td>
            <td style="text-align: center;">${itens[0].status}</td>
            <td>${itens[0].observacoes}</td>
        </tr>
      <tr>
            <td class="setor">${itens[1].numero}</td>
            <td style="text-align: center;">${itens[1].status}</td>
            <td>${itens[1].observacoes}</td>
        </tr>
      <tr>
            <td class="setor">${itens[2].numero}</td>
            <td style="text-align: center;">${itens[2].status}</td>
            <td>${itens[2].observacoes}</td>
        </tr>
      <tr>
            <td class="setor">${itens[3].numero}</td>
            <td style="text-align: center;">${itens[3].status}</td>
            <td>${itens[3].observacoes}</td>
        </tr>
      <tr>
            <td class="setor">${itens[4].numero}</td>
            <td style="text-align: center;">${itens[4].status}</td>
            <td>${itens[4].observacoes}</td>
        </tr>
      <tr>
            <td class="setor">${itens[5].numero}</td>
            <td style="text-align: center;">${itens[5].status}</td>
            <td>${itens[5].observacoes}</td>
        </tr>
      <tr>
            <td class="setor">${itens[6].numero}</td>
            <td style="text-align: center;">${itens[6].status}</td>
            <td>${itens[6].observacoes}</td>
        </tr>
      <tr>
            <td class="setor">${itens[7].numero}</td>
            <td style="text-align: center;">${itens[7].status}</td>
            <td>${itens[7].observacoes}</td>
        </tr>
      <tr>
            <td class="setor">${itens[8].numero}</td>
            <td style="text-align: center;">${itens[8].status}</td>
            <td>${itens[8].observacoes}</td>
        </tr>
      <tr>
            <td class="setor">${itens[9].numero}</td>
            <td style="text-align: center;">${itens[9].status}</td>
            <td>${itens[9].observacoes}</td>
        </tr>
      <tr>
            <td class="setor">${itens[10].numero}</td>
            <td style="text-align: center;">${itens[10].status}</td>
            <td>${itens[10].observacoes}</td>
        </tr>
      <tr>
            <td class="setor">${itens[11].numero}</td>
            <td style="text-align: center;">${itens[11].status}</td>
            <td>${itens[11].observacoes}</td>
        </tr>
      <tr>
            <td class="setor">${itens[12].numero}</td>
            <td style="text-align: center;">${itens[12].status}</td>
            <td>${itens[12].observacoes}</td>
        </tr>
      <tr>
            <td class="setor">${itens[13].numero}</td>
            <td style="text-align: center;">${itens[13].status}</td>
            <td>${itens[13].observacoes}</td>
        </tr>
      <tr>
            <td class="setor">${itens[14].numero}</td>
            <td style="text-align: center;">${itens[14].status}</td>
            <td>${itens[14].observacoes}</td>
        </tr>              
        </tbody>
        </table>
    </div>
    `;

  // Conteúdo do PDF
  const content = document.querySelector("#content");

  // Configuração do arquivo final do PDF
  const options = {
    margin: [10, 10, 10, 10], // [top, right, bottom, left] em milímetros
    filename: `Loja ${filial.value}-técnico ${nomeTecnico.value}-dia ${data.value}.pdf`,
    html2canvas: { scale: 5 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  // Gerar e baixar o PDF
  setTimeout(function () {
    html2pdf().set(options).from(content).save();
  }, 50);

  setTimeout(function () {
    body.classList.remove("cssBodyPDF");
    contentPDF.innerHTML = ``;
  }, 1);

  main.innerHTML = ``;

  setTimeout(function () {
    main.innerHTML = `
  <img id="logo-form" src="./img/logo-grupo-pereira.png" alt="Logo Grupo Pereira">

        <form action="">

            <select name="bandeira" id="selectBandeira">
                <option value="">Selecione a Bandeira</option>
                <option value="Fort Atacadista">Fort Atacadista</option>
                <option value="Sempre Fort">Sempre Fort</option>
                <option value="Bate Fort">Bate Fort</option>
                <option value="Comper">Comper</option>
                <option value="Perlog">Perlog</option>
                <option value="Fort Atacadista Posto">Fort Atacadista Posto</option>
            </select>
            <select name="regional" id="selectRegional">
                <option value="">Selecione a Regional</option>
                <option value="Distrito Federal">Distrito Federal</option>
                <option value="Goiás">Goiás</option>
                <option value="Mato Grosso">Mato Grosso</option>
                <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                <option value="Santa Catarina">Santa Catarina</option>
                <option value="São Paulo">São Paulo</option>
            </select>

            <label>TÉCNICO DE MANUTENÇÃO:</label>
            <input id="nameTecnico" type="text">

            <label>FILIAL:</label>
            <input id="filial" type="number">

            <label>DATA:</label>
            <input type="date" id="date">

            <label>GESTOR DE MANUTENÇÃO</label>
            <input id="manager" type="text">

            <h3>STATUS: "C" CONFORME - "NC" NÃO CONFORME - "NA" NÃO SE APLICA</h3>

            <div class="cardItem">
                1. SETOR CASA DE MÁQUINAS (COMPRESSORES E RACK) -
                <select name="data-item" id="item1" class="item">
                    <option value="">Selecione o Status</option>
                    <option value="C">C</option>
                    <option value="NC">NC</option>
                    <option value="NA">NA</option>
                </select>
                <input type="text" placeholder="Observações (Opcional)">
            </div>

            <div class="cardItem">
                2. NOBREAK -
                <select name="data-item" id="item2" class="item">
                    <option value="">Selecione o Status</option>
                    <option value="C">C</option>
                    <option value="NC">NC</option>
                    <option value="NA">NA</option>
                </select>
                <input type="text" placeholder="Observações (Opcional)">
            </div>

            <div class="cardItem">
                3. BANCO DE BATERIAS -
                <select name="data-item" id="item3" class="item">
                    <option value="">Selecione o Status</option>
                    <option value="C">C</option>
                    <option value="NC">NC</option>
                    <option value="NA">NA</option>
                </select>
                <input type="text" placeholder="Observações (Opcional)">
            </div>

            <div class="cardItem">
                4. GRUPO GERADOR -
                <select name="data-item" id="item4" class="item">
                    <option value="">Selecione o Status</option>
                    <option value="C">C</option>
                    <option value="NC">NC</option>
                    <option value="NA">NA</option>
                </select>
                <input type="text" placeholder="Observações (Opcional)">
            </div>

            <div class="cardItem">
                5. SUBESTAÇÃOE BANCO DE CAPACITOR -
                <select name="data-item" id="item5" class="item">
                    <option value="">Selecione o Status</option>
                    <option value="C">C</option>
                    <option value="NC">NC</option>
                    <option value="NA">NA</option>
                </select>
                <input type="text" placeholder="Observações (Opcional)">
            </div>

            <div class="cardItem">
                6. ILHAS E EXPOSITORES -
                <select name="data-item" id="item6" class="item">
                    <option value="">Selecione o Status</option>
                    <option value="C">C</option>
                    <option value="NC">NC</option>
                    <option value="NA">NA</option>
                </select>
                <input type="text" placeholder="Observações (Opcional)">
            </div>

            <div class="cardItem">
                7. CÂMARAS FRIAS -
                <select name="data-item" id="item7" class="item">
                    <option value="">Selecione o Status</option>
                    <option value="C">C</option>
                    <option value="NC">NC</option>
                    <option value="NA">NA</option>
                </select>
                <input type="text" placeholder="Observações (Opcional)">
            </div>

            <div class="cardItem">
                8. EMPILHADEIRAS -
                <select name="data-item" id="item8" class="item">
                    <option value="">Selecione o Status</option>
                    <option value="C">C</option>
                    <option value="NC">NC</option>
                    <option value="NA">NA</option>
                </select>
                <input type="text" placeholder="Observações (Opcional)">
            </div>

            <div class="cardItem">
                9. BATERIAS TRACIONÁRIAS -
                <select name="data-item" id="item9" class="item">
                    <option value="">Selecione o Status</option>
                    <option value="C">C</option>
                    <option value="NC">NC</option>
                    <option value="NA">NA</option>
                </select>
                <input type="text" placeholder="Observações (Opcional)">
            </div>

            <div class="cardItem">
                10. CARREGADORES DE BATERIA -
                <select name="data-item" id="item10" class="item">
                    <option value="">Selecione o Status</option>
                    <option value="C">C</option>
                    <option value="NC">NC</option>
                    <option value="NA">NA</option>
                </select>
                <input type="text" placeholder="Observações (Opcional)">
            </div>

            <div class="cardItem">
                11. TRANSPALETEIRAS MANUAL -
                <select name="data-item" id="item11" class="item">
                    <option value="">Selecione o Status</option>
                    <option value="C">C</option>
                    <option value="NC">NC</option>
                    <option value="NA">NA</option>
                </select>
                <input type="text" placeholder="Observações (Opcional)">
            </div>

            <div class="cardItem">
                12. ILUMINAÇÃO -
                <select name="data-item" id="item12" class="item">
                    <option value="">Selecione o Status</option>
                    <option value="C">C</option>
                    <option value="NC">NC</option>
                    <option value="NA">NA</option>
                </select>
                <input type="text" placeholder="Observações (Opcional)">
            </div>

            <div class="cardItem">
                13. AR CENTRAL -
                <select name="data-item" id="item13" class="item">
                    <option value="">Selecione o Status</option>
                    <option value="C">C</option>
                    <option value="NC">NC</option>
                    <option value="NA">NA</option>
                </select>
                <input type="text" placeholder="Observações (Opcional)">
            </div>

            <div class="cardItem">
                14. SISTEMA DE COMBATE A INCÊNDIO -
                <select name="data-item" id="item14" class="item">
                    <option value="">Selecione o Status</option>
                    <option value="C">C</option>
                    <option value="NC">NC</option>
                    <option value="NA">NA</option>
                </select>
                <input type="text" placeholder="Observações (Opcional)">
            </div>

            <div class="cardItem">
                15. SISTEMA DE ÁGUA/ESGOTO -
                <select name="data-item" id="item15" class="item">
                    <option value="">Selecione o Status</option>
                    <option value="C">C</option>
                    <option value="NC">NC</option>
                    <option value="NA">NA</option>
                </select>
                <input type="text" placeholder="Observações (Opcional)">
            </div>
        </form>

        <div id="contentButton">
            <button id="generate-pdf" onclick="App()">Gerar PDF</button>
        </div> 
  `;
  }, 100);
}
