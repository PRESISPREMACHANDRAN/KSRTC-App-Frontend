import React from 'react'

const Navbar = () => {
  return (
    <div>

        <!-- navbar starts -->
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="https://www.keralartc.com/img/logo.png"
            alt="KSRTC logo"
            width="600"
            height="100"
          />
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">E-Ticketing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="aboutUS.html">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contactUs.html">Contact Us</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
              >More</a
            >
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="heritageTourism.html"
                  >City Heritage Tourism</a
                >
              </li>
              <li><a class="dropdown-item" href="network.html">Network</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  {/* navbar ends */}
    </div>
  )
}

export default Navbar