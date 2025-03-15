import React from 'react';

const Sidebar = () => {
  return (

      <div class="sidebar-menu-wrapper">
        <div class="sidebar_mobile_menu">

          <span class="close_btn"><i class="fal fa-times"></i></span>

          <div class="mobile_menu_list clearfix">
            <ul class="ul_li_block clearfix">
              <li><a href="#!">Home</a></li> 
              <li><a href="#!">About us</a></li>             
              <li><a href="#!">Blog</a></li>
              <li><a href="#!">Contact</a></li>              
             
            </ul>
          </div>

        </div>
        <div class="overlay"></div>
      </div>
    

  );
}

export default Sidebar;