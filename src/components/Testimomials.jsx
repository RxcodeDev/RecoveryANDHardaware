import { testimonials } from "../constants"

const Testimomials = () => {
  return (
    <div className="mt-0 md:mt-28 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-2xl text-center my-10
        lg:my-10 text-[var(--color-title)]">Expertos en IT
        </h2>

        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 hover:scale-105 transform transition-transform duration-300">
                <div className="bg-neutral rounded-md p-6 text-md border
                border-neutral-800 font-thin">
                    <p>
                        {testimonial.text}
                        <div className="flex mt-8 items-start">
                            <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300" 
                            src={testimonial.image} 
                            alt={testimonial.user} 
                            />
                            <div>
                                <h6>{testimonial.user}</h6>
                                <span className="text-sm font-normal italic text-neutral-600">
                                    {testimonial.company}
                                </span>
                            </div>
                        </div>
                    </p>
                </div>

              </div>  
            ))}

        </div>

    </div>
  )
}

export default Testimomials