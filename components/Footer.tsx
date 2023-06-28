type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="flex flex-row gap-4 md:gap-8 xl:gap-16">
        <a href={""} className="">
          Teste
        </a>
        <a href={""} className="">
          Teste 2
        </a>
      </div>

      <p className="text">© 2023 por Democracia Beta.</p>
    </div>
  );
}
