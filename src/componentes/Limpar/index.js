import './Limpar.css';

const Limpar = ({children, setEquacao,equacao}) => {
    return (
        <div className="limpar"
        onClick={()=>setEquacao('')}>
            {children}
        </div>
    )
}
export default Limpar;