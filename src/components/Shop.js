import React, { useEffect, useState, useRef } from "react";
import { fetchProducts, fetchCategories, fetchTags } from "../api";


	const Shop = () => {

	// We create useState variables to store the values that React should listen to in case they change.
  // We will store the products, categories, and tags displayed on the page, 
  // as well as the selected categories, selected tags, and text-based search queries.

	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pendingSearch, setPendingSearch] = useState("");
  
  // This variable will act as a flag to determine whether this is the first time the page loads.
  // This prevents redundant API calls since loadInitialData will have already fetched the necessary data.
  const isFirstFilterRender = useRef(true);


  // loadInitialData is responsible for fetching all categories, tags, and products 
  // because this is a full catalog load. 
  // We use Promise.all to fetch all three resources simultaneously. 
  // The retrieved data is stored in support variables: productsData, categoriesData, and tagsData.
  // Finally, we use the set functions to save the information into their respective lists.


  useEffect(() => {
      const loadInitialData = async () => {
          try {
              const [productsData, categoriesData, tagsData] = await Promise.all([
                  fetchProducts(),
                  fetchCategories(),
                  fetchTags(),
              ]);
              setProducts(productsData);
              setCategories(categoriesData);
              setTags(tagsData);
          } catch (error) {
              console.error("Error fetching initial data", error);
          }
      };

      loadInitialData();
  }, []);



  // This second useEffect listens for changes in selectedCategories, selectedTags, or searchQuery.
  // If any of these values change, the effect will be triggered.
  // We prevent it from executing on the initial page render using isFirstFilterRender 
  // to avoid duplicate API calls.

  useEffect(() => {

  if (isFirstFilterRender.current) {
      isFirstFilterRender.current = false;
      return; 
  }

  const applyFilters = async () => {
  		
  		// If selectedCategories, selectedTags, and searchQuery are empty, 
      // it means all filters have been removed, 
      // so we need to fetch all products again.


      if (selectedCategories.length === 0 && selectedTags.length === 0 && searchQuery === "") {
     			const allProducts = await fetchProducts();
          setProducts(allProducts);
          return;
     
      }

      // We create a filters object that stores categories, tags, and text search queries, if applicable.

      const filters = {
          category: selectedCategories.length > 0 ? selectedCategories : null,
          tags: selectedTags.length > 0 ? selectedTags : null,
          q: searchQuery || null,
      };

      try {		
      				// We send the constructed filters object to fetchProducts, 
              // which returns filteredProducts, the updated product list. 
              // We then update the products state with setProducts.

              const filteredProducts = await fetchProducts(filters);
              setProducts(filteredProducts);
          } catch (error) {
              console.error("Error applying filters:", error);
          } 
  };

  applyFilters();

	}, [selectedCategories, selectedTags, searchQuery]);


  // Function to handle category selection. If the category is already selected, remove it. 
  // Otherwise, add it to the list of selected categories.

  const handleCategoryClick = (categoryId) => {
      setSelectedCategories((prevCategories) =>
          prevCategories.includes(categoryId)
              ? prevCategories.filter((id) => id !== categoryId)
              : [...prevCategories, categoryId]
      );
  };


  // Function to handle tag selection. If the tag is already selected, remove it. 
  // Otherwise, add it to the list of selected tags.


  const handleTagClick = (tagId) => {
      setSelectedTags((prevTags) =>
          prevTags.includes(tagId)
              ? prevTags.filter((id) => id !== tagId)
              : [...prevTags, tagId]
      );
  };

  // Function to update the search input as the user types.

  const handleSearchChange = (event) => {
      setPendingSearch(event.target.value);
  };


   // Function to submit the search query. Updates searchQuery with the pending search term.

  const handleSearchSubmit = (event) => {
      event.preventDefault();
      setSearchQuery(pendingSearch);
  };

return (

<section class="shop_section sec_ptb_130 bg_gray clearfix">
	<div class="container">
		<div class="row justify-content-lg-between justify-content-md-center justify-content-sm-center">

			<div class="col-lg-9 col-md-12 order-last">
				<div class="product_selection_bar wow fadeInUp2 clearfix" data-wow-delay=".1s">
					<div class="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
						

						<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							<p class="result_text">Showing {products.length} results</p>
						</div>
					</div>
				</div>

				<div class="row justify-content-center">

					{products.map((product) => (
					<div key={product.id} class="col-lg-4 col-md-4 col-sm-6 col-xs-12 wow fadeInUp2" data-wow-delay=".2s">
						<div class="product_card text-center">
							<button class="item_image" target="_blank">
								<img src="assets/images/shop/img_09.jpg" alt={product.name}/>
							</button>
							<div class="item_content">
								<h3 class="item_title">{product.name}</h3>
								<span class="item_price">$ {product.price}</span>
							</div>
						</div>
					</div>
					))}

				</div>

			</div>

			<div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
				<aside class="sidebar_section clearfix">

					<div class="widget wow fadeInUp2 sb_search_box_2 p-0" data-wow-delay=".1s">
						<form onSubmit={handleSearchSubmit}>
							<div class="form_item mb-0">
								<input
                    id="sb_search"
                    type="search"
                    name="search"
                    placeholder="Search Keywords"
                    value={pendingSearch}
                    onChange={handleSearchChange}
                />
								<button type="submit" className="submit_btn bg_default_orange">
                    <i className="fal fa-search"></i>
                </button>
							</div>
						</form>
					</div>

					<div class="widget wow fadeInUp2 sb_category_list" data-wow-delay=".3s">
						<h3 class="sb_widget_title bottom_line">Categories</h3>
						<ul class="ul_li_block clearfix">
							 {categories.map(category => (
                  <li key={category.id}>
                      <button
                          
                          onClick={() => handleCategoryClick(category.id)}
                          style={{
                              color: selectedCategories.includes(category.id) ? "blue" : "black",
                              fontWeight: selectedCategories.includes(category.id) ? "bold" : "normal"
                          }}
                      >
                          {category.name}
                      </button>
                  </li>
              ))}
						</ul>
					</div>

					<div class="widget wow fadeInUp2 sb_tag_list_2" data-wow-delay=".5s">
						<h3 class="sb_widget_title bottom_line">Tags</h3>
						<ul class="ul_li clearfix">
							{tags.map(tag => (
                  <li key={tag.id}>
                      <button
                          
                          onClick={() => handleTagClick(tag.id)}
                          style={{
                              color: selectedTags.includes(tag.id) ? "blue" : "black",
                              fontWeight: selectedTags.includes(tag.id) ? "bold" : "normal"
                          }}
                      >
                          {tag.name}
                      </button>
                  </li>
              ))}
						</ul>
					</div>

					

				</aside>
			</div>

		</div>
	</div>
</section>

	);
}

export default Shop;