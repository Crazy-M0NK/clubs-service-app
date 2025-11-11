import { useParams } from "react-router";
import { Header } from "../components/Header";
import { numbersFormatter } from "../utils/numbersFormatter";

const TEMP_NAME = "Harman";
const TEMP_BALANCE = 39462398;

export default function Club() {
  const { club_id } = useParams<{ club_id: string }>();
  console.log("Club ID:", club_id);
  return (
    <div className="max-w-[550px] w-full flex flex-col items-center justify-center">
      <Header />
      <img
        className="rounded-full bg-[#F2F9FF] mb-8"
        src=""
        width={106}
        height={106}
      />
      <h1 className="font-bold text-[32px] leading-10 mb-2">{TEMP_NAME}</h1>
      <p className="text-[15px] leading-5 text-[#545A6B] mb-1">Баланс клуба</p>
      <p className="font-semibold text-xl mb-6">
        {numbersFormatter(TEMP_BALANCE, true)}
      </p>
      <div className="flex flex-col gap-4 w-full">
        <div className="gradient-card">
          <div>
            <p className="font-semibold text-[18px] leading-6">
              1 фишка = 1,45 USDT
            </p>
            <p className="text-[15px] leading-[17px] text-[#545A6B]">
              Текущий курс
            </p>
          </div>
        </div>
        <div className="card-shadow p-4 w-full rounded-lg max-w-[400px] h-20 flex flex-col items-center justify-between">
          <p className="font-semibold text-[18px] leading-6">
            Пригласить в клуб
          </p>
          <p className="text-[13px] leading-[17px] text-[#545A6B]">
            Тут будет ссылка на приглашение
          </p>
        </div>
      </div>
      {/*//TODO добавить кнопки */}
    </div>
  );
}
