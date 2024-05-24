import {customers} from "../constants"

const CustomersSection = () => {
  return (
    <div className="bg-white rounded-md">
        <h2 className="text-xl md:text-2xl font-semibold text-center py-2" data-aos="fade-up" data-aos-duration="1500">
          Our Satisfied Customers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6" data-aos="fade-down" data-aos-duration="1600">
        {customers.map((item, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <img src={item.img} alt={`Customer ${item.name}`} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomersSection