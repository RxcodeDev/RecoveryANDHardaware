import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"

const Pricing = () => {
  return (
    <div className="mt-0 md:mt-14">
        <h2 className="text-xl lg:text-2xl text-center my-8
        tracking-wider">
        Soluciones personalizadas
        </h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((option, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <div className="p-10 border border-neutral-700 rounded-xl">
                        <p className="text-xl mb-8">
                            {option.title}
                            {option.title === "Pro" && (
                                <span className="bg-gradient-to-r from-orange-500 to-red-400
                                text-transparent bg-clip-text text-xl mb-4 ml-2">
                                    (Most Popular)
                                </span>
                            )} 
                        </p>
                        <p className="mb-8">
                            
                            <img src={option.image} alt={option.title} className="w-full h-36 rounded-lg"/>
                        </p>
                        <ul>
                            {option.features.map((feature, index) => (
                                <li key={index} className="mt-8 flex items-center">
                                    <CheckCircle2 color="var(--color-icons-services)"/>
                                    <span className="ml-2 text-neutral-400 tracking-tight">{feature}</span>
                                    
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Pricing