import React from 'react';

const Footer = () => {
  return (
    <>
      <footer class="footer_section bg_default_blue text-white clearfix">
      <div class="container">

        <div class="footer_widget_area clearfix">
          <div class="row justify-content-lg-between justify-content-md-center justify-content-sm-center">
            <div class="col-lg-2 col-md-4 col-sm-12 col-xs-12">
              <div class="widget footer_useful_links">
                <h3 class="footer_widget_title">Quick Links</h3>
                <ul class="ul_li_block clearfix">
                  <li><a href="#!">About us</a></li>
                  <li><a href="#!">Services</a></li>
                  <li><a href="#!">Blog</a></li>
                  <li><a href="#!">Contact us</a></li>
                </ul>
              </div>
            </div>

            

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="widget recent_works_list">
                <h3 class="footer_widget_title">Blog</h3>
                <ul class="ul_li_block clearfix">
                  <li>
                    <div class="small_blog clearfix">
                      <a class="item_image" target="_blank" href="#!">
                        <img src="assets/images/recent_works/img_01.png" alt="image_not_found"/>
                      </a>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a target="_blank" href="#!">
                            Topic 1
                          </a>
                        </h3>
                        <span class="post_date"><i class="far fa-calendar-alt"></i> 14 Mar 2025</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="small_blog clearfix">
                      <a class="item_image" target="_blank" href="#!">
                        <img src="assets/images/recent_works/img_02.png" alt="image_not_found"/>
                      </a>
                      <div class="item_content">
                        <h3 class="item_title">
                          <a target="_blank" href="#!">
                            Topic 2
                          </a>
                        </h3>
                        <span class="post_date"><i class="far fa-calendar-alt"></i> 15 Mar 2025</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <div class="widget footer_contact_form">
                <h3 class="footer_widget_title">Contact Us</h3>
                <p class="mb_30">
                  Our team of experts are here for you, from start to finish
                </p>
                <form action="#">
                  <div class="form_item">
                    <input type="email" name="email" placeholder="Enter Your Email"/>
                    <button type="submit" class="submit_btn"><i class="far fa-arrow-right"></i></button>
                  </div>
                </form>
                <span class="footer_hotline"><i class="far fa-phone"></i> +1 (216) 770 3322</span>
              </div>
            </div>
          </div>
        </div>

        <div class="footer_bottom_boxed clearfix">
          <div class="row align-items-center justify-content-lg-between justify-content-md-between">
            <div class="col-lg-6 col-md-6">
              <p class="copyright_text mb-0">© Copyright 2025 All Right Reserved Design By <a class="author_links" target="_blank" href="#!">Remarcable</a></p>
            </div>

            <div class="col-lg-6 col-md-6">
              <ul class="circle_social_links ul_li_right clearfix">
                <li>
                  <a class="bg_facebook" href="#!">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a class="bg_twitter" href="#!">
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a class="bg_youtube" href="#!">
                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a class="bg_linkedin" href="#!">
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
    </>
  );
}

export default Footer;
