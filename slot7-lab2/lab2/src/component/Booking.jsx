import '../css/booking.css';

export default function BookingForm() {
  return (
    <div className="container bg-dark my-5">
        <div class="alert alert-primary" role="alert">
            A simple primary alert—check it out!
        </div>
        <h2 className="text-center text-white mb-4">Book Your Table</h2>
        <form>
            <div className="row mb-3">
            <div className="col-md-4 mb-2">
                <input
                type="text"
                className="form-control"
                placeholder="Your Name *"
                required
                />
            </div>
            <div className="col-md-4 mb-2">
                <input
                type="email"
                className="form-control"
                placeholder="Your Email *"
                required
                />
            </div>
            <div className="col-md-4 mb-2">
                <select className="form-select" required>
                <option value="">Select a Service</option>
                {/* <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="party">Party</option> */}
                </select>
            </div>
            </div>

            <div className="mb-3">
            <textarea
                className="form-control"
                rows="5"
                placeholder="Please write your comment"
            ></textarea>
            </div>

            <div className="text-start">
            <button type="submit" className="btn btn-warning px-4">
                Send Message
            </button>
            </div>
        </form>
    </div>
  );
}
