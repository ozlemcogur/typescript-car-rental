import CustomFilter from "../components/CustomFilter"
import Hero from "../components/Hero"
import SearcBar from "../components/SearchBar"
import { useEffect, useState } from "react"
import { fetchCars } from "../utils/fetchCars"
import { CarType } from "../types"
import Card from "../components/Card"
import ShowMore from "../components/ShowMore"
import { useSearchParams } from "react-router-dom"
import { years,fuels } from "../constants"

const MainPage = () => {
  const [params] = useSearchParams()
  const [cars, setCars] = useState<CarType[] | null>(null)
  const [isError, setIsError] = useState<boolean>(false)
  useEffect(() => {
    const paramsObj = Object.fromEntries(params.entries())
    fetchCars(paramsObj)
      .then((data) => setCars(data))
      .catch(() => setIsError(true))
  }, [params])
  return (
    <div>
      <Hero />
      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabalarıkeşfet</p>
        </div>
        <div className="home__filters">
          <SearcBar />
          <div className="home__filter-container">
            <CustomFilter title= "Yakıt Tipi" options={fuels} />
            <CustomFilter title="Üretim Yılı" options={years}/>
          </div>
        </div>
      
        {!cars ?
          (<div className="home__error-container">
            <h2>Yükleniyor...</h2>
          </div>) 
        : isError ? (<div className="home__error-container">
            <h2>Üzgünüz verileri alırken bir hata oluştu</h2>
          </div>)
        : cars.length < 1 ? (<div className="home__error-container">
            <h2>Aradığınız kriterlere uygun araba bulunamadı</h2>
          </div>)
        : (<section>
              <div className="home__cars-wrapper">
                {cars.map((car,i) => <Card key={i} car={car}/>)}
              </div>
              <ShowMore/>
            </section>)}
      </div>
    </div>
  )
}

export default MainPage
