$('form').on('submit', function(e){
    e.preventDefault();
    adicionaTarefa();    
});

function corAleatoria() {
    var cores = ["#38ADA966","#FAD39066","#FF6B6B66","#1E379966"];
    var corRandom = cores[Math.floor(Math.random() * cores.length)];
    return corRandom;
}

function adicionaTarefa() {
    const inputNovaTarefa = $('#inputTarefa').val();
        const novaTarefa = $(`<li class="tarefaItem">${inputNovaTarefa}</li>`);
        $(novaTarefa).css('background-color',corAleatoria());
        novaTarefa.appendTo('ul');
        addListener()
}

function addListener() {
    $(".tarefaItem").click(function () {
        $(this).css('text-decoration', 'line-through');
    })
}
