import { features } from "../constants"

const FeatureSection = () => {
  return (
    <div className="relative mt-8 md:mt-20 border-b border-neutral-800 min-h-[200px]">
        <div className="text-center">
            <span className="bg-nuetral-900 text-[var(--color-title)] rounded-full h-6 text-base font-medium px-2 py-1 uppercase">
                Servicios
            </span>
            <h2 className="text-2xl sm:text-5xl lg:text-3xl mt-10 lg:mt-5  tracking-wide">
                Asegura el rendimiento óptimo<span className="bg-gradient-to-r from-[var(--color-title)] to-[var(--color-title-gradient)]
                text-transparent bg-clip-text">{""} de tus sistemas</span>
            </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-6">
            {features.map((feature, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                    <div className="flex">
                        <div className="flex h-8 w-8 mx-6 md:h-9 md:w-9 p-2 bg-neutral-900 text-[var(--color-icons-services)] justify-center
                        items-center rounded-full">
                            {feature.icon}
                        </div>
                        <div>
                            <h5 className="mt-1 mb-4 text-xl md:text-lg">{feature.text}</h5>
                            <p className="text-base p-2 mb-14 text-neutral-500">
                                {feature.description}
                            </p>

                        </div>
                    </div>
                </div>

            ))}

        </div>
    </div>

  )
}

export default FeatureSection