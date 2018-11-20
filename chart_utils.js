import {
	Dimensions,
	StatusBar
} from "react-native"

class Utils {
	static percentToPixel({ x, y }) {
		var dimensions = Dimensions.get("window")
		dimensions.height -= StatusBar.currentHeight

		return {
			x: (x * dimensions.width) / 100,
			y: (y * dimensions.height) / 100,
		}
	}

	static getJumps(axis) {
		var jumps = []
		
		for (var i = axis.jump; i <= axis.limit; i = i + axis.jump) {
			jumps.push(i)
		}

		console.log(jumps)

		return jumps
	}
}

export default Utils