// Dépendances
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Platform,
	ImageBackground,
	TextInput,
	Pressable,
	FlatList,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
	faPlus,
	faClipboardList,
	faPenToSquare,
	faTrash,
} from '@fortawesome/free-solid-svg-icons';

import config from '../utils/config';

// Header
export default function Header() {
	return (
		<View style={[styles.header]}>
			{/* H1 */}
			<Text style={styles.h1}>IT-Task Manager</Text>
			{/* INPUT TEXT + BTN */}
			<View style={styles.row}>
				{/* INPUT ADD TASK */}
				<TextInput
					style={styles.addInput}
					placeholder='Add a new task here...'
				></TextInput>
				{/* BUTTON + ICON FONT_AWESOME */}
				<Pressable
					style={[styles.btn, styles.btnInfo, styles.btnLarge]}
					android_ripple={{
						color: colors.gold,
						radius: 50,
					}}
				>
					{/* ICON */}
					<Text>
						<FontAwesomeIcon
							icon={faPlus}
							size={24}
							style={{
								color: colors.white,
							}}
						/>
					</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	// GENERAL
	backgroundImage: {
		width: '100%',
		height: '100%',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
	},
	justifyBetween: {
		justifyContent: 'space-between',
	},
	justifyAround: {
		justifyContent: 'space-around',
	},
	h1: {
		fontSize: 32,
		textTransform: 'uppercase',
		color: config.colors.white,
	},
	h2: {
		fontSize: 24,
		textTransform: 'capitalize',
		color: config.colors.gold,
	},
	btn: {
		borderRadius: 5,
		elevation: 1,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: config.colors.gold,
	},
	btnSmall: {
		paddingHorizontal: 8,
		paddingVertical: 4,
	},
	btnLarge: {
		paddingHorizontal: 16,
		paddingVertical: 8,
	},
	btnInfo: {
		backgroundColor: config.colors.black,
	},
	btnDanger: {
		backgroundColor: config.colors.red,
	},
	btnWarning: {
		backgroundColor: config.colors.gold,
	},
	strong: {
		fontWeight: 'bold',
	},
	em: {
		fontStyle: 'italic',
	},
	textLight: {
		color: config.colors.white,
	},
	textDanger: {
		color: config.colors.red,
	},

	// BODY
	body: {
		flex: 1,
		paddingTop: 40,
		paddingBottom: 10,
		paddingRight: 10,
		paddingLeft: 10,
	},

	// HEADER
	header: {
		flex: 1.5,
		alignItems: 'center',
		justifyContent: 'space-around',
		// backgroundColor: 'green',
	},
	addInput: {
		backgroundColor: config.colors.white,
		flex: 1,
		marginRight: 10,
		paddingVertical: 4,
		paddingHorizontal: 8,
		borderRadius: 5,
		borderWidth: 4,
		borderColor: config.colors.black,
	},
});
