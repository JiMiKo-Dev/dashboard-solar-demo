import './App.css'

// component
import MapComponent from './components/Map/MapComponent';
import PlantsOverviewComponent from './components/PlantsOverview/PlantsOverviewComponent';
import EconomicDataComponent from './components/EconomicData/EconomicDataComponent';
import FooterComponent from './components/Footer/FooterComponent';

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <MapComponent />

        <div className="relative z-10">
          <div class="grid grid-cols-6 gap-4">
            <div class="col-start-1 col-end-3 ...">
              <PlantsOverviewComponent />
            </div>
            <div class="col-span-2 col-end-7 ...">
              <EconomicDataComponent />
            </div>
          </div>
        </div>


        <footer className="mt-auto z-10">
          <FooterComponent />
        </footer>
      </div>
    </>
  )
}

export default App
