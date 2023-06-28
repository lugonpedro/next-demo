type Props = {};

export default function Header({}: Props) {
  return (
    <div className="bg-[#535494] p-2">
      <h2>Democracia Beta:</h2>
      <p>Nunca foi tão fácil acompanhar quem te representa</p>
      <li>Fique de olho na atuação dos seus representantes federais</li>
      <li>Conheça seus projetos de leis</li>
      <li>Esteja sempre ligado nas votações mais importantes</li>
      <button>Baixe o Aplicativo</button>
      <button>Voluntarie-se</button>
    </div>
  );
}
