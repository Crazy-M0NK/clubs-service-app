//init();

import { GradientButton } from "../../components/GradientButton";
import { ClubCard } from "./ClubCard";

export default function Home() {
  //TODO перенести загрузку данных юзера в Layout
  /* 
  const rawInitData = useRawInitData();
  const initData = parseInitDataQuery(rawInitData ?? ""); //тип в библиотеке - InitDataGenType
  if (!rawInitData)
    return (
      <>
        <p className="text-xl">Загрузка данных Telegram...</p>
      </>
    );
  */

  return (
    <div className="w-full flex flex-col items-center pt-10">
      <div className="w-[106px] h-[106px] bg-[#90D6FB] rounded-[20px] mb-8"></div>
      <h1 className="max-w-[289px] font-bold text-[32px] leading-10 mb-6">
        Добро пожаловать! Выберите клуб
      </h1>
      <ClubCard name="Harman" id={1} image="http://www.chototam.com" />
      <ClubCard name="Harman" id={1} image="http://www.chototam.com" />
      <ClubCard name="Harman" id={1} image="http://www.chototam.com" />
      <GradientButton onPress={() => {}} text={"Добавить новый клуб"} icon />
      {
        //*Первая версия отображения данных
        /* 
      <p className="">
        Привет, твоя InitData:
        {Object.entries(initData).map(([key, value]) => {
          if (typeof value === "object")
            return Object.entries(value as object).map(([key, value]) => (
              <p key={key}>
                {key}: {String(value)}
              </p>
            ));
          return (
            <p key={key}>
              {key}:{" "}
              {key === "auth_date"
                ? new Date(value as Date).toJSON()
                : String(value)}
            </p>
          );
        })}
      </p> */
      }
    </div>
  );
}
