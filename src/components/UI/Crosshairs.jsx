const Crosshairs = (props) => {
	let cName = props.ciq.layout.crosshair ? 'crosshair-btn active' : 'crosshair-btn'
	return (
		<span><button className={cName} onClick={props.toggleCrosshairs} /></span>
	)
}

export default Crosshairs