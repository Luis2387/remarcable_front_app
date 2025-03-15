import React, { useEffect, useState, useRef } from "react";
import { fetchProducts, fetchCategories, fetchTags } from "../api";


const Shop = () => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pendingSearch, setPendingSearch] = useState("");
  const isFirstRender = useRef(true); 


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

        if (isFirstRender.current) {
            loadInitialData();
            isFirstRender.current = false;
        }
    }, []);



    useEffect(() => {
        if (selectedCategories.length === 0 && selectedTags.length === 0 && searchQuery === "") {
            return;
        }

        const applyFilters = async () => {
            const filters = {
                category: selectedCategories.length > 0 ? selectedCategories : null,
                tags: selectedTags.length > 0 ? selectedTags : null,
                q: searchQuery || null,
            };

            try {
                const filteredProducts = await fetchProducts(filters);
                setProducts(filteredProducts);
            } catch (error) {
                console.error("Error applying filters:", error);
            }
        };

        applyFilters();
    }, [selectedCategories, selectedTags, searchQuery]);



    const handleCategoryClick = (categoryId) => {
        setSelectedCategories((prevCategories) =>
            prevCategories.includes(categoryId)
                ? prevCategories.filter((id) => id !== categoryId)
                : [...prevCategories, categoryId]
        );
    };

    const handleTagClick = (tagId) => {
        setSelectedTags((prevTags) =>
            prevTags.includes(tagId)
                ? prevTags.filter((id) => id !== tagId)
                : [...prevTags, tagId]
        );
    };


    const handleSearchChange = (event) => {
        setPendingSearch(event.target.value);
    };


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
							<a class="item_image" target="_blank" href="#">
								<img src="assets/images/shop/img_09.jpg" alt={product.name}/>
							</a>
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
                      <a
                          
                          onClick={() => handleCategoryClick(category.id)}
                          style={{
                              color: selectedCategories.includes(category.id) ? "blue" : "black",
                              fontWeight: selectedCategories.includes(category.id) ? "bold" : "normal"
                          }}
                      >
                          {category.name}
                      </a>
                  </li>
              ))}
						</ul>
					</div>

					<div class="widget wow fadeInUp2 sb_tag_list_2" data-wow-delay=".5s">
						<h3 class="sb_widget_title bottom_line">Tags</h3>
						<ul class="ul_li clearfix">
							{tags.map(tag => (
                  <li key={tag.id}>
                      <a
                          
                          onClick={() => handleTagClick(tag.id)}
                          style={{
                              color: selectedTags.includes(tag.id) ? "blue" : "black",
                              fontWeight: selectedTags.includes(tag.id) ? "bold" : "normal"
                          }}
                      >
                          {tag.name}
                      </a>
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