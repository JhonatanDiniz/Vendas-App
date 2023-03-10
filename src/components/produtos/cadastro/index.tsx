import {Layout} from 'components'

export const CadastroProdutos: React.FC = () =>{
    return(
        <Layout titulo="Cadastro de Produtos">
            <div className='columns'>
                <div className='field column is-half'>
                    <label className='label'>Código</label>
                    <div className='control'>
                        <input className='input' type="text" placeholder="Código do Produto"/>
                    </div>
                </div>

                <div className='field column is-half'>
                    <label className='label'>Preço</label>
                    <div className='control'>
                        <input className='input' type="text" placeholder="Valor do Produto"/>
                    </div>
                </div>
            </div>

            <div className='columns'>
                <div className='field column is-full'>
                    <label className='label'>Nome</label>
                    <div className='control'>
                        <input className='input' type="text" placeholder="Nome do Produto"/>
                    </div>
                </div>
            </div>

            <div className='columns'>
                <div className='field column is-full'>
                    <label className='label'>Descrição</label>
                    <div className='control'>
                    <textarea className='textarea' placeholder="Descrição do Produto"></textarea>
                    </div>
                </div>
            </div>
        </Layout>
    )
}