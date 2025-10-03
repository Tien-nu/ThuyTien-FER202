export default function Column(){
    return(
        <div className="container my-4">
      {/* Hàng 1 */}
        <div className="row">
            <div className="col-6 bg-body-secondary border border-dark text-dark p-3">
            First col
            </div>
            <div className="col-6 bg-body-secondary border border-dark text-dark p-3">
            Second col
            </div>
        </div>

        {/* Hàng 2 */}
        <div className="row">
            <div className="col bg-body-secondary border border-dark text-dark p-3">col</div>
            <div className="col bg-body-secondary border border-dark text-dark p-3">col</div>
            <div className="col bg-body-secondary border border-dark text-dark p-3">col</div>
        </div>

        {/* Hàng 3 */}
        <div className="row">
            <div className="col bg-body-secondary border border-dark text-dark p-3">col</div>
            <div className="col bg-body-secondary border border-dark text-dark p-3">col</div>
            <div className="col bg-body-secondary border border-dark text-dark p-3">col</div>
            <div className="col bg-body-secondary border border-dark text-dark p-3">col</div>
        </div>


        </div>
    )
}