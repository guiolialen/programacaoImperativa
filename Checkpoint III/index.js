function alunos(nome, qtdFaltas, notas) {
    return {
        nome: nome,
        qtdFaltas: qtdFaltas,
        notas: notas,
        calcularMedia() {
            let media = 0;
            for (let i = 0; i < this.notas.length; i++) {
                media += this.notas[i];
            }
            return media / this.notas.length;
        },
        faltas() {
            this.qtdFaltas += 1;
        },
    };
}
  
let aluno1 = new alunos('carlos', 3, [9, 5, 6, 4]);
let aluno2 = new alunos('dani', 2, [9, 2, 8, 4]);
let aluno3 = new alunos('helter', 1, [5, 5, 8, 10]);
let aluno4 = new alunos('marcio', 0, [6, 6, 0, 3]);
let aluno5 = new alunos('guilherme', 7, [8, 5, 6, 8]);
  
  
let curso = {
    nomeCurso: 'Programação Imperativa',
    notaAprovacao: 7,
    maxFaltas: 5,
    listaEstudantes: [aluno1, aluno2, aluno3, aluno4, aluno5],
  
    alunoNovo(aluno) {
        this.listaEstudantes.push(aluno);
    },
    aprovacao(nAluno) {
        if (nAluno > this.listaEstudantes.length - 1) return 'Numero invalido';
        let aluno = this.listaEstudantes[nAluno];
        return aluno.qtdFaltas < this.maxFaltas && aluno.calcularMedia() >= this.notaAprovacao
            ? true
            : aluno.calcularMedia() >= this.notaAprovacao * 1.1 && alunoqtdFaltas == this.maxFaltas
            ? true
            : false;
    },
    listaAprovacao() {
        let aprovacao = [];
        for (let i = 0; i < this.listaEstudantes.length; i++) {
            aprovacao.push(this.aprovacao(i));
        }
        return aprovacao;
    },
  };
  
  
  let aluno6 = new alunos('daniela', 4, [5, 9, 9, 9]);
  curso.alunoNovo(aluno6);
  
  console.log(curso.listaAprovacao());
  console.log(listaEstudantes)