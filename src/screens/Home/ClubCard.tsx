interface Props {
  name: string;
  id: number;
  image: string;
}

export function ClubCard({ image, name, id }: Props) {
  return (
    <button className="card-shadow w-full max-w-[400px] h-20 rounded-2xl flex justify-between items-center bg-white px-4 gap-4 mb-4">
      <div className="flex gap-3 items-center">
        <image className="h-12 w-12 rounded-full bg-[#F2F9FF]" />
        <p className="font-semibold text-[17px] leading-[22px]">{name}</p>
      </div>
      <div className="button-small">Перейти</div>
    </button>
  );
}
