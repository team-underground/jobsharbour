<template>
	<div id="app">
		<!-- <div class="bitcoin-price">
			<svg style="width:0; height:0; position:absolute;" aria-hidden="true" focusable="false">
				<defs>
					<linearGradient id="curve1Fill" x1="1" x2="1" y1="0" y2="1">
						<stop offset="0%" stop-color="#f69119" />
						<stop offset="100%" stop-color="#ffffff" />
					</linearGradient>
					<linearGradient id="curve2Fill" x1="1" x2="1" y1="0" y2="1">
						<stop offset="0%" stop-color="#259dff" />
						<stop offset="100%" stop-color="#ffffff" />
					</linearGradient>
				</defs>
			</svg>
			<trend-chart
				v-if="dataset.length"
				:datasets="[{data: dataset, className: 'curve-1', fill:true},{data: [3, 2, 1], className: 'curve-2', fill:true}]"
				:labels="labels"
				:min="0"
				:grid="grid"
				:interactive="true"
				@mouseMove="onMouseMove"
				class="random-chart"
				ref="randomChart"
			/>
			<div id="pop" role="tooltip" ref="tooltip" class="tooltip" :class="{'is-active': tooltipData}">
				<div class="tooltip-container" v-if="tooltipData">
					<strong>{{labels.xLabels[tooltipData.index]}}</strong>
					<div class="tooltip-data">
						<div class="tooltip-data-item tooltip-data-item--1">{{tooltipData.data[0]}}</div>
						<div class="tooltip-data-item tooltip-data-item--2">{{tooltipData.data[1]}}</div>
						<div class="tooltip-data-item tooltip-data-item--3">{{tooltipData.data[2]}}</div>
					</div>
				</div>
			</div>
		</div>-->
		{{ total }}
		<div class="random">
			<trend-chart
				:datasets="datasets"
				:grid="grid"
				:labels="labels"
				:min="0"
				:max="10"
				:interactive="true"
				@mouseMove="onMouseMove"
				class="random-chart"
			></trend-chart>
			<div id="pop" role="tooltip" ref="tooltip" class="tooltip" :class="{'is-active': tooltipData}">
				<div class="tooltip-container" v-if="tooltipData">
					<strong>{{labels.xLabels[tooltipData.index]}}</strong>
					<div class="tooltip-data">
						<div class="tooltip-data-item tooltip-data-item--1">{{tooltipData.data[0]}}</div>
						<div class="tooltip-data-item tooltip-data-item--2">{{tooltipData.data[1]}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from "axios";
import TrendChart from "vue-trend-chart";
import moment from "moment";
import Popper from "popper.js";

export default {
	components: {
		TrendChart
	},
	props: {
		total: Object,
		unique: Object
	},
	data() {
		return {
			datasets: [
				{
					data: [],
					smooth: true,
					showPoints: true,
					fill: true,
					className: "curve1"
				},
				{
					data: [],
					smooth: true,
					showPoints: true,
					className: "curve2"
				}
			],
			grid: {
				verticalLines: true,
				horizontalLines: true
			},
			labels: {
				xLabels: [],
				yLabels: 5
				// yLabelsTextFormatter: val => Math.round(val * 100) / 100
			},
			tooltipData: null,
			popper: null,
			popperIsActive: false
		};
	},
	methods: {
		fetchData() {
			axios.get("dashboard-counts").then(response => {
				const { unique_counts, total_counts } = response.data;
				console.log(
					Object.values(total_counts),
					Object.values(unique_counts),
					Object.keys(total_counts)
				);
				this.datasets[0].data = Object.values(total_counts);
				this.datasets[1].data = Object.values(unique_counts);
				this.labels.xLabels = Object.keys(total_counts).map(value =>
					moment(value).format("DD")
				);
			});
		},
		initPopper() {
			const chart = document.querySelector(".random-chart");
			const ref = chart.querySelector(".active-line");
			const tooltip = this.$refs.tooltip;
			this.popper = new Popper(ref, tooltip, {
				placement: "right",
				modifiers: {
					offset: { offset: "0,10" },
					preventOverflow: {
						boundariesElement: chart
					}
				}
			});
		},
		onMouseMove(params) {
			this.popperIsActive = !!params;
			this.popper.scheduleUpdate();
			this.tooltipData = params || null;
		}
	},
	mounted() {
		this.fetchData();
		this.initPopper();
	}
};
</script>    
<style lang="scss">
// * {
// 	box-sizing: border-box;
// }

// .bitcoin-price {
// 	.vtc {
// 		height: 250px;
// 		font-size: 12px;
// 		@media (min-width: 699px) {
// 			height: 350px;
// 		}
// 	}
// 	.grid,
// 	.labels {
// 		line {
// 			stroke: rgba(#aaa, 0.5);
// 		}
// 	}
// 	.x-labels {
// 		.label {
// 			text {
// 				display: none;
// 			}
// 			line {
// 				opacity: 0.3;
// 			}
// 			&:nth-child(6n + 1),
// 			&:first-child {
// 				text {
// 					display: block;
// 				}
// 				line {
// 					opacity: 1;
// 				}
// 			}
// 		}
// 	}
// 	.curve-1 {
// 		.stroke {
// 			stroke: #f69119;
// 			stroke-width: 2;
// 		}
// 		.fill {
// 			fill: url(#curve1Fill);
// 			fill-opacity: 0.5;
// 		}
// 	}
// 	.curve-2 {
// 		.stroke {
// 			stroke: #259dff;
// 			stroke-width: 2;
// 		}
// 		.fill {
// 			fill: url(#curve2Fill);
// 			fill-opacity: 0.5;
// 		}
// 	}
// }
* {
	box-sizing: border-box;
}

strong {
	font-weight: 600;
}

.random {
	width: 100%;
	.vtc {
		height: 250px;
		font-size: 12px;
		@media (min-width: 699px) {
			height: 320px;
		}
	}
	.labels {
		stroke: rgba(0, 0, 0, 0.05);
	}
	.active-line {
		stroke: rgba(0, 0, 0, 0.2);
	}
	.point {
		stroke-width: 2;
		transition: stroke-width 0.2s;
	}
	.point.is-active {
		stroke-width: 5;
	}
	.curve1 {
		.stroke {
			stroke: #fbac91;
			stroke-width: 2;
		}
		.fill {
			fill: #fbac91;
			opacity: 0.05;
		}
		.point {
			fill: #fbac91;
			stroke: #fbac91;
		}
	}
	.curve2 {
		.stroke {
			stroke: #fbe1b6;
			stroke-width: 2;
		}
		.point {
			fill: #fbe1b6;
			stroke: #fbe1b6;
		}
	}

	.tooltip {
		&:not(.is-active) {
			display: none;
		}
		padding: 10px;
		background: #fff;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
		pointer-events: none;
		&-data {
			display: flex;
			&-item {
				display: flex;
				align-items: center;
				&:not(:first-child) {
					margin-left: 20px;
				}
				&:before {
					content: "";
					display: block;
					width: 15px;
					height: 15px;
					margin-right: 5px;
				}
				&--1:before {
					background: #fbac91;
				}
				&--2:before {
					background: #fbe1b6;
				}
			}
		}
	}
}
</style>