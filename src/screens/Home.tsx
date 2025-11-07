//init();

function Home() {
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
    <div className="max-w-screen">
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

export default Home;
