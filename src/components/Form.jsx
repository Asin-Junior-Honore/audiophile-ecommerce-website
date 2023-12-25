import { useContext } from "react";
import DataContext from "../Context/DataContext";
const Form = () => {
  const {
    cashonelivery,
    setCashonDelivery,
    handleSubmit,
    onSubmit,
    register,
    errors,
  } = useContext(DataContext);
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="form">
      <div className=" py-[18px]">
        <h3 className=" text-[#d87d4a] pb-[10px]">BILLING DETAILS</h3>

        <div>
          <div
            className="important lg:space-x-10 flex flex-col lg:flex-row
          "
          >
            <div>
              <span className="flex justify-between items-center">
                <label>Name</label>

                <p className=" text-red-600 text-[0.75rem] text-end">
                  {errors.name?.message}{" "}
                </p>
              </span>

              <br />
              <input
                type="text"
                placeholder="Asin Honore"
                {...register("name")}
              />
            </div>

            <div>
              <span className="flex justify-between items-center">
                <label>Email Address</label>
                <p className=" text-red-600  text-[0.75rem] text-end">
                  {errors.email?.message}{" "}
                </p>
              </span>

              <br />
              <input
                type="email"
                placeholder="asinhonore@gmail.com"
                {...register("email")}
              />
            </div>
          </div>

          <div>
            <span className="flex justify-between items-center">
              <label>Phone Number</label>
              <p className=" text-red-600 text-[0.75rem] text-end">
                {errors.phonenumber?.message}{" "}
              </p>
            </span>

            <br />
            <input
              type="number"
              placeholder="09091189406"
              {...register("phonenumber")}
            />
          </div>
        </div>
      </div>

      <div className=" py-[18px]">
        <h3 className=" text-[#d87d4a] pb-[10px]">SHIPPING INFO</h3>
        <div>
          <div>
            <span className="flex justify-between items-center">
              <label>Your Address</label>
              <p className=" text-red-600 text-[0.75rem] text-end">
                {errors.address?.message}{" "}
              </p>
            </span>

            <br />
            <input
              type="text"
              className="w-[100%]"
              placeholder="close-64,house-5,lagos"
              {...register("address")}
            />
          </div>

          <div className="important lg:space-x-10 flex flex-col lg:flex-row ">
            <div>
              <span className="flex justify-between items-center">
                <label>ZIP Code</label>
                <p className=" text-red-600 text-[0.75rem] text-end">
                  {errors.zipcode?.message}{" "}
                </p>
              </span>

              <br />
              <input
                type="number"
                placeholder="11001"
                {...register("zipcode")}
              />
            </div>

            <div>
              <span className="flex justify-between items-center">
                <label>City</label>
                <p className=" text-red-600 text-[0.75rem] text-end">
                  {errors.city?.message}{" "}
                </p>
              </span>

              <br />
              <input type="text" placeholder="Lagos" {...register("city")} />
            </div>
          </div>

          <div>
            <span className="flex justify-between items-center">
              <label>Country</label>
              <p className=" text-red-600 text-[0.75rem] text-end">
                {errors.country?.message}{" "}
              </p>
            </span>

            <br />
            <input type="text" placeholder="Nigeria" {...register("country")} />
          </div>
        </div>
      </div>

      <div className=" py-[18px]">
        <h3 className=" text-[#d87d4a] pb-[10px]">PAYMENT DETAILS</h3>
        <div>
          <div>
            <span className="flex justify-between items-center">
              <label>Payment Method</label>
            </span>
          </div>

          <div className="grid lg:grid-cols-2 ">
            <div></div>
            <div className="important  lg:p-[1rem] space-y-5 flex flex-col items-start w-[300px]">
              <div className="orangeradio lg:space-x-3">
                <label htmlFor="e-money">e-Money</label>
                <br />
                <input
                  type="radio"
                  id="e-money"
                  checked={cashonelivery == true}
                  name="payment-method"
                  onChange={(e) => setCashonDelivery(true)}
                />
              </div>

              <div className="orangeradio lg:space-x-3">
                <label htmlFor="cash on delivery">Cash on Delivery</label>
                <br />
                <input
                  type="radio"
                  id="cash on delivery"
                  name="payment-method"
                  checked={cashonelivery == false}
                  onChange={(e) => setCashonDelivery(false)}
                />
              </div>
            </div>
          </div>

          {cashonelivery ? (
            <div className="important lg:space-x-10 flex flex-col lg:flex-row ">
              <div>
                <span className="flex justify-between items-center">
                  <label>e-Money Number</label>
                </span>

                <br />
                <input
                  type="number"
                  placeholder="2232445"
                  // {...register("emoneynumber")}
                />
              </div>

              <div>
                <span className="flex justify-between items-center">
                  <label>e-Money PIN</label>
                </span>

                <br />
                <input
                  type="number"
                  placeholder="6891"
                  // {...register("emoneypin")}
                />
              </div>
            </div>
          ) : (
            <div className="mt-[1.5rem]">
              <p className="text-[rgba(0,0,0,0.5)] text-[0.9375rem] leading-[1.66] font-normal cashless">
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier
                <br /> arrives at your residence. Just make sure your address is
                correct so that your order will
                <br /> not be cancelled.
              </p>
            </div>
          )}
        </div>
      </div>
      {/* <button type="submit">ff</button> */}
    </form>
  );
};

export default Form;
