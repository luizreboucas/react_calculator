import './Limpar.css';

const Calcula = ({children, setEquacao,equacao}) => {

    
    
    function retornaResultado(){
        const arr = [...equacao]
        let string = arr.join('');
        string.toString();
        
        return eval(string);
        
    }
    return (
        <div className="calcula" onClick={() => setEquacao([retornaResultado()]) }>
            {children}
        </div>
    )
}
export default Calcula;