import React,{useState} from 'react';

export default function App() {

  const [valorTela,setValorTela]=useState('')
  const [resultado,setResultado]=useState(0)
  const [acumulador,setAcumulador]=useState(0)
  const [operado,setOperado]=useState(false)

  //Componentes
  const Tela=(valor,res)=>{
    return(
 
      <div style={cssTela}>
        <span style={cssTelaOper}>{valor}</span>
        <span style={cssTelaRes}>{res}</span>
      </div>   

    )
  }
  const Btn=(label,onClick)=>{
    return(
      <button style={cssBtn} onClick={onClick}>{label}</button>
    )
  }
  //Funções
  const addDigitoTela=(d)=>{
    if((d=='+' || d=='-' || d=='*' || d=='/') && operado){
      console.log("+-*/")
      setOperado(false)
      setValorTela(resultado+d)
      return
    }
    if(operado){
      setValorTela(d)
      setOperado(false)
      return
    }
    const valorDigitadoTela=valorTela+d
    setValorTela(valorDigitadoTela)
  }
  const limparMemoria=()=>{
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }
  const Operacao=(oper)=>{
    if(oper=='bs'){
      let vtela=valorTela
      vtela=vtela.substring(0,(vtela.length-1))
      setValorTela(vtela)
      setOperado(false)
      return
    }
    try{
      const r=eval(valorTela) //Cálculo
      setAcumulador(r)
      setResultado(r)
      setOperado(true)
    }catch{
      setResultado('ERRO!')
    }
  }

  // Estilos
  const cssContainer={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    width:300,
    border:'7px solid #000',
    borderRadius:'10px',
    margin:'auto',
    marginTop:'225px',
    backgroundColor:'#4B0082',
    color:'#fff'
  }

  const cssBotoes={
    flexDirection:'row',
    flexWrap:'wrap',
  }
  const cssTela={
    display:'flex',
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
    alignItems:'flex-start',
    backgroundColor:'#000',
    flexDirection:'column',
    width:260
  }
  const cssTelaOper={
    fontSize:25,
    color:'#fff',
    height:20,
  }
  const cssTelaRes={
    fontSize:50,
    color:'#fff',
  }
  const cssBtn={
    fontSize:30,
    height:75,
    width:75,
    padding:20,
    backgroundColor:'#1E90FF',
    color:'#fff',
    textAlign:'center',
    borderColor:'blue',
    boxShadow:'18px solid #fff',
    justifyContent:'center',
    outline:'none',
    borderRadius:'100px'
  }

  return (
    <>
      <div style={cssContainer}>
        <h3>Calculadora Matemática Simples</h3>
        {Tela(valorTela,resultado)}
        <div style={cssBotoes}>
          {Btn('AC',limparMemoria)}
          {Btn('(',()=>addDigitoTela('('))}
          {Btn(')',()=>addDigitoTela(')'))}
          {Btn('/',()=>addDigitoTela('/'))}
          {Btn('7',()=>addDigitoTela('7'))}
          {Btn('8',()=>addDigitoTela('8'))}
          {Btn('9',()=>addDigitoTela('9'))}
          {Btn('*',()=>addDigitoTela('*'))}
          {Btn('4',()=>addDigitoTela('4'))}
          {Btn('5',()=>addDigitoTela('5'))}
          {Btn('6',()=>addDigitoTela('6'))}
          {Btn('-',()=>addDigitoTela('-'))}
          {Btn('1',()=>addDigitoTela('1'))}
          {Btn('2',()=>addDigitoTela('2'))}
          {Btn('3',()=>addDigitoTela('3'))}
          {Btn('+',()=>addDigitoTela('+'))}
          {Btn('0',()=>addDigitoTela('0'))}
          {Btn('.',()=>addDigitoTela('.'))}
          {Btn('<-',()=>Operacao('bs'))}
          {Btn('=',()=>Operacao('='))}
        </div>
      </div>
    </>
  );
}
