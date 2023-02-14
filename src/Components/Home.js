import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import vector from "../assets/img/card1.jpg";
import vector1 from "../assets/img/cards2.jpg";
import vector2 from "../assets/img/cards3.jpg";
import vector3 from "../assets/img/cards4.jpg";
import vector4 from "../assets/img/cards5.jpg";
import Card from "react-bootstrap/Card";

// import vector from "../assets/img/vector.img"
export const Home = () => {
  return (
    <section>
      <Container>
        <Navbar bg="white" expand="lg">
          <Navbar.Brand href="#home">PT DIKA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Nav className="ms-auto">
            <div className="navigation">
              <NavLink to="">Home</NavLink>
              <NavLink to="">Service</NavLink>
              <NavLink to="">Technology</NavLink>
              <NavLink to="">Job Vacancies</NavLink>
              <NavLink to="">About Us</NavLink>
            </div>
            <br></br>
            <div className="login text-dark">
              <NavLink to="/Utama">Login</NavLink>
            </div>
          </Nav>
        </Navbar>
      </Container>
      <div className="home">
        <form className="d-flex justify-content-center">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control form-control-lg rounded-pill"
              id="contoh1"
              placeholder="ENTER YOUR EMAIL"
            ></input>
          </div>
        </form>
        <br></br>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-warning d-flex justify-content-center rounded-pill"
          >
            Get Started
          </button>
        </div>
        <Container>
          <div className="d-flex">
            <div className="wrap-text">
              <span className="tagline">Your future begin here</span>
              <h1 className="tagline">One Stop Outsourcing Solutions</h1>
              <p className="word-wrap">
                Dengan manajemen yang profesional dan berpengalaman dibidang
                keuangan dan jasa, DIKA merupakan salah satu mitra bisnis yang
                andal dan terpercaya dalam mengembangkan bisnis dan perusahaan
                klien kami.
              </p>
            </div>
            <div className="image">
              <img src={require("../assets/img/vector2.png")} alt="" />
            </div>
          </div>
        </Container>
      </div>
      <Container className="text-center">
        <div className="d-flex">
          <div>
            <span className="tagline">Fokus & Layanan</span>
            <h1 className="tagline">Solusi Terbaik</h1>
            <p>
              Kami fokus melayani perusahaan yang berkembang pesat untuk
              mewakili, melindungi, dan mengembangkan bisnis mereka. Kami akan
              membantu Anda dalam mengembangkan bisnis sehingga tercapai tujuan
              Perusahaan yang diinginkan.
            </p>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-md-4 g-6 d-flex justify-content-center padding-bottom:10px">
          <div className="col">
            <div className="card h-100">
              <img src={vector} class="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Sales Outsourcing</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={vector1} class="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Collection Outsourcing</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={vector2} class="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">IT Outsourcing</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-md-4 g-6 d-flex justify-content-center">
          <div className="col">
            <div className="card h-100">
              <img src={vector3} class="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Collection Outsourcing</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={vector4} class="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">IT Outsourcing</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="informasi">
        <div className="container">
          <br></br>
          <br></br>
          <div className="row justify-content-md-center">
            <div className="col col-lg-4">
              <div className="wrap-text">
                <span className="tagline">Profesional dan Terpercaya</span>
                <h1 className="tagline">Our Advantage</h1>
                <p className="word-wrap">
                  Kami memahami rasa sakit yang tumbuh dan titik gesekan dalam
                  memulai bisnis dari bawah ke atas. Jadi, mari kita membuatnya
                  sederhana: Fokus pada mengembangkan bisnis Anda. Kami akan
                  berada tepat di samping Anda, mengurus sisanya.
                </p>
              </div>
              <div className="image">
                <img src={require("../assets/img/it1.png")} alt="" />
              </div>
            </div>
            <div className="col">
              <div className="row row-cols-4 row-cols-md-2 g-2 d-flex justify-content-center padding-bottom:10px">
                <div className="col">
                  <div className="card h-100">
                    {/* <img src={vector} class="img-responsive" alt="..." width={"10px"} ></img> */}
                    <div className="card-body">
                      <h5 className="card-title text-center">
                        Tim Management yang Profesional
                      </h5>
                      <p class="card-text">
                        Manajemen DIKA memiliki pengalaman yang banyak di
                        industri finansial dan outsourcing sebelum bergabung ke
                        dalam perusahaan. DIKA dapat mengerti kebutuhan dan
                        concern dari dari klien. Kami juga dapat memahami
                        terkait dengan semua regulasi dari industri setiap klien
                        DIKA yang berdampak pada bisnis klien.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    {/* <img src={vector1} class="card-img-top" alt="..."></img> */}
                    <div className="card-body">
                      <h5 className="card-title text-center">
                        Kinerja yang Terbukti Baik
                      </h5>
                      <p class="card-text">
                        Dengan business performance selama 9 tahun untuk klien
                        kami, Menjadikan kami sebagai partner yang kuat kepada
                        klien-klien kami dalam mencapai objek bisnisnya.
                        Sebagian besar klien kami juga memperpanjang kontrak
                        kerjasama selama bertahun-tahun.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-cols-4 row-cols-md-2 g-2 d-flex justify-content-center padding-bottom:10px">
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title text-center">
                        Memilii Financial Yang Tinggi
                      </h5>
                      <p className="card-text">
                        Support dari Dana Pensiun BCA, DIKA dapat melakukan
                        finance big scale investment dan outsourcing projects
                        yang memerlukan banyak kebutuhan finansial
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title text-center">
                        Memiliki Cabang yang Tersebar di Seluruh Indonesia
                      </h5>
                      <p className="card-text">
                        DIKA sudah tersebar lebih dari 50 area di Indonesia
                        untuk meningkatkan service kepada Klien dalam
                        mengembangkan bisnisnya di Nusantara
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card className="text-center" height="100%">
        <Card.Body color="#fff">
          <Card.Title>PT Danamas Kreasi Andalan</Card.Title>
          {/* <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </section>
  );
};
