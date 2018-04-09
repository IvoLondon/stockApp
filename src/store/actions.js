import Vue from 'vue';

export const loadData = ({commit}) => {
	Vue.http.get('data.json')
	.then(response => response.json())
	.then(data => {
		if(data) {
			console.log(data.stocks);
			console.log(data.funds);
			console.log(data.stockPortfolio);
			const stocks = data.stocks;
			const funds = data.funds;
			const stockPortfolio = data.stockPortfolio;

			const portfolio = {
				stockPortfolio,
				funds,
			}

			commit('SET_STOCKS', stocks);
			commit('SET_PORTFOLIO', portfolio);
		}
	});
};