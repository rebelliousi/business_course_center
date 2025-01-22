import {lazy,Suspense} from "react"
const Slider=lazy(()=>import("./Slider")) 
const Courses=lazy(()=>import("./Courses"))
const Discounts=lazy(()=>import("./Discount"))
const Activity=lazy(()=>import("./Activity"))
const Teachers=lazy(()=>import("./Teachers"))
const Advice=lazy(()=>import("./Advice"))
const Media=lazy(()=>import("./Media"))
const News=lazy(()=>import('./News'))





const Home:React.FC=()=>{
    return(
        <div className="min-h-screen">
            <Suspense fallback={<div></div>}>

            <Slider/>
            <Advice/>
            <Courses/>
            <Discounts/>
            <Activity/>
            <News/>
           
            <Teachers/>
            <Media/>
            </Suspense>

            
        </div>
    )
}
export default Home