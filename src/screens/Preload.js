import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions';

export class Preload extends Component {

	constructor(props) {
		super(props);
		this.state = {};

		this.verifyStatus = this.verifyStatus.bind(this);
	}

	componentDidMount() {
		this.props.checkLogin();
	}

	componentDidUpdate() {
				alert("ok");

		this.props.verifyStatus();
	}

	verifyStatus() {

		switch(this.props.status) {
			case 1:
				return alert("Manda para Home");
			case 2:
				return alert("Manda para login");
		}

	}

	render(){
		return (
			//<ImageBackground source={require('../assets/tf-barber.jpg')} style={styles.container}>
			<View style={styles.container}>
				<Text>Funcionou {this.props.status}</Text>
			</View>
			//</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		//width:'100%',
		//height:'100%',
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status
	};
}

const PreloadConnect = connect(mapStateToProps, { checkLogin })(Preload);
export default PreloadConnect;