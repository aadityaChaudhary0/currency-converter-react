import CurrencySelectBox from "./components/CurrencySelectBox";
import AmountInputBox from "./components/AmountInputBox";
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {

  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("npr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState("0.0")

  const currencyInfo = useCurrencyInfo(from);

  const currencyKeys = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }
  

  return (
    <div
      className="w-full h-screen bg-cover flex flex-col items-center gap-10"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
      }}
    >
      <h1 className="text-5xl font-bold text-blue-600 text-center mt-10">
        Currency Converter
      </h1>

      <div className="w-80">
        <form 
          className="flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div>
            <AmountInputBox
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          <div>
            <CurrencySelectBox 
            label="From" 
            selectCurrency = {from}
            currencyOption={currencyKeys}
            onCurrencyChange={(amount) => setFrom(amount)}
            />
          </div>

          <div>
            <CurrencySelectBox 
            label="To" 
            selectCurrency = {to}
            currencyOption={currencyKeys}
            onCurrencyChange={(amount) => setTo(amount)}
            />
          </div>

          <div className="text-center">
            <p className="text-xs">Exchange rate</p>
            <h1 className="text-4xl font-bold text-blue-600">{convertedAmount}</h1>
          </div>

          <div className="flex self-center bg-blue-600 py-2 px-8 text-white rounded-md">
            <button>Convert</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
