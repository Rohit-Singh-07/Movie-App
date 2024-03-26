import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsFire } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi2";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../Utils/axios";
import { MdLiveTv } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { IoLanguage } from "react-icons/io5";
import { SiThemoviedatabase } from "react-icons/si";
import { BiCameraMovie } from "react-icons/bi";

function NavScrollExample() {
  const [searchTerm, setSearchTerm] = useState("");

  const [SearchResult, setSearchResult] = useState(null);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${searchTerm}`);
      setSearchResult(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSearches();
  }, [searchTerm]);

  return (
    <>
      <Navbar
        expand="md"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary md:px-4 z-20"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="md:mr-[10vw] text-orange-200">
          <span className="flex items-center"><SiThemoviedatabase />चलचित्र</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex gap-[2vw]  xl:mr-[8vw] lg:mr-[4vw] md:mr-[6vw]">
              <Form.Control
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                type="search"
                placeholder="Search"
                className="me-2 xl:w-[40vw] lg:w-[40vw] md:w-[30vw]"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

            <div className="md:max-w-[40vw] max-w-[83vw] max-h-[50vh] xl:left-[15.7vw] lg:left-[16.9vw] absolute z-10 bg-white md:top-14 top-24 rounded overflow-hidden overflow-y-auto">
              {SearchResult?.map((elem, idx) => {
                return (
                  <Link
                    to={`/${elem.media_type}/details/${elem.id}`}
                    key={idx}
                    className="md:w-[40vw] w-[83vw] bg-zinc-100 h-[16vh] mt-[0.5vw] flex justify-start rounded gap-[2vw]"
                  >
                    <img
                      className="h-full w-5vw object-cover"
                      src={
                        elem.poster_path ||
                        elem.backdrop_path ||
                        elem.profile_path
                          ? `https://image.tmdb.org/t/p/original/${
                              elem.poster_path ||
                              elem.backdrop_path ||
                              elem.profile_path
                            }`
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                      }
                      alt=""
                    />
                    <div>
                      <h1 className="font-bold">
                        {elem.name || elem.title || elem.original_title}
                      </h1>
                      {elem.media_type === "person" && (
                        <p>Department: {elem.known_for_department}</p>
                      )}
                      {elem.media_type === "person" && (
                        <p>
                          Featured in:{" "}
                          {elem.known_for.map((e, i) => (
                            <span key={i}>
                              {e.name || e.title || e.original_title},{" "}
                            </span>
                          ))}
                        </p>
                      )}
                      {(elem.media_type === "movie" ||
                        elem.media_type === "tv") && (
                        <p className="flex items-center gap-2">
                          <MdLiveTv />
                          {elem.media_type}
                        </p>
                      )}
                      {(elem.media_type === "movie" ||
                        elem.media_type === "tv") && (
                        <p className="flex items-center gap-2">
                          <IoLanguage /> {elem.original_language}
                        </p>
                      )}
                      {(elem.media_type === "movie" ||
                        elem.media_type === "tv") && (
                        <span>
                          {elem.media_type === "movie" ? (
                            <span className="flex items-center gap-2">
                              <GrAnnounce />
                              {elem.release_date}
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <GrAnnounce />
                              {elem.first_air_date}
                            </span>
                          )}
                        </span>
                      )}
                      {elem.adult === true && <p>18+</p>}
                    </div>
                  </Link>
                );
              })}
            </div>

            <Nav
              className="me-auto my-2 my-lg-0 xl:gap-[3vw] lg:gap-[1vw] md:gap-[1.5vw] mr-[1vw]"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="more" id="navbarScrollingDropdown" className="text-orange-200">
                <NavDropdown.Item as={Link} to="/trending">
                  <span className="flex items-center gap-[1vw] text-orange-100">
                    <BsFire className="text-orange-300" />
                    Trending
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/popular">
                  <span className="flex gap-[1vw]">
                    <HiOutlineSparkles className="text-orange-200" />
                    Popular
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/people">
                  People
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/movies"><span className="flex items-center"><BiCameraMovie className="text-orange-200"/>Movie</span></Nav.Link>
              <Nav.Link href="/tv"><span className="flex items-center"><MdLiveTv className="text-orange-200"/>TV</span></Nav.Link>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScrollExample;
