function MainModal(props) {
  return (
    <div>
      <div
        className="modal fade"
        id="mainModal"
        tabIndex="-1"
        aria-labelledby="mainModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0">
              <span
                className="fs-4 text-secondary-emphasis w-100 text-center ps-3"
                id="mainModalLabel"
              >
                {props.title}
              </span>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainModal
