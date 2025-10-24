import { init, parseInitDataQuery, useRawInitData } from "@tma.js/sdk-react";
import "./App.css";

init();

function App() {
  const rawInitData = useRawInitData();
  const initData = parseInitDataQuery(rawInitData ?? "");

  if (!rawInitData)
    return (
      <>
        <p className="text-xl">Загрузка данных Telegram...</p>
      </>
    );

  return (
    <div className="max-w-screen">
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
      </p>
    </div>
  );
}

export default App;
