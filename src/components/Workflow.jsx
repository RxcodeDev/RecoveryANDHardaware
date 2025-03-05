import { CheckCircle2 } from "lucide-react"
import codeImg from "../assets/features1.png"
import { checklistItems } from "../constants"

export const Workflow = () => {
  return (
    <div className="mt-8">
        <h2 className="text-xl sm:text-5xl lg:text-3xl text-center mt-6 tracking-wide">
            Maximiza el rendimiento de <span className="bg-gradient-to-r from-[var(--color-title)] to-[var(--color-title-gradient)]
            text-transparent bg-clip-text">tu tecnología con nuestro apoyo.</span>
            </h2>
            <div className="flex flex-wrap justify-center">
                <div className="p-2 mt-8 w-full lg:w-1/3">
                    <img src={codeImg} alt="Code" />
                </div>

                <div className="pt-12 w-full lg:w-1/2">
                    {checklistItems.map((item, index) => (
                        <div key={index} className="flex mb-8">
                            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10
                            p-2 justify-center items-center rounded-full">
                                <CheckCircle2/>
                            </div>
                            <div>
                                <h5 className="mt-0 mb-0 text-base">{item.title}</h5>
                                <p className="text-sm text-neutral-500">{item.description}</p>
                            </div>
                        </div>
                        
                    ))}
                </div>


            </div>
    </div>
  )
}

export default Workflow
