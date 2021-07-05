export default function Portfolio() {
  return (
    <div
      className="portfolioCon"
      class="animate__animated animate__backInRight"
    >
      <div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div
              class="carousel-item active"
              style={{ width: "800px", height: "600px", marginTop: "200px" }}
            >
              <img src="./myProjects.png" class="d-block w-100" alt="..." />
            </div>
            <div
              class="carousel-item"
              style={{ width: "800px", height: "600px" }}
            >
              <img
                src="./midnightProject.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div
              class="carousel-item"
              style={{ width: "800px", height: "600px", marginTop: "200px" }}
            >
              <img src="./expenseProject.png" class="d-block w-100" alt="..." />
            </div>
            <div
              class="carousel-item"
              style={{ width: "800px", height: "600px", marginTop: "200px" }}
            >
              <img src="./tvShowsProject.png" class="d-block w-100" alt="..." />
            </div>
            <div
              class="carousel-item"
              style={{ width: "800px", height: "600px", marginTop: "200px" }}
            >
              <img src="./userApp.png" class="d-block w-100" alt="..." />
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
