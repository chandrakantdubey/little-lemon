export default function BookingForm(
    {
        handleChange,
        formData,
        availableTimes,
        availableTimesDispatch,
        submitForm
    })
{
  return (
    <>
        <form onSubmit={(e)=>submitForm(e,formData)}>
            <div>
                <label htmlFor="res_date">Booking Date</label>
                <input
                    type="date"
                    name="res_date"
                    id="res_date"
                    onChange={(e)=>{
                        handleChange(e)
                        availableTimesDispatch({
                            type: 'date_change'
                        })
                    }}
                    value={formData.res_date}
                    required
                />
            </div>
            <div>
                <label htmlFor="res_time">Reservation Time</label>
                <select
                    name="res_time" id="res_time"
                    onChange={handleChange}
                    value={formData.res_time}
                    required
                >
                    {
                        availableTimes.map((slot, index)=> {
                            return (<option key={index} value={slot}>{slot}</option>)
                        })
                    }
                </select>
            </div>
            <div>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    name="number_of_guests"
                    id="guests" min="1" max="10"
                    onChange={handleChange}
                    value={formData.number_of_guests}
                    required
                />
            </div>
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select
                    name="occasion"
                    id="ocassion"
                    onChange={handleChange}
                    value={formData.ocassion}
                    required
                >
                    <option value="select_occasion">--select occassion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>
            </div>
            <div>
                <input
                    type="submit"
                    value="Make Reservation"
                />
            </div>
        </form>
    </>
  )
}
