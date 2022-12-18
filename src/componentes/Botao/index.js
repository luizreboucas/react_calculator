import './Botao.css';

const Botao = ({children, setEquacao,equacao}) => {
    return (
        <div className="botao"
        onClick={()=>setEquacao([...equacao,children])}>
            {children}
        </div>
    )
}
export default Botao;