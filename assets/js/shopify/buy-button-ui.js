var shopifyProduct = document.getElementById('product-component-97843fb8d1c');
if(shopifyProduct) loadShopify();

function loadShopify() {

	var loader = document.getElementById('loader');

	function beginShopifyLoading() {
		if (!loader) return;
		loader.setAttribute('class', 'center');
	}

	function endShopifyLoading() {
		if (!loader) return;
		loader.setAttribute('class', 'center display-none');
	}

	(function () {
		var scriptURL = 'https://dovefitnessbar.s3.amazonaws.com/js/shopify/buy-button-storefront/1.11.2/min.js';
		if (window.ShopifyBuy) {
			if (window.ShopifyBuy.UI) {
				ShopifyBuyInit();
			} else {
				loadScript();
			}
		} else {
			loadScript();
		}

		function loadScript() {
			var script = document.createElement('script');
			script.async = true;
			script.src = scriptURL;
			if (script.readyState) {  //IE
				script.onreadystatechange = function () {
					if (script.readyState === "loaded" || script.readyState === "complete") {
						script.onreadystatechange = null;
						ShopifyBuyInit();
					}
				};
			} else {
				script.onload = function () {
					ShopifyBuyInit();
				};
			}
			beginShopifyLoading();
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
		}

		function ShopifyBuyInit() {
			var client = ShopifyBuy.buildClient({
				domain: 'dovefitnessbar.myshopify.com',
				apiKey: '01f62c232043e32124a6e5c4ee329c06',
				appId: '6'
				// storefrontAccessToken: '0e5b287524854ab34d448698ee52c50a',
			});

			ShopifyBuy.UI.onReady(client).then(function (ui) {
				ui.createComponent('product', {
					id: [1385723887675],
					node: document.getElementById('product-component-97843fb8d1c'),
					moneyFormat: '%24%7B%7Bamount%7D%7D',
					options: {
						"product": {
							"events": {
								"afterRender": function (component) {
									endShopifyLoading();
								}
							},
							"text": {
								"button": "PREORDER"
							},
							"layout": "horizontal",
							"variantId": "all",
							"width": "100%",
							"contents": {
								"img": false,
								"imgWithCarousel": true,
								"variantTitle": false,
								"description": true,
								"buttonWithQuantity": true,
								"button": false,
								"quantity": false
							},
							"styles": {
								"product": {
									"text-align": "left",
									"@media (min-width: 601px)": {
										"max-width": "100%",
										"margin-left": "0",
										"margin-bottom": "50px"
									}
								},
								"button": {
									"background-color": "#f4cb48",
									"font-family": "Raleway, sans-serif",
									"padding-left": "50px",
									"padding-right": "50px",
									":hover": {
										"background-color": "#dcb741"
									},
									"border-radius": "30px",
									":focus": {
										"background-color": "#dcb741"
									},
									"font-weight": "bold"
								},
								"variantTitle": {
									"font-family": "Raleway, sans-serif",
									"font-size": "16px",
									"font-weight": "normal"
								},
								"title": {
									"font-family": "Raleway, sans-serif",
									"font-size": "32px"
								},
								"description": {
									"font-size": "16px",
									"font-family": "Raleway, sans-serif",
									"font-weight": "normal"
								},
								"price": {
									"font-family": "Raleway, sans-serif",
									"font-size": "22px",
									"font-weight": "normal"
								},
								"compareAt": {
									"font-size": "18.7px",
									"font-family": "Raleway, sans-serif",
									"font-weight": "normal"
								}
							}
						},
						"cart": {
							"contents": {
								"button": true
							},
							"popup": false,
							"styles": {
								"button": {
									"background-color": "#f4cb48",
									"font-family": "Raleway, sans-serif",
									":hover": {
										"background-color": "#dcb741"
									},
									"border-radius": "30px",
									":focus": {
										"background-color": "#dcb741"
									},
									"font-weight": "bold"
								},
								"footer": {
									"background-color": "#ffffff"
								}
							}
						},
						"modalProduct": {
							"contents": {
								"img": false,
								"imgWithCarousel": true,
								"variantTitle": false,
								"buttonWithQuantity": true,
								"button": false,
								"quantity": false
							},
							"styles": {
								"product": {
									"@media (min-width: 601px)": {
										"max-width": "100%",
										"margin-left": "0px",
										"margin-bottom": "0px"
									}
								},
								"button": {
									"background-color": "#f4cb48",
									"font-family": "Raleway, sans-serif",
									"padding-left": "50px",
									"padding-right": "50px",
									":hover": {
										"background-color": "#dcb741"
									},
									"border-radius": "30px",
									":focus": {
										"background-color": "#dcb741"
									},
									"font-weight": "bold"
								},
								"variantTitle": {
									"font-family": "Raleway, sans-serif",
									"font-weight": "normal"
								},
								"title": {
									"font-family": "Raleway, sans-serif"
								},
								"description": {
									"font-family": "Raleway, sans-serif",
									"font-weight": "normal"
								},
								"price": {
									"font-family": "Raleway, sans-serif",
									"font-weight": "normal"
								},
								"compareAt": {
									"font-family": "Raleway, sans-serif",
									"font-weight": "normal"
								}
							}

						},
						"toggle": {
							"styles": {
								"toggle": {
									"font-family": "Raleway, sans-serif",
									"background-color": "#f4cb48",
									":hover": {
										"background-color": "#dcb741"
									},
									":focus": {
										"background-color": "#dcb741"
									},
									"font-weight": "bold"
								}
							}
						},
						"option": {
							"styles": {
								"label": {
									"font-family": "Raleway, sans-serif"
								},
								"select": {
									"font-family": "Raleway, sans-serif"
								}
							}
						},
						"productSet": {
							"styles": {
								"products": {
									"@media (min-width: 601px)": {
										"margin-left": "-20px"
									}
								}
							}
						}
					}
				});
			});
		}
	})();

}