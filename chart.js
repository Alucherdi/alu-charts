import React from "react"

import {
	View,
	Text,
	Dimensions,
} from "react-native"

import Utils from "./chart_utils"

class Chart extends React.Component {	
	constructor(props) {
		super(props)

		var w = Number(this.props.w.substr(0, this.props.w.length - 1))
		var h = Number(this.props.h.substr(0, this.props.h.length - 1))
		var dimensions = Utils.percentToPixel({ x: w, y: h })

		state = {
			w: dimensions.x,
			h: dimensions.y,
			y: this.props.chartProperties.y,
			x: this.props.chartProperties.x,
			offset: 30,
		}
	}

	verticalBar() {
		return (
			<View style={{
				width: this.state.offset,
				height: this.state.h - this.state.offset,
				flexDirection: "column-reverse",
				justifyContent: "space-around",
				alignItems: "center"
			}}>
				{Utils.getJumps(this.state.y).map((jump, index) => {
					return (
						<Text key={index} style={{
							color: "white",
							fontSize: 8
						}}>
							{jump}
						</Text>
					)
				})}
			</View>
		)
	}

	horizontalBar() {
		return (
			<View style={{
				width: this.state.w - this.state.offset,
				height: this.state.offset,
				flexDirection: "row",
				justifyContent: "space-around",
				alignItems: "center"
			}}>
				{Utils.getJumps(this.state.x).map((jump, index) => {
					return (
						<Text key={index} style={{
							color: "white",
							fontSize: 8
						}}>
							{jump}
						</Text>
					)
				})}
			</View>
		)
	}

	center() {
		return (
			<View style={{
				width: this.state.offset,
				height: this.state.offset,
			}}>

			</View>
		)
	}

	chart(dots) {
		dots = [
			{x: 20, y: 20},
			{x: 60, y: 30},
			{x: 100, y: 100},
			{x: 140, y: 10},
		]
		return (
			<View style={{
				width: this.state.w - this.state.offset,
				height: this.state.h - this.state.offset,
				backgroundColor: "white",
				position: "relative"
			}}>
				{dots.map((dot, index) => {
					return (
						<React.Fragment key={index}>
							{/* dot */}
							<View  style={{
								width: 8,
								height: 8,
								backgroundColor: "#8bb59b",
								borderRadius: 50,
								position: "absolute",
								left: dot.x,
								bottom: dot.y
							}} />
						</React.Fragment>
					)
				})}
			</View>
		)
	}
	
	render() {
		var utils = new Utils()

		return ( 
			/* Container */
			<View style={{
				backgroundColor: "black",
				width: this.props.w,
				height: this.props.h,
				flexDirection: "row",
				flexWrap: "wrap"
			}}>
				{/* Left bar */}
				<this.verticalBar />

				{/* Chart */}
				<this.chart />

				{/* Bottom Left Division (center) */}
				<this.center />

				{/* Buttom bar */}
				<this.horizontalBar />
			</View>
		)
	}
}

export default Chart