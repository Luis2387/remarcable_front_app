import React from 'react';

const Navbar = () => {
  return (

   <header class="header_section sticky_header header_default clearfix">
      <div class="header_top bg_default_blue text-white clearfix">
        <div class="maxw_1420 container">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <ul class="header_contact_info ul_li clearfix">
                <li><i class="far fa-map-marker-alt"></i> 675 Alpha Drive Suite E</li>
                <li><i class="far fa-envelope-open"></i> support@remarcable.com</li>
                <li><i class="far fa-clock"></i> Monday-Friday, 08 am - 04 pm</li>
              </ul>
            </div>

            <div class="col-lg-4">
              <ul class="header_items_list ul_li_right clearfix">
                <li>
                  <div class="header_social_links d-flex align-items-center">
                    <span class="social_title text-white">Social Links:</span>
                    <ul class="primary_social_links ul_li clearfix">
                      <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                      <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                      <li><a href="#!"><i class="fab fa-youtube"></i></a></li>
                      <li><a href="#!"><i class="fab fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="header_bottom">
        <div class="maxw_1420 container">
          <div class="row align-items-center">

            <div class="col-lg-3">
              <div class="brand_logo">
                <a href="index.html">
                  <img src="assets/images/logo/logo_01_1x.png" srcset="assets/images/logo/logo_01_2x.png 2x" alt="logo_not_found"/>
                </a>
                <ul class="mobilemenu_btns_group ul_li_right clearfix">
                  <li>
                    <button type="button" class="search_btn" data-bs-toggle="collapse" data-bs-target="#search_body_collapse" aria-expanded="false" aria-controls="search_body_collapse">
                      <i class="fal fa-search"></i>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="mobile_menu_btn"><i class="fal fa-bars"></i></button>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-6">
              <nav class="main_menu clearfix">
                <ul class="ul_li_center clearfix">
                  <li><a href="#!">Home</a></li> 
                  <li><a href="#!">About us</a></li>
                   
                  <li><a href="#!">Blog</a></li>
                  <li><a href="#!">Contact</a></li>    
                </ul>
              </nav>
            </div>

            <div class="col-lg-3">
              <ul class="header_btns_group ul_li_right clearfix">
                
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div id="search_body_collapse" class="search_body_collapse collapse">
        <div class="search_body">
          <div class="container maxw_1420">
            <form action="#">
              <div class="form_item m-0">
                <input type="search" name="search" placeholder="Type here..."/>
                <button type="submit"><i class="fal fa-search"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
    

  );
}

export default Navbar;