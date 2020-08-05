
/*Interface que define a estrutura da entidade lembrete.
Deve ser seguida a mesma estrutura na API utilizada*/

type prioridade = 'BAIXA' | 'MEDIA' | 'ALTA';

export interface Lembrete {
id: number;
conteudo: string;
arquivado: boolean;
prioridade: prioridade;
modificado: number;
}
