$(document).ready(function(){
	let urlItens = "mock-api/V1/categories/list";
	let urlCamiseta = "mock-api/V1/categories/1";
	let urlCalca = "mock-api/V1/categories/2";
	let urlTenis = "mock-api/V1/categories/3";

	// Construindo o menu
	$.getJSON(urlItens, function(itens){		
		itens.items.forEach(function(produtos) {
			$(".menu").append("<li><a href='#' title='"+produtos.name+"' class='"+produtos.name+" active"+produtos.name+"'>"+produtos.name+"</a></li>")
			$(".menu-sidebar").append("<li>&bull; <a href='#' title='"+produtos.name+"' class='"+produtos.name+" active"+produtos.name+"'>"+produtos.name+"</a></li>")
		})

		// Construindo pagina inicial

		$.getJSON(urlCamiseta, function(camiseta){
			camiseta.items.forEach(function(produtos) {
			    name = produtos.name;
				img = produtos.image;
				color = produtos.filter[0].color;
		    	value = (produtos.price).toFixed(2);
			    $('.produtos').append('<div class="products cores '+color+'"><img src="'+img+'" alt="'+name+'" /><div class="text"><p class="name">'+name+'</p><p class="value">R$'+value+'</p><button>Comprar</button></div></div>')

				    /* Adicionando Camisetas */

				    $(".Camisetas").click(function(){
						$('.products').remove();
						$('.caminho-pasta').remove();
						$('.local-menu').append("<p class='caminho-pasta'>Pagina inicial > <span>Camiseta</span></p>");
						$('.produtos-formatacao').prepend("<h2 class='caminho-pasta'><span>Camisetas</span></h2>");
						camiseta.items.forEach(function(camisa) {
							name = camisa.name;
							img = camisa.image;
							color = camisa.filter[0].color;
					    	value = (camisa.price).toFixed(2);

					    $('.produtos').append('<div class="products cores '+color+'"><img src="'+img+'" alt="'+name+'" /><div class="text"><p class="name">'+name+'</p><p class="value">R$'+value+'</p><button>Comprar</button></div></div>')
					    
					})
				})
			})
		})
		$.getJSON(urlCalca, function(calca){
			calca.items.forEach(function(produtos) {
			    name = produtos.name;
				img = produtos.image;
				gender = produtos.filter[0].gender;
		    	value = (produtos.price).toFixed(2);
			    $('.produtos').append('<div class="products calca '+gender+'"><img src="'+img+'" alt="'+name+'" /><div class="text"><p class="name">'+name+'</p><p class="value">R$'+value+'</p><button>Comprar</button></div></div>')
					/* Adicionando Calças  */	

					$(".Calças").click(function(){
						$('.products').remove();
						$('.caminho-pasta').remove();
						$('.local-menu').append("<p class='caminho-pasta'>Pagina inicial > <span>Calças</span></p>")
						$('.produtos-formatacao').prepend("<h2 class='caminho-pasta'><span>Calças</span></h2>");
						calca.items.forEach(function(calcas) {
							name = calcas.name;
							img = calcas.image;
							gender = calcas.filter[0].gender;
					    	value = (calcas.price).toFixed(2);
					    $('.produtos').append('<div class="products calca '+gender+'"><img src="'+img+'" alt="'+name+'" /><div class="text"><p class="name">'+name+'</p><p class="value">R$'+value+'</p><button>Comprar</button></div></div>')
					})
				})

				// Filtrando calças
				$(".genero ."+gender).click(function(){
					$(".products").removeClass("some");
					genero = $(this).text()
					console.log(genero)
					calca.items.forEach(function(produtos) {
						if(genero != produtos.filter[0].gender){
							$('.produtos .'+produtos.filter[0].gender).addClass('some')
							$('.produtos .cores').addClass('some')
						}else{
							$(".limpa").remove();
							$('.clear').append('<div class="limpa">Limpar filtro</div>')
						}
					})	
				})
			})
		})
		$.getJSON(urlTenis, function(tenis){
			tenis.items.forEach(function(produtos) {
			    name = produtos.name;
				img = produtos.image;
				color = produtos.filter[0].color;
		    	value = (produtos.price).toFixed(2);
			    $('.produtos').append('<div class="products cores '+color+'"><img src="'+img+'" alt="'+name+'" /><div class="text"><p class="name">'+name+'</p><p class="value">R$'+value+'</p><button>Comprar</button></div></div>')
				
					/* Adicionando tenis */

					$(".Calçados").click(function(){
						$('.products').remove();
						$('.caminho-pasta').remove();
						$('.local-menu').append("<p class='caminho-pasta'>Pagina inicial > <span>Calçados</span></p>");
						$('.produtos-formatacao').prepend("<h2 class='caminho-pasta'><span>Calçados</span></h2>");
						tenis.items.forEach(function(tenis) {
							name = tenis.name;
							img = tenis.image;
							color = tenis.filter[0].color;
					    	value = (tenis.price).toFixed(2);
					    $('.produtos').append('<div class="products cores '+color+'"><img src="'+img+'" alt="'+name+'" /><div class="text"><p class="name">'+name+'</p><p class="value">R$'+value+'</p><button>Comprar</button></div></div>')
					})
				})

				// Filtrando camisetas e tenis

				$(".filter-categorias-color ."+color).click(function(){
					$(".products").removeClass("some");
					cores = $(this).text()
					tenis.items.forEach(function(produtos) {
						if(cores != produtos.filter[0].color){
							$('.produtos .'+produtos.filter[0].color).addClass('some')
							$('.produtos .calca').addClass('some')
						}else{
							$(".limpa").remove();
							$('.clear').append('<div class="limpa">Limpar filtro</div>')
						}
					})					
				})

			})
		})

		// Funcionamento para mobile
		$(".menu-mobile").click(function(){
			$('nav').toggle();
		})
		$(".lupa").click(function(){
			$('form').toggle();
		})

		// Botão lista
		$(".lista").click(function(){
			$(".fa-th").removeClass("active");
			$(".fa-list").addClass("active");
			$(".products").addClass("lista-order");
			$(".text").addClass("lista-order");
		})

		// Botão colunas
		$(".coluna").click(function(){
			$(".fa-list").removeClass("active");
			$(".fa-th").addClass("active");
			$(".products").removeClass("lista-order");
			$(".text").removeClass("lista-order");
		})

		// Limpar filtro
		$('.clear').click(function(){
			$(".products").removeClass("some");
			$(".limpa").remove();
		})
	})
})