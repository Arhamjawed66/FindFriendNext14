import AnalayticsChart from "@/src/components/barchart/Barchart";





export default function Dasboard() {
  return (
    <div >
       
            <div className="flex justify-between">
            <h1 className="font-bold  transition ease-in-out delay-150 hover:cursor-pointer hover:-translate-y-1 hover:scale-110  duration-300 ...">Dasboard</h1>
            </div>
        <AnalayticsChart/>
      </div>
  )
}
