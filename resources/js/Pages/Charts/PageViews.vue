<template>
	<div id="app">
		<div class="random">
			<trend-chart
				:datasets="datasets"
				:grid="grid"
				:labels="labels"
				:min="0"
				:interactive="true"
				@mouseMove="onMouseMove"
				class="random-chart"
			></trend-chart>
			<div id="pop" role="tooltip" ref="tooltip" class="tooltip" :class="{'is-active': tooltipData}">
				<div class="tooltip-container" v-if="tooltipData">
					<strong>{{labels.xLabels[tooltipData.index]}}</strong>
					<div class="tooltip-data">
						<div class="tooltip-data-item tooltip-data-item--1">Total views {{tooltipData.data[0]}}</div>
						<div class="tooltip-data-item tooltip-data-item--2">Unique views {{tooltipData.data[1]}}</div>
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
					data: Object.values(this.total),
					smooth: true,
					showPoints: true,
					fill: true,
					className: "curve1"
				},
				{
					data: Object.values(this.unique),
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
				xLabels: Object.keys(this.total).map(value =>
					moment(value).format("DD, MMM")
				),
				yLabels: 2,
				yLabelsTextFormatter: val =>
					Math.round(val * 100) / 100 + " views"
			},
			tooltipData: null,
			popper: null,
			popperIsActive: false
		};
	},
	methods: {
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
		this.initPopper();
	}
};
</script>    
<style lang="scss">
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