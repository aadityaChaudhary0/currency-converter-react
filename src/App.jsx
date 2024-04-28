import CountrySelectBox from "./components/CountrySelectBox";
import AmountInputBox from "./components/AmountInputBox";

function App() {
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
        <form className="flex flex-col gap-6">
          <div>
            <AmountInputBox />
          </div>

          <div>
            <CountrySelectBox label="From" />
          </div>

          <div>
            <CountrySelectBox label="To" />
          </div>

          <div className="text-center">
              <p className="text-xs">Exchange rate</p>
              <h1 className="text-4xl font-bold text-blue-600">0.0</h1>
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
